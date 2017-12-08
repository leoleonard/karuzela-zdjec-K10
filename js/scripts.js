
var span = $("span");
$("span:even").css('color', 'red');

var paragraphs = $("p");
paragraphs.each(function(index, element) {
  var button = '<button class="btn" data-tmp="' + index + '">Click me</button>'
  $(element).append(button);
  });
  
  $("button").click(function(){
	alert($(this).attr("data-tmp"));
});


/*
$(function(){
  var paragraphs = $('p').css('color', 'green');
  var rawFirstParagraph = paragraphs[0];
  console.log(rawFirstParagraph);
  var jqFirstParagraph = paragraphs.eq(0);
  console.log(jqFirstParagraph);
  jqFirstParagraph.css('color', 'grey');
});


$('p').each(function( index, elem ) {
	$( elem ).text('paragraf ' + index);
}).css('color', 'blue');


$(function(){
  var li = $('nav').find('li').last();
  li.css("color", "blue");
    console.log(li);
});


$(function(){
    $("ul").append("<li>Dodatkowy element</li>")
  var firstItem = $('nav').find('li').first();
  console.log(firstItem.text());
  firstItem.css("color", "red");
  var last = $("nav").find("li").last();
  last.css("color", "pink");
  console.log(last);


});

*/
