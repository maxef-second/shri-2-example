	if ($(window).width() >= 840) {
			$(".xiaomi_yeelight_led_smart_bulb__progress__circle").draggable({
			    containment: 'parent', axis:'x'
			  });
		}
	if ($(window).width() < 840) {
		$(".xiaomi_yeelight_led_smart_bulb__progress__circle").draggable({
		    containment: 'parent', axis:'y'
		  });
	}


	if ($(window).width() >= 840) {
		$(".elgato_eve_degree_connected__progress__circle").draggable({
		    containment: 'parent', axis:'x'
		  });
	}
	if ($(window).width() < 840) {
		$(".elgato_eve_degree_connected__progress__circle").draggable({
		    containment: 'parent', axis:'y'
		  });
	}

	$(".devices__blocks__item").on("click", function(){
		if ($($($(this).children().children()[1]).children()[0]).text() == "Xiaomi Yeelight LED Smart Bulb") {
			$(".header").attr("z-index", "0");
			$(".xiaomi_yeelight_led_smart_bulb").fadeTo("fast", 1, "linear")
		}
		$(".xiaomi_yeelight_led_smart_bulb__cancelButton, .xiaomi_yeelight_led_smart_bulb__acceptButton").one("click", function(){
			$(".xiaomi_yeelight_led_smart_bulb").hide()
			$(".header").attr("z-index", "200");
		})

	})

	$(".devices__blocks__item").on("click", function(){
			if ($($($(this).children().children()[1]).children()[0]).text() == "Elgato Eve Degree Connected") {
				$(".elgato_eve_degree_connected").fadeTo("fast", 1, "linear");
			}
			$(".elgato_eve_degree_connected__cancelButton, .elgato_eve_degree_connected__acceptButton").one("click", function(){
				$(".elgato_eve_degree_connected").hide()
			})

		})

	$(".devices__blocks__item").on("click", function(){
			if ($($($(this).children().children()[1]).children()[0]).text() == "Xiaomi Warm Floor") {
				$(".xiaomi_warm_floor").fadeTo("fast", 1, "linear")
			}
			$(".xiaomi_warm_floor__cancelButton, .xiaomi_warm_floor__acceptButton").one("click", function(){
				$(".xiaomi_warm_floor").hide()
			})

		})



	var devices__header__menu__image = '<img class="devices__header__list__item__active__img" src="img/arrow-down.svg">';



	$('.devices__header__list__item__active').on('click', function(e) {
		e.preventDefault();
		if ($(window).width() <= '840'){
			$('.devices__header__list__item').toggleClass('devices__header__list__item__click');
			$('.devices__header__list').toggleClass('devices__header__list__click');
		}		
	});

	
	// var value_array = ["Все", "Кухня", "Зал", "Лампочки", "Камера"];
	var value_array = [];
	for (var i = 0; i < $('.devices__header__list__item__content').length; i++){
		value_array.push($($('.devices__header__list__item__content')[i])[0].innerHTML);
	}


$($('.devices__header__list__item__active').children())[0].innerHTML += devices__header__menu__image;

$('.devices__header__list__item__active').one('click', function(e) {
	$('.devices__header__list__item__click').on('click', '', function(){
		if ($(window).width() < 840){
			$('.devices__header__menu__image').remove();
			newValue = $(this)[0].textContent;

			var tmp_value_array = [];
			for (var key in value_array) {
			  tmp_value_array[key] = value_array[key];
			}

			tmp_value_array.splice(tmp_value_array.indexOf(newValue),1);
				tmp_value_array.unshift(newValue);

			for (var i = 0; i < $('.devices__header__list__item__content').length; i++){
				$($('.devices__header__list__item__content')[i])[0].innerHTML = tmp_value_array[i];
				if (i == 0){
					$($('.devices__header__list__item__content')[i])[0].innerHTML += devices__header__menu__image;
				}
			}

			$('.devices__header__list__item__click').toggleClass('devices__header__list__item__click');
			$('.devices__header__list').toggleClass('devices__header__list__click');
		}
	})
})





// 2 слайдер
$('.devices__blocks__list')[0].style.left = "0";

$('.devices__header__nav__right_arrow').on('click', function(e) {
	if ($(window).width()*0.975 <= (parseInt($('.devices__blocks__list').width()) + parseInt($('.devices__blocks__list')[0].style.left))){
		$('.devices__blocks__list').animate({left: parseInt($('.devices__blocks__list')[0].style.left)-215*Math.floor($(window).width()/215)}, 0);
	}
});
$('.devices__header__nav__left_arrow').on('click', function(e) {
	if (!(parseInt($('.devices__blocks__list')[0].style.left) == 0)){
		$('.devices__blocks__list').animate({left: parseInt($('.devices__blocks__list')[0].style.left)+215*Math.floor($(window).width()/215)}, 0);
	}
});



// 1 слайдер
$('.script__blocks__list__horizontal')[0].style.left = "0";

var currentScriptSlide = 1;


$('.script__header__nav__right_arrow').on('click', function(e) {
	if (currentScriptSlide != $('.script__blocks__list__horizontal').children().length){
		currentScriptSlide++;
		$('.script__blocks__list__horizontal').animate({left: parseInt($('.script__blocks__list__horizontal')[0].style.left)-$('.script__blocks__list__horizontal').width()/$('.script__blocks__list__horizontal').children().length}, 0);
	}
});
$('.script__header__nav__left_arrow').on('click', function(e) {
	if (currentScriptSlide != 1){
		currentScriptSlide--;
		$('.script__blocks__list__horizontal').animate({left: parseInt($('.script__blocks__list__horizontal')[0].style.left)+$('.script__blocks__list__horizontal').width()/$('.script__blocks__list__horizontal').children().length}, 0);
	}
});


if ($('.devices__blocks__list').width() < $('body').width()){
	$('.devices__header__nav').hide();
}

if ($('.script__blocks__list__horizontal').width() < $('body').width()*0.4){
	$('.script__header__nav').hide();
}




// main__blocks__scripts__scroll
var main__block__scripts__itemTemplate = '<div class="main__block__scripts__item__next"><img width=16px height=16px src="img/Icons/%20Arrow%20Double%20/%20M.png"></div>'

var array_template = [];
for (var i = 0; i < $('.main__block__scripts__item').length; i++){
	array_template.push($($('.main__block__scripts__item')[i])[0].innerHTML);
}

if ($(window).width() > '1250'){
	for (i = 0; i < $('.main__block__scripts__item').length; i++){
			var main__block__scripts__item = array_template[i];
		if ($($('.main__block__scripts__item')[i]).offset().top < 150 + $(".main__block__scripts").height() - 50) {
			$($('.main__block__scripts__item')[i])[0].innerHTML = main__block__scripts__item;
		} else {
			$($('.main__block__scripts__item')[i])[0].innerHTML = main__block__scripts__itemTemplate;
		}
	}
}


$(".main__block__scripts").scroll(function() {
	if ($(window).width() > '1250'){
		for (i = 0; i < $('.main__block__scripts__item').length; i++){
			var main__block__scripts__item = array_template[i];
		if ($($('.main__block__scripts__item')[i]).offset().top < 150 + $(".main__block__scripts").height() - 50) {
			$($('.main__block__scripts__item')[i])[0].innerHTML = main__block__scripts__item;
		} else {
			$($('.main__block__scripts__item')[i])[0].innerHTML = main__block__scripts__itemTemplate;
		}
	}
}
});



var label__mobile = 1;

	$(window).resize(function(){
		
	 	if($(window).width() > 840){
	 		$(".script__blocks__list__horizontal").width($(".script__blocks__list__horizontal").children().length*100 + "%");
	 	} else {
	 		for (var i = 0; i < $(".script__blocks__list__horizontal").children().length; i++){
	 		  $($('.script__blocks__list')[i]).css("min-width", $($('.script__blocks__list')[i]).children().length*215 + "px");
	 		  if (i == $(".script__blocks__list__horizontal").children().length - 1){
	 		  	$($('.script__blocks__list')[i]).css("min-width", $($('.script__blocks__list')[i]).width()-15);
	 		  }
			}
	 	}
	 	if ($(window).width() < 1250){
	 		for (var i = 0; i < $('.main__block__scripts__item').length; i++){
				$($('.main__block__scripts__item')[i])[0].innerHTML = array_template[i];
			}
	 	}
	 	if ($(window).width() >= 840) {
			$(".xiaomi_yeelight_led_smart_bulb__progress__circle").draggable({
			    containment: 'parent', axis:'x'
			  });
		}
		if ($(window).width() < 840) {
			$(".xiaomi_yeelight_led_smart_bulb__progress__circle").draggable({
			    containment: 'parent', axis:'y'
			  });
		}
		if ($(window).width() >= 840) {
		$(".elgato_eve_degree_connected__progress__circle").draggable({
		    containment: 'parent', axis:'x'
		  });
		}
		if ($(window).width() < 840) {
			$(".elgato_eve_degree_connected__progress__circle").draggable({
			    containment: 'parent', axis:'y'
			  });
		}

	});

	window.onresize = $(window).resize();

