$(function () {
		// Плавное перемещение к секции
	$(".header__nav-list a, .footer__bottom-nav-list a").on("click", function (e) {
		e.preventDefault()
		var id = $(this).attr('href'),
		top = $(id).offset().top
		$('body,html').animate({ scrollTop: top }, 900)
	})
	
		// Бургер
		$('.burger').on('click', () => {
			$('.burger').toggleClass('actives');
			$('.header__nav').toggleClass('open');
			$('.header__nav-list').toggleClass('show');
		});
		for (let a = 1; a <= $(".header__nav-item").length; a++){
			$(".header__nav-item:nth-child("+ a +")").css("animation-delay", "."+ (a+1) +"s");   
		}
		$('.header__nav a').on('click', function (e) {
				e.preventDefault()
				$('.burger').removeClass('actives')
				$('.header__nav').removeClass('open')
				$('.header__nav-list').removeClass('show')
		})
})



var coll = document.getElementsByClassName("faq__item-btn");
var i;

for (i = 0; i < coll.length; i++) {
coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
    content.style.maxHeight = null;
    } else {
    content.style.maxHeight = content.scrollHeight + "px";
    } 
});
}


// акардеон футора

var toggler = document.getElementsByClassName("footer__top-title--arrow");
var i;

for (i = 0; i < toggler.length; i++) {
	toggler[i].addEventListener("click", function() {
    	this.parentElement.querySelector(".footer__top-list-nested").classList.toggle("footer__top-list-nested-active");
    	this.classList.toggle("footer__top-title--arrow-down");
	});
}


const slider = document.querySelector('.swiper');

let mySwiper;

function mobileSlider() {
	if (window.innerWidth <= 650 && slider.dataset.mobile == 'false') {
		mySwiper = new Swiper(slider, {
			containerModifierClass: "swiper",
			wrapperClass: "swiper__wrapper",
			slideClass: "swiper__slide",
			slidesPerView: 1,
			watchSlidesVisibility: true,
			grabCursor: true,
			centeredSlides: true,
			loop: true,
			pagination: {
				el: ".swiper-pagination",
			},
		});

		slider.dataset.mobile = 'true';
	}

	if (window.innerWidth > 650) {
		slider.dataset.mobile = 'false';
      console.log(slider)
    
		
    if (slider.classList.contains('swiperinitialized')) {
			mySwiper.destroy();
		}
	}
}

mobileSlider()

window.addEventListener('resize', () => {
	mobileSlider();
});





// Мобильное меню поиска
$('.search__label').on('click', function(e){
	e.preventDefault();
	
	var $this = $(this),
		form = $this.closest('.search__form'),
		input = form.find('.search__input');
	
	input.toggleClass('show');
  });
  
  $(document).mouseup(function (e) {
	var container = $('.search__input');
	if (container.has(e.target).length === 0 && 
		$(e.target).closest('form').length === 0){
	  container.removeClass('show');
	}
  });