var dataSet = [50, 100, 70, 120, 90];

d3.select("#g1")
            .selectAll("rect")
            .data(dataSet)
            .enter()
            .append("rect")
            .attr("class", "bar")
            .attr("width", function(d,i){
                return d;
            })
            .attr("height", 20)
            .attr("x", 0)
            .attr("y", function(d,i){
                return i*25
            })