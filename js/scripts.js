$(document).ready(function(){
  var carouselList = $("#carousel ul");
  var t = setInterval(function(){
    carouselList.animate({marginLeft:-400}, 500, function(){

      var firstItem = carouselList.find("li:first");
      var lastItem = carouselList.find("li:last");

      $(lasttItem).after($(firstItem));
      carouselList.css({marginLeft:0});
    })
  },;
});
