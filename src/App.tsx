import React, { useEffect } from 'react';
import './App.css';

function App() {
  useEffect(() => {
    var data = [5, 10, 12];
    var width = 200,
    scaleFactor = 10,
    barHeight = 20;

    var graph = window.d3.select(".bar-chart")
              .append("svg")
              .attr("width", width)
              .attr("height", barHeight * data.length);

    var bar = graph.selectAll("g")
              .data(data)
              .enter()
              .append("g")
              .attr("transform", function(d: any, i: any) {
                    return "translate(0," + i * barHeight + ")";
              });

bar.append("rect")
   .attr("width", function(d: any) {
            return d * scaleFactor;
   })
   .attr("height", barHeight - 1);

bar.append("text")
   .attr("x", function(d: any) { return (d*scaleFactor); })
   .attr("y", barHeight / 2)
   .attr("dy", ".35em")
   .text(function(d: any) { return d; });
  }, [])
  
  return (
    <div className="App">
      <div className="bar-chart"></div>
    </div>
  );
}

export default App;
