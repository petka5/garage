define(['app'], function(app) {
	'use strict';
	


	function OwlCarouselCtrl1($scope, $location) {
		$(document).ready(function() {
			$(".owl-carousel").owlCarousel({
				animateOut : 'fadeOut',
				animateIn : 'fadeIn',
				items : 1,
				margin : 0,
				stagePadding : 30,
				smartSpeed : 450,
				navText : [ "<i class=\"material-icons md-light md-24\">chevron_left</i>", "<i class=\"material-icons md-light md-24\">chevron_right</i>" ],
				loop : true,
				nav : true,
				dots : true,
				autoplay : true
			});
		});

		$scope.images = [ 'http://lorempixel.com/1024/768/people/1', 'http://lorempixel.com/1024/768/people/2', 'http://lorempixel.com/1024/768/people/3',
				'http://lorempixel.com/1024/768/people/4', 'http://lorempixel.com/1024/768/people/5', 'http://lorempixel.com/1024/768/people/6' ];
	}
	;
}());