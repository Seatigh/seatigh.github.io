$(document).ready(function(){

	$("#return-top").hide();

	$(function () {
		$(window).scroll(function () {
			if ($(this).scrollTop() > 200) {
				$("#return-top").show();
			} else {
				$("#return-top").hide();
			}
		});

		$("#return-top").click(function () {
			$('body, html').animate({scrollTop: 0}, 1000);
			return false;
		});
	});

});