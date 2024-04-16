if(jQuery('#pp_page_title_img_blur').val()!='') {
	(function() {
	  jQuery(window).scroll(function() {
	    var oVal;
	    oVal = jQuery(window).scrollTop() / 300;
	    if(oVal>1)
	    {
		    oVal = 1;
	    }
	    
	    if(oVal==1)
	    {
		    jQuery('body.single.single-post .post_share_bubble a.post_share, body.single.single-projects .post_share_bubble a.post_share, body.single.single-attachment .post_share_bubble a.post_share').css('display', 'block');
	    }
	    
	    if(oVal==0)
	    {
		    jQuery('body.single.single-post .post_share_bubble a.post_share, body.single.single-projects .post_share_bubble a.post_share, body.single.single-attachment .post_share_bubble a.post_share').css('display', 'none');
	    }
	    
	    return jQuery("#bg_blurred").css("opacity", oVal);
	  });
	
	}).call(this);
}

if(jQuery('#pp_page_title_img_blur').val()!='') {
	(function() {
	  jQuery(window).scroll(function() {
	    var oVal;
	    oVal = jQuery(window).scrollTop() / 300;
	    if(oVal>1)
	    {
		    oVal = 1;
	    }
	    oVal = parseFloat(1-oVal);
	    
	    return jQuery("#page_caption.hasbg .page_title_wrapper .page_title_inner").css("opacity", oVal);
	  });
	
	}).call(this);
}

jQuery(document).ready(function(){ 
	"use strict";

	jQuery(document).setNav();
	
	jQuery(window).resize(function(){
		jQuery(document).setNav();
	});

	jQuery('.fancy_video, .lightbox_vimeo, .lightbox_youtube').magnificPopup({
	  	src: jQuery(this).attr('href'),
	  	type: 'inline',
	  	removalDelay: 300,
	  	mainClass: 'mfp-fade'
	});
	
	jQuery('a.fancy-gallery, .pp_gallery a, .woocommerce-product-gallery__image a').magnificPopup({
	  	type: 'image',
	  	removalDelay: 300,
	  	mainClass: 'mfp-fade',
	  	gallery:{
	    	enabled:true
		}
	});
	
	jQuery('.img_frame').magnificPopup({
	  	type: 'image',
	  	removalDelay: 300,
	  	mainClass: 'mfp-fade'
	});
    
    jQuery('#menu_expand_wrapper a').on( 'click', function(){
    	jQuery('#menu_wrapper').fadeIn();
	    jQuery('#custom_logo').animate({'left': '15px', 'opacity': 1}, 400);
	    jQuery('#menu_close').animate({'left': '-10px', 'opacity': 1}, 400);
	    jQuery(this).animate({'left': '-60px', 'opacity': 0}, 400);
	    jQuery('#menu_border_wrapper select').animate({'left': '0', 'opacity': 1}, 400).fadeIn();
    });
	
	jQuery('#menu_close').on( 'click', function(){
		jQuery('#custom_logo').animate({'left': '-200px', 'opacity': 0}, 400);
	    jQuery(this).stop().animate({'left': '-200px', 'opacity': 0}, 400);
	    jQuery('#menu_expand_wrapper a').animate({'left': '20px', 'opacity': 1}, 400);
	    jQuery('#menu_border_wrapper select').animate({'left': '-200px', 'opacity': 0}, 400).fadeOut();
	    jQuery('#menu_wrapper').fadeOut();
	});
	
	// Isotope
	// modified Isotope methods for gutters in masonry
	jQuery.Isotope.prototype._getMasonryGutterColumns = function() {
	    var gutter = this.options.masonry && this.options.masonry.gutterWidth || 0;
	    var containerWidth = this.element.width();
  
	this.masonry.columnWidth = this.options.masonry && this.options.masonry.columnWidth ||
              // or use the size of the first item
              this.$filteredAtoms.outerWidth(true) ||
              // if there's no items, use size of container
              containerWidth;

	this.masonry.columnWidth += gutter;

	this.masonry.cols = Math.floor( ( containerWidth + gutter ) / this.masonry.columnWidth );
	this.masonry.cols = Math.max( this.masonry.cols, 1 );
	};

	jQuery.Isotope.prototype._masonryReset = function() {
	    // layout-specific props
	    this.masonry = {};
	    // FIXME shouldn't have to call this again
	    this._getMasonryGutterColumns();
	    var i = this.masonry.cols;
	    this.masonry.colYs = [];
	    while (i--) {
	    	this.masonry.colYs.push( 0 );
	    }
	};

	jQuery.Isotope.prototype._masonryResizeChanged = function() {
	    var prevSegments = this.masonry.cols;
	    // update cols/rows
	    this._getMasonryGutterColumns();
	    // return if updated cols/rows is not equal to previous
	    return ( this.masonry.cols !== prevSegments );
	};
  
	// cache jQuery window
	var $window = jQuery(window);
	
	// filter items when filter link is clicked
	var dropdowns = jQuery(".portfolio_filter_dropdown");

	dropdowns.find(".portfolio_filter_dropdown_title").on( 'click', function(){
		dropdowns.find(".portfolio_filter_dropdown_select ul.portfolio_select").hide();
		jQuery(this).next().children().toggle();
	});
	
	dropdowns.find(".portfolio_filter_dropdown_select ul.portfolio_select li a").on( 'click', function(){
		var leSpan = jQuery(this).parents(".portfolio_filter_dropdown").find(".portfolio_filter_dropdown_title a span");
	  
		jQuery(this).parents(".portfolio_filter_dropdown").find('.portfolio_filter_dropdown_select a').each(function(){
	    jQuery(this).removeClass('selected');
	  });
	  
		leSpan.html(jQuery(this).html());
	  
		if(jQuery(this).hasClass('default'))
		{
	    	leSpan.removeClass('selected')
		}
		else
		{
			leSpan.addClass('selected');
			jQuery(this).addClass('selected');
		}
	  
		jQuery(this).parents("ul").hide();
	});
	
	// Close all dropdown onclick on another element
	jQuery(document).bind('click', function(e){
		if (! jQuery(e.target).parents().hasClass("portfolio_filter_dropdown")) jQuery(".portfolio_filter_dropdown .portfolio_filter_dropdown_select ul.portfolio_select").hide();
	});
	
	
	function reLayout() {
		var jQuerycontainer = jQuery('#photo_wall_wrapper, .photo_wall_wrapper');
		var windowWidth = parseInt(jQuerycontainer.width());
		var jQueryportfolioColumn = 4;
		var columnValue;
		var masonryOpts;
		
		if(windowWidth < 480)
		{
			jQueryportfolioColumn = 1;
		}
		else if(windowWidth >= 480 && windowWidth < 960)
		{
			jQueryportfolioColumn = 2;
		}
		else if(windowWidth >= 960)
		{
			jQueryportfolioColumn = 4;
		}
		
		$container.addClass('visible');

	    $container.isotope({
	      resizable: false,
	      itemSelector : '.wall_entry',
	    }).isotope();

	}
	
	var $container = jQuery('#photo_wall_wrapper, .photo_wall_wrapper');
	
	// start up isotope with default settings
	$container.imagesLoaded( function(){
	    reLayout();
	    $window.smartresize(reLayout);
	    
	    $container.children('.wall_entry').children('.gallery_type').each(function(){
		    jQuery(this).addClass('fade-in');
	    });
	    
	    $container.children('.wall_entry').mouseenter(function(){
		    //$container.children('.wall_entry').addClass('fade');
		    //jQuery(this).removeClass('fade');
		    jQuery(this).addClass('hover');
		});
		
		$container.children('.wall_entry').mouseleave(function(){
		    //$container.children('.wall_entry').removeClass('fade');
		    $container.children('.wall_entry').removeClass('hover');
		});
		
		jQuery(window).trigger('hwparallax.reconfigure');
	});
	
	jQuery(window).resize(function() {
		if(jQuery(this).width() < 768)
		{
			jQuery('#menu_expand_wrapper a').trigger('click');
		}
	});
	
	var isDisableRightClick = jQuery('#pp_enable_right_click').val();
	
	if(isDisableRightClick!='')
	{
		jQuery(this).bind("contextmenu", function(e) {
	    	e.preventDefault();
	    });
	}
	
	function rePortfolioLayout() {
	
		var jQuerycontainer = jQuery('#portfolio_filter_wrapper, .portfolio_filter_wrapper');
		var windowWidth = jQuerycontainer.width();
		
		if(jQuery('#pp_menu_layout').val() == 'leftmenu' && jQuery(window).width() > 768)
		{
			windowWidth = parseInt(windowWidth + 265);
		}
		
		var jQueryportfolioColumn = jQuery('#pp_portfolio_columns').attr('value');
		var columnValue;
		var masonryOpts;
		
		if(jQuery('#pp_menu_layout').val() == 'leftmenu')
		{
			var windowWidth = jQuerycontainer.width();
		}
		
		if(jQuery.type(jQueryportfolioColumn) === "undefined")
		{
			if(windowWidth < 481)
			{
				jQueryportfolioColumn = 1;
			}
			else if(windowWidth >= 480 && windowWidth < 960)
			{
				jQueryportfolioColumn = 2;
			}
			else if(windowWidth >= 960)
			{
				jQueryportfolioColumn = 4;
			}
		}
		else
		{
			if(windowWidth <= 768)
			{
				jQueryportfolioColumn = 2;
			}
		}
		
	    masonryOpts = {
		  columnWidth: columnValue
		};

	    jQuerycontainer.isotope({
	      resizable: false,
	      itemSelector : '.element',
	      masonry: masonryOpts
	    } ).isotope();

	}
	
	// cache jQuery window
	var $window = jQuery(window);
  
	// cache container
	var jQuerycontainer = jQuery('#portfolio_filter_wrapper, .portfolio_filter_wrapper');
	
	// start up isotope with default settings
	jQuerycontainer.imagesLoaded( function(){
	    rePortfolioLayout();
	    $window.smartresize( rePortfolioLayout );
	    
	    jQuerycontainer.children('.element').children('.gallery_type').each(function(){
		    jQuery(this).addClass('fadeIn');
	    });
	    
	    jQuerycontainer.children('.element').children('.portfolio_type').each(function(){
		    jQuery(this).addClass('fadeIn');
	    });
	    
	    jQuerycontainer.children('.element').mouseenter(function(){
	    	//jQuerycontainer.children('.element').addClass('fade');
		    //jQuery(this).removeClass('fade');
		    jQuery(this).addClass('hover');
	    });
	    
	    jQuerycontainer.children('.element').mouseleave(function(){
		    //jQuerycontainer.children('.element').removeClass('fade');
		    jQuerycontainer.children('.element').removeClass('hover');
	    });
	    
	    jQuery(this).addClass('visible');
	    jQuery(window).trigger('hwparallax.reconfigure');
	});
	
	// filter items when filter link is clicked
	if(jQuery('#tg_project_filterable_link').val()!=1)
	{
		jQuery('#project_services_filters li a').on( 'click', function(){
		  	var selector = jQuery(this).attr('data-filter');
		  	var selector_combine = jQuery('#project_sectors_filters').find('li').find('a.active').attr('data-filter');
	
		  	if(selector_combine!='*')
		  	{
		  		selector+= selector_combine;
		  	}
	
		  	jQuerycontainer.isotope({ filter: selector });
		  	jQuery('#project_services_filters li a').removeClass('active');
		  	jQuery(this).addClass('active');
		  	return false;
		});
		
		jQuery('#project_sectors_filters li a').on( 'click', function(){
		  	var selector = jQuery(this).attr('data-filter');
		  	var selector_combine = jQuery('#project_services_filters').find('li').find('a.active').attr('data-filter');
	
		  	if(selector_combine!='*')
		  	{
		  		selector+= selector_combine;
		  	}
	
		  	jQuerycontainer.isotope({ filter: selector });
		  	jQuery('#project_sectors_filters li a').removeClass('active');
		  	jQuery(this).addClass('active');
		  	return false;
		});
	}
	
	function reBlogLayout() {
		var windowWidth = jQuery(window).width();
		var jQueryblogcontainer = jQuery('#blog_grid_wrapper, .blog_grid_wrapper');
		var containerWidth = jQuery('#blog_grid_wrapper, .blog_grid_wrapper').width();
		
		var $blogGridColumn = 3;
		var columnValue = 0;
		var masonryOpts;
		if(containerWidth >= 960)
		{
			columnValue = containerWidth / $blogGridColumn;
		}
		else if(containerWidth < 960 && containerWidth >= 660)
		{
			columnValue = containerWidth / 2;
		}
		else
		{
			columnValue = containerWidth/1;
		}

		//alert($blogGridColumn);
	    masonryOpts = {
		  columnWidth: columnValue
		};

	    jQueryblogcontainer.isotope({
	      resizable: false, // disable resizing by default, we'll trigger it manually
	      itemSelector : '.status-publish',
	      masonry: masonryOpts
	    } ).isotope();
	}
	
	var jQueryblogcontainer = jQuery('#blog_grid_wrapper, .blog_grid_wrapper');
	
	jQueryblogcontainer.imagesLoaded( function(){
	    reBlogLayout();
	    $window.smartresize( reBlogLayout );
	    jQuery(window).trigger('hwparallax.reconfigure');
	});
    
    //Add to top button when scrolling
    jQuery(window).scroll(function() {
	 	var calScreenWidth = jQuery(window).width();
		
		if(jQuery(this).scrollTop() > 200) {
		    jQuery('#toTop').stop().css({opacity: 0.5, "visibility": "visible"}).animate({"visibility": "visible"}, {duration:1000,easing:"easeOutExpo"});
		} else if(jQuery(this).scrollTop() == 0) {
		    jQuery('#toTop').stop().css({opacity: 0, "visibility": "hidden"}).animate({"visibility": "hidden"}, {duration:1500,easing:"easeOutExpo"});
		}
	});
 
	jQuery('#toTop, .hr_totop').on( 'click', function() {
		jQuery('body,html').animate({scrollTop:0},800);
	});
	
	var isDisableDragging = jQuery('#pp_enable_dragging').val();
	
	if(isDisableDragging!='')
	{
		jQuery("img").mousedown(function(){
		    return false;
		});
	}
	
	if(jQuery('#pp_topbar').val()==0)
	{
		var topBarHeight = jQuery('.header_style_wrapper').height();
	}
	else
	{
		var topBarHeight = parseInt(jQuery('.header_style_wrapper').height()-jQuery('.header_style_wrapper .above_top_bar').height());
	}
	
	var logoHeight = jQuery('#custom_logo img').height();
	var logoTransHeight = jQuery('#custom_logo_transparent img').height();
	var logoMargin = parseInt(jQuery('#custom_logo').css('marginTop'));
	var logoTransMargin = parseInt(jQuery('#custom_logo_transparent').css('marginTop'));
	var menuPaddingTop = parseInt(jQuery('#menu_wrapper div .nav li > a').css('paddingTop'));
	var menuPaddingBottom = parseInt(jQuery('#menu_wrapper div .nav li > a').css('paddingBottom'));
	var SearchPaddingTop = parseInt(jQuery('.top_bar #searchform button').css('paddingTop'));
	var menuLayout = jQuery('#pp_menu_layout').val();
	
	if(menuLayout != 'leftmenu' || jQuery(window).width()<=768)
	{
		jQuery('#wrapper').css('paddingTop', parseInt(jQuery('.header_style_wrapper').height())+'px');
	}
	
	jQuery(window).resize(function(){
	    if(jQuery(this).width()>960)
	    {
	    	if(menuLayout != 'leftmenu')
	    	{
		    	//jQuery('.top_bar').css('height', 'auto');
		    	var resizedTopBarHeight = jQuery('.header_style_wrapper').height();
		    	
		    	jQuery('#wrapper').css('paddingTop', resizedTopBarHeight+'px');
		    	jQuery('.logo_wrapper').css('marginTop', '');
		    	jQuery('.top_bar #searchform button').css('paddingTop', '');
		    }
		    else
		    {
			    jQuery('#wrapper').css('paddingTop', 0);
		    }
	    }
	    else
	    {
	    	jQuery('#wrapper').css('paddingTop', parseInt(jQuery('.header_style_wrapper').height())+'px');
	    }
	});
	
	if(menuLayout != 'leftmenu' || jQuery(window).width()<=960)
	{
		if(jQuery(window).width()>960)
		{
			jQuery('#wrapper').css('paddingTop', parseInt(topBarHeight+jQuery('.header_style_wrapper .above_top_bar').height())+'px');
			jQuery('.top_bar').css('height', topBarHeight+'px');
		}
		else
		{
			jQuery('#wrapper').css('paddingTop', parseInt(jQuery('.header_style_wrapper').height())+'px');
		}

		jQuery(window).scroll(function(){
			if(jQuery('#pp_fixed_menu').val()==1)
			{
				if(jQuery(this).scrollTop() >= 200){
					jQuery('.header_style_wrapper .above_top_bar').hide();
					jQuery('.extend_top_contact_info').hide();
					
					if(jQuery(window).width()>=1024)
					{
						jQuery('.top_bar').addClass('scroll');
						jQuery('.top_bar').css('height', parseInt(topBarHeight/1.5)+'px');
						jQuery('.top_bar').css('height', parseInt(topBarHeight/1.5)+'px');
						
						jQuery('#custom_logo img').addClass('zoom');
						jQuery('#custom_logo img').css('width', 'auto');
						jQuery('#custom_logo img').css('maxHeight', parseInt(topBarHeight/3)+'px');
						jQuery('#custom_logo_transparent img').addClass('zoom');
						
						jQuery('#custom_logo').css('marginTop', parseInt(logoMargin/1.5)+'px');
						jQuery('#custom_logo_transparent').css('marginTop', parseInt(logoTransMargin/1.5)+'px');
						
						jQuery('#menu_wrapper div .nav > li > a').css('paddingTop', parseInt(menuPaddingTop/1.7)+'px');
						jQuery('#menu_wrapper div .nav > li > a').css('paddingBottom', parseInt(menuPaddingBottom/1.7)+'px');
						
						if(menuLayout == 'centermenu')
						{
							jQuery('.logo_container').addClass('hidden');
						}
					}
					
					if(jQuery('.top_bar').hasClass('hasbg'))
					{
					    jQuery('.top_bar').removeClass('hasbg');
					    jQuery('.top_bar').data('hasbg', 1);
					    
					    jQuery('#custom_logo').removeClass('hidden');
					    jQuery('#custom_logo_transparent').addClass('hidden');
					}
			    }
			    else if(jQuery(this).scrollTop() < 200)
			    {
			    	jQuery('.header_style_wrapper .above_top_bar').show();
			    	jQuery('.extend_top_contact_info').show();
				    
				    jQuery('.top_bar').removeClass('scroll');
				    jQuery('.top_bar').css('height', topBarHeight+'px');
				    
				    jQuery('#custom_logo img').removeClass('zoom');
				    jQuery('#custom_logo img').css('maxHeight', '');
					jQuery('#custom_logo_transparent img').removeClass('zoom');
				    
				    jQuery('#custom_logo').css('marginTop', parseInt(logoMargin)+'px');
					jQuery('#custom_logo_transparent').css('marginTop', parseInt(logoTransMargin)+'px');
					
					jQuery('#menu_wrapper div .nav > li > a').css('paddingTop', menuPaddingTop+'px');
					jQuery('#menu_wrapper div .nav > li > a').css('paddingBottom', menuPaddingBottom+'px');
					
					if(menuLayout == 'centermenu')
					{
						if(jQuery('.top_bar').data('hasbg')==1)
						{
							jQuery('#logo_transparent.logo_container').removeClass('hidden');
						}
						else
						{
							jQuery('#logo_normal.logo_container').removeClass('hidden');
						}
					}
					
					if(jQuery('.top_bar').data('hasbg')==1)
					{
					    jQuery('.top_bar').addClass('hasbg');
					    jQuery('#custom_logo').addClass('hidden');
					    jQuery('#custom_logo_transparent').removeClass('hidden');
					    
					}
			    }
		   }
		   else
		   {
			   if(jQuery(this).scrollTop() >= 200)
			   {
			   		jQuery('.header_style_wrapper').addClass('nofixed');
			   }
			   else
			   {
			   		jQuery('.header_style_wrapper').removeClass('nofixed');
			   }
		   }
		});
	} //If not left menu layout
	
	jQuery('.post_img img').imagesLoaded(function(){
		jQuery(this).parent('.post_img').addClass('fadeIn');
	});
	
	jQuery(document).mouseenter(function()
	{	
	    jQuery('body').addClass('hover');	
	});	
	
	jQuery(document).mouseleave(function()
	{	
	    jQuery('body').removeClass('hover');	
	});	
	
	jQuery('#slidecaption').center();
	jQuery(window).resize(function(){
	   jQuery('#slidecaption').center();
	});
	
	var siteBaseURL = jQuery('#pp_homepage_url').val();
	if(jQuery('#pp_ajax_search').val() != '')
    {
		jQuery('#s').on('input', function() {
			jQuery.ajax({
				url:siteBaseURL+"/wp-admin/admin-ajax.php",
				type:'POST',
				data:'action=pp_ajax_search&s='+jQuery('#s').val(),
				success:function(results) {
					jQuery("#autocomplete").html(results);
					
					if(results != '')
					{
						jQuery("#autocomplete").addClass('visible');
						jQuery("#autocomplete").show();
						jQuery("body.js_nav .mobile_menu_wrapper").css('overflow', 'visible');
					}
					else
					{
						jQuery("#autocomplete").hide();
						jQuery("body.js_nav .mobile_menu_wrapper").css('overflow', 'scroll');
					}
				}
			})
		});
		
		jQuery("#s").keypress(function(event) {
		    if (event.which == 13) {
		        event.preventDefault();
		        jQuery("form#searchform").submit();
		    }
		});
		
		jQuery('#s').focus(function(){
			if (jQuery('#autocomplete').html() != ''){
				jQuery("#autocomplete").addClass('visible');
				jQuery("#autocomplete").fadeIn();
			}
		});
		
		jQuery('#s').blur(function(){
	      jQuery("#autocomplete").fadeOut();
		});
	}
	
	jQuery('.animated').imagesLoaded(function() {
		var windowWidth = jQuery(window).width();
	
		if(windowWidth >= 960)
		{
			jQuery(this).waypoint(function(direction) {
				var animationClass = jQuery(this).data('animation');
			
				jQuery(this).addClass(animationClass, direction === 'down');
				
			} , { offset: '100%' });
		}
	});
	
	jQuery('#post_more_close').on( 'click', function(){
		jQuery('#post_more_wrapper').animate({ right: '-380px' }, 300);
		
		return false;
	});
    
    jQuery('.parallax').each(function(){
    	var parallaxHeight = jQuery(this).data('content-height');
    	parallaxHeight = parseInt((parallaxHeight/100)*jQuery(window).height());
    	
    	jQuery(this).css('height', parallaxHeight+'px');
    });
    
    var ua = window.navigator.userAgent;
    var msie = ua.indexOf("MSIE ");
    if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./) || is_touch_device())
    {
	    jQuery('.parallax').each(function(){
	    	var dataImgURL = jQuery(this).data('image');
	    	if(jQuery.type(dataImgURL) != "undefined")
	    	{
	    		jQuery(this).css('background-image', 'url('+dataImgURL+')');
	    		jQuery(this).css('background-size', 'cover');
	    		jQuery(this).css('background-position', 'center center');
	    	}
	    });
    }
    else
    {	
    	if (jQuery(window).width() >= 960) 
		{
	 		jQuery('.parallax').parallax();
	 	}
	 	else
	 	{
		 	jQuery('.parallax').each(function(){
			    var dataImgURL = jQuery(this).data('image');
			    if(jQuery.type(dataImgURL) != "undefined")
			    {
			    	jQuery(this).css('background-image', 'url('+dataImgURL+')');
			    	jQuery(this).css('background-size', 'cover');
			    	jQuery(this).css('background-position', 'center center');
			    }
			});
	 	}
		
		jQuery(window).resize(function(){
			if (jQuery(window).width() >= 960) 
			{
		    	jQuery('.parallax').each(function(){
			    	var parallaxHeight = jQuery(this).data('content-height');
			    	parallaxHeight = parseInt((parallaxHeight/100)*jQuery(window).height());
			    	
			    	jQuery(this).css('height', parallaxHeight+'px');
			    });
		
				jQuery(window).trigger('hwparallax.reconfigure');
			}
			else
			{
				jQuery('.parallax').each(function(){
			    	var dataImgURL = jQuery(this).data('image');
			    	if(jQuery.type(dataImgURL) != "undefined")
			    	{
			    		jQuery(this).css('background-image', 'url('+dataImgURL+')');
			    		jQuery(this).css('background-size', 'cover');
			    		jQuery(this).css('background-position', 'center center');
			    	}
			    });
			}
	    });
    }
    
    var stellarActivated = false;
    if (jQuery(window).width() >= 1024) 
    {
    	stellarActivated = true;
    	jQuery(window).stellar({ positionProperty: 'transform', parallaxBackgrounds: false, responsive: true, horizontalScrolling: false, hideDistantElements: true });
    }
    
    if (jQuery(window).width() <= 1024) {
        if (stellarActivated == true) {
            stellarActivated = false;
        }
    } else {
        if (stellarActivated == false) {
 
            jQuery(window).stellar({ positionProperty: 'transform', parallaxBackgrounds: false, responsive: true, horizontalScrolling: false, hideDistantElements: true });
            stellarActivated = true;
        }
    }
    
    jQuery(window).resize(function(){
    	if (jQuery(window).width() >= 1024) 
	    {
	    	stellarActivated = true;
	    	jQuery(window).stellar({ positionProperty: 'transform', parallaxBackgrounds: false, responsive: true, horizontalScrolling: false, hideDistantElements: true });
	    }
	    
	    if (jQuery(window).width() <= 1024) {
	        if (stellarActivated == true) {
	            stellarActivated = false;
	        }
	    } else {
	        if (stellarActivated == false) {
	 
	            jQuery(window).stellar({ positionProperty: 'transform', parallaxBackgrounds: false, responsive: true, horizontalScrolling: false, hideDistantElements: true });
	            stellarActivated = true;
	        }
	    }
    });
	
	jQuery('#mobile_nav_icon').on( 'click', function() {
		jQuery('body,html').animate({scrollTop:0},100);
		jQuery('body').toggleClass('js_nav');
	});
	
	jQuery('#close_mobile_menu, #overlay_background').on( 'click', function() {
		jQuery('body').removeClass('js_nav');
		
		setTimeout(function(){
			jQuery('.rev_slider_wrapper').css('left', '0px');
		}, 500);
	});
	
	jQuery('.mobile_menu_close a').on( 'click', function() {
		jQuery('body').removeClass('js_nav');
		
		setTimeout(function(){
			jQuery('.rev_slider_wrapper').css('left', '0px');
		}, 500);
	});
	
	jQuery('.close_alert').on( 'click', function() {
		var target = jQuery(this).data('target');
		jQuery('#'+target).fadeOut();
	});
	
	jQuery('.progress_bar').waypoint(function(direction) {
		jQuery(this).addClass('fadeIn');
		var progressContent = jQuery(this).children('.progress_bar_holder').children('.progress_bar_content');
        var progressWidth = progressContent.data('score');
     
        progressContent.css({'width': progressWidth+'%'});
	} , { offset: '100%' });			
	
	jQuery('.tooltip').tooltipster();
	jQuery('.demotip').tooltipster({
		position: 'left'
	});
	
	jQuery('.portfolio_prev_next_link').each(function(){
		jQuery(this).tooltipster({
			content: jQuery('<img src="'+jQuery(this).attr('data-img')+'" /><br/><div style="text-align:center;margin:7px 0 5px 0;"><strong>'+jQuery(this).attr('data-title')+'</strong></div>')
		});
	});
	
	jQuery('.post_prev_next_link').each(function(){
		jQuery(this).tooltipster({
			content: jQuery('<img src="'+jQuery(this).attr('data-img')+'" />')
		});
	});
	
	jQuery('.rev_slider_wrapper.fullscreen-container').each(function(){
		jQuery(this).append('<div class="icon-scroll"></div>');
	});
		
	jQuery('.post_share').on( 'click', function() {
		var targetShareID = jQuery(this).attr('data-share');
		var targetParentID = jQuery(this).attr('data-parent');
		
		jQuery(this).toggleClass('visible');
		jQuery('#'+targetShareID).toggleClass('slideUp');
		jQuery('#'+targetParentID).toggleClass('sharing');
		
		return false;
	});
	
	
	if(jQuery('.page_slider.menu_transparent').find('.rev_slider_wrapper').length > 0)
	{
		var sliderHeight = jQuery('.page_slider.menu_transparent').find('.rev_slider_wrapper').height();
		var topBarHeight = jQuery('.top_bar').height();
		
		if(jQuery('.above_top_bar').length > 0)
		{
			topBarHeight+= jQuery('.above_top_bar').height();
		}
		
		if(jQuery('.page_slider.menu_transparent').find('.rev_slider_wrapper.fullscreen-container').length > 0)
		{
			var topBarHeight = 55;
		}

		jQuery('.ppb_wrapper').css('marginTop', sliderHeight-topBarHeight+'px');
		jQuery('#page_content_wrapper').css('marginTop', sliderHeight-topBarHeight+'px');
	}
	
	jQuery(window).resize(function(){
	   if(jQuery('.page_slider.menu_transparent').find('.rev_slider_wrapper').length > 0)
		{
			var sliderHeight = jQuery('.page_slider.menu_transparent').find('.rev_slider_wrapper').height();
			var topBarHeight = jQuery('.top_bar').height();
			
			if(jQuery('.above_top_bar').length > 0)
			{
				topBarHeight+= jQuery('.above_top_bar').height();
			}
			
			if(jQuery('.page_slider.menu_transparent').find('.rev_slider_wrapper.fullscreen-container').length > 0)
			{
				var topBarHeight = 55;
			}
	
			jQuery('.ppb_wrapper').css('marginTop', sliderHeight-topBarHeight+'px');
			jQuery('#page_content_wrapper').css('marginTop', sliderHeight-topBarHeight+'px');
		}
	});
	
	jQuery('.skin_box').on( 'click', function(){
		jQuery('.skin_box').removeClass('selected');
		jQuery(this).addClass('selected');
    	jQuery('#skin').val(jQuery(this).attr('data-color'));
    });
    
    jQuery('#demo_apply').on( 'click', function(){
    	jQuery('#ajax_loading').addClass('visible');
    	jQuery('body').addClass('loading');
    	jQuery("form#form_option").submit();
    });
    
    jQuery('#option_wrapper').mouseenter(function()
	{	
	    jQuery('body').addClass('overflow_hidden');	
	});	
	
	jQuery('#option_wrapper').mouseleave(function()
	{	
	    jQuery('body').removeClass('overflow_hidden');	
	});	
	
	jQuery('.animate').waypoint(function(direction) {
		var windowWidth = jQuery(window).width();
	
		jQuery(this).addClass('visible', direction === 'down');
	    
	} , { offset: '80%' });
	
	var calScreenHeight = jQuery(window).height()-108;
	var miniRightPos = 800;
      
    var cols = 3
	var masonry = jQuery('.gallery_mansory_wrapper');
	
	// initialize masonry
	masonry.imagesLoaded(function(){
	    
	    masonry.masonry({
	    	itemSelector: '.mansory_thumbnail',
	    	isResizable: true,
	    	isAnimated: true,
	    	isFitWidth: true,
	    	columnWidth:Math.floor((masonry.width()/ cols))
	      });
	      
	     masonry.children('.mansory_thumbnail').children('.gallery_type').each(function(){
		    jQuery(this).addClass('fade-in');
	    });
	    
	    jQuery(window).trigger('hwparallax.reconfigure');
	});
	
	jQuery(window).resize(function(){
		var masonry = jQuery('.gallery_mansory_wrapper');
		
	    masonry.imagesLoaded(function(){
	    
		    masonry.masonry({
		    	itemSelector: '.mansory_thumbnail',
		    	isResizable: true,
		    	isAnimated: true,
		    	isFitWidth: true,
		    	columnWidth:Math.floor((masonry.width()/ cols))
		      });
		      
		     masonry.children('.mansory_thumbnail').children('.gallery_type').each(function(){
			    jQuery(this).addClass('fade-in');
		    });
		});
	});
	
	if(jQuery.browser.msie && parseFloat(jQuery.browser.version)<10)
	{
		jQuery('.animate').css('opacity', 1);
		jQuery('.animate').css('visibility', 'visible');
		
		jQuery('.animated').each(function() {
			jQuery(this).css('opacity', 1);
			jQuery(this).css('visibility', 'visible');
		});
	}
	
	jQuery('#tg_reservation:not(.custom_link), .tg_reservation').on( 'click', function() {
		jQuery('#reservation_wrapper').fadeIn();
		jQuery('body').removeClass('js_nav');
		jQuery('body').addClass('overflow_hidden');
		jQuery('html').addClass('overflow_hidden');
	});
	
	jQuery('#tg_sidemenu_reservation:not(.custom_link)').on( 'click', function() {
		jQuery('#reservation_wrapper').fadeIn();
		jQuery('body').removeClass('js_nav');
		jQuery('body').addClass('overflow_hidden');
		jQuery('html').addClass('overflow_hidden');
	});
	
	jQuery('#reservation_cancel_btn').on( 'click', function() {
		jQuery('#reservation_wrapper').fadeOut();
		jQuery('body').removeClass('overflow_hidden');
		jQuery('html').removeClass('overflow_hidden');
	});
	
	jQuery('body').on('adding_to_cart', function(event, param1, param2) {
		var currentCartCount = parseInt(jQuery('.header_cart_wrapper .cart_count').html());
		currentCartCount = currentCartCount + 1;
		jQuery('.header_cart_wrapper .cart_count').html(currentCartCount);
	});
	
	if(jQuery('.one.fullwidth.slideronly').length > 0)
	{
		jQuery('body').addClass('overflow_hidden');
	}
	
	var menuLayout = jQuery('#pp_menu_layout').val();

    if(jQuery(window).width()<960 && menuLayout == 'leftmenu')
	{
		document.getElementById("leftmenu.css-css").disabled = true;
		jQuery('.mobile_menu_wrapper .logo_container').hide();
	}
	
	jQuery(window).resize(function(){
		if(jQuery(window).width()>=960 && menuLayout == 'leftmenu')
		{
			document.getElementById("leftmenu.css-css").disabled = false;
			jQuery('.mobile_menu_wrapper .logo_container').show();
		}
		else if(jQuery(window).width()<960 && menuLayout == 'leftmenu')
		{
			document.getElementById("leftmenu.css-css").disabled = true;
			jQuery('.mobile_menu_wrapper .logo_container').hide();
		}
	});
});

jQuery(window).on('resize load',adjustIframes);