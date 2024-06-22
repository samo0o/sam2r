(function () {

	// vars
	var logo = $(".logo");
	var m1 = $(".logo .m1");
	var m2 = $(".logo .m2");
	var easings = ["easeOutQuad", "easeInOutQuad", "easeInOutBack", "easeOutElastic", "easeOutBounce"];
	var values = [[20, 180, 0], [170, 170, 0], [20, 360, 0], [350, 0, 0], [0, 40, 360], [0, 320, 0], [0, 180, 0], [180, 180, 0]];

	m1.data('colh', [100, 110, 120]);
	m2.data('colh', [255, 192, 0]);

	// logo hover
	logo.hover(function () {
		m1.logoanim();
		m2.logoanim();
	}, function () {
		m1.velocity("reverse");
		m2.velocity("reverse");
	});

	// logo anim prototype
	$.fn.logoanim = function () {

		// duration
		var duration = Math.round(Math.random() * 400) + 200;

		// anim object
		var a = Math.floor(Math.random() * values.length);

		// easing
		var e = Math.floor(Math.random() * easings.length);
		var easing = easings[e];
		if (e >= 2) { duration *= 2 }

		// velocity
		$(this).velocity({
			rotateX: values[a][0] * (Math.round(Math.random()) * 2 - 1) + 'deg',
			rotateY: values[a][1] * (Math.round(Math.random()) * 2 - 1) + 'deg',
			rotateZ: values[a][2] * (Math.round(Math.random()) * 2 - 1) + 'deg',
			colorRed: $(this).data('colh')[0],
			colorGreen: $(this).data('colh')[1],
			colorBlue: $(this).data('colh')[2]
		}, {
			duration: duration,
			easing: easing
		});
	}

	// animate logo on document load
	$(document).ready(function () {
		m1.logoanim();
		m1.velocity("reverse");
		m2.logoanim();
		m2.velocity("reverse");
	});

})();
