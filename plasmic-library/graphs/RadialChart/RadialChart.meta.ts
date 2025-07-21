const RadialChartMeta = {
  name: 'RadialChart',
  section: "4.📊 Graphs",
  displayName: 'Radial Chart',
  description: "Graph from GraphJS",
  importName: 'RadialChart',
  importPath: './plasmic-library/graphs/RadialChart',
  thumbnailUrl: `${process.env.NEXT_PUBLIC_PROJECT_URL}/library/RadialChart.png`,
  styleSections: false,

  props: {
    title: {
      type: 'string',
      description: 'Title of the chart card',
      defaultValue: 'Radial Chart - Label'
    },
    description: {
      type: 'string',
      description: 'Description text below the title',
      defaultValue: 'January - June 2024'
    },
    data: {
      type: 'object',
      description: 'Data for the chart',
      defaultValue: [
        { label: "Chrome", value: 275, color: "hsl(240, 60%, 50%)" },
        { label: "Safari", value: 200, color: "hsl(120, 60%, 45%)" },
        { label: "Firefox", value: 187, color: "hsl(30, 80%, 55%)" },
        { label: "Edge", value: 173, color: "hsl(270, 60%, 50%)" },
        { label: "Other", value: 90, color: "hsl(200, 60%, 50%)" }
      ]
    },
    width: {
      type: 'number',
      description: 'Width of the chart',
      defaultValue: 400
    },
    height: {
      type: 'number',
      description: 'Height of the chart',
      defaultValue: 400
    },
    className: {
      type: 'string',
      description: 'Additional CSS class for the chart'
    },
    mode: {
      type: 'choice',
      options: ['pie', 'radial'],
      description: 'Chart display mode: pie (doughnut) or radial (nested circles)',
      defaultValue: 'pie'
    }
  }
}; 

export default RadialChartMeta;