import type React from 'react';
import { useState, useMemo, useEffect, Fragment, useCallback } from 'react';
import { format, parseISO } from 'date-fns';
import dynamic from 'next/dynamic';
import styles from './DataGrid.module.css';

interface Task {
  [key: string]: string | null | undefined;
}

interface ColumnFilter {
  field: string;
  value: string | number | boolean;
  operator: 'equals' | 'contains' | 'greaterThan' | 'lessThan';
}

interface DataGridTheme {
  headerBgColor?: string;
  rowBgColor?: string;
  hoverBgColor?: string;
  borderColor?: string;
  textColor?: string;
  fontSize?: string;
  dragHandleColor?: string;
}

interface ResponsiveConfig {
  minWidth?: string;
  maxWidth?: string;
  height?: string;
  maxHeight?: string;
  horizontalOverflow?: 'auto' | 'scroll' | 'hidden';
  verticalOverflow?: 'auto' | 'scroll' | 'hidden';
  stickyHeader?: boolean;
  compactOnMobile?: boolean;
  breakpoint?: number;
}

interface DataGridProps {
  tasks: Task[];
  onTaskClick?: (taskId: string) => void;
  onEditClick?: (taskId: string) => void;
  onDeleteClick?: (taskId: string) => void;
  onCopyClick?: (taskId: string) => void;
  columnLabels?: { [key: string]: string };
  pageSize?: number;
  currentPage?: number;
  onPageChange?: (page: number) => void;
  totalItems?: number;
  filters?: ColumnFilter[];
  onFilterChange?: (filters: ColumnFilter[]) => void;
  enableExport?: boolean;
  exportFormats?: 'csv' | 'excel';
  exportIcon?: React.ReactNode;
  onExport?: (format: string) => void;
  error?: Error;
  emptyStateMessage?: string;
  theme?: DataGridTheme;
  responsive?: ResponsiveConfig;
  showActions?: boolean;
  defaultSort?: {
    field: string;
    direction: 'asc' | 'desc';
  };
  groupBy?: string;
  subGroupBy?: string;
  groupByFields?: string[];
  visibleColumns?: string[];
  enableColumnReordering?: boolean;
  onColumnOrderChange?: (newOrder: string[]) => void;
  enablePrint?: boolean;
  printIcon?: React.ReactNode;
  onPrint?: (pdfBase64: string) => void;
  pdfTitle?: string;
}

type SortField = string;
type SortDirection = 'asc' | 'desc' | null;

interface SortState {
  field: SortField;
  direction: SortDirection;
}

type GroupedData = {
  key: string;
  label: string;
  count: number;
  items: Task[] | GroupedData[];
  expanded?: boolean;
  isSubGroup?: boolean;
  parentKey?: string;
  level: number;
}

const DEFAULT_LABELS: { [key: string]: string } = {
  id: 'ID',
  title: 'Title',
  status: 'Status',
  type: 'Type',
  budget: 'Budget',
  date_start: 'Start Date',
  date_end: 'End Date',
  comments: 'Comments',
  created_at: 'Created At',
  updated_at: 'Updated At',
  last_updated_by: 'Last Updated By',
  model: 'Model'
};

const DEFAULT_THEME: DataGridTheme = {
  headerBgColor: '#f6f3ef',
  rowBgColor: '#ffffff',
  hoverBgColor: '#f9f5ff',
  borderColor: '#d9cdbf',
  textColor: '#333333',
  fontSize: '14px',
  dragHandleColor: '#6B21A8'
};

const DEFAULT_PAGE_SIZE = 10;

const DataGrid: React.FC<DataGridProps> = ({
  tasks = [],
  onTaskClick,
  onEditClick,
  onDeleteClick,
  onCopyClick,
  columnLabels = DEFAULT_LABELS,
  pageSize = DEFAULT_PAGE_SIZE,
  currentPage = 1,
  onPageChange,
  totalItems,
  filters = [],
  onFilterChange,
  enableExport = false,
  exportFormats = 'csv',
  exportIcon,
  onExport,
  error,
  emptyStateMessage = "Aucune donnée disponible",
  theme: customTheme,
  responsive,
  showActions = true,
  defaultSort,
  groupBy,
  subGroupBy,
  groupByFields,
  visibleColumns,
  enableColumnReordering = true,
  onColumnOrderChange,
  enablePrint = false,
  printIcon,
  onPrint,
  pdfTitle = "Sitex - Commande"
}) => {
  const [mounted, setMounted] = useState(false);
  const [sort, setSort] = useState<SortState>(() => {
    if (defaultSort) {
      return {
        field: defaultSort.field,
        direction: defaultSort.direction
      };
    }
    return { field: 'id', direction: null };
  });
  const [localFilters, setLocalFilters] = useState<ColumnFilter[]>(filters);
  const [filterOpen, setFilterOpen] = useState<string | null>(null);
  const [expandedGroups, setExpandedGroups] = useState<{ [key: string]: boolean }>({});
  const [columnOrder, setColumnOrder] = useState<string[]>([]);
  const [draggedColumn, setDraggedColumn] = useState<string | null>(null);
  const [dragOverColumn, setDragOverColumn] = useState<string | null>(null);

  const theme = useMemo(() => ({
    ...DEFAULT_THEME,
    ...customTheme
  }), [customTheme]);

  useEffect(() => {
    setMounted(true);
  }, []);

  const allColumns = useMemo(() => {
    if (!tasks || tasks.length === 0) return [];
    return Object.keys(tasks[0] || {});
  }, [tasks]);
  
  // Set up initial column order when columns or visibleColumns change
  useEffect(() => {
    const initialColumns = visibleColumns && visibleColumns.length > 0
      ? allColumns.filter(column => visibleColumns.includes(column))
      : allColumns;
      
    setColumnOrder(initialColumns);
  }, [allColumns, visibleColumns]);

  const columns = useMemo(() => {
    // Return the ordered columns
    return columnOrder;
  }, [columnOrder]);

  const filteredTasks = useMemo(() => {
    if (!tasks || tasks.length === 0) return [];
    
    return tasks.filter(task => {
      return localFilters.every(filter => {
        const value = task[filter.field];
        if (value === null || value === undefined) return false;

        switch (filter.operator) {
          case 'equals':
            return value === filter.value;
          case 'contains':
            return String(value).toLowerCase().includes(String(filter.value).toLowerCase());
          case 'greaterThan':
            return Number(value) > Number(filter.value);
          case 'lessThan':
            return Number(value) < Number(filter.value);
          default:
            return true;
        }
      });
    });
  }, [tasks, localFilters]);

  const sortedTasks = useMemo(() => {
    if (!sort.direction || filteredTasks.length === 0) return filteredTasks;

    return [...filteredTasks].sort((a, b) => {
      const aValue = a[sort.field];
      const bValue = b[sort.field];

      if (sort.field === 'created_at') {
        if (!aValue && !bValue) return 0;
        if (!aValue) return sort.direction === 'asc' ? 1 : -1;
        if (!bValue) return sort.direction === 'asc' ? -1 : 1;

        const dateA = new Date(String(aValue)).getTime();
        const dateB = new Date(String(bValue)).getTime();
        return sort.direction === 'asc' ? dateA - dateB : dateB - dateA;
      }

      if (aValue === null && bValue === null) return 0;
      if (aValue === null) return sort.direction === 'asc' ? 1 : -1;
      if (bValue === null) return sort.direction === 'asc' ? -1 : 1;

      if (typeof aValue === 'string' && typeof bValue === 'string') {
        return sort.direction === 'asc'
          ? aValue.localeCompare(bValue)
          : bValue.localeCompare(aValue);
      }

      return 0;
    });
  }, [filteredTasks, sort]);

  // Grouper les données si groupBy est spécifié
  const groupedData = useMemo(() => {
    // If no grouping fields are provided, don't group
    const groupingFields = groupByFields || (groupBy ? [groupBy] : []);
    if (subGroupBy && !groupByFields) {
      groupingFields.push(subGroupBy);
    }
    if (groupingFields.length === 0 || sortedTasks.length === 0) {
      return null;
    }

    // Function to recursively create groups
    const createGroupsRecursively = (
      tasks: Task[], 
      fields: string[], 
      parentKey: string = '', 
      level: number = 0
    ): GroupedData[] => {
      // If no more fields to group by, or no tasks, return empty array
      if (fields.length === 0 || tasks.length === 0) {
        return [];
      }

      const currentField = fields[0];
      const remainingFields = fields.slice(1);
      const groups: { [key: string]: GroupedData } = {};

      // Group tasks by current field
      tasks.forEach(task => {
        const groupValue = String(task[currentField] || 'Non défini');
        const groupKey = parentKey ? `${parentKey}-${groupValue}` : groupValue;
        
        if (!groups[groupKey]) {
          groups[groupKey] = {
            key: groupKey,
            label: groupValue,
            count: 0,
            items: [],
            expanded: expandedGroups[groupKey] !== false, // Default: expanded
            isSubGroup: level > 0,
            parentKey: parentKey || undefined,
            level
          };
        }
        
        groups[groupKey].count += 1;
      });

      // For each group, either create sub-groups or add tasks
      Object.values(groups).forEach(group => {
        const groupTasks = tasks.filter(
          task => String(task[currentField] || 'Non défini') === group.label
        );

        // If we have more fields to group by, create subgroups
        if (remainingFields.length > 0) {
          group.items = createGroupsRecursively(
            groupTasks,
            remainingFields,
            group.key,
            level + 1
          );
        } else {
          // No more fields, add tasks directly
          group.items = groupTasks;
        }
      });

      // Sort groups by label
      return Object.values(groups).sort((a, b) => a.label.localeCompare(b.label));
    };

    // Start recursive grouping with all fields
    return createGroupsRecursively(sortedTasks, groupingFields);
  }, [sortedTasks, groupBy, subGroupBy, groupByFields, expandedGroups]);

  const paginatedTasks = useMemo(() => {
    if (!groupedData) {
      const start = (currentPage - 1) * pageSize;
      return sortedTasks.slice(start, start + pageSize);
    }
    
    // Pas de pagination quand les données sont groupées
    return sortedTasks;
  }, [sortedTasks, currentPage, pageSize, groupedData]);

  const totalPages = groupedData ? 1 : Math.ceil((totalItems ?? sortedTasks.length) / pageSize);

  const handleExport = async (format: 'csv' | 'excel') => {
    if (!enableExport) return;
    onExport?.(format);
  };

  const handleSort = (field: SortField) => {
    setSort(prevSort => ({
      field,
      direction:
        prevSort.field === field
          ? prevSort.direction === 'asc'
            ? 'desc'
            : prevSort.direction === 'desc'
              ? null
              : 'asc'
          : 'asc'
    }));
  };

  const toggleGroupExpand = (groupKey: string) => {
    setExpandedGroups(prev => ({
      ...prev,
      [groupKey]: !(prev[groupKey] !== false) // Invert the current state
    }));
  };

  const renderGroupHeader = (group: GroupedData) => {
    const level = group.level || 0;
    // Calculate indentation based on nesting level
    const indentation = level * 16; // 16px per level
    
    // Choose background color based on level (alternate colors for better visibility)
    const bgColor = level % 2 === 0 
      ? theme.headerBgColor || '#f6f3ef'
      : '#f9f9f9';
    
    return (
      <tr 
        className={styles.dataGridGroupHeader}
        style={{ 
          backgroundColor: bgColor,
          borderBottom: '1px solid #ECE6DF',
          cursor: 'pointer'
        }}
        onClick={() => toggleGroupExpand(group.key)}
      >
        <td 
          colSpan={columns.length + (showActions ? 1 : 0)}
          className={styles.dataGridGroupCell}
          style={{
            padding: '10px 16px',
            fontWeight: 500,
            color: theme.textColor || '#333333',
            paddingLeft: `${16 + indentation}px`
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <svg 
              width="16" 
              height="16" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
              style={{ 
                transform: group.expanded ? 'rotate(90deg)' : 'rotate(0deg)',
                transition: 'transform 0.2s'
              }}
            >
              <polyline points="9 18 15 12 9 6" />
            </svg>
            <span>{group.label}</span>
            <span style={{ 
              marginLeft: '8px', 
              fontSize: '0.85em', 
              color: '#666', 
              fontWeight: 'normal'
            }}>
              {group.count} {group.count > 1 ? 'éléments' : 'élément'}
            </span>
          </div>
        </td>
      </tr>
    );
  };

  const getStatusStyle = (status: string) => {
    const baseStyle = {
      padding: '4px 8px',
      borderRadius: '4px',
      fontSize: '12px',
      fontWeight: '500',
      display: 'inline-block'
    };

    switch (status.toLowerCase()) {
      case 'non catégorisé':
        return {
          ...baseStyle,
          backgroundColor: '#eaeaec',
          color: '#43454d'
        };
      case 'à planifier':
        return {
          ...baseStyle,
          backgroundColor: '#fdf9eb',
          color: '#ad5b2b'
        };
      case 'à engager':
        return {
          ...baseStyle,
          backgroundColor: '#fcf1f1',
          color: '#ab3832'
        };
      case 'en cours':
        return {
          ...baseStyle,
          backgroundColor: '#f1fbf3',
          color: '#387c39'
        };
      default:
        return {
          ...baseStyle,
          backgroundColor: '#f5f0fd',
          color: '#552a9b'
        };
    }
  };

  const SortIcon = ({ field }: { field: SortField }) => {
    if (sort.field !== field) {
      return (
        <svg className={styles.sortIcon} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#999999" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M7 15l5 5 5-5M7 9l5-5 5 5"/>
        </svg>
      );
    }

    if (sort.direction === 'asc') {
      return (
        <svg className={styles.sortIcon} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#333333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M7 15l5 5 5-5"/>
        </svg>
      );
    }

    if (sort.direction === 'desc') {
      return (
        <svg className={styles.sortIcon} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#333333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M7 9l5-5 5 5"/>
        </svg>
      );
    }

    return null;
  };

  const renderActionButtons = (task: Task) => {
    if (!mounted) return null;
    
    // Handle the case where task.id might be undefined
    const handleAction = (callback?: (id: string) => void) => {
      if (!callback) return;
      
      // Use type assertion and null coalescing to ensure it's a string
      // @ts-ignore - We're handling the case where id might be undefined
      const id: string = String(task.id ?? '');
      callback(id);
    };
    
    return (
      <div className={styles.dataGridActions} style={{
        display: 'flex',
        gap: '8px',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <div 
          role="button"
          tabIndex={0}
          className={styles.actionButton}
          onClick={(e) => {
            e.stopPropagation();
            handleAction(onEditClick);
          }}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.stopPropagation();
              handleAction(onEditClick);
            }
          }}
          style={{
            cursor: 'pointer',
            padding: '4px'
          }}
          title="Modifier"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/>
            <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>
          </svg>
        </div>
        <div
          role="button"
          tabIndex={0}
          className={styles.actionButton}
          onClick={(e) => {
            e.stopPropagation();
            handleAction(onCopyClick);
          }}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.stopPropagation();
              handleAction(onCopyClick);
            }
          }}
          style={{
            cursor: 'pointer',
            padding: '4px'
          }}
          title="Copier l'ID"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="9" y="9" width="13" height="13" rx="2" ry="2"/>
            <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>
          </svg>
        </div>
        <div
          role="button"
          tabIndex={0}
          className={styles.actionButton}
          onClick={(e) => {
            e.stopPropagation();
            handleAction(onDeleteClick);
          }}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.stopPropagation();
              handleAction(onDeleteClick);
            }
          }}
          style={{
            cursor: 'pointer',
            padding: '4px'
          }}
          title="Supprimer"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 6h18"/>
            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>
          </svg>
        </div>
      </div>
    );
  };

  const formatDate = (dateString: string) => {
    try {
      if (!dateString) return 'N/A';
      const date = parseISO(dateString);
      return format(date, 'yyyy-MM-dd\'T\'HH:mm:ss.SSS\'Z\'');
    } catch (e) {
      return dateString || 'N/A';
    }
  };

  const renderCell = (column: string, value: string | null | undefined, task: Task) => {
    if (value === null || value === undefined) return 'N/A';

    // Gestion des valeurs booléennes
    if (typeof value === 'boolean') {
      return (
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <input
            type="checkbox"
            checked={value}
            readOnly
            style={{
              width: '16px',
              height: '16px',
              cursor: 'default',
              accentColor: '#6B21A8',
              opacity: value ? 1 : 0.5
            }}
          />
        </div>
      );
    }

    // Gestion des chaînes de caractères 'true'/'false'
    if (value === 'true' || value === 'false') {
      const isChecked = value === 'true';
      return (
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <input
            type="checkbox"
            checked={isChecked}
            readOnly
            style={{
              width: '16px',
              height: '16px',
              cursor: 'default',
              accentColor: '#6B21A8',
              opacity: isChecked ? 1 : 0.5
            }}
          />
        </div>
      );
    }

    switch (column) {
      case 'date_start':
      case 'date_end':
      case 'created_at':
      case 'updated_at':
        return formatDate(value as string);
      case 'budget':
        return value.toString();
      case 'type':
        return (
          <span className={styles.typeTag}>
            {value}
          </span>
        );
      case 'status':
        return (
          <span 
            className={styles.statusTag} 
            data-status={value}
          >
            {value}
          </span>
        );
      default:
        return value;
    }
  };

  const handleDragStart = (e: React.DragEvent<any>, column: string) => {
    if (!enableColumnReordering) return;
    
    setDraggedColumn(column);
    // For better drag visual feedback
    if (e.dataTransfer) {
      e.dataTransfer.effectAllowed = 'move';
      try {
        // Create a ghost drag image
        const dragImage = document.createElement('div');
        dragImage.textContent = columnLabels[column] || column;
        dragImage.style.padding = '12px 16px';
        dragImage.style.background = theme.headerBgColor || '#f6f3ef';
        dragImage.style.border = `1px solid ${theme.borderColor || '#d9cdbf'}`;
        dragImage.style.borderRadius = '4px';
        dragImage.style.position = 'absolute';
        dragImage.style.top = '-1000px';
        dragImage.style.fontWeight = '500';
        dragImage.style.fontSize = theme.fontSize || '14px';
        dragImage.style.color = theme.textColor || '#333333';
        dragImage.style.boxShadow = '0 2px 6px rgba(0, 0, 0, 0.1)';
        
        // Add drag icon to the drag image
        const iconContainer = document.createElement('span');
        const dragHandleColor = theme.dragHandleColor || '#6B21A8';
        iconContainer.innerHTML = `
          <svg width="16" height="16" viewBox="0 0 24 24" style="margin-right: 8px; vertical-align: middle;">
            <circle cx="9" cy="5" r="1.5" fill="${dragHandleColor}" />
            <circle cx="9" cy="12" r="1.5" fill="${dragHandleColor}" />
            <circle cx="9" cy="19" r="1.5" fill="${dragHandleColor}" />
            <circle cx="15" cy="5" r="1.5" fill="${dragHandleColor}" />
            <circle cx="15" cy="12" r="1.5" fill="${dragHandleColor}" />
            <circle cx="15" cy="19" r="1.5" fill="${dragHandleColor}" />
          </svg>
        `;
        dragImage.insertBefore(iconContainer, dragImage.firstChild);
        
        document.body.appendChild(dragImage);
        e.dataTransfer.setDragImage(dragImage, 20, 20);
        setTimeout(() => {
          document.body.removeChild(dragImage);
        }, 0);
        
        // Add class to all headers to indicate dragging state
        const headers = e.currentTarget.parentElement?.querySelectorAll('th');
        headers?.forEach((header: Element) => {
          header.classList.add(styles.columnDragActive);
        });
        
      } catch (error) {
        // Fallback if custom drag image fails
        console.error('Error setting drag image:', error);
      }
    }
  };

  const handleDragOver = (e: React.DragEvent<HTMLTableCellElement>, column: string) => {
    if (!enableColumnReordering || !draggedColumn) return;
    
    e.preventDefault();
    if (column !== draggedColumn) {
      setDragOverColumn(column);
    }
  };

  const handleDragEnd = () => {
    if (!enableColumnReordering) {
      setDraggedColumn(null);
      setDragOverColumn(null);
      return;
    }

    // Remove columnDragActive class from all header cells
    const headerCells = document.querySelectorAll(`.${styles.headerCell}`);
    headerCells.forEach((cell: Element) => {
      cell.classList.remove(styles.columnDragActive);
    });

    if (draggedColumn && dragOverColumn) {
      const fromIndex = columnOrder.indexOf(draggedColumn);
      const toIndex = columnOrder.indexOf(dragOverColumn);
      
      if (fromIndex !== -1 && toIndex !== -1) {
        const newOrder = [...columnOrder];
        newOrder.splice(fromIndex, 1);
        newOrder.splice(toIndex, 0, draggedColumn);
        
        setColumnOrder(newOrder);
        onColumnOrderChange?.(newOrder);
      }
    }
    
    setDraggedColumn(null);
    setDragOverColumn(null);
  };

  const renderGroupContent = (group: GroupedData) => {
    const elements: JSX.Element[] = [];
    
    // Add the group header
    elements.push(
      <Fragment key={`header-${group.key}`}>
        {renderGroupHeader(group)}
      </Fragment>
    );
    
    // If expanded, add the content
    if (group.expanded) {
      // Check if items are subgroups or tasks
      if (group.items.length > 0 && 'level' in (group.items[0] as any)) {
        // Render subgroups recursively
        (group.items as GroupedData[]).forEach(subGroup => {
          elements.push(
            <Fragment key={`group-${subGroup.key}`}>
              {renderGroupContent(subGroup)}
            </Fragment>
          );
        });
      } else {
        // Render tasks
        (group.items as Task[]).forEach((task: Task, index: number) => {
          elements.push(
            <tr
              key={task.id as string || `${group.key}-${index}`}
              className={styles.dataGridRow}
              onClick={() => onTaskClick?.(task.id as string)}
              style={{
                backgroundColor: theme.rowBgColor || '#ffffff',
                color: theme.textColor || '#333333',
                fontSize: theme.fontSize || '14px',
                borderColor: theme.borderColor || '#d9cdbf',
                cursor: onTaskClick ? 'pointer' : 'default'
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.backgroundColor = theme.hoverBgColor || '#f9f5ff';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.backgroundColor = theme.rowBgColor || '#ffffff';
              }}
              aria-rowindex={index + 1}
            >
              {columns.map((column, colIndex) => (
                <td
                  key={column}
                  className={styles.dataGridCell}
                  style={{ 
                    textAlign: 'left',
                    borderColor: theme.borderColor || '#d9cdbf',
                    // Add indentation to the first column based on group level
                    paddingLeft: colIndex === 0 ? `${16 + (group.level || 0) * 16}px` : undefined
                  }}
                >
                  {renderCell(column, task[column], task)}
                </td>
              ))}
              {showActions && (
                <td className={styles.dataGridCell} style={{ borderColor: theme.borderColor || '#d9cdbf' }}>
                  {renderActionButtons(task)}
                </td>
              )}
            </tr>
          );
        });
      }
    }
    
    return elements;
  };

  const handlePrint = async () => {
    if (!mounted) return;

    const table = document.querySelector(`.${styles.dataGridTable}`);
    if (!table) return;

    try {
      // Import jsPDF et autoTable
      const jsPDF = (await import('jspdf')).default;
      
      try {
        // Créer le document PDF
        const pdf = new jsPDF({
          orientation: 'landscape',
          unit: 'mm',
          format: 'a4'
        });
        
        // Extraire les données du tableau
        const headers: string[] = [];
        const tableData: string[][] = [];
        
        // Récupérer les en-têtes (sauf la dernière colonne pour les actions)
        const headerCells = table.querySelectorAll('thead th');
        headerCells.forEach((cell, index) => {
          if (index < headerCells.length - (showActions ? 1 : 0)) {
            const headerText = (cell as HTMLElement).innerText || '';
            // Ignorer explicitement la colonne "Actions"
            if (headerText !== 'Actions') {
              headers.push(headerText);
            }
          }
        });
        
        // Récupérer les données du corps
        const rows = table.querySelectorAll('tbody tr');
        rows.forEach(row => {
          const rowData: string[] = [];
          const cells = row.querySelectorAll('td');
          cells.forEach((cell, index) => {
            if (index < cells.length - (showActions ? 1 : 0)) {
              rowData.push((cell as HTMLElement).innerText || '');
            }
          });
          tableData.push(rowData);
        });
        
        console.log('Headers:', headers);
        console.log('Table data rows:', tableData.length);
        
        // Définir les styles
        const tableStyles = {
          headStyles: {
            fillColor: [224, 224, 224],
            textColor: [0, 0, 0],
            fontStyle: 'bold',
            halign: 'center',
            lineWidth: 0.5 // Bordure de 0.5pt pour les en-têtes
          },
          bodyStyles: {
            textColor: [0, 0, 0],
            lineWidth: 0.5 // Bordure de 0.5pt pour toutes les cellules
          },
          alternateRowStyles: {
            fillColor: [245, 245, 245]
          },
          columnStyles: {}, // Défini ci-dessous si nécessaire
          tableLineColor: [150, 150, 150], // Couleur de bordure plus légère
          tableLineWidth: 0.5, // Bordure fine de 0.5pt
          margin: { top: 20, right: 10, bottom: 20, left: 10 },
          styles: {
            overflow: 'linebreak',
            cellPadding: 3,
            fontSize: 9
          },
          theme: 'grid' // Utiliser le thème "grid" pour avoir toutes les bordures
        };
        
        // Ajouter un titre
        pdf.setFontSize(16);
        pdf.text(pdfTitle, pdf.internal.pageSize.getWidth() / 2, 15, { align: 'center' });
        
        // Préparer les données au format attendu par autoTable
        const autoTableData = tableData.map(row => {
          const rowObject: Record<string, string> = {};
          headers.forEach((header, index) => {
            rowObject[header] = row[index] || '';
          });
          return rowObject;
        });
        
        try {
          // Si jsPDF-AutoTable est disponible (essayez de l'importer dynamiquement)
          // @ts-ignore - Module peut ne pas être trouvé
          const autoTable = (await import('jspdf-autotable')).default;
          // @ts-ignore - Types incompatibles mais cela fonctionne à l'exécution
          autoTable(pdf, {
            head: [headers],
            body: tableData,
            startY: 25,
            ...tableStyles
          });
        } catch (autoTableError) {
          console.warn('jsPDF-AutoTable not available, using fallback method', autoTableError);
            
          // Fallback: utiliser la méthode table standard
          try {
             // @ts-ignore - Erreur TypeScript sur la méthode table() de jsPDF
            pdf.table(20, 25, autoTableData, 
              // @ts-ignore - Types incompatibles
              headers.map(header => ({ header, dataKey: header })), 
              tableStyles);
          } catch (tableError) {
            console.error('Standard table method failed too', tableError);
            
            // Si tout échoue, on utilise le mode texte amélioré
            pdf.setFontSize(10);
            pdf.text("Tableau formaté en colonnes:", 10, 25);
            
            // Récupérer la largeur de la page
            const pageWidth = pdf.internal.pageSize.getWidth();
            
            // Dessiner le header avec des lignes
            let y = 35;
            const colWidth = (pageWidth - 20) / headers.length;
            
            // Dessiner l'en-tête
            pdf.setFillColor(224, 224, 224);
            pdf.rect(10, y - 5, pageWidth - 20, 7, 'F');
            pdf.setDrawColor(150, 150, 150);
            pdf.rect(10, y - 5, pageWidth - 20, 7, 'S');
            
            pdf.setFontSize(9);
            // @ts-ignore - Argument peut être undefined dans certaines implémentations
            pdf.setFont(undefined, 'bold');
            headers.forEach((header, i) => {
              pdf.text(header, 10 + (i * colWidth), y);
              // Ligne verticale
              if (i > 0) {
                pdf.line(10 + (i * colWidth) - 2, y - 5, 10 + (i * colWidth) - 2, y + 2);
              }
            });
            
            y += 10;
            // @ts-ignore - Argument peut être undefined dans certaines implémentations
            pdf.setFont(undefined, 'normal');
            
            // Dessiner les lignes de données
            tableData.forEach((row, rowIndex) => {
              // Alternance de couleur pour les lignes
              if (rowIndex % 2 === 1) {
                pdf.setFillColor(245, 245, 245);
                pdf.rect(10, y - 5, pageWidth - 20, 7, 'F');
              }
              
              // Dessiner le contour de la ligne
              pdf.setDrawColor(150, 150, 150);
              pdf.rect(10, y - 5, pageWidth - 20, 7, 'S');
              
              row.forEach((cell, i) => {
                pdf.text(cell || '', 10 + (i * colWidth), y);
                // Ligne verticale
                if (i > 0) {
                  pdf.line(10 + (i * colWidth) - 2, y - 5, 10 + (i * colWidth) - 2, y + 2);
                }
              });
              y += 7;
            });
          }
        }
        
        // Convertir en base64
        const pdfBase64 = pdf.output('datauristring').split(',')[1];
        
        if (!pdfBase64 || pdfBase64.length < 100) {
          console.error('PDF généré vide ou trop court !');
        } else {
          console.log('PDF généré avec succès, taille:', pdfBase64.length);
          onPrint?.(pdfBase64);
        }
      } catch (pdfError) {
        console.error("Error creating PDF:", pdfError);
        
        // Essayons une autre approche simple, juste pour avoir quelque chose
        try {
          const simpleDoc = new jsPDF({
            orientation: 'landscape',
            unit: 'mm',
            format: 'a4'
          });
          
          // Extraire le texte brut du tableau
          const tableText = (table as HTMLElement).innerText || '';
          
          simpleDoc.setFontSize(10);
          simpleDoc.text(pdfTitle, 10, 10);
          
          // Écrire les lignes de texte (avec des sauts de ligne)
          const lines = tableText.split('\n');
          let y = 20;
          lines.forEach(line => {
            if (line.trim()) {
              if (y > 280) {
                simpleDoc.addPage();
                y = 20;
              }
              simpleDoc.text(line, 10, y);
              y += 5;
            }
          });
          
          const fallbackPdfBase64 = simpleDoc.output('datauristring').split(',')[1];
          onPrint?.(fallbackPdfBase64);
        } catch (fallbackError) {
          console.error('Fallback PDF also failed:', fallbackError);
        }
      }
    } catch (error) {
      console.error('Error importing jsPDF:', error);
    }
  };

  if (!mounted) {
    return null;
  }

  if (error) {
    return (
      <div className={styles.dataGridError} role="alert">
        <h3>Erreur</h3>
        <p>{error.message}</p>
      </div>
    );
  }

  if (tasks.length === 0) {
    return (
      <div className={styles.dataGridEmpty} role="status">
        {emptyStateMessage}
      </div>
    );
  }

  return (
    <div className={styles.dataGridWrapper} 
      style={{ 
        position: 'relative',
        height: responsive?.height,
        maxHeight: responsive?.maxHeight,
        '--table-min-width': responsive?.minWidth,
        '--table-max-width': responsive?.maxWidth,
      } as React.CSSProperties}
      data-sticky-header={responsive?.stickyHeader}
      data-overflow-x={responsive?.horizontalOverflow}
      data-overflow-y={responsive?.verticalOverflow}
      data-compact={responsive?.compactOnMobile}
    >
      {enableExport && mounted && (
        <div className={styles.dataGridToolbar} style={{
          position: 'static',
          display: 'flex',
          justifyContent: 'flex-end',
          marginBottom: '8px',
          gap: '8px'
        }}>
          {enablePrint && (
            <div className={styles.dataGridPrint}>
              <div
                role="button"
                tabIndex={0}
                className={styles.dataGridButton}
                onClick={handlePrint}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    handlePrint();
                  }
                }}
                style={{
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '4px',
                  marginRight: '0px'
                }}
                aria-label="Imprimer le tableau"
              >
                {printIcon || (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="6 9 6 2 18 2 18 9" />
                    <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
                    <rect x="6" y="14" width="12" height="8" />
                  </svg>
                )}
              </div>
            </div>
          )}
          <div className={styles.dataGridExport}>
            <div
              role="button"
              tabIndex={0}
              className={styles.dataGridButton}
              onClick={() => handleExport(exportFormats)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  handleExport(exportFormats);
                }
              }}
              style={{
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '4px',
                marginRight: '0px'
              }}
              aria-label="Exporter les données"
            >
              {exportIcon || (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                  <polyline points="7 10 12 15 17 10"/>
                  <line x1="12" y1="15" x2="12" y2="3"/>
                </svg>
              )}
            </div>
          </div>
        </div>
      )}

      <table className={styles.dataGridTable} role="table" aria-label="Liste des données">
        <thead>
          <tr className={styles.dataGridHeader}
            style={{
              backgroundColor: theme.headerBgColor || '#f6f3ef',
              color: theme.textColor || '#333333',
              fontSize: theme.fontSize || '14px',
              borderTop: '1px solid #ECE6DF',
              borderBottom: '1px solid #ECE6DF'
            }}>
            {columns.map(column => (
              <th
                key={column}
                className={`${styles.headerCell} ${dragOverColumn === column ? styles.dragOver : ''}`}
                onClick={() => handleSort(column)}
                style={{
                  borderColor: theme.borderColor || '#d9cdbf',
                  textAlign: 'left',
                  cursor: 'pointer',
                  opacity: draggedColumn === column ? 0.5 : 1,
                  background: dragOverColumn === column ? 
                    `linear-gradient(90deg, ${theme.headerBgColor || '#f6f3ef'}, ${theme.hoverBgColor || '#f9f5ff'})` : 
                    theme.headerBgColor || '#f6f3ef',
                  '--drag-handle-color': theme.dragHandleColor || '#6B21A8'
                } as React.CSSProperties}
                scope="col"
                aria-sort={
                  sort.field === column
                    ? sort.direction === 'asc'
                      ? 'ascending'
                      : sort.direction === 'desc'
                        ? 'descending'
                        : undefined
                    : undefined
                }
                draggable={false}
                onDragOver={(e) => handleDragOver(e, column)}
              >
                <span className={styles.headerContent} style={{ justifyContent: 'flex-start' }}>
                  {enableColumnReordering && (
                    <span
                      className={styles.dragHandleContainer}
                      draggable={enableColumnReordering}
                      onDragStart={(e) => handleDragStart(e, column)}
                      onDragEnd={handleDragEnd}
                      style={{ 
                        cursor: 'grab',
                        display: 'inline-flex',
                        alignItems: 'center',
                        marginRight: '6px',
                      }}
                    >
                      <svg 
                        width="16" 
                        height="16" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                        className={styles.dragHandleIcon}
                        style={{ 
                          opacity: 0.7,
                          minWidth: '16px',
                          color: theme.dragHandleColor || '#6B21A8'
                        }}
                        aria-label="Drag to reorder column"
                      >
                        <title>Drag to reorder column</title>
                        <circle cx="9" cy="5" r="1.5" />
                        <circle cx="9" cy="12" r="1.5" />
                        <circle cx="9" cy="19" r="1.5" />
                        <circle cx="15" cy="5" r="1.5" />
                        <circle cx="15" cy="12" r="1.5" />
                        <circle cx="15" cy="19" r="1.5" />
                      </svg>
                    </span>
                  )}
                  {columnLabels[column] || column}
                  <SortIcon field={column} />
                </span>
              </th>
            ))}
            {showActions && (
              <th className={styles.headerCell} style={{ width: '120px', textAlign: 'left' }} scope="col">Actions</th>
            )}
          </tr>
        </thead>
        <tbody>
          {groupedData ? (
            // Render with grouping
            groupedData.map(group => (
              <Fragment key={`group-${group.key}`}>
                {renderGroupContent(group)}
              </Fragment>
            ))
          ) : (
            // Normal render without grouping
            paginatedTasks.map((task: Task, index: number) => (
              <tr
                key={task.id as string || index}
                className={styles.dataGridRow}
                onClick={() => onTaskClick?.(task.id as string)}
                style={{
                  backgroundColor: theme.rowBgColor || '#ffffff',
                  color: theme.textColor || '#333333',
                  fontSize: theme.fontSize || '14px',
                  borderColor: theme.borderColor || '#d9cdbf',
                  cursor: onTaskClick ? 'pointer' : 'default'
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.backgroundColor = theme.hoverBgColor || '#f9f5ff';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.backgroundColor = theme.rowBgColor || '#ffffff';
                }}
                aria-rowindex={index + 1}
              >
                {columns.map((column) => (
                  <td
                    key={column}
                    className={styles.dataGridCell}
                    style={{ 
                      textAlign: 'left',
                      borderColor: theme.borderColor || '#d9cdbf'
                    }}
                  >
                    {renderCell(column, task[column], task)}
                  </td>
                ))}
                {showActions && (
                  <td className={styles.dataGridCell} style={{ borderColor: theme.borderColor || '#d9cdbf' }}>
                    {renderActionButtons(task)}
                  </td>
                )}
              </tr>
            ))
          )}
        </tbody>
      </table>

      {!groupedData && totalPages > 1 && mounted && (
        <div className={styles.dataGridPagination} role="navigation" aria-label="Pagination">
          <div className={styles.paginationInfo}>
            Page {currentPage} sur {totalPages}
          </div>
          <div className={styles.paginationControls}>
            <div
              role="button"
              tabIndex={0}
              className={styles.paginationButton}
              onClick={() => currentPage > 1 && onPageChange?.(currentPage - 1)}
              onKeyDown={(e) => {
                if ((e.key === 'Enter' || e.key === ' ') && currentPage > 1) {
                  onPageChange?.(currentPage - 1);
                }
              }}
              aria-disabled={currentPage === 1}
              aria-label="Page précédente"
            >
              Précédent
            </div>
            <div
              role="button"
              tabIndex={0}
              className={styles.paginationButton}
              onClick={() => currentPage < totalPages && onPageChange?.(currentPage + 1)}
              onKeyDown={(e) => {
                if ((e.key === 'Enter' || e.key === ' ') && currentPage < totalPages) {
                  onPageChange?.(currentPage + 1);
                }
              }}
              aria-disabled={currentPage === totalPages}
              aria-label="Page suivante"
            >
              Suivant
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default dynamic(() => Promise.resolve(DataGrid), {
  ssr: false
});
