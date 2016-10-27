$(document).ready(function(){
    $("img").click(function() {
      console.log('data-alt-src value is');
      $(this).attr("src", $(this).attr('data-alt-src'));
  });
});
