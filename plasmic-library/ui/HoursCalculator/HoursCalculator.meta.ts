const HoursCalculatorMeta = {
    name: "HoursCalculator",
    section: "7.🧩 UI",
    displayName: "Hours Calculator",
    description: "Invisible component that calculates hours breakdown between two dates. Can be triggered from anywhere via ref.",
    importPath: "./plasmic-library/ui/HoursCalculator/",
    importName: "HoursCalculator",
    thumbnailUrl: `${process.env.NEXT_PUBLIC_PROJECT_URL}/library/HoursCalculator.png`,

    refProp: "ref",
    refActions: {
        calculate: {
            description: "Calculate hours breakdown between dates",
            argTypes: [
                {
                    name: "options",
                    type: "object",
                    description: "Optional parameters with dateStart and dateEnd"
                }
            ]
        },
        getCurrentResult: {
            description: "Get the current calculation result",
            argTypes: []
        }
    },
    props: {
        dateStart: {
            type: "string",
            description: "Start date and time (ISO 8601 format, e.g.: 2025-04-22T15:04:54.670Z)",
            required: false
        },
        dateEnd: {
            type: "string",
            description: "End date and time (ISO 8601 format, e.g.: 2025-04-22T15:04:54.670Z)",
            required: false
        },
        onHoursChange: {
            type: "eventHandler",
            description: "Called when calculation is completed",
            argTypes: [
                {
                    name: "result",
                    type: "object",
                    description: "Hours calculation result with breakdown by type"
                }
            ]
        },
        onError: {
            type: "eventHandler",
            description: "Called when an error occurs during calculation",
            argTypes: [
                {
                    name: "error",
                    type: "object",
                    description: "Error object"
                }
            ]
        }
    }
};

export default HoursCalculatorMeta;
