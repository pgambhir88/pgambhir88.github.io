var Overall= {



display: async function () {
d3.select("#Overall").selectAll("text").remove();
d3.select("#Overall").selectAll("svg").remove();
 
  
var margin = {top: 50, right: 200, bottom: 50, left: 60},
      width = 800 - margin.left - margin.right,
      height = 300 - margin.top - margin.bottom;
 
      const data = await d3.csv('https://pgambhir88.github.io/best_footballer_v2.csv');
  


   var svg = d3.select("#Overall")
                  .append("svg")
                  .attr("class","dv4-svg1")
                  .attr("width", width + margin.left + margin.right)
                  .attr("height", height + margin.top + margin.bottom)
                  .append("g")
                  .attr("class","svg Group")
                  .attr("transform","translate(" + margin.left + "," + margin.top + ")");
      
var x = d3.scaleLinear()
              .domain([5, 1000])
              .range([ 0, width ]);


      svg
          .append("g")
          .attr("class","X Axis Group")
          .attr("transform", "translate(0," + height + ")")
          .call(d3.axisBottom(x))
          .attr("class","graph_axis_text");

      //X axis title
      svg
          .append("text")
          .attr("class","graph_axis_title")
          .attr("x", width-280)
          .attr("y", height + margin.bottom -10)
          .text("Number of Shots");

      // Add Y axis
      var y = d3.scaleLinear()
              .domain([2, 151])
              .range([ height, 0]);
      svg
          .append("g")
          .attr("class","Y Axis Group")
          .call(d3.axisLeft(y))
          .selectAll("text")
          .attr("class","graph_axis_text")
      
      //Y axis title
      svg
          .append("text")
          .attr("class","graph_axis_title")
          .attr("transform", "rotate(-90)")
          .attr("y", -margin.left+20)
          .attr("x", -margin.top-110)
          .text("Number of Goals");

  var dv4_tooltip = d3.select('#Overall')
                  .append('div')
                  .attr('class', 'dv4 tooltip')
                  .style('display', 'none');

function dv4_onMouseOver() {
                  d3.select(this)
                      .attr("r",10);
                  var d = d3.select(this).data()[0]
                  dv4_tooltip
                      .style('display', 'inline')
                      .html(d.Player + '<hr/>' + "Matches: " + d.Mat + '<br>' + "Shots: " + d.Shots + '<br>' + "Goals: " + d.Goals + '<br>' +"Minutes: " +  d.Mins + '<br>' +"OnTarget: " +  d.OnTarget)
                      .style('position', 'absolute')
                      .style('right', d3.event.pageX + 'px')
                      .style('top', d3.event.pageY + 'px');
              }
  
 function dv4_OnMouseOut() {
                  d3.select(this)
                     
                      .attr("r", 4);
                  dv4_tooltip.style('display', 'none');
                  
              }

              

  svg.append("g").attr("transform", "translate(" + margin + "," + margin + ")")
    .selectAll("circle")
    .data(data)
    .enter()
    .append("circle")
      .attr("cx", function(d) { return (x(d.Shots)); })
      .attr("cy", function(d) { return (y(d.Goals)); })
      .attr("r", function(d) { return (Number(4) ) })
      .on("mouseover", dv4_onMouseOver)
      .on ("mouseout", dv4_OnMouseOut)
                  
     
d3.select("svg").append("g")
.attr("transform", "translate(" + margin + "," + margin + ")")
      .call(y);

d3.select("svg").append("g")
.attr("transform", "translate(" + margin + "," + (height + margin) + ")")
      .call(x);




// Your code ends here
// Adding Annotation Code here
        //alert(sortableCntList[0]);
        var Player = "Lionel Messi";
        // var usaMedals = parseInt(sortableCntList[0].toString().split(",")[1]);
        
        const annotations = [
            {
                note: {
                    label: "Player: " + Player + " ",
                    lineType: "none",
                    bgPadding: {"top": 20, "left": 20, "right": 20, "bottom": 20},
                    title: "G.O.A.T",
                    orientation: "leftRight",
                    "align": "middle"
                },
                type: d3.annotationCalloutElbow,
                connector: { end: "arrow" },
                subject: {radius: 60},
                x: x,
                y: y,
                dx: "420",
                dy: "10"
            },
        ];
        const makeAnnotations = d3.annotation().annotations(annotations);
        
        d3.select("svg")
            .append("g")
            .attr("transform",
                "translate(" + margin.left + "," + margin.top + ")")
            .attr("class", "annotation-group")
            .call(makeAnnotations)














}
}