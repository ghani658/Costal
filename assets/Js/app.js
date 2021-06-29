$( document ).ready(function() {
  new WOW().init();
});

$(document).ready(function(){
	$(".res-menu-btn").click(function(){
		$(".mobile-dropdown-menu").toggle("slow");
		$ (".res-menu-btn").addClass('active');
	});
	$("#sub-menu1").click(function(){
		$("#open-sub-menu1").toggle("slow");
	});
	$("#sub-menu2").click(function(){
		$("#open-sub-menu2").toggle("slow");
	});
  $("#sub-menu3").click(function(){
    $("#open-sub-menu3").toggle("slow");
  });
});

$(document).ready(function(){
  $(".view-all").on("click", function() {
    var value = $("#myInput").val().toLowerCase();
    $("#myTable tr").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });
});
$(document).ready(function(){
  $(".by-state").on("click", function() {
    $("#myTable tr").show();
    var value = $("#myInput").val().toLowerCase();
    $("#myTable .state").filter(function() {
      if ($(this).text().toLowerCase().indexOf(value) == -1){
        $(this).parents("tr").hide();
      }
    });
  });
});