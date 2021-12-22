$(function(){
	// Основной слайдер на главной
	$('.main_slider .slider').owlCarousel({
		items: 1,
		margin: 10,
		loop: true,
		smartSpeed: 500,
		autoplay: true,
		autoplayTimeout: 5000,
	    responsive : {
	    	0 : {
	    		nav: false,
	    		dots: true
		    },
		    768 : {
	    		nav: true,
	    		dots: false
		    }
		}
	})


	// Карусель товаров
	$('.products:not(.stocks) .slider').owlCarousel({
		loop: false,
		nav: true,
		dots: false,
		smartSpeed: 500,
		mouseDrag: false,
		margin: 5,
		responsive: {
	        0:{
	            items: 1
	        },
	        414:{
	            items: 2
	        },
	        768:{
	            items: 3
	        },
	        1024:{
	            items: 4
	        },
	        1280:{
	            items: 5
	        }
		},
		onInitialized: function(event){
			setHeight( $(event.target).find('.product .name') )
			setHeight( $(event.target).find('.product .features') )
		},
		onResized: function(event){
			$(event.target).find('.product .name').height('auto')
			$(event.target).find('.product .features').height('auto')

			setHeight( $(event.target).find('.product .name') )
			setHeight( $(event.target).find('.product .features') )
		}
	})


	// Карусель акционных товаров
	$('.products.stocks .slider').owlCarousel({
		loop: true,
		nav: true,
		dots: false,
		smartSpeed: 500,
		mouseDrag: false,
		margin: 5,
		items: 1,
		autoplay: true,
		autoplayTimeout: 3000,
		onInitialized: function(event){
			if( $(event.target).is(':visible') ) {
				setHeight( $(event.target).find('.product .name') )
				setHeight( $(event.target).find('.product .features') )
			}
		},
		onResized: function(event){
			$(event.target).find('.product .name').height('auto')
			$(event.target).find('.product .features').height('auto')

			if( $(event.target).is(':visible') ) {
				setHeight( $(event.target).find('.product .name') )
				setHeight( $(event.target).find('.product .features') )
			}
		},
		onChanged: function(event){
			$(event.target).find('.product .name').height('auto')
			$(event.target).find('.product .features').height('auto')

			if( $(event.target).is(':visible') ) {
				setHeight( $(event.target).find('.product .name') )
				setHeight( $(event.target).find('.product .features') )
			}
		}
	})


	// Карусель брендов
	$('.brands_grid .slider').owlCarousel({
		loop: false,
		nav: true,
		dots: false,
		smartSpeed: 500,
		margin: 10,
		responsive: {
	        0:{
	            items: 1
	        },
	        414:{
	            items: 2
	        },
	        768:{
	            items: 3
	        },
	        1024:{
	            items: 4
	        },
	        1280:{
	            items: 5
	        },
	        1345:{
	            items: 6
	        }
		},
		onInitialized: function(event){
			setHeight( $(event.target).find('.item') )
		},
		onResized: function(event){
			$(event.target).find('.item').height('auto')

			setHeight( $(event.target).find('.item') )
		}
	})


	// Карусель категория решений
	$('.solutions_cats .slider').owlCarousel({
		loop: false,
		nav: true,
		dots: false,
		smartSpeed: 500,
		margin: 10,
		responsive: {
	        0:{
	            items: 1
	        },
	        768:{
	            items: 2
	        },
	        1024:{
	            items: 3
	        }
		}
	})


	// Карусель сертификатов
	$('.certs .slider').owlCarousel({
		loop: false,
		nav: true,
		dots: false,
		smartSpeed: 500,
		responsive: {
	        0:{
	            items: 2,
				margin: 10
	        },
	        414:{
	            items: 3,
				margin: 10
	        },
	        768:{
	            items: 4,
				margin: 15
	        },
	        1024:{
	            items: 5,
				margin: 15
	        },
	        1280:{
	            items: 6,
				margin: 20
	        },
	        1345:{
	            items: 6,
				margin: 25
	        }
		}
	})


	// Карусель примеров реализации
	$('.solution_gallery .slider').owlCarousel({
		loop: false,
		nav: true,
		dots: false,
		smartSpeed: 500,
		margin: 10,
		responsive: {
	        0:{
	            items: 1
	        },
	        414:{
	            items: 2
	        },
	        1024:{
	            items: 3
	        }
		}
	})


	// Карусель комплектов
	$('.complect_info .slider').owlCarousel({
		loop: false,
		nav: true,
		dots: false,
		smartSpeed: 750,
		margin: 10,
		items: 1,
		mouseDrag: false,
		onInitialized: function(event){
			if( $(event.target).is(':visible') ) {
				setHeight( $(event.target).find('.product .name') )
			}
		},
		onResized: function(event){
			$(event.target).find('.product .name').height('auto')

			if( $(event.target).is(':visible') ) {
				setHeight( $(event.target).find('.product .name') )
			}
		},
		onChanged: function(event){
			$(event.target).find('.product .name').height('auto')

			if( $(event.target).is(':visible') ) {
				setTimeout(function(){
					setHeight( $(event.target).find('.product .name') )
				}, 100)
			}
		}
	})


	$('body').on('click', '.complect_info .product.variative', function(e) {
		e.preventDefault()

		let check = $(this).find('.check')

		check.toggleClass('checked')
	})


	// Отправка формы
	$('body').on('submit', '.register_modal form', function(e) {
		e.preventDefault()

		$.fancybox.close()

		$.fancybox.open({
			src  : '#register_success_modal',
			type : 'inline'
		})
	})


	$('body').on('click', '.product .compare_link', function(e) {
		e.preventDefault()

		if( !$(this).hasClass('active') ){
			$(this).addClass('active')

			$.fancybox.close()

			$.fancybox.open({
				src  : '#compare_success_modal',
				type : 'inline'
			})
		} else {
			$(this).removeClass('active')
		}
	})


	// Боковая колонка - Категории
	$('body').on('click', 'aside .cats .items a.sub_link', function(e) {
    	e.preventDefault()

    	if( $(this).hasClass('active') ) {
			$(this).removeClass('active').next().slideUp(300)
		} else {
			$(this).addClass('active').next().slideDown(300)
		}
	})

	$('body').on('click', 'aside .cats .more a', function(e) {
	    e.preventDefault()

	    let parent = $(this).closest('.cats')

	    if( $(this).hasClass('active') ) {
	    	$(this).removeClass('active')

	    	parent.find('.hide').slideUp(500)
	    } else {
	    	$(this).addClass('active')

	    	parent.find('.hide').slideDown(500)
	    }
	})


	// Боковая колонка - Фильтр
	$('body').on('click', 'aside .mob_filter_link', function(e) {
    	e.preventDefault()

    	if( $(this).hasClass('active') ) {
			$(this).removeClass('active').next().slideUp(300)
		} else {
			$(this).addClass('active').next().slideDown(300)
		}
	})


    $('body').on('click', 'aside .filter .item .name', function(e) {
    	e.preventDefault()

    	if( $(this).hasClass('active') ) {
			$(this).removeClass('active').next().slideUp(300)
		} else {
			$(this).addClass('active').next().slideDown(300)
		}
	})


	$('body').on('click', 'aside .filter .more a', function(e) {
	    e.preventDefault()

	    let parent = $(this).closest('.data')

	    if( $(this).hasClass('active') ) {
	    	$(this).removeClass('active')

	    	parent.find('.hide').slideUp(500)
	    } else {
	    	$(this).addClass('active')

	    	parent.find('.hide').slideDown(500)
	    }
	})


	$priceRange = $('.filter #price_range').ionRangeSlider({
        type     : 'double',
        min      : 0,
        max      : 250000,
        from     : 15000,
        to       : 189000,
        step     : 100,
        onChange : function (data) {
            $('.filter .price_range input.ot').val( data.from.toLocaleString() )
            $('.filter .price_range input.do').val( data.to.toLocaleString() )
        },
        onFinish : function (data) {
        	calcResult($('.filter .price_range'), 0)
        }
    }).data("ionRangeSlider")

    $('.filter .price_range .input').keyup(function() {
        $priceRange.update({
            from : parseInt( $('.filter .price_range input.ot').val().replace(/\s/g, '') ),
            to : parseInt( $('.filter .price_range input.do').val().replace(/\s/g, '') )
        })

        calcResult($('.filter .price_range'), 0)
    })


    $temperatureRange = $('.filter #temperature_range').ionRangeSlider({
        type     : 'double',
        min      : -25,
        max      : 25,
        from     : -12,
        to       : 23,
        step     : 1,
        onChange : function (data) {
        	if(data.from > 0) {
            	$('.filter .temperature_range input.ot').val( '+'+data.from )
            } else {
            	$('.filter .temperature_range input.ot').val( data.from )
            }

            if(data.to > 0) {
            	$('.filter .temperature_range input.do').val( '+'+data.to )
            } else {
            	$('.filter .temperature_range input.do').val( data.to )
            }
        },
        onFinish : function (data) {
        	calcResult($('.filter .temperature_range'), 0)
        }
    }).data("ionRangeSlider")

    $('.filter .temperature_range .input').keyup(function() {
        $temperatureRange.update({
            from : parseInt( $('.filter .temperature_range input.ot').val().replace(/\s/g, '') ),
            to : parseInt( $('.filter .temperature_range input.do').val().replace(/\s/g, '') )
        })

        calcResult($('.filter .temperature_range'), 0)
    })


    $('body').on('click', '.filter label', function(e) {
    	calcResult($(this), -12)
	})


	// Личный кабинет - заказы
    $('body').on('click', '.lk_orders .order .head', function(e) {
    	e.preventDefault()

    	let parent = $(this).closest('.order')

    	if( parent.hasClass('active') ) {
			parent.removeClass('active')
			parent.find('.data').slideUp(300)
		} else {
			parent.addClass('active')
			parent.find('.data').slideDown(300)
		}
	})


    // Личный кабинет - редактрование данных
    $('body').on('click', '.lk_personal .form .edit_pass_link', function(e) {
    	e.preventDefault()

    	let parent = $(this).closest('.edit_pass')

    	$(this).hide()
    	parent.find('.fields').slideDown(300)
	})


    $('body').on('keydown', '.form #yr_adres', function() {
    	let coincides = $('.form .coincides input').prop('checked')

    	if( coincides ) {
    		let _self = $(this)
    		let parent = _self.closest('.form')
    		let factAdres = parent.find('#fact_adres')

    		setTimeout(function(){
    			let value = _self.val()

    			factAdres.val(value)

    			if( value != '' ){
    				factAdres.addClass('active')
    			} else {
    				factAdres.removeClass('active')
    			}
    		}, 10)
    	}
	})

	$('body').on('click', '.form .coincides label', function() {
    	let parent = $(this).closest('.form')
    	let yrAdres = parent.find('#yr_adres').val()

		if( $(this).hasClass('active') ) {
			$(this).removeClass('active')
		} else {
			$(this).addClass('active')
			parent.find('#fact_adres').val(yrAdres)

			if( yrAdres != '' ){
				parent.find('#fact_adres').addClass('active')
			}
		}
	})


	// Оформление заказа
    $('body').on('click', '.checkout .delivery_method label', function() {
    	if( !$(this).hasClass('active') ) {
    		$('.checkout .delivery_method label').removeClass('active')
    		$(this).addClass('active')

			$('.checkout .delivery_method label .input').prop('disabled', true)
	    	$('.checkout .delivery_method label select').prop('disabled', true)

	    	$(this).find('.input').prop('disabled', false)
	    	$(this).find('select').prop('disabled', false).niceSelect('update')
		}
	})


	$('.checkout .form .type label').click(function() {
	    let content = $(this).data('content')

	    $('.checkout .form .type_content').hide()
	    $('.checkout .form .type_content' + content).fadeIn(300)
	})



	// Карточка решения
	$solution_info = $('.solution_info .images .big .slider').owlCarousel({
		items: 1,
		margin: 10,
		loop: false,
		dots: false,
		nav: true,
		smartSpeed: 500,
	    onTranslate: function(event){
	    	$('.solution_info .images .thumbs a').removeClass('active')
	    	$('.solution_info .images .thumbs a:eq('+ event.item.index +')').addClass('active')
	    }
	})

	$('.solution_info .images .thumbs a').click(function(e) {
		e.preventDefault()

		$('.solution_info .images .thumbs a').removeClass('active')

	    $solution_info.trigger('to.owl.carousel', $(this).data('slide-index'))

	    $(this).addClass('active')
	})


	// Карточка товара
	$product_info = $('.product_info .images .big .slider').owlCarousel({
		items: 1,
		margin: 10,
		loop: false,
		dots: false,
		nav: true,
		smartSpeed: 500,
	    onTranslate: function(event){
	    	$('.product_info .images .thumbs a').removeClass('active')
	    	$('.product_info .images .thumbs a:eq('+ event.item.index +')').addClass('active')
	    }
	})

	$('.product_info .images .thumbs a').click(function(e) {
		e.preventDefault()

		$('.product_info .images .thumbs a').removeClass('active')

	    $product_info.trigger('to.owl.carousel', $(this).data('slide-index'))

	    $(this).addClass('active')
	})


	// Отзывы
	$('body').on('click', '.review .reply_link', function(e) {
	    e.preventDefault()

	    let parent = $(this).closest('.review')

	    if( $(this).hasClass('active') ) {
	    	$(this).removeClass('active')

	    	parent.find('.add_answer').slideUp(500)
	    } else {
	    	$(this).addClass('active')

	    	parent.find('.add_answer').slideDown(500)
	    }
	})


	$('body').on('click', '.product_reviews .add_review_link', function(e) {
	    e.preventDefault()

	    let parent = $(this).closest('.product_reviews')

	    $(this).hide()
	    parent.find('.add_review').slideDown(500)
	})
})



$(window).load(function(){
	// Кастомный скролл
	scrollInit()


	// Выравнивание в товарах
	productHeight(parseInt($('.products .flex').css('--products_count')))
})



$(window).resize(function(){
	// Выравнивание в товарах
	productHeight(parseInt($('.products .flex').css('--products_count')))
})


// Кастомный скролл
function scrollInit() {
	$('.custom_scroll').each(function(){
		$(this).slimScroll({
	        height: $(this).innerHeight(),
	        position: 'right',
		    railVisible: true,
		    alwaysVisible: true,
		    color: '#006ec2',
	    	size: '4px',
	    	distance: '0',
	    	railColor: '#dce0e5',
	    	railOpacity: 1
	    })
	})
}


// Выравнивание в товарах
function productHeight(step){
	let start = 0
	let finish = step

	$('.products .flex').each(function(){
		let products = $(this).find('.product')

		products.find('.name').height('auto')
		products.find('.features').height('auto')

		for( let i = 0; i < products.length; i++ ){
			let obj = products.slice(start, finish).find('.name')
			let obj2 = products.slice(start, finish).find('.features')

			setHeight( obj )
			setHeight( obj2 )

			start = start+step
			finish = finish+step
		}
	})
}


// Фильтр
function calcResult(el, offsetTop){
	$('.filter .result').hide()

	let positionTop = el.offset().top - $('aside .filter').offset().top

	$('.filter .result').css('margin-top', 0)
	$('.filter .result').css('top', positionTop)

	if(offsetTop){
		$('.filter .result').css('margin-top', offsetTop)
	}

	$('.filter .result').fadeIn(300)
}