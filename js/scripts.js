
$(document).ready(function(){

  var carouselList = $("#carousel ul");

  setInterval(function(){
    carouselList.animate({marginLeft:-400}, 500, function(){
      var firstItem = carouselList.find("li:first");
      var lastItem = carouselList.find("li:last");

      $(lastItem).after($(firstItem));
      carouselList.css({marginLeft:0});
    })
  },2000);
});
