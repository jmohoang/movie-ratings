let lineSegmentX = (width - 2*margin)/10;
let lineSegmentY = (height - 2*margin)/getLineMax(lineUsers);

let valueline = d3.line()
    .x(function(d) { return (d.score*lineSegmentX) + margin; })
    .y(function(d) { return (height - margin - d.voted_users*lineSegmentY); });

let lineTooltip = d3.select("#line-graph-container")
					.append("div")
					.attr("class", "toolTip")
					.style("position", "absolute");

d3.select("#line-graph")
	.selectAll("path")
	.data(lineData)
	.enter().append("path")
    .attr("class", "line")
    .attr("d", valueline(lineData))
    .attr("fill", "none")
    .attr("stroke", "steelblue ")
    .attr("stroke-width", 1)
    .attr("opacity", 0.7);

d3.select("#line-graph")
	.selectAll("cirle")
	.data(lineData)
	.enter().append("circle")
	.attr("cx", function(d) { return (d.score*lineSegmentX) + margin; })
	.attr("cy", function(d) { return (height - margin - d.voted_users*lineSegmentY); })
	.attr("r", function(d) { return 3; })
	.attr("fill", "steelblue")
	.attr("opacity", 0.7)
	.style("cursor", "pointer")
	.on("mouseover", function(d){
            lineTooltip
              .style("left", d3.event.pageX + "px")
              .style("top", d3.event.pageY + "px")
              .style("display", "inline-block")
              .style("background-color", "white")
              .style("border", "1px solid gray")
              .style("padding", "5px")
              .style("font", "8px times")
              .style("box-shadow", "2px 2px 2px gray")
              .html(lineTooltipData(d));
    	})
	.on("mouseout", function(d){ 
			lineTooltip
				.style("display", "none");
		});

function lineTooltipData(d) {
	return "<b>IMDB Score: </b>" + d.score + "<br>" + 
			"<b>Voted Users: </b>" + d.voted_users; 
}

function getLineMax(lineData) {
	return lineData.reduce(function(a, b) {
	    return Math.max(a, b);
	});
}

// Adding the axes
// Scales
let lineX = d3.scaleLinear()
	.domain([0, 10])
    .range([0, width - 2*margin]);

let lineY = d3.scaleLinear()
	.domain([0, (getLineMax(lineUsers)/1000)])
    .range([height - 2*margin, 0]);

d3.select("#line-graph-container svg")
	.append("g")
	.attr("class", "x axis")
	.attr("transform", "translate("+margin+","+(height - margin)+")")
	.call(d3.axisBottom(lineX));

d3.select("#line-graph-container svg")
	.append("g")
	.attr("class", "y axis")
	.attr("transform", "translate("+margin+","+ margin+")")
	.style("font", "10px times")
	.call(d3.axisLeft(lineY));

// Adding the Labels
// Title
d3.select("#line-graph-container svg")
	.append("g")
	.append("text")
	.attr("x", width/2)
	.attr("y", margin/2)
	.style("text-anchor", "middle")
	.style("font-weight", "bold")
	.text("Number of user votes per IMDB score");

// x-axis label
d3.select("#line-graph-container svg")
	.append("g")
	.append("text")
	.attr("x", width/2)
	.attr("y", height - margin/2.5)
	.style("text-anchor", "middle")
	.style("font", "10px times")
	.text("IMDB Score");

// y-xis label
d3.select("#line-graph-container svg")
	.append("g")
	.append("text")
	.attr("x",0 - height/2)
	.attr("y", margin/4)
	.attr("transform", "rotate(-90)")
	.style("text-anchor", "middle")
	.style("font", "10px times")
	.text("Number of voted users (x 1000)");