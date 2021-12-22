$(function(){
	// Проверка браузера
	if ( !supportsCssVars() ) {
		$('body').html('<div style="text-align: center; padding: 30px; font-family: Arial, sans-serif;">Ваш браузер устарел рекомендуем обновить его до последней версии<br> или использовать другой более современный</div>')
	}


	// Ленивая загрузка
	setTimeout(function(){
		observer = lozad('.lozad', {
			rootMargin: '200px 0px',
			threshold: 0,
			loaded: function(el) {
				el.classList.add('loaded')
			}
		})

		observer.observe()
	}, 200)


	// Анимированное появление страницы
	$('body').addClass('show')


	// Установка ширины стандартного скроллбара
	$(':root').css('--scroll_width', widthScroll())


	// Маска ввода
	$('input[type=tel]').inputmask('+ 7 ( 9 9 9 ) 9 9 9 - 9 9 - 9 9')

	// Кастомный select
	$('select').niceSelect()

	// Фокус при клике на название поля
	$('body').on('click', '.form .label', function() {
    	$(this).closest('.field').find('.input, textarea').focus()
	})

	$('body').on('keydown', '.form .input, .form textarea', function() {
    	let _self = $(this)

    	setTimeout(function(){
    		if( _self.val() != '' ) {
    			_self.addClass('active')
    		} else {
    			_self.removeClass('active')
    		}
    	}, 10)
	})


	// Залипание блока при скроле
	$('.sticky').stick_in_parent({
		offset_top: 10
	})


	// Табы
	var loationHash = window.location.hash

	$('.tabs_container').each(function(){
	    $(this).find('> .tab_content:first').addClass('active')
	})

	$('body').on('click', '.tabs a', function(e) {
		e.preventDefault()

	    if( !$(this).hasClass('active') ) {
	    	let parent = $(this).closest('.tabs_container')
		    let activeTab = $(this).attr('href')

		    parent.find('> .tabs a').removeClass('active')
		    parent.find('> .tab_content').removeClass('active')

		    $(this).addClass('active')
		    $(activeTab).addClass('active')
	    }
	})

	if( loationHash ) {
		let activeTab = $('.tabs a[href='+ loationHash +']')
		let parent = activeTab.closest('.tabs_container')

		parent.find('> .tabs a').removeClass('active')
		parent.find('> .tab_content').removeClass('active')

		activeTab.addClass('active')
		$( activeTab.attr('href') ).addClass('active')

		$('html, body').stop().animate({
		   	scrollTop: $( activeTab.attr('href') ).offset().top
		}, 1000)
	}


	// Мини всплывающие окна
	firstClick = false

	$('.mini_modal_link').click(function(e){
	    e.preventDefault()

	    let modalId = $(this).data('modal-id')

	    if( $(this).hasClass('active') ){
	        $(this).removeClass('active')
	      	$('.mini_modal').fadeOut(200)

	        firstClick = false

			if( $(window).width() < 1024 ){
				$('body').css('cursor', 'default')
			}
	    }else{
	        $('.mini_modal_link').removeClass('active')
	        $(this).addClass('active')

	        $('.mini_modal').removeClass('active')
	        $(modalId).fadeIn(300)

	        firstClick = true

			if( $(window).width() < 1024 ){
				$('body').css('cursor', 'pointer')
			}
	    }
	})

	// Закрываем всплывашку при клике за её пределами
	$(document).click(function(e){
	    if ( !firstClick && $(e.target).closest('.mini_modal').length == 0 ){
	        $('.mini_modal_link').removeClass('active')
	        $('.mini_modal').fadeOut(200)

			if( $(window).width() < 1024 ){
				$('body').css('cursor', 'default')
			}
	    }

	    firstClick = false
	})


	// Fancybox
	$.fancybox.defaults.hash = false
	$.fancybox.defaults.touch = false
	$.fancybox.defaults.backFocus = false
	$.fancybox.defaults.autoFocus = false
	$.fancybox.defaults.animationEffect = 'zoom'
	$.fancybox.defaults.transitionEffect = 'slide'
	$.fancybox.defaults.speed = 500
	$.fancybox.defaults.gutter = 40
	$.fancybox.defaults.i18n = {
		'en' : {
			CLOSE: "Закрыть",
			NEXT: "Следующий",
			PREV: "Предыдущий",
			ERROR: "Запрошенный контент не может быть загружен.<br /> Пожалуйста, повторите попытку позже.",
			PLAY_START: "Запустить слайдшоу",
			PLAY_STOP: "Остановить слайдшоу",
			FULL_SCREEN: "На весь экран",
			THUMBS: "Миниатюры",
			DOWNLOAD: "Скачать",
			SHARE: "Поделиться",
			ZOOM: "Увеличить"
		}
	}

	// Всплывающие окна
	$('body').on('click', '.modal_link', function(e) {
		e.preventDefault()

		$.fancybox.close(true)

		$.fancybox.open({
			src  : $(this).attr('href'),
			type : 'inline'
		})

		// Кастомный скролл
		scrollInit()
	})

	// Закрытие всплывающего окна по произвольной кнопке
	$('body').on('click', '.modal .close', function(e) {
		e.preventDefault()

		$.fancybox.close(true)
	})

	// Увеличение картинки
	$('.fancy_img').fancybox()


	// Спойлер в тексте
	$('body').on('click', '.text_block .spoler_link', function(e) {
	    e.preventDefault()

	    let parent = $(this).closest('.text_block')

	    if( $(this).hasClass('active') ) {
	    	$(this).removeClass('active')

	    	parent.find('.hide').slideUp(500)
	    } else {
	    	$(this).addClass('active')

	    	parent.find('.hide').slideDown(500)
	    }
	})


	// Аккордион
	$('body').on('click', '.accordion .item .title', function(e) {
		e.preventDefault()

		let parent = $(this).closest('.item')
		let accordion = $(this).closest('.accordion')

		if( parent.hasClass('active') ) {
			parent.removeClass('active')
			parent.find('.data').slideUp(300)
		} else {
			accordion.find('.item').removeClass('active')
			accordion.find('.data').slideUp(300)

			parent.addClass('active')
			parent.find('.data').slideDown(300)
		}
	})


	// Изменение количества товара
	$('body').on('click', '.amount .minus', function(e) {
	    e.preventDefault()

	    let parent = $(this).closest('.amount')
	    let input = parent.find('input')
	    let inputVal = parseFloat( input.val() )
	    let minimum = parseFloat( input.data('minimum') )
	    let step = parseFloat( input.data('step') )

	    if( inputVal > minimum ){
	    	input.val( inputVal-step )
	    }
	})

	$('body').on('click', '.amount .plus', function(e) {
	    e.preventDefault()

	    let parent = $(this).closest('.amount')
	    let input = parent.find('input')
	    let inputVal = parseFloat( input.val() )
	    let maximum = parseFloat( input.data('maximum') )
	    let step = parseFloat( input.data('step') )

	    if( inputVal < maximum ){
	    	input.val( inputVal+step )
	    }
	})


	// Плавная прокрутка к якорю
	// Работает и при прокрутке к табу
	$('body').on('click', '.scroll_link', function(e) {
		e.preventDefault()

		let href = $(this).attr('href')
		let addOffset = 0

		if( $(this).data('offset') ) {
			addOffset = $(this).data('offset')
		}

		if( $('.tabs a[href='+ href +']') ) {
			let activeTab = $('.tabs a[href='+ href +']')
			let parent = activeTab.closest('.tabs_container')

			parent.find('> .tabs a').removeClass('active')
			parent.find('> .tab_content').hide()

			activeTab.addClass('active')
			$( activeTab.attr('href') ).fadeIn()
		}

		$('html, body').stop().animate({
		   	scrollTop: $(href).offset().top - addOffset
		}, 1000)
	})


	// Моб. меню
	$('body').on('click', '.mob_header .mob_menu_link', function(e) {
    	e.preventDefault()

		if( $(this).hasClass('active') ) {
			$('body').removeClass('lock')
        	$('header').removeClass('show')
			$('.overlay').fadeOut(300)
		} else {
			$('body').addClass('lock')
			$('header').addClass('show')
			$('.overlay').fadeIn(300)
		}
    })

    $('header .close, .overlay').click(function(e) {
    	e.preventDefault()

		$('body').removeClass('lock')
		$('header').removeClass('show')
		$('.overlay').fadeOut(300)
    })
})



// Вспомогательные функции
function setHeight(className){
    let maxheight = 0
    let object = $(className)

    object.each(function() {
    	let elHeight = $(this).innerHeight()

        if( elHeight > maxheight ) {
        	maxheight = elHeight
        }
    })

    object.innerHeight( maxheight )
}


function widthScroll() {
    let div = document.createElement('div')
    div.style.overflowY = 'scroll'
    div.style.width = '50px'
    div.style.height = '50px'
    div.style.visibility = 'hidden'
    document.body.appendChild(div)

    let scrollWidth = div.offsetWidth - div.clientWidth
    document.body.removeChild(div)

    return scrollWidth
}


var supportsCssVars = function() {
    var s = document.createElement('style'),
        support

    s.innerHTML = ":root { --tmp-var: bold; }"
    document.head.appendChild(s)
    support = !!(window.CSS && window.CSS.supports && window.CSS.supports('font-weight', 'var(--tmp-var)'))
    s.parentNode.removeChild(s)

    return support
}