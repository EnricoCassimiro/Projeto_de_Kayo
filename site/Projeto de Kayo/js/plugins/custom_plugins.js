jQuery.fn.center = function ()
{
    this.css("left", (jQuery(window).width() / 2) - (this.outerWidth() / 2));
    return this;
}

jQuery.fn.animateAuto = function(prop, speed, callback){
    var elem, height, width;
    return this.each(function(i, el){
        el = jQuery(el), elem = el.clone().css({"height":"auto"}).appendTo("body");
        
        if (navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1)
        {
        	height = elem.height();
	        height = elem.css("auto"),
	        width = elem.css("width");
        }
        else
        {
	        height = elem.height();
	        height = height,
	        width = elem.css("width");
	    }
        elem.remove();
        
        if(prop === "height")
            el.animate({"height":height+15}, speed, callback);
        else if(prop === "max-height")
            el.animate({"max-height":height}, speed, callback);
        else if(prop === "width")
            el.animate({"width":width}, speed, callback);  
        else if(prop === "both")
            el.animate({"width":width,"height":height}, speed, callback);
    });  
}

jQuery.fn.setNav = function(){
	var calScreenWidth = jQuery(window).width();
	var menuLayout = jQuery('#pp_menu_layout').val();
	
	if(calScreenWidth >= 960)
	{
		jQuery('#main_menu li ul').css({display: 'none', opacity: 1});
		
		if(menuLayout != 'leftmenu')
		{
			jQuery('#menu_wrapper div .nav li.megamenu > ul > li').each(function()
			{
				jQuery(this).css('height', jQuery(this).parent('ul').height()+'px');
			});
		}
	
		jQuery('#main_menu li').each(function()
		{	
			var jQuerysublist = jQuery(this).find('ul:first');
			
			jQuery(this).hover(function()
			{	
				position = jQuery(this).position();
				
				if(jQuery(this).parents().attr('class') == 'sub-menu')
				{	
					jQuerysublist.stop().fadeIn(500);
				}
				else
				{
					jQuerysublist.stop().css({overflow: 'visible'}).fadeIn(500);
				}
			},
			function()
			{	
				jQuerysublist.stop().css({height:'auto'}).fadeOut(500);
			});
	
		});
		
		jQuery('#menu_wrapper .nav ul li ul').css({display: 'none', opacity: 1});
	
		jQuery('#menu_wrapper .nav ul li').each(function()
		{
			
			var jQuerysublist = jQuery(this).find('ul:first');
			
			jQuery(this).hover(function()
			{	
				jQuerysublist.stop().fadeIn(500);	
			},
			function()
			{	
				jQuerysublist.stop().fadeOut(500);	
			});		
			
		});
	}
	
	jQuery('body').on('click', '.mobile_main_nav > li a', function(event) {
	    var jQuerysublist = jQuery(this).parent('li').find('ul.sub-menu:first');
	    var menuContainerClass = jQuery(this).parent('li').parent('#mobile_main_menu.mobile_main_nav').parent('div');
	    
	    if(jQuerysublist.length>0)
	    {
		    event.preventDefault();
	    }
	    
	    var menuLevel = 'top_level';
	    var parentMenu = '';
	    var menuClickedId = jQuery(this).attr('id');
	    
	    if(jQuery(this).parent('li').parent('ul').attr('id')=='mobile_main_menu')
	    {
		    menuLevel = 'parent_level';
	    }
	    else
	    {
		    parentMenu = jQuery(this).parent('li').attr('id');
	    }

	    if(jQuerysublist.length>0)
	    {
		    jQuery('#mobile_main_menu.mobile_main_nav').addClass('mainnav_out');
		    jQuery('.mobile_menu_wrapper div #sub_menu').removeClass('subnav_in');
		    jQuery('.mobile_menu_wrapper div #sub_menu').addClass('mainnav_out');
		    
		    setTimeout(function() {
		    	jQuery('#mobile_main_menu.mobile_main_nav').css('display', 'none');
		    	jQuery('.mobile_menu_wrapper div #sub_menu').remove();
		    
		        var subMenuHTML = '<li><a href="#" id="menu_back" class="'+menuLevel+'" data-parent="'+parentMenu+'">'+jQuery('#pp_back').val()+'</a></li>';
		        subMenuHTML += jQuerysublist.html();
		        
		    	menuContainerClass.append('<ul id="sub_menu" class="nav '+menuLevel+'"></ul>');
		    	menuContainerClass.find('#sub_menu').html(subMenuHTML);
		    	menuContainerClass.find('#sub_menu').addClass('subnav_in');
		    }, 200);
	    }
	});
	
	jQuery('body').on('click', '#menu_back.parent_level', function() {
		jQuery('.mobile_menu_wrapper div #sub_menu').removeClass('subnav_in');
		jQuery('.mobile_menu_wrapper div #sub_menu').addClass('subnav_out');
		jQuery('#mobile_main_menu.mobile_main_nav').removeClass('mainnav_out');
		
		setTimeout(function() {
			jQuery('.mobile_menu_wrapper div #sub_menu').remove();
			jQuery('#mobile_main_menu.mobile_main_nav').css('display', 'block');
			jQuery('#mobile_main_menu.mobile_main_nav').addClass('mainnav_in');
		}, 200);
	});
	
	jQuery('body').on('click', '#menu_back.top_level', function() {
		event.preventDefault();
		jQuery('.mobile_menu_wrapper div #sub_menu').addClass('subnav_out');
		var parentMenuId = jQuery(this).data('parent');
		
		setTimeout(function() {
			jQuery('.mobile_menu_wrapper div #sub_menu').remove();
			var menuLevel = 'top_level';
			var parentMenu = '';

			if(jQuery('#mobile_main_menu.mobile_main_nav li#'+parentMenuId).parent('ul.sub-menu:first').parent('li').parent('ul#main_menu').length == 1)
			{
				menuLevel = 'parent_level';
			}
			else
			{
				parentMenu = jQuery('#mobile_main_menu.mobile_main_nav li#'+parentMenuId).parent('ul.sub-menu:first').parent('li').attr('id');
			}
			
			var subMenuHTML = '<li><a href="#" id="menu_back" class="'+menuLevel+'" data-parent="'+parentMenu+'">'+jQuery('#pp_back').val()+'</a></li>';
			subMenuHTML+= jQuery('#mobile_main_menu.mobile_main_nav li#'+parentMenuId).parent('ul.sub-menu:first').html();
			jQuery('.mobile_menu_wrapper div').append('<ul id="sub_menu" class="nav '+menuLevel+'"></ul>');
			    
			jQuery('.mobile_menu_wrapper div #sub_menu').html(subMenuHTML);
			jQuery('.mobile_menu_wrapper div #sub_menu').addClass('mainnav_in');
		}, 200);
	});
}

function adjustIframes()
{
  jQuery('iframe').each(function(){
  
    var
    $this       = jQuery(this),
    proportion  = $this.data( 'proportion' ),
    w           = $this.attr('width'),
    actual_w    = $this.width();
    
    if ( ! proportion )
    {
        proportion = $this.attr('height') / w;
        $this.data( 'proportion', proportion );
    }
  
    if ( actual_w != w )
    {
        $this.css( 'height', Math.round( actual_w * proportion ) + 'px !important' );
    }
  });
}

function is_touch_device() {
  return 'ontouchstart' in window // works on most browsers 
      || 'onmsgesturechange' in window; // works on ie10
};