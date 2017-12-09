$(document).ready(function(){
  var carouselList = $("#carousel ul"),
  counter = 10000 * 5;

  function sliderNext(){
    carouselList.animate({marginLeft:-400}, 500, function(){
      var firstItem = carouselList.find("li:first");
      var lastItem = carouselList.find("li:last");
      $(lastItem).after($(firstItem));
      carouselList.css({marginLeft:0});
      counter++;
      // console.log(counter % 5);
      renderDots();
    });
  }

  function sliderBack () {
      carouselList.animate({marginRight:"0"}, 400, function(){
        var firstItem = carouselList.find("li:first");
        var lastItem = carouselList.find("li:last");
        $(firstItem).after($(lastItem));
        carouselList.css({marginRight:"400"});
        counter++;
        // console.log(counter % 5);
        renderDots();
      });
  }

  function initDots() {
  	var lisArray = carouselList.find('li').toArray();
  	var $dots = $('<div class="dots">');

  	for (var i = 0; i < lisArray.length; i++) {
  		$dots.append('<button>'+(i+1)+'</button>');
  	}

    $('#carousel').after($dots);
  }

  function renderDots() {
  	var lisArray = $('.dots button').toArray();

  	$(lisArray).removeClass('active');
  	$(lisArray[counter % 5]).addClass('active');
  }

  initDots();


  var t;

  function resetInterval() {
  	t = setInterval(sliderNext, 700);
  }
  //resetInterval();

  var z;
  function reverseInterval() {
    z = setInterval(sliderBack, 700);
  }
  //reverseInterval();

  $('#carousel').mouseout(function () {
  	clearInterval(z);
  }).mouseover(reverseInterval);


    });
