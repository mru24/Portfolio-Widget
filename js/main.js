$(document).ready(function() {


var ab = $('#about');
var wo = $('#work');
var co = $('#skills');

  $('#link1').click(function(event) {
    ab.animate({left: '0px'}, 500);
    wo.animate({left: '670px'}, 500);
    co.animate({left: '1340px'}, 500);
    $('#menu3,#menu2').removeClass('selected');
    $('#menu1').addClass('selected');
  });

  $('#link2').click(function(event) {
    ab.animate({left: '-670px'}, 500);
    wo.animate({left: '0px'}, 500);
    co.animate({left: '670px'}, 500);
    $('#menu1,#menu3').removeClass('selected');
    $('#menu2').addClass('selected');
  });

  $('#link3').click(function(event) {
    ab.animate({left: '-1340px'}, 500);
    wo.animate({left: '-670px'}, 500);
    co.animate({left: '0px'}, 500);
    $('#menu1,#menu2').removeClass('selected');
    $('#menu3').addClass('selected');
  });
});
