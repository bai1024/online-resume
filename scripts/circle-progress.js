// $(function(){
  $("#circle1").circleProgress({
    value:0.88,
    size:100,
    reverse:true,
    startAngle:-Math.PI / 2,
    lineCap:"round",
    fill:{
      color: "#F2798D"
    }
  }).on("circle-animation-progress", function(event, progress){
    $(this).find("strong").html(parseInt(100 * 0.88) + "<i>%</i>")
  })

  $("#circle2").circleProgress({
    value:0.8,
    size:100,
    reverse:true,
    startAngle:-Math.PI / 2,
    lineCap:"round",
    fill:{
      color: "#F2798D"
    }
  }).on("circle-animation-progress", function(event, progress){
    $(this).find("strong").html(parseInt(100 * 0.8) + "<i>%</i>")
  })

    $("#circle3").circleProgress({
    value:0.7,
    size:100,
    reverse:true,
    startAngle:-Math.PI / 2,
    lineCap:"round",
    fill:{
      color: "#F2798D"
    }
  }).on("circle-animation-progress", function(event, progress){
    $(this).find("strong").html(parseInt(100 * 0.7) + "<i>%</i>")
  })

    $("#circle4").circleProgress({
    value:0.9,
    size:100,
    reverse:true,
    startAngle:-Math.PI / 2,
    lineCap:"round",
    fill:{
      color: "#F2798D"
    }
  }).on("circle-animation-progress", function(event, progress){
    $(this).find("strong").html(parseInt(100 * progress) + "<i>%</i>")
  })

    $("#circle5").circleProgress({
    value:0.9,
    size:100,
    reverse:true,
    startAngle:-Math.PI / 2,
    lineCap:"round",
    fill:{
      color: "#F2798D"
    }
  }).on("circle-animation-progress", function(event, progress){
    $(this).find("strong").html(parseInt(100 * 0.8) + "<i>%</i>")
  })

    $("#circle6").circleProgress({
    value:0.9,
    size:100,
    reverse:true,
    startAngle:-Math.PI / 2,
    lineCap:"round",
    fill:{
      color: "#F2798D"
    }
  }).on("circle-animation-progress", function(event, progress){
    $(this).find("strong").html(parseInt(100 * progress) + "<i>%</i>")
  })
// })