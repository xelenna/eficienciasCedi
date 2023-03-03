import * as d3 from 'https://cdn.jsdelivr.net/npm/d3@7/+esm';

const data = [
    { label: "Área 1", value: 0.4, color: "red" },
    { label: "Área 2", value: 0.3, color: "blue" },
    { label: "Área 3", value: 0.2, color: "green" },
    { label: "Área 4", value: 0.1, color: "orange" },
    { label: "Área 4", value: 0.1, color: "orange" },
  ];
  
  const radius = 80;
  const circle = d3.select('#circle');
  
  const svg = circle.append('svg')
    .attr('width', '100%')
    .attr('height', '100%')
    .attr('viewBox', `0 0 ${radius*2} ${radius*2}`);
  
  const group = svg.append('g')
    .attr('transform', `translate(${radius},${radius})`);
  
  const arc = d3.arc()
    .innerRadius(radius*0.7)
    .outerRadius(radius)
    .startAngle(0);
  
  group.selectAll('path')
    .data(data)
    .enter().append('path')
    .attr('d', d => arc({ endAngle: d.value * 2 * Math.PI }))
    .attr('fill', d => d.color)
    .attr('stroke', 'white')
    .attr('stroke-width', 2);
  
  group.append('text')
    .attr('text-anchor', 'middle')
    .attr('font-size', '2em')
    .attr('font-weight', 'bold')
    .attr('dy', '0.4em')
    .text('6%');
  