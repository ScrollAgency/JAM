const KanbanMeta = {
    name: "Kanban",
    section: "🔖 Sitex",
    displayName: "Kanban",
    description: "Vue Kanban pour la gestion des tâches avec drag & drop",
    thumbnailUrl: "https://static1.plasmic.app/insertables/kanban.svg",
    importPath: "./components/others/kanban/kanban",
    props: {
        tasks: {
            type: "array",
            defaultValue: [],
            description: "Array of tasks to display in the kanban",
            itemType: {
                type: "object",
                fields: {
                    id: "string",
                    title: "string",
                    date_start: "string",
                    date_end: "string",
                    description: "string",
                    type: "string",
                    thematic: "string"
                }
            }
        },
        containerClassName: {
            type: "string",
            description: "Additional CSS class for the container"
        },
        columnClassName: {
            type: "string",
            description: "Additional CSS class for columns"
        },
        cardClassName: {
            type: "string",
            description: "Additional CSS class for cards"
        },
        minHeight: {
            type: "string",
            description: "Minimum height of the kanban",
            defaultValue: "500px"
        },
        cardMinWidth: {
            type: "string",
            description: "Minimum width of cards",
            defaultValue: "280px"
        },
        cardMaxWidth: {
            type: "string",
            description: "Maximum width of cards",
            defaultValue: "320px"
        },
        groupBy: {
            type: "choice",
            description: "Group tasks by field",
            defaultValue: "type",
            options: ["type", "thematic"]
        },
        sortBy: {
            type: "choice",
            description: "Sort tasks by field",
            defaultValue: "date_start",
            options: ["date_start", "date_end", "title"]
        },
        sortDirection: {
            type: "choice",
            description: "Sort direction",
            defaultValue: "asc",
            options: ["asc", "desc"]
        },
        searchTerm: {
            type: "string",
            description: "Search term to filter tasks"
        },
        showFilters: {
            type: "boolean",
            description: "Show filter controls",
            defaultValue: true
        },
        columnColors: {
            type: "object",
            description: "Colors for columns",
            defaultValue: {
                backgroundColor: "#EDF2F7",
                textColor: "#2D3748"
            },
            fields: {
                backgroundColor: "string",
                textColor: "string"
            }
        },
        taskColors: {
            type: "object",
            description: "Colors for task cards",
            defaultValue: {
                backgroundColor: "#ffffff",
                textColor: "#131013",
                borderColor: "#E2E8F0"
            },
            fields: {
                backgroundColor: "string",
                textColor: "string",
                borderColor: "string"
            }
        },
        onTaskMove: {
            type: "eventHandler",
            description: "Called when a task is moved",
            argTypes: [
                {
                    name: "taskId",
                    type: "string"
                },
                {
                    name: "newGroup",
                    type: "string"
                }
            ]
        },
        onTaskClick: {
            type: "eventHandler",
            description: "Called when a task is clicked",
            argTypes: [
                {
                    name: "taskId",
                    type: "string"
                }
            ]
        },
        onSortChange: {
            type: "eventHandler",
            description: "Called when sort field changes",
            argTypes: [
                {
                    name: "sortBy",
                    type: "string"
                }
            ]
        },
        onSortDirectionChange: {
            type: "eventHandler",
            description: "Called when sort direction changes",
            argTypes: [
                {
                    name: "direction",
                    type: "string"
                }
            ]
        },
        onSearch: {
            type: "eventHandler",
            description: "Called when search term changes",
            argTypes: [
                {
                    name: "searchTerm",
                    type: "string"
                }
            ]
        }
    }
};

export default KanbanMeta; 