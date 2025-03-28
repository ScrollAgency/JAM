import type React from 'react';
import { useState, useMemo } from 'react';
import { format } from 'date-fns';
import styles from './DataGrid.module.css';

interface Task {
  [key: string]: string | null | undefined;
}

interface ColumnFilter {
  field: string;
  value: string | number | boolean;
  operator: 'equals' | 'contains' | 'greaterThan' | 'lessThan';
}

interface ColumnStyle {
  width?: string;
  align?: 'left' | 'center' | 'right';
  formatter?: (value: any) => React.ReactNode;
}

interface ColumnHeader {
  label: string;
  tooltip?: string;
  icon?: React.ReactNode;
}

interface DataGridTheme {
  headerBgColor?: string;
  rowBgColor?: string;
  hoverBgColor?: string;
  borderColor?: string;
  textColor?: string;
  fontSize?: string;
}

interface DataGridProps {
  tasks: Task[];
  containerClassName?: string;
  headerClassName?: string;
  rowClassName?: string;
  onTaskClick?: (taskId: string) => void;
  onEditClick?: (taskId: string) => void;
  onDeleteClick?: (taskId: string) => void;
  columnLabels?: { [key: string]: string };
  visibleColumns?: string[];
  columnOrder?: string[];
  pageSize?: number;
  currentPage?: number;
  onPageChange?: (page: number) => void;
  totalItems?: number;
  filters?: ColumnFilter[];
  onFilterChange?: (filters: ColumnFilter[]) => void;
  columnStyles?: { [key: string]: ColumnStyle };
  enableExport?: boolean;
  exportFormats?: 'csv' | 'excel';
  onExport?: (format: string) => void;
  isLoading?: boolean;
  error?: Error;
  emptyStateMessage?: string;
  loadingComponent?: React.ReactNode;
  columnHeaders?: { [key: string]: ColumnHeader };
  theme?: DataGridTheme;
}

type SortField = string;
type SortDirection = 'asc' | 'desc' | null;

interface SortState {
  field: SortField;
  direction: SortDirection;
}

const DEFAULT_LABELS: { [key: string]: string } = {
  id: 'ID',
  avatar_url: 'Avatar',
  created_at: 'Date de création',
  first_name: 'Prénom',
  last_name: 'Nom',
  type: 'Type'
};

const DEFAULT_THEME: DataGridTheme = {
  headerBgColor: '#f6f3ef',
  rowBgColor: '#ffffff',
  hoverBgColor: '#f9f5ff',
  borderColor: '#d9cdbf',
  textColor: '#333333',
  fontSize: '14px'
};

const DEFAULT_PAGE_SIZE = 10;

const DataGrid: React.FC<DataGridProps> = ({
  tasks = [],
  containerClassName = "",
  headerClassName = "",
  rowClassName = "",
  onTaskClick,
  onEditClick,
  onDeleteClick,
  columnLabels = DEFAULT_LABELS,
  visibleColumns,
  columnOrder,
  pageSize = DEFAULT_PAGE_SIZE,
  currentPage = 1,
  onPageChange,
  totalItems,
  filters = [],
  onFilterChange,
  columnStyles = {},
  enableExport = false,
  exportFormats = 'csv',
  onExport,
  isLoading = false,
  error,
  emptyStateMessage = "Aucune donnée disponible",
  loadingComponent,
  columnHeaders = {},
  theme = DEFAULT_THEME
}) => {
  const [sort, setSort] = useState<SortState>({ field: 'id', direction: null });
  const [localFilters, setLocalFilters] = useState<ColumnFilter[]>(filters);
  const [filterOpen, setFilterOpen] = useState<string | null>(null);

  const allColumns = useMemo(() => {
    if (tasks.length === 0) return [];
    const cols = Object.keys(tasks[0]);
    if (columnOrder) {
      return columnOrder.filter(col => cols.includes(col));
    }
    return cols;
  }, [tasks, columnOrder]);

  const columns = useMemo(() => {
    if (!visibleColumns) return allColumns;
    return visibleColumns.filter(col => allColumns.includes(col));
  }, [allColumns, visibleColumns]);

  const filteredTasks = useMemo(() => {
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
    if (!sort.direction) return filteredTasks;

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

  const paginatedTasks = useMemo(() => {
    const start = (currentPage - 1) * pageSize;
    return sortedTasks.slice(start, start + pageSize);
  }, [sortedTasks, currentPage, pageSize]);

  const totalPages = Math.ceil((totalItems ?? sortedTasks.length) / pageSize);

  const handleExport = async (format: 'csv' | 'excel') => {
    if (!enableExport) return;

    const data = sortedTasks.map(task => {
      const row: { [key: string]: any } = {};
      columns.forEach(col => {
        row[columnLabels[col] || col] = task[col];
      });
      return row;
    });

    if (format === 'csv') {
      const csv = columns.map(col => columnLabels[col] || col).join(',') + '\n' +
        data.map(row => columns.map(col => `"${row[columnLabels[col] || col] || ''}"`).join(',')).join('\n');
      const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
      const link = document.createElement('a');
      link.href = URL.createObjectURL(blob);
      link.download = 'export.csv';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }

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

  if (error) {
    return (
      <div className={styles.dataGridError}>
        <h3>Erreur</h3>
        <p>{error.message}</p>
      </div>
    );
  }

  if (isLoading) {
    return loadingComponent || (
      <div className={styles.dataGridLoading}>
        <div className={styles.dataGridSpinner} />
        <p>Chargement...</p>
      </div>
    );
  }

  if (tasks.length === 0) {
    return (
      <div className={styles.dataGridEmpty}>
        {emptyStateMessage}
      </div>
    );
  }

  return (
    <div className={`${styles.dataGridWrapper} ${containerClassName}`}>
      {enableExport && (
        <div className={styles.dataGridToolbar}>
          <div className={styles.dataGridExport}>
            <button
              type="button"
              className={styles.dataGridButton}
              onClick={() => handleExport(exportFormats)}
            >
              Export {exportFormats.toUpperCase()}
            </button>
          </div>
        </div>
      )}

      <div className={styles.dataGridContainer}>
        <div className={`${styles.dataGridHeader} ${headerClassName}`}>
          {columns.map(column => (
            <div
              key={column}
              className={`${styles.dataGridCell} ${styles.headerCell}`}
              onClick={() => handleSort(column)}
            >
              <span className={styles.headerContent}>
                {columnHeaders[column]?.icon}
                {columnHeaders[column]?.label || columnLabels[column] || column}
                {sort.field === column && (
                  <span className={`${styles.sortIcon} ${sort.direction || ''}`} />
                )}
              </span>
            </div>
          ))}
        </div>

        {paginatedTasks.map((task: Task) => (
          <div
            key={task.id as string}
            className={`${styles.dataGridRow} ${rowClassName}`}
            onClick={() => onTaskClick?.(task.id as string)}
          >
            {columns.map((column) => {
              const value = task[column];
              const style = columnStyles[column];
              return (
                <div
                  key={column}
                  className={styles.dataGridCell}
                  style={{ textAlign: style?.align || 'left' }}
                >
                  {style?.formatter
                    ? style.formatter(value)
                    : column === 'created_at' && typeof value === 'string'
                      ? format(new Date(value), 'dd/MM/yyyy, HH:mm')
                      : column === 'type'
                        ? <span style={getStatusStyle((value as string) || '')}>
                            {value || 'N/A'}
                          </span>
                        : value || 'N/A'}
                </div>
              );
            })}
            {(onEditClick || onDeleteClick) && (
              <div className={styles.dataGridActions}>
                {onEditClick && (
                  <button
                    type="button"
                    className={`${styles.actionButton} ${styles.edit}`}
                    onClick={(e) => {
                      e.stopPropagation();
                      onEditClick(task.id as string);
                    }}
                  >
                    <span className="sr-only">Modifier</span>
                  </button>
                )}
                {onDeleteClick && (
                  <button
                    type="button"
                    className={`${styles.actionButton} ${styles.delete}`}
                    onClick={(e) => {
                      e.stopPropagation();
                      onDeleteClick(task.id as string);
                    }}
                  >
                    <span className="sr-only">Supprimer</span>
                  </button>
                )}
              </div>
            )}
          </div>
        ))}
      </div>

      {totalPages > 1 && (
        <div className={styles.dataGridPagination}>
          <div className={styles.paginationInfo}>
            Page {currentPage} sur {totalPages}
          </div>
          <div className={styles.paginationControls}>
            <button
              type="button"
              className={styles.paginationButton}
              disabled={currentPage === 1}
              onClick={() => onPageChange?.(currentPage - 1)}
            >
              Précédent
            </button>
            <button
              type="button"
              className={styles.paginationButton}
              disabled={currentPage === totalPages}
              onClick={() => onPageChange?.(currentPage + 1)}
            >
              Suivant
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default DataGrid;
