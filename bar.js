let barSegment = (height - 2*margin)/getBarMax(barData);

d3.select("#bar-graph")
	.selectAll("rect")
	.data(barData)
	.enter().append("rect")
	.attr("width", ((width - 2*margin)/barData.length - 3))
	.attr("height", function(d) { return d*barSegment; })
	.attr("x", function(d, i) { return i*((width - 2*margin)/barData.length) + margin; })
	.attr("y", function(d) { return ((height - margin) - (d*barSegment)); })
	.attr("fill", function(d, i) { return colors[i]; })
	.attr("opacity", 0.7);

d3.select("#bar-graph")
	.selectAll("text")
	.data(barData)
	.enter()
	.append("text")
	.attr("x",  function(d, i) { return i*((width - 2*margin)/barData.length) + margin + ((width - 2*margin)/barData.length)/2; })
	.attr("y", function(d) { return ((height - margin) - (d*barSegment) - 3); })
	.attr("fill", "black")
	.style("font", "10px times")
	.style("text-anchor", "middle")
	.text(function(d) { return d; });

function getBarMax(barData) {
	return barData.reduce(function(a, b) {
	    return Math.max(a, b);
	});
}

// Adding the axes
let barX = d3.scaleBand()
	.domain([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
    .range([0, width - 2*margin]);

let barY = d3.scaleLinear()
	.domain([0, (getBarMax(barData)/1000)])
    .range([height - 2*margin, 0]);

d3.select("#bar-graph-container svg")
	.append("g")
	.attr("class", "x axis")
	.attr("transform", "translate("+margin+","+(height - margin)+")")
	.call(d3.axisBottom(barX));

d3.select("#bar-graph-container svg")
	.append("g")
	.attr("class", "y axis")
	.attr("transform", "translate("+margin+","+ margin+")")
	.style("font", "10px times")
	.call(d3.axisLeft(barY));

// Adding the Labels
// Title
d3.select("#bar-graph-container svg")
	.append("g")
	.append("text")
	.attr("x", width/2)
	.attr("y", margin/2)
	.style("text-anchor", "middle")
	.style("font-weight", "bold")
	.text("Average user votes per IMDB Category");

// x-axis label
d3.select("#bar-graph-container svg")
	.append("g")
	.append("text")
	.attr("x", width/2)
	.attr("y", height - margin/2.5)
	.style("text-anchor", "middle")
	.style("font", "10px times")
	.text("Average user votes per IMDB Category");

// y-xis label
d3.select("#bar-graph-container svg")
	.append("g")
	.append("text")
	.attr("x",0 - height/2)
	.attr("y", margin/4)
	.attr("transform", "rotate(-90)")
	.style("text-anchor", "middle")
	.style("font", "10px times")
	.text("Average number of voted users (x 1,000)");