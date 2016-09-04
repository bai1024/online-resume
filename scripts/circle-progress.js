// $(function(){
  $("#circle1").circleProgress({
    value:0.75,
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

  $("#circle2").circleProgress({
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

    $("#circle3").circleProgress({
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
    $(this).find("strong").html(parseInt(100 * progress) + "<i>%</i>")
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