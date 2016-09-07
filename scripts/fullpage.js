$(function(){
  $('.page-container').fullpage({
    navigation: true,
    navigationPosition: 'right',
    afterLoad: function(_, index) {
      if(index === 3) {
        $(".timeline li").addClass("in-view")
      }
    },
    onLeave: function(index) {
      if(index === 3) {
        $(".timeline li").removeClass("in-view")
      }
    },
  });
});