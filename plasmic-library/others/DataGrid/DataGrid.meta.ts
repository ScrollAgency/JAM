const DataGridMeta = {
    name: "DataGrid",
    section: "🔖 Sitex",
    displayName: "Data Grid",
    description: "Table view for task management with sorting, filtering, pagination, and export capabilities",
    thumbnailUrl: "https://static1.plasmic.app/insertables/table.svg",
    importPath: "./components/others/data_grid/data_grid",
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
                    date_start: "string",
                    date_end: "string",
                    description: "string",
                    type: "string",
                    status: "string"
                }
            }
        },
        containerClassName: {
            type: "string",
            description: "Additional CSS class for the container"
        },
        headerClassName: {
            type: "string",
            description: "Additional CSS class for the header"
        },
        rowClassName: {
            type: "string",
            description: "Additional CSS class for each row"
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
        columnLabels: {
            type: "object",
            description: "Custom labels for column headers",
            defaultValue: {
                id: "ID",
                avatar_url: "Avatar",
                created_at: "Date de création",
                first_name: "Prénom",
                last_name: "Nom",
                type: "Type"
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
        enableExport: {
            type: "boolean",
            description: "Enable export functionality",
            defaultValue: false
        },
        exportFormats: {
            type: "choice",
            description: "Format d'export",
            defaultValue: "csv",
            options: ["csv", "excel"]
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
        isLoading: {
            type: "boolean",
            description: "Show loading state",
            defaultValue: false
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
        loadingComponent: {
            type: "slot",
            description: "Custom loading component"
        },
        theme: {
            type: "object",
            description: "Theme configuration",
            defaultValue: {
                headerBgColor: "#f6f3ef",
                rowBgColor: "#ffffff",
                hoverBgColor: "#f9f5ff",
                borderColor: "#d9cdbf",
                textColor: "#333333",
                fontSize: "14px"
            },
            fields: {
                headerBgColor: "string",
                rowBgColor: "string",
                hoverBgColor: "string",
                borderColor: "string",
                textColor: "string",
                fontSize: "string"
            }
        }
    }
};

export default DataGridMeta; 