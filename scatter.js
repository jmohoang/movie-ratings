let scatterTooltip = d3.select("#scatter-plot-container")
					.append("div")
					.attr("class", "scatterToolTip")
					.style("position", "absolute");

let scatterSegmentX = (width - 2*margin)/getScatterMax('voted_users');
let scatterSegmentY = (height - 2*margin)/10;

d3.select("#scatter-plot")
	.selectAll("cirle")
	.data(scatterData)
	.enter().append("circle")
	.attr("cx", function(d) { return (margin + d.voted_users*scatterSegmentX); })
	.attr("cy", function(d) { return  height - (d.score*scatterSegmentY) - margin; })
	.attr("r", function(d) { return 4; })
	.attr("fill", "white")
	.attr("stroke", "steelblue ")
    .attr("stroke-width", 2)
    .style("cursor", "pointer")
    .on("mouseover", function(d){
            scatterTooltip
              .style("left", d3.event.pageX + "px")
              .style("top", d3.event.pageY + "px")
              .style("display", "inline-block")
              .style("background-color", "white")
              .style("border", "1px solid gray")
              .style("padding", "5px")
              .style("font", "8px times")
              .style("box-shadow", "2px 2px 2px gray")
              .html(scatterTooltipData(d));
    	})
	.on("mouseout", function(d){ scatterTooltip.style("display", "none");});

function scatterTooltipData(d) {
	return "<b>Movie Title : </b>" + d.title + "<br>" + 
			"<b>IMDB Score: </b>" + d.score + "<br>" + 
			"<b>Voted Users: </b>" + d.voted_users; 
}

function getScatterMax(attribute) {
	if(attribute == 'score') {
		return Math.max.apply(Math, scatterData.map(function(d) { return d.score; }));
	} else {
		return Math.max.apply(Math, scatterData.map(function(d) { return d.voted_users; }));
	}
}

// Adding the axes
// Scales
let scatterX = d3.scaleLinear()
	.domain([0, getScatterMax('voted_users')/1000])
    .range([0, width - 2*margin]);

let scatterY = d3.scaleLinear()
	.domain([0, 10])
    .range([height - 2*margin, 0]);

d3.select("#scatter-plot-container svg")
	.append("g")
	.attr("class", "x axis")
	.attr("transform", "translate("+margin+","+(height - margin)+")")
	.call(d3.axisBottom(scatterX));

d3.select("#scatter-plot-container svg")
	.append("g")
	.attr("class", "y axis")
	.attr("transform", "translate("+margin+","+ margin+")")
	.style("font", "10px times")
	.call(d3.axisLeft(scatterY));

// Adding the Labels
// Title
d3.select("#scatter-plot-container svg")
	.append("g")
	.append("text")
	.attr("x", width/2)
	.attr("y", margin/2)
	.style("text-anchor", "middle")
	.style("font-weight", "bold")
	.text("User votes and IMDB scores of all movies");

// x-axis label
d3.select("#scatter-plot-container svg")
	.append("g")
	.append("text")
	.attr("x", width/2)
	.attr("y", height - margin/2.5)
	.style("text-anchor", "middle")
	.style("font", "10px times")
	.text("Number of voted users (x 1000)");

// y-xis label
d3.select("#scatter-plot-container svg")
	.append("g")
	.append("text")
	.attr("x",0 - height/2)
	.attr("y", margin/4)
	.attr("transform", "rotate(-90)")
	.style("text-anchor", "middle")
	.style("font", "10px times")
	.text("IMDB Score");