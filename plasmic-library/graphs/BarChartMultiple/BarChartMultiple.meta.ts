const barChartMultipleMeta = {
  name: 'BarChartMultiple',
  section: "4.📊 Graphs",
  displayName: 'Bar Chart',
  description: "Graph from GraphJS",
  importName: 'BarChartMultiple',
  importPath: './plasmic-library/graphs/BarChartMultiple',
  thumbnailUrl: `${process.env.NEXT_PUBLIC_PROJECT_URL}/library/BarChartMultiple.png`,
  styleSections: false,

  props: {
    title: {
      type: 'string',
      description: 'Title of the chart card',
      defaultValue: 'Bar Chart - Multiple'
    },
    description: {
      type: 'string',
      description: 'Description text below the title',
      defaultValue: 'January - June 2024'
    },
    data: {
      type: 'object',
      description: 'Data for the chart',
      defaultValue: {
        xAxisKey: 'month',
        datasets: [
          {
            key: 'desktop',
            label: 'Desktop',
            color: '#6366F1'
          },
          {
            key: 'mobile',
            label: 'Mobile',
            color: '#22C55E'
          }
        ],
        items: [
          { month: "January", desktop: 186, mobile: 80 },
          { month: "February", desktop: 305, mobile: 200 },
          { month: "March", desktop: 237, mobile: 120 },
          { month: "April", desktop: 73, mobile: 190 },
          { month: "May", desktop: 209, mobile: 130 },
          { month: "June", desktop: 214, mobile: 140 }
        ]
      }
    },
    width: {
      type: 'number',
      description: 'Width of the chart',
      defaultValue: 600
    },
    height: {
      type: 'number',
      description: 'Height of the chart',
      defaultValue: 400
    },
    className: {
      type: 'string',
      description: 'Additional CSS class for the chart'
    }
  }
}; 

export default barChartMultipleMeta;