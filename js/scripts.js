$(function () {

  var carouselList = $("#carousel ul");

setInterval(slideBack, 3000);

  function slideNext (){
    carouselList.animate({'marginLeft':-400}, 500, function() {

      var firstItem = carouselList.find("li:first");
      var lastItem = carouselList.find("li:last");

      $(lastItem).after($(firstItem));
      carouselList.css({marginLeft:0});
    });
  };

  function slideBack (){
    carouselList.animate({'marginLeft':400}, 300, function() {

      var firstItem = carouselList.find("li:first");
      var lastItem = carouselList.find("li:last");

      $(lastItem).after($(firstItem));
      carouselList.css({marginLeft:0});
    });
  };

});
