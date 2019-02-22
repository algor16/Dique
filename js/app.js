$(document).foundation()

$(document).ready(function(){

      var height = $(window).height();

      $('#first').height(height);
      $('#second').height(height);
      $('#third').height(height);
});

$(window).resize(function(){
	var height = $(window).height();

      $('#first').height(height);
      $('#second').height(height);
      $('#third').height(height);
})