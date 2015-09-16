var dataset = [5, 10, 13, 19, 21, 25, 22, 18, 15, 13,
               11, 12, 15, 20, 18, 17, 16, 18, 23, 25];

function getData(numPts) {
  var dataset = [];
  for (var i = 0; i<numPts; i++) {
    dataset.push(Math.random()*15+5);
  }
  return dataset;
}

// Width, Height, # points in dataset, and bar padding
var w = 500,
    h = 100,
    numPts = 20,
    barPadding = 1,
    bar_data = getData(numPts);
    
// Create SVG element
var svg = d3.select("main")
            .append("svg")
            .attr("width", w)
            .attr("height", h)
            .classed("work-list", true);

svg.selectAll("rect")
   .data(bar_data)
   .enter()
   .append("rect")
   .attr("x", function (d, i) {
       return i * (w / numPts); // Dynamic bar width. Bar gets narrower as numPts grows
    })
   .attr("y", function (d) {
       return h-d*5;  // The top of the bar starts at the height of the SVG - height of bar
    })
   .attr("width", w/numPts - barPadding) // dynamic width based on # pts - a padding value
   .attr("height", function (d) {
       return d*5; // the height of the bar is given by the data itself
    })
   .attr("fill", function (d) {
       return "rgb(239, 205, " + Math.round(255-(d*10)) + ")";
    });

svg.selectAll("text")
   .data(bar_data)
   .enter()
   .append("text")
   .text(function (d) {
       return Math.round(d);
    })
   .attr("text-anchor", "middle") // center text horizontally at assigned x value
   .attr("x", function (d, i) {
       return i * (w / numPts) + (w/numPts - barPadding)/2; // center text in bar
       })
   .attr("y", function (d, i) {
       return h - (d*5) + 14; // move text below top of bar by 14px
       })
   .attr("fill", "DarkSlateGray") // white text color
   .attr("font-size", "11px");
