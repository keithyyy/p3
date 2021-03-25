import React from 'react';
import CanvasJSReact from '../../canvasjs.react';
// var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

function LineGraph({ dates }) {
  console.log(dates.map(date => ({ y: new Date(date) }))
  )
  const options = {
    title: {
      text: "Hours of Sleep"
    },
    data: [{
      type: "spline",
      dataPoints: [
        //mapping the passed down created_at properties from the database
        ...dates.map(({ date, point }) => ({ x: new Date(date), y: point }))
      ]
    }
    ]
  }
  console.log(options)
  return (
    <div >
      <CanvasJSChart options={options} />
    </div>
  )

}

export default LineGraph;