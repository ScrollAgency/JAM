const GraphJsMeta = {
  name: 'GraphJs',
  section: "4.📊 Graphs",
  displayName: 'Graph Js',
  description: "Graph from GraphJS",
  importName: 'GraphJs',
  importPath: './plasmic-library/graphs/GraphJs',
  thumbnailUrl: `${process.env.NEXT_PUBLIC_PROJECT_URL}/library/GraphJs.png`,
  styleSections: false,

  props: {
    type: {
      type: 'choice',
      options: ['bar', 'line', 'pie', 'doughnut', 'radar', 'polarArea'],
      defaultValue: 'bar',
      description: 'Type of chart to render'
    },
    data: {
      type: 'object',
      description: 'Chart data with labels and datasets',
      defaultValue: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [
          {
            label: 'Dataset 1',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: 'rgba(75, 192, 192, 0.6)'
          }
        ]
      }
    },
    options: {
      type: 'object',
      description: 'Chart.js options object',
      defaultValue: {}
    },
    width: {
      type: 'number',
      description: 'Width of the chart container',
      defaultValue: 400
    },
    height: {
      type: 'number',
      description: 'Height of the chart container',
      defaultValue: 300
    },
    className: {
      type: 'string',
      description: 'Additional CSS class for the chart container'
    },
    title: {
      type: 'string',
      description: 'Title to display above the chart'
    }
  }
}; 

export default GraphJsMeta;
