$(document).ready(function(){

  $('img').hover(function(){
    var src = $(this).attr('src'),
      alt = $(this).attr('alt-src');
    $(this).attr('src', alt);
    $(this).attr('alt-src', src);
  },function(){
    var src = $(this).attr('src'),
      alt = $(this).attr('alt-src');
    $(this).attr('src', alt);
    $(this).attr('alt-src', src);
  });


});
