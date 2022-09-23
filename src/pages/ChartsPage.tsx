import { useState, useEffect, useRef } from 'react';
import * as d3 from 'd3';

export const ChartsPage = () => {
  const [data , _ ] = useState([24, 30, 45, 60, 20, 65, 75]);
  const svgRef = useRef(null);

  useEffect(() => {
    //set up the svg
    const w = 400;
    const h = 100;
    const svg = d3.select(svgRef.current)
      .attr('width', w)
      .attr('height', h)
      .style('background-color', '#d3d3d3');
      //set the scales
    const xScale = d3.scaleLinear()
      .domain([0, data.length - 1])
      .range([0, w]);
    const yScale = d3.scaleLinear()
    //@ts-ignore
      .domain([0, d3.max(data)])
      .range([0, h]);
    //set the line
    const line = d3.line()
      .x((value, index) => xScale(index))
      //@ts-ignore
      .y(yScale)
      .curve(d3.curveCardinal);
    //draw the line
    svg.selectAll('path')
      .data([data])
      .join('path')
      //@ts-ignore
      .attr('d', value => line(value))
      .attr('fill', 'none')
      .attr('stroke', 'blue');
      

  }, [data]);

  return (
    <div>
      <h1>Remote Charts Page using D3</h1>
      <svg ref={svgRef} />
    </div>
  );
};
