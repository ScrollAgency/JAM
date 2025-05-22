import React, { useState, useMemo, useEffect } from 'react';
import { format, parseISO } from 'date-fns';
import dynamic from 'next/dynamic';
import styles from './DataGridUser.module.css';
import Head from 'next/head';

interface User {
  id?: string;
  nom: string;
  email: string;
  role: string;
  date_inscription: string;
  statut: string;
  photo_profil?: string | null;
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
  isImage?: boolean;
  imageSize?: { width: string, height: string };
  imageAlt?: string;
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

interface DataGridUserProps {
  users: User[];
  containerClassName?: string;
  headerClassName?: string;
  rowClassName?: string;
  onUserClick?: (userId: string) => void;
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
  exportIcon?: React.ReactNode;
  onExport?: (format: string) => void;
  isLoading?: boolean;
  error?: Error;
  emptyStateMessage?: string;
  loadingComponent?: React.ReactNode;
  columnHeaders?: { [key: string]: ColumnHeader };
  theme?: DataGridTheme;
  responsive?: ResponsiveConfig;
  onDelete?: (userId: string) => void;
  statusConfig?: {
    [key: string]: {
      label: string;
      className?: string;
      color?: string;
    }
  };
}

const DEFAULT_LABELS: { [key: string]: string } = {
  nom: "Nom",
  email: "Email",
  role: "Rôle",
  date_inscription: "Date d'inscription",
  statut: "Statut",
  photo_profil: "Photo de profil"
};

const DEFAULT_THEME: DataGridTheme = {
  headerBgColor: '#F3F4F6',
  rowBgColor: '#ffffff',
  hoverBgColor: '#E5E7EB',
  borderColor: '#E5E7EB',
  textColor: '#4B5563'
};

const DEFAULT_PAGE_SIZE = 10;

export const DataGridUser: React.FC<DataGridUserProps> = ({
  users = [],
  containerClassName = "",
  headerClassName = "",
  rowClassName = "",
  onUserClick,
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
  exportIcon,
  onExport,
  isLoading = false,
  error,
  emptyStateMessage = "Aucun utilisateur disponible",
  loadingComponent,
  columnHeaders = {},
  theme: customTheme,
  responsive,
  onDelete,
  statusConfig
}) => {
  const [mounted, setMounted] = useState(false);
  const [sort, setSort] = useState<{ field: string; direction: 'asc' | 'desc' | null }>({ field: '', direction: null });
  const [localFilters, setLocalFilters] = useState<ColumnFilter[]>(filters);

  const theme = useMemo(() => ({
    ...DEFAULT_THEME,
    ...customTheme
  }), [customTheme]);

  useEffect(() => {
    setMounted(true);
  }, []);

  const allColumns = useMemo(() => {
    if (users.length === 0) return [];
    const cols = Object.keys(users[0]);
    if (columnOrder) {
      return [...columnOrder.filter(col => cols.includes(col)), 'actions'];
    }
    return [...cols, 'actions'];
  }, [users, columnOrder]);

  const columns = useMemo(() => {
    if (!visibleColumns) return allColumns;
    return [...visibleColumns, 'actions'];
  }, [allColumns, visibleColumns]);

  const filteredUsers = useMemo(() => {
    return users.filter(user => {
      return localFilters.every(filter => {
        const value = user[filter.field];
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
  }, [users, localFilters]);

  const sortedUsers = useMemo(() => {
    if (!sort.direction) return filteredUsers;

    return [...filteredUsers].sort((a, b) => {
      const aValue = a[sort.field];
      const bValue = b[sort.field];

      if (sort.field === 'date_inscription') {
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
  }, [filteredUsers, sort]);

  const paginatedUsers = useMemo(() => {
    const start = (currentPage - 1) * pageSize;
    return sortedUsers.slice(start, start + pageSize);
  }, [sortedUsers, currentPage, pageSize]);

  const totalPages = Math.ceil((totalItems ?? sortedUsers.length) / pageSize);

  const handleExport = async (format: 'csv' | 'excel') => {
    if (!enableExport) return;
    onExport?.(format);
  };

  const handleSort = (field: string) => {
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

  const formatDate = (dateString: string) => {
    try {
      if (!dateString) return 'N/A';
      const date = parseISO(dateString);
      return format(date, 'dd/MM/yyyy');
    } catch (e) {
      return dateString || 'N/A';
    }
  };

  const renderCell = (column: string, value: string | null | undefined, user: User) => {
    if (column === 'actions') {
      return (
        <div className={styles.actions}>
          <button
            className={`${styles.actionButton} ${styles.deleteButton}`}
            onClick={(e) => {
              e.stopPropagation();
              onDelete?.(user.id || '');
            }}
            title="Supprimer l'utilisateur"
          >
            {/* Icône croix */}
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="15" y1="9" x2="9" y2="15"></line>
              <line x1="9" y1="9" x2="15" y2="15"></line>
            </svg>
          </button>
        </div>
      );
    }

    if (value === null || value === undefined) return 'N/A';

    const style = columnStyles[column];
    
    if (style?.isImage) {
      const imageSize = style.imageSize || { width: '32px', height: '32px' };
      const imageAlt = style.imageAlt || `Image ${column}`;
      
      return (
        <div className={styles.imageCell}>
          <img 
            src={value} 
            alt={imageAlt}
            style={{
              width: imageSize.width,
              height: imageSize.height,
              objectFit: 'cover',
              borderRadius: '50%'
            }}
          />
        </div>
      );
    }

    switch (column) {
      case 'nom':
        return (
          <div className={styles.userCell}>
            {user.photo_profil && (
              <img 
                src={user.photo_profil}
                alt=""
                className={styles.userAvatar}
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                }}
              />
            )}
            <div className={styles.userInfo}>
              <span className={styles.userName}>{value}</span>
              {user.email && <span className={styles.userEmail}>{user.email}</span>}
            </div>
          </div>
        );
      case 'statut':
        if (!statusConfig || !value) return value;
        const status = statusConfig[value];
        if (!status) return value;
        
        return (
          <span 
            className={`${styles.statusTag} ${status.className || ''}`}
            style={status.color ? { backgroundColor: status.color } : undefined}
          >
            {status.label || value}
          </span>
        );
      case 'date_inscription':
        return (
          <span className={styles.dateCell}>
            {formatDate(value)}
          </span>
        );
      case 'role':
        return (
          <span className={styles.roleTag}>
            {value}
          </span>
        );
      default:
        return value;
    }
  };

  if (!mounted) return null;

  if (error) {
    return (
      <div className={styles.error}>
        <h3>Erreur</h3>
        <p>{error.message}</p>
      </div>
    );
  }

  if (isLoading) {
    return loadingComponent || (
      <div className={styles.loading}>
        <div className={styles.spinner} />
        <p>Chargement...</p>
      </div>
    );
  }

  if (users.length === 0) {
    return (
      <div className={styles.empty}>
        {emptyStateMessage}
      </div>
    );
  }

  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div 
        className={`${styles.wrapper} ${containerClassName}`}
        style={{
          position: 'relative',
          height: responsive?.height,
          maxHeight: responsive?.maxHeight,
          '--table-min-width': responsive?.minWidth,
          '--table-max-width': responsive?.maxWidth,
          '--header-bg-color': theme.headerBgColor,
          '--hover-bg-color': theme.hoverBgColor,
          '--border-color': theme.borderColor,
          '--text-color': theme.textColor,
        } as React.CSSProperties}
        data-sticky-header={responsive?.stickyHeader}
        data-overflow-x={responsive?.horizontalOverflow}
        data-overflow-y={responsive?.verticalOverflow}
        data-compact={responsive?.compactOnMobile}
      >
        {enableExport && mounted && (
          <div className={styles.toolbar}>
            <div className={styles.export}>
              <div
                role="button"
                tabIndex={0}
                className={styles.button}
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

        <table className={styles.table}>
          <thead>
            <tr className={`${styles.header} ${headerClassName}`}
              style={{
                backgroundColor: theme.headerBgColor,
                color: theme.textColor,
                fontSize: '14px',
                borderColor: theme.borderColor
              }}>
              {columns.map(column => (
                <th
                  key={column}
                  className={styles.headerCell}
                  onClick={() => column !== 'actions' && handleSort(column)}
                  style={{
                    borderColor: theme.borderColor,
                    textAlign: columnStyles[column]?.align || 'left',
                    cursor: column === 'actions' ? 'default' : 'pointer'
                  }}
                >
                  <span className={styles.headerContent}>
                    {column === 'actions' ? 'Actions' : (columnHeaders[column]?.label || columnLabels[column] || column)}
                    {columnHeaders[column]?.icon}
                    {columnHeaders[column]?.tooltip && (
                      <span className={styles.tooltip}>{columnHeaders[column]?.tooltip}</span>
                    )}
                  </span>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {paginatedUsers.map((user: User) => (
              <tr
                key={user.id as string}
                className={`${styles.row} ${rowClassName}`}
                onClick={() => onUserClick?.(user.id as string)}
                style={{
                  backgroundColor: theme.rowBgColor,
                  color: theme.textColor,
                  fontSize: '14px',
                  borderColor: theme.borderColor,
                  cursor: onUserClick ? 'pointer' : 'default'
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.backgroundColor = theme.hoverBgColor || '';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.backgroundColor = theme.rowBgColor || '';
                }}
              >
                {columns.map((column) => (
                  <td
                    key={column}
                    className={styles.cell}
                    style={{ 
                      textAlign: columnStyles[column]?.align || 'left',
                      borderColor: theme.borderColor,
                      width: columnStyles[column]?.width
                    }}
                  >
                    {renderCell(column, user[column], user)}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>

        {totalPages > 1 && mounted && (
          <div className={styles.pagination}>
            <button
              className={styles.paginationButton}
              onClick={() => currentPage > 1 && onPageChange?.(currentPage - 1)}
              disabled={currentPage === 1}
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ marginRight: '4px' }}>
                <path d="M10 12L6 8L10 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              PRECEDENT
            </button>

            <div className={styles.pageNumbers}>
              {Array.from({ length: totalPages }, (_, i) => i + 1)
                .map((pageNum) => (
                  <button
                    key={pageNum}
                    className={`${styles.pageNumber} ${pageNum === currentPage ? styles.active : ''}`}
                    onClick={() => onPageChange?.(pageNum)}
                  >
                    {pageNum}
                  </button>
                ))}
            </div>

            <button
              className={styles.paginationButton}
              onClick={() => currentPage < totalPages && onPageChange?.(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              SUIVANT
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ marginLeft: '4px' }}>
                <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default dynamic(() => Promise.resolve(DataGridUser), {
  ssr: false
}); 