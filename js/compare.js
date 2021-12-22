$(window).load(function(){
	compareInit()

	// Ховер
	$('.compare_info .features > *, .compare_info .compare_features > *').mouseover(function(){
		let _self = $(this).closest('.item')
		let elIndex = $(this).index()

		_self.find('.features > *').removeClass('hover')
		_self.find('.compare_features > *').removeClass('hover')

		_self.find('.features').find('> *:eq('+ elIndex +')').addClass('hover')
		_self.find('.compare_features').find('> *:eq('+ elIndex +')').addClass('hover')
	})

	$('.compare_info .features > *, .compare_info .compare_features > *').mouseleave(function(){
		let _self = $(this).closest('.item')

		_self.find('.features > *').removeClass('hover')
		_self.find('.compare_features > *').removeClass('hover')
	})
})


$(window).resize(function(){
	compareInit()
})


function compareInit(){
	// Карусель товаров в сравнении
	$('.compare_info .data .slider').owlCarousel({
		loop: false,
		nav: true,
		dots: false,
		smartSpeed: 500,
		mouseDrag: false,
		margin: 5,
		responsive: {
	        0:{
	            items: 2
	        },
	        1024:{
	            items: 3
	        },
	        1280:{
	            items: 4
	        }
		},
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
					setFeaturesHeight()
				}, 100)
			}
		}
	})

	// Выравнивание левых характеристик
	let featuresTop = $('.compare_info .features').position().top
	$('.compare_info .compare_features').css('top', featuresTop).addClass('active')

	setFeaturesHeight()
}


function setFeaturesHeight(){
	$('.compare_info .features > *').height('auto')
	$('.compare_info .compare_features > *').height('auto')

	let items = $('.compare_info .accordion .item')

	items.each(function(){
		let sizes = new Object()
		let _self = $(this)

		_self.find('.features > *').each(function(){
			if(sizes[$(this).index()]){
				if($(this).outerHeight() > sizes[$(this).index()]){
					sizes[$(this).index()] = $(this).outerHeight()
				}
			}else{
				sizes[$(this).index()] = $(this).outerHeight()
			}
			console.log($(this).innerHeight())
		})

		_self.find('.compare_features > *').each(function(){
			if(sizes[$(this).index()]){
				if($(this).outerHeight() > sizes[$(this).index()]){
					sizes[$(this).index()] = $(this).outerHeight()
				}
			}else{
				sizes[$(this).index()] = $(this).outerHeight()
			}
			console.log($(this).innerHeight())
		})

		$.each(sizes, function(key, data){
			_self.find('.features').find('> *:eq('+ key +')').innerHeight(data)
			_self.find('.compare_features').find('> *:eq('+ key +')').innerHeight(data)
		})
	})
}