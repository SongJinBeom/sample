d3.tsv("p2.csv", function(error, data){
    var dataSet = [];
    for(var i = 0; i<data.length;i++){
        dataSet.push(data[i].item1);
    }
    d3.select("#g2")
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
})