import React, { useEffect } from 'react';
import './App.css';

function App() {
  useEffect(() => {
    var data = [5, 10, 12];
    var width = 200,
      scaleFactor = 10,
      barHeight = 20;

    var graph = window.d3
      .select('.bar-chart')
      .append('svg')
      .attr('width', width)
      .attr('height', barHeight * data.length);

    var bar = graph
      .selectAll('g')
      .data(data)
      .enter()
      .append('g')
      .attr('transform', function (d: any, i: any) {
        return 'translate(0,' + i * barHeight + ')';
      });

    bar
      .append('rect')
      .attr('width', function (d: any) {
        return d * scaleFactor;
      })
      .attr('height', barHeight - 1);

    bar
      .append('text')
      .attr('x', function (d: any) {
        return d * scaleFactor;
      })
      .attr('y', barHeight / 2)
      .attr('dy', '.35em')
      .text(function (d: any) {
        return d;
      });
  }, []);

  useEffect(() => {
    var width = 400,
      height = 100;

    var data = [10, 15, 20, 25, 30];

    // Append SVG
    var svg = window.d3
      .select('body')
      .append('svg')
      .attr('width', width)
      .attr('height', height);

    // Create scale
    var scale = window.d3
      .scaleLinear()
      .domain([window.d3.min(data), window.d3.max(data)])
      .range([0, width - 100]);

    // Add scales to axis
    var x_axis = window.d3.axisBottom().scale(scale);

    //Append group and insert axis
    svg.append('g').call(x_axis);
  }, []);

  useEffect(() => {
    var width = 400, height = 400;

    var data = [10, 15, 20, 25, 30];
    var svg = window.d3.select("body")
                .append("svg")
                .attr("width", width)
                .attr("height", height);

    var scale = window.d3.scaleLinear()
                  .domain([window.d3.min(data), window.d3.max(data)])
                  .range([height/2, 0]);

    var y_axis = window.d3.axisLeft()
                  .scale(scale);

    svg.append("g")
       .attr("transform", "translate(50, 10)")
       .call(y_axis);
  }, [])

  return (
    <div className="App">
      <div className="axis-y"></div>
      <div className="bar-chart"></div>
      <div className="axis-x"></div>
    </div>
  );
}

export default App;
