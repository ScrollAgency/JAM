const DataGridMeta = {
    name: "DataGrid",
    section: "7.🧩 UI",
    displayName: "Data Grid",
    description: "Table view for task management with sorting, filtering, pagination, and export capabilities",
    importPath: "./plasmic-library/ui/DataGrid",
    thumbnailUrl: `${process.env.NEXT_PUBLIC_PROJECT_URL}/library/DataGrid.png`,

    props: {
        tasks: {
            type: "array",
            defaultValue: [],
            description: "Array of data to display in the grid",
            itemType: {
                type: "object",
                fields: {
                    id: "string",
                    title: "string",
                    status: "string",
                    type: "string",
                    budget: "string",
                    date_start: "string",
                    date_end: "string",
                    comments: "string",
                    created_at: "string",
                    updated_at: "string",
                    last_updated_by: "string",
                    model: "string"
                }
            }
        },
        showActions: {
            type: "boolean",
            description: "Afficher ou non la colonne des actions",
            defaultValue: true
        },
        visibleColumns: {
            type: "array",
            description: "List of column keys to display in the grid (displays all columns if empty)",
            itemType: "string"
        },
        enableColumnReordering: {
            type: "boolean",
            description: "Allow users to reorder columns by dragging the column headers",
            defaultValue: true
        },
        onColumnOrderChange: {
            type: "eventHandler",
            description: "Called when the column order changes due to user drag and drop",
            argTypes: [
                {
                    name: "newOrder",
                    type: "array"
                }
            ]
        },
        onTaskClick: {
            type: "eventHandler",
            description: "Called when a row is clicked",
            argTypes: [
                {
                    name: "taskId",
                    type: "string"
                }
            ]
        },
        onEditClick: {
            type: "eventHandler",
            description: "Called when the edit button is clicked",
            argTypes: [
                {
                    name: "taskId",
                    type: "string"
                }
            ]
        },
        onDeleteClick: {
            type: "eventHandler",
            description: "Called when the delete button is clicked",
            argTypes: [
                {
                    name: "taskId",
                    type: "string"
                }
            ]
        },
        onCopyClick: {
            type: "eventHandler",
            description: "Called when the copy button is clicked",
            argTypes: [
                {
                    name: "taskId",
                    type: "string"
                }
            ]
        },
        columnLabels: {
            type: "object",
            description: "Custom labels for column headers",
            defaultValue: {
                id: "ID",
                title: "Nom",
                status: "Statut",
                type: "Type",
                budget: "Budget (k€)",
                date_start: "Date de début",
                date_end: "Heures Dispositif",
                comments: "Comments",
                created_at: "Created At",
                updated_at: "Updated At",
                last_updated_by: "Last Updated By",
                model: "Model"
            }
        },
        pageSize: {
            type: "number",
            description: "Number of items per page",
            defaultValue: 10
        },
        currentPage: {
            type: "number",
            description: "Current page number",
            defaultValue: 1
        },
        onPageChange: {
            type: "eventHandler",
            description: "Called when page is changed",
            argTypes: [
                {
                    name: "page",
                    type: "number"
                }
            ]
        },
        totalItems: {
            type: "number",
            description: "Total number of items (optional, for server-side pagination)"
        },
        filters: {
            type: "array",
            description: "Array of column filters",
            itemType: {
                type: "object",
                fields: {
                    field: "string",
                    value: "string",
                    operator: {
                        type: "choice",
                        options: ["equals", "contains", "greaterThan", "lessThan"]
                    }
                }
            }
        },
        onFilterChange: {
            type: "eventHandler",
            description: "Called when filters are changed",
            argTypes: [
                {
                    name: "filters",
                    type: "array"
                }
            ]
        },
        enableExport: {
            type: "boolean",
            description: "Enable export functionality",
            defaultValue: false
        },
        enablePrint: {
            type: "boolean",
            description: "Activer la fonctionnalité d'impression",
            defaultValue: false
        },
        printIcon: {
            type: "slot",
            description: "Icône personnalisée pour le bouton d'impression"
        },
        pdfTitle: {
            type: "string",
            description: "Titre à afficher dans le PDF généré",
            defaultValue: "Sitex - Commande"
        },
        onPrint: {
            type: "eventHandler",
            description: "Appelé après l'impression du tableau avec le PDF en base64",
            argTypes: [
                {
                    name: "pdfBase64",
                    type: "string",
                    description: "Contenu du PDF encodé en base64"
                }
            ]
        },
        exportFormats: {
            type: "choice",
            description: "Format d'export",
            defaultValue: "csv",
            options: ["csv", "excel"]
        },
        exportIcon: {
            type: "slot",
            description: "Icon for the export button"
        },
        onExport: {
            type: "eventHandler",
            description: "Called when export is triggered",
            argTypes: [
                {
                    name: "format",
                    type: "string"
                }
            ]
        },
        error: {
            type: "object",
            description: "Error object to display error state"
        },
        emptyStateMessage: {
            type: "string",
            description: "Message to show when no data is available",
            defaultValue: "Aucune donnée disponible"
        },
        theme: {
            type: "object",
            description: "Theme configuration for the grid",
            defaultValue: {
                headerBgColor: '#ECE6DF',
                rowBgColor: '#ffffff',
                hoverBgColor: '#f9f5ff',
                borderColor: '#d9cdbf',
                textColor: '#333333',
                fontSize: '14px',
                dragHandleColor: '#6B21A8'
            },
            fields: {
                headerBgColor: {
                    type: "string",
                    description: "Background color for the header"
                },
                rowBgColor: {
                    type: "string",
                    description: "Background color for rows"
                },
                hoverBgColor: {
                    type: "string",
                    description: "Background color when hovering over rows"
                },
                borderColor: {
                    type: "string",
                    description: "Color for borders"
                },
                textColor: {
                    type: "string",
                    description: "Color for text"
                },
                fontSize: {
                    type: "string",
                    description: "Font size for the grid"
                },
                dragHandleColor: {
                    type: "string",
                    description: "Color for the column drag handles"
                }
            }
        },
        responsive: {
            type: "object",
            description: "Responsive configuration for the grid",
            defaultValue: {
                minWidth: "100%",
                horizontalOverflow: "auto",
                verticalOverflow: "auto",
                stickyHeader: true,
                compactOnMobile: true,
                breakpoint: 768
            },
            fields: {
                minWidth: {
                    type: "string",
                    description: "Minimum width of the table (e.g., '100%', '800px')"
                },
                maxWidth: {
                    type: "string",
                    description: "Maximum width of the table"
                },
                height: {
                    type: "string",
                    description: "Fixed height of the table container"
                },
                maxHeight: {
                    type: "string",
                    description: "Maximum height of the table container"
                },
                horizontalOverflow: {
                    type: "choice",
                    options: ["auto", "scroll", "hidden"],
                    description: "How to handle horizontal overflow",
                    defaultValue: "auto"
                },
                verticalOverflow: {
                    type: "choice",
                    options: ["auto", "scroll", "hidden"],
                    description: "How to handle vertical overflow",
                    defaultValue: "auto"
                },
                stickyHeader: {
                    type: "boolean",
                    description: "Keep header fixed while scrolling",
                    defaultValue: true
                },
                compactOnMobile: {
                    type: "boolean",
                    description: "Use compact layout on mobile devices",
                    defaultValue: true
                },
                breakpoint: {
                    type: "number",
                    description: "Mobile breakpoint in pixels",
                    defaultValue: 768
                }
            }
        },
        defaultSort: {
            type: "object",
            description: "Tri par défaut à appliquer au tableau",
            fields: {
                field: {
                    type: "string",
                    description: "Colonne à trier"
                },
                direction: {
                    type: "choice",
                    options: ["asc", "desc"],
                    description: "Direction du tri (ascendant ou descendant)"
                }
            }
        },
        groupBy: {
            type: "string",
            description: "Nom du champ sur lequel grouper les données (comme dans Airtable)"
        },
        subGroupBy: {
            type: "string",
            description: "Nom du champ pour le sous-groupement (créera une hiérarchie à deux niveaux)"
        },
        groupByFields: {
            type: "array",
            description: "Tableau de noms de champs pour un groupement hiérarchique multi-niveaux (remplace groupBy et subGroupBy si fourni)",
            itemType: "string"
        }
    }
};

export default DataGridMeta;
