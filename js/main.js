realineMain = (function($){
	var app = {
		init: function(){
			app.fixedContentSubHedaer();
			app.clickEvents();
			app.popup();
			app.heightScrollBlock();

			$(window).on('resize', function(){
				app.heightScrollBlock();
			});
		},
		popup: function(){ /* create and show popup */
			$('.popup_show').on('click', function(){
				var popupBody = $('.hidden_templates .popup_container').clone();
				var popupOverlay = $('.hidden_templates .popup_overlay').clone();

				popupOverlay.addClass('shown').appendTo('body').hide().fadeIn(300);

				popupBody.addClass('shown').appendTo('body').hide().fadeIn(300, function(){

					/*after open*/

					$('.default_popup .ico_close, .popup_overlay').on('click', function(){
						$('.popup_container.shown, .popup_overlay.shown').fadeOut(300, function(){

							/*after close*/

							$(this).remove();
						});
					});
				})

			})
		},
		fixedContentSubHedaer: function() { /*make fixed sub header above main content when scrolling*/
			$(window).scroll(function() {
				var windowScroll = $(window).scrollTop();
				var headerFixedHeight = $('.header_container').outerHeight();
			  	if(windowScroll > 0) {
			  		$('.content_header').addClass('fixed_subheader');
			  		$('.content_header').css({'padding-top':headerFixedHeight});
			  	} else {
			  		$('.content_header').removeClass('fixed_subheader');
			  		$('.content_header').css({'padding-top':0});
			  	}
			});
		},
		clickEvents: function(){ /* all click events */
			$('body').on('click', function(e){

				/*dashboard button*/

				if($(e.target).is('.btn_dasboard')) {
					$(this).parent().find('.dasboard_container').toggleClass('active');
				} else if($(e.target).is('.dasboard_container, .dasboard_container *')) {
					return false;
				} else {
					$('.dasboard_container').removeClass('active');
				}

				/*extension bar*/

				if($(e.target).is('.extension_link a')) {

					if(!$(e.target).parent().is('.active')){
						$('body').addClass('extension_bar');
					} else {
						$('body').removeClass('extension_bar');
					}

					if($(e.target).parent().is('.active')){
						$('.modules_list li, .extensions_list li').removeClass('active');
						$(e.target).parent().removeClass('active');
					} else {
						$('.modules_list li, .extensions_list li').removeClass('active');
						$(e.target).parent().addClass('active');
					}
				}

				/*chat block*/

				if($(e.target).is('.chat_close')){
					$(e.target).parents('.chat_container').hide();
				}

				/*notifications*/

				if($(e.target).is('.btn_dropdown')){
					$(e.target).parent().toggleClass('active');
				} else {
					$('.submenu_nav li').removeClass('active');
				}

				/*accordion*/

				if($(e.target).is('.accordion_toggle')){
					
					$(e.target).toggleClass('hidden');
					$(e.target).parents('.accordion_block').toggleClass('hidden');
					if($(e.target).parents('.accordion_block').is('.hidden')){
						$(e.target).parents('.accordion_block').find('.accordion_item').slideUp();
					} else {
						$(e.target).parents('.accordion_block').find('.accordion_item').slideDown();
					}
				}

				if($(e.target).is('.block_notification a')){
					$(e.target).parent().toggleClass('active');
				} else if($(e.target).is('.notifications_container, .notifications_container *')) {
					return false;
				} else {
					$('.block_notification').removeClass('active');
				}

				/*sidebar toggle*/

				if($(e.target).is('.sidebar_menu_toggle')) {
					$('body').toggleClass('aside_menu');
				}

				/*add file*/

				if($(e.target).is('.add_files')) {
					$(e.target).siblings('input[type="file"]').click();
				}

				/*radio buttons*/

				if($(e.target).is('.radio_container label')) {
					$(e.target).parent().find('label').removeClass('active');
					$(e.target).addClass('active');
				}

			});
		},
		heightScrollBlock: function(){
			var header_block = $('header.site_header').outerHeight();
			var footer_block = $('footer.site_footer').outerHeight();
			var block_height = $(window).height() - (header_block + footer_block);
			$('.holder_sidebar_info').css({"height" : block_height});
			if(!$('.mCustomScrollbar').data('mCS')){
				$('.mCustomScrollbar').mCustomScrollbar();
			}
		}
	}
	return app;
})(jQuery);

jQuery(document).ready(function($){
	realineMain.init();
});

