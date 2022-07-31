var byConversion={
  display: async function() {

    d3.select("#byAverage").selectAll("text").remove();
    d3.select("#byAverage").selectAll("svg").remove();
     


// Your code here
  
      
  
   var margin = {top: 50, right: 200, bottom: 50, left: 60},
        width = 800 - margin.left - margin.right,
        height = 300 - margin.top - margin.bottom;
        const data = await d3.csv('https://pgambhir88.github.io/best_footballer_v2.csv');
   

     var svg = d3.select("#byConversion")
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
                .domain([2, 150])
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
            .attr("x", -margin.top-150)
            .text("Number of Goals");
 
   
   var color = d3.scaleOrdinal()
                    .domain([">2 Target Per Match", ">1 Targer Per Match", "<1 Target Per Match" ])
                    .range(["#59a14f","#e15759","#4e79a7"])  
  
   var legend_x = 480
        var legend_y = 10
        var legend_w = 12
        // Create legend
        svg.append("rect").attr("x",legend_x).attr("y",legend_y).attr("width", legend_w).attr("height", legend_w).style("fill", "#59a14f")
        svg.append("rect").attr("x",legend_x).attr("y",legend_y + 30).attr("width", legend_w).attr("height", legend_w).style("fill", "#e15759")
        svg.append("rect").attr("x",legend_x).attr("y",legend_y + 60).attr("width", legend_w).attr("height", legend_w).style("fill", "#4e79a7")
        svg.append("text").attr("x", legend_x + 20).attr("y", legend_y + 5).text(">2 Target Per Match").style("font-size", "15px").attr("alignment-baseline","middle")
        svg.append("text").attr("x", legend_x + 20).attr("y", legend_y + 35).text(">1 Target Per Matchs").style("font-size", "15px").attr("alignment-baseline","middle")
        svg.append("text").attr("x", legend_x + 20).attr("y", legend_y + 65).text("<1 Target Per Match").style("font-size", "15px").attr("alignment-baseline","middle")
      
   
   var dv4_tooltip = d3.select('#byConversion')
                    .append('div')
                    .attr('class', 'dv4 tooltip')
                    .style('display', 'none');
  
  function dv4_onMouseOver() {
                    d3.select(this)
                         ;
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
                       
                       ;
                    dv4_tooltip.style('display', 'none');
    }
  
  
    svg.append("g").attr("transform", "translate(" + margin + "," + margin + ")")
      .selectAll("circle")
      .data(data)
      .enter()
      .append("circle")
        .attr("cx", function(d) { return (x(d.Shots)); })
        .attr("cy", function(d) { return (y(d.Goals)); })
        .attr("r", function(d) { return (Number(2)+ Number(d.Avg) ) })
        .style("fill", function(d){return color(d.On_Target_Per_Avg_Match) })
       .on("mouseover", dv4_onMouseOver)
     .on ("mouseout", dv4_OnMouseOut)
       
  d3.select("svg").append("g")
.attr("transform", "translate(" + margin + "," + margin + ")")
        .call(y);
 
d3.select("svg").append("g")
.attr("transform", "translate(" + margin + "," + (height + margin) + ")")
        .call(x);

  
  
  


}
}