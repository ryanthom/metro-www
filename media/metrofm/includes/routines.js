//*************************** FUNCTIONS ***************************//

// find the Object
function findObj(n, d) {
	var p,i,x;
	if (!d) d = document;
	if ((p = n.indexOf('?'))>0 && parent.frames.length) {
		d = parent.frames[n.substring(p + 1)].document;
		n = n.substring(0, p);
	}
	if (!(x=d[n]) && d.all) x = d.all[n];
	for (i=0;!x&&i<d.forms.length;i++) x = d.forms[i][n];
	for (i=0;!x&&d.layers&&i<d.layers.length;i++) x = findObj(n, d.layers[i].document);
	if (!x && d.getElementById) x = d.getElementById(n);
	return x;
}

//validate the Poll
function validatePoll()
{
	var radioChecked = false;
	var obj = findObj('poll');
	for (i = 0; i < obj.length; i++) 
	{
		if (obj[i].checked)
			radioChecked = true;
	}

	if (!radioChecked)
	{
		document.getElementById('pollwarning').style.display = 'block';
		return false;
	}
	else
	{
		document.getElementById('pollwarning').style.display = 'none';
		return true;
	}
}

//Player Open
function openPlayer(url) 
{
	window.open(url, 'player', 'location=0,status=0,scrollbars=0,width=700,height=690')
}
//Cam Open
function openCam(url) 
{
	window.open(url, 'player', 'location=0,status=0,scrollbars=0,width=700,height=565')
}
//Cam Flip
jQuery(function(){
	jQuery("#cam1_link").click(function() {
		jQuery("#cam1").css({'display' : 'block'});
		jQuery("#cam2").css({'display' : 'none'});
    });
	jQuery("#cam2_link").click(function() {
		jQuery("#cam2").css({'display' : 'block'});
		jQuery("#cam1").css({'display' : 'none'});
    });
});

//PNG Fix
jQuery(function(){
	jQuery(document).pngFix();
});

//Coda Slider
jQuery(function() {
	jQuery('.coda-slider-1').codaSlider({
		crossLinking: false,
		firstPanelToLoad: 1
	});
});
	
//Home Updates Block - Hovers/Hides
jQuery(function(){
	jQuery(".chunk_body_first").mouseenter(function() {
		jQuery(this).find('p.upd_cat span.upd_meta').css({'display' : 'block'});
		jQuery(this).find('p.upd_cat span.upd_meta').css({'color' : '#FFFF00'});
		jQuery(this).find('p a').css({'color' : '#ffff00'});
	 });
	jQuery(".chunk_body_first").mouseleave(function() {
		jQuery(this).find('p.upd_cat span.upd_meta').css({'display' : 'none'});
	});
	
	jQuery(".chunk_body").mouseenter(function() {
		//jQuery(this).find('p.upd_pic').css({'display' : 'none'});
		jQuery(this).find('h2 a').css({'color' : '#000'});
		jQuery(this).find('p.upd_pic img').css({'border' : '3px solid #FFFF00'});
		if (jQuery(this).parent().parent().parent().parent().parent().parent().is('.pink')){
			jQuery(this).find('h2 a').css({'color' : '#fff'});
			jQuery(this).find('p.upd_cat span.upd_meta').css({'display' : 'block'});
			jQuery(this).find('p.upd_cat span.upd_meta').css({'color' : '#FFFF00'});
		} else if (jQuery(this).parent().parent().is('.yellow')) {
			jQuery(this).find('h2 a').css({'color' : '#fff'});
			jQuery(this).find('p.upd_cat span.upd_meta').css({'display' : 'none'});
		} else if (jQuery(this).parent().parent().is('.blue')) {
			jQuery(this).find('h2 a').css({'color' : '#fff'});
		}
		jQuery(this).find('p').css({'color' : '#fff'});
		jQuery(this).find('p a').css({'color' : '#ffff00'});
    });
	jQuery(".chunk_body").mouseleave(function() {
		//jQuery(this).find('p.upd_pic').css({'display' : 'block'});
		jQuery(this).find('p.upd_cat span.upd_meta').css({'display' : 'none'});
		jQuery(this).find('p.upd_pic img').css({'border' : '3px solid #FFF'});
		jQuery(this).find('h2 a').css({'color' : '#000'});
		if (jQuery(this).parent().parent().parent().parent().parent().parent().is('.pink')){
			jQuery(this).find('p a').css({'color' : '#666666'});
		} else if (jQuery(this).parent().parent().parent().parent().parent().parent().parent().is('.pink')){
			jQuery(this).find('p a').css({'color' : '#666666'});
		} else if (jQuery(this).parent().parent().is('.yellow')) {
			jQuery(this).find('p a').css({'color' : '#666666'});
		} else if (jQuery(this).parent().parent().is('.blue')) {
			jQuery(this).find('p a').css({'color' : '#666666'});
		}
    });
});

//Shows/DJs - Hovers/Hides
jQuery(function(){
	jQuery(".post_intro").mouseenter(function() {
		jQuery(this).find('p.pi_social').css({'display' : 'block'});
		jQuery(this).find('p.pi_blurb').css({'display' : 'block'});
		jQuery(this).find('h2 a').css({'color' : '#fff'});
		jQuery(this).find('h2').css({'color' : '#fff'});
		jQuery(this).find('p').css({'color' : '#999'});
		jQuery(this).find('p a').css({'color' : '#ffff00'});
		jQuery(this).find('p span').css({'color' : '#fff'});
		jQuery(this).find('div.pi_star_rater').css({'display' : 'block'});
		jQuery(this).find('p.pi_pic img').css({'border' : '3px solid #ffff00'});
    });
	jQuery(".post_intro").mouseleave(function() {
		jQuery(this).find('p.pi_social').css({'display' : 'none'});
		jQuery(this).find('p.pi_blurb').css({'display' : 'none'});
		jQuery(this).find('h2 a').css({'color' : '#000'});
		jQuery(this).find('h2').css({'color' : '#000'});
		jQuery(this).find('p').css({'color' : '666'});
		jQuery(this).find('p span').css({'color' : '#666'});
		jQuery(this).find('p a').css({'color' : '#fff'});
		jQuery(this).find('div.pi_star_rater').css({'display' : 'none'});
		jQuery(this).find('p.pi_pic img').css({'border' : '3px solid #fff'});
    });
});

//Shows/DJs - Head Toggle
jQuery(function(){
	jQuery(".page_head[class=expanded]").find("div.dj_info").slideToggle("medium");
	jQuery(".page_head h1 a").click(function() {
		jQuery(".page_head").toggleClass("expanded").toggleClass("collapsed").find("div.dj_info").slideToggle("medium");
	});
});

//Shows/DJs Landing - Hovers/Hides
jQuery(function(){
	jQuery(".block").mouseenter(function() {
		jQuery(this).find('p.block_name a').css({'color' : '#fff'});
		jQuery(this).find('p.block_meta').css({'color' : '#191919'});
		jQuery(this).find('p').css({'color' : '#ffff00'});
		jQuery(this).find('p a').css({'color' : '#fff'});
    });
	jQuery(".block").mouseleave(function() {
		jQuery(this).find('p.block_name a').css({'color' : '#191919'});
		jQuery(this).find('p.block_meta').css({'color' : '#666'});
    });
});

//Galleries - Hovers/Hides
jQuery(function(){
	jQuery(".block").mouseenter(function() {
		jQuery(this).find('p.block_name a.block_name_name').css({'display' : 'none'});
		jQuery(this).find('p.block_name a.block_name_amount').css({'display' : 'inline'});
		jQuery(this).find('p.block_meta span.block_meta_date').css({'display' : 'none'});
		jQuery(this).find('p.block_meta span.block_meta_likes').css({'display' : 'inline'});
		jQuery(this).find('p.block_meta a.block_meta_comments').css({'display' : 'inline'});
    });
	jQuery(".block").mouseleave(function() {
		jQuery(this).find('p.block_name a.block_name_name').css({'display' : 'inline'});
		jQuery(this).find('p.block_name a.block_name_amount').css({'display' : 'none'});
		jQuery(this).find('p.block_meta span.block_meta_date').css({'display' : 'inline'});
		jQuery(this).find('p.block_meta span.block_meta_likes').css({'display' : 'none'});
		jQuery(this).find('p.block_meta a.block_meta_comments').css({'display' : 'none'});
    });
});

//Station Updates - Hovers/Hides
jQuery(function(){
	jQuery(".box_update_item").mouseenter(function() {
		//jQuery(this).find('p.bui_pic').css({'display' : 'none'});
		jQuery(this).find('span.bui_meta').css({'display' : 'inline'});
		jQuery(this).find('h2 a').css({'color' : '#fff'});
		jQuery(this).find('p a').css({'color' : '#ffff00'});
		jQuery(this).find('p span').css({'color' : '#fff'});
		jQuery(this).find('p.bui_pic img').css({'border' : '3px solid #ffff00'});
    });
	jQuery(".box_update_item").mouseleave(function() {
		//jQuery(this).find('p.bui_pic').css({'display' : 'block'});
		jQuery(this).find('span.bui_meta').css({'display' : 'none'});
		jQuery(this).find('h2 a').css({'color' : '#191919'});
		jQuery(this).find('p a').css({'color' : '#373737'});
		jQuery(this).find('p span').css({'color' : '#373737'});
		jQuery(this).find('p.bui_pic img').css({'border' : '3px solid #fff'});
    });
});

//Share Pop - Hovers/Hides
jQuery(function(){
	jQuery(".share_contain").mouseenter(function() {
		jQuery(document).find('.share').css({'display' : 'block'});
    });
	jQuery(".share_contain").mouseleave(function() {
		jQuery(document).find('.share').css({'display' : 'none'});
    });
	jQuery("#share_link").click(function() {
		this.select();
    });
});

//Comments - Hovers/Hides
jQuery(function(){
	jQuery(".comment").mouseenter(function() {
		jQuery(this).find('span.com_meta_time').css({'display' : 'none'});
		jQuery(this).find('span.com_meta_abuse').css({'display' : 'inline'});
		jQuery(this).find('span.com_meta_name').css({'color' : '#fff'});
		jQuery(this).find('p.com_blurb').css({'color' : '#fff'});
		jQuery(this).find('p.avatar img').css({'border' : '3px solid #ffff00'});
    });
	jQuery(".comment").mouseleave(function() {
		jQuery(this).find('span.com_meta_abuse').css({'display' : 'none'});
		jQuery(this).find('span.com_meta_time').css({'display' : 'inline'});
		jQuery(this).find('span.com_meta_name').css({'color' : '#191919'});
		jQuery(this).find('p.com_blurb').css({'color' : '#666'});
		jQuery(this).find('p.avatar img').css({'border' : '3px solid #fff'});
    });
});

//Comments - Hovers/Hides
jQuery(function(){
	jQuery(".update").mouseenter(function() {
		jQuery(this).find('span.update_text').css({'display' : 'block'});
		jQuery(this).find('span.update_text').css({'color' : '#fff'});
		jQuery(this).find('span.update_meta').css({'display' : 'none'});
		jQuery(this).find('span.update_btns').css({'display' : 'inline'});
		jQuery(this).find('p.update_avatar a img').css({'border' : '3px solid #FFFF00'});
		jQuery(this).find('a').css({'color' : '#ffff00'});
    });
	jQuery(".update").mouseleave(function() {
		jQuery(this).find('span.update_text').css({'display' : 'block'});
		jQuery(this).find('span.update_text').css({'color' : '#666'});
		jQuery(this).find('span.update_meta').css({'display' : 'inline'});
		jQuery(this).find('span.update_btns').css({'display' : 'none'});
		jQuery(this).find('p.update_avatar a img').css({'border' : '3px solid #FFF'});
		jQuery(this).find('a').css({'color' : '#191919'});
    });
});

//poll Toggle
jQuery(function(){
	jQuery(".polllink").click(function() {
		jQuery(".poll").find('p.poll_answ').css({visibility: "visible", display: "none"}).hide();
		jQuery(".poll").find('p.poll_btn').css({visibility: "visible", display: "none"}).hide();
		jQuery(".poll").find('p.poll_res').css({visibility: "visible", display: "none"}).show();
	});
});

//form Bg Position Shifting
jQuery(function() {
	jQuery(".shift").select(function () {
      jQuery(this).css({'background-position' : '0px -27px'});
	  jQuery(this).find("input").css({'color' : '#666'});
    });
	jQuery(".shift").click(function () {
      jQuery(this).css({'background-position' : '0px -27px'});
	  jQuery(this).find("input").css({'color' : '#666'});
    });
	jQuery(".shift input").blur(function () {
      jQuery(".shift").css({'background-position' : '0px 0px'});
	  jQuery(this).css({'color' : '#666'});
    });
	jQuery(".shift_half").select(function () {
      jQuery(this).css({'background-position' : '0px -115px'});
	  jQuery(this).find("textarea").css({'color' : '#666'});
    });
	jQuery(".shift_half").click(function () {
      jQuery(this).css({'background-position' : '0px -115px'});
	  jQuery(this).find("textarea").css({'color' : '#666'});
    });
	jQuery(".shift_half textarea").blur(function () {
      jQuery(".shift_half").css({'background-position' : '0px 0px'});
	  jQuery(this).css({'color' : '#666'});
    });
	jQuery(".shift_plenty").select(function () {
      jQuery(this).css({'background-position' : '0px -115px'});
	  jQuery(this).find("textarea").css({'color' : '#666'});
    });
	jQuery(".shift_plenty").click(function () {
      jQuery(this).css({'background-position' : '0px -115px'});
	  jQuery(this).find("textarea").css({'color' : '#666'});
    });
	jQuery(".shift_plenty textarea").blur(function () {
      jQuery(".shift_plenty").css({'background-position' : '0px 0px'});
	  jQuery(this).css({'color' : '#666'});
    });
});

//search Bg Position Shifting
jQuery(function() {
	jQuery(".search p.field input").click(function () {
      jQuery(".search p.field").css({'background-position' : '0px -30px'});
    });
	jQuery(".search p.field input").blur(function () {
      jQuery(".search p.field").css({'background-position' : '0px 0px'});
    });
});

//global Updates Tabs + social Tabs
jQuery(function() {
	jQuery(".global_updates, .social_body").hide(); //Hide all content
	jQuery("ul.global_updates_nav a:first, ul.social_nav a:first").addClass("selected").show(); //Activate first tab
	jQuery(".global_updates:first, .social_body:first").show(); //Show first tab content
	
	jQuery("ul.global_updates_nav a, ul.social_nav a, a.user_reply").click(function() {
		jQuery("ul.global_updates_nav a, ul.social_nav a, a.user_reply").removeClass("selected"); //Remove any "active" class
		jQuery(this).addClass("selected"); //Add "active" class to selected tab
		jQuery(".global_updates, .social_body").hide(); //Hide all tab content
		var activeTab = jQuery(this).attr("rel"); //Find the rel attribute value to identify the active tab + content
		jQuery(activeTab).fadeIn(); //Fade in the active content
		
		return false;
	});
	
	jQuery("a.user_reply").click(function() {
		jQuery("ul.social_nav a").removeClass("selected");
		jQuery("ul.social_nav a:last").addClass("selected");
	});

	
});
	

//global Updates tabs
jQuery(function() {
	jQuery('ul.global_updates_nav li.dj_updates a.selected, ul.global_updates_nav li.friend_updates a.selected').parent().css({"background":"#fff"});
	jQuery("ul.global_updates_nav a").click(function () {
		if (jQuery("ul.global_updates_nav li.dj_updates a").hasClass("selected")) {
			jQuery("ul.global_updates_nav li.dj_updates").css({"background":"#fff"});
			jQuery("ul.global_updates_nav li.friend_updates").css({"background":"#3c3c3c"});
		} else 
		if (jQuery("ul.global_updates_nav li.friend_updates a").hasClass("selected")) {
			jQuery("ul.global_updates_nav li.friend_updates").css({"background":"#fff"});
			jQuery("ul.global_updates_nav li.dj_updates").css({"background":"#3c3c3c"});
		}
	});
});

//show/hide Facebook Connect
jQuery(function() {
	jQuery('.social_item').hover(
		function () {
			jQuery(this).find('p.user_actions').show();
		}, 
		function () {
			jQuery(this).find('p.user_actions').hide();
		}
	);
});

//show/hide Friends
jQuery(function() {
	jQuery('.friend_item').hover(
		function () {
			jQuery(this).find('p.user_date, p.user_name, p.user_meta').hide();
			jQuery(this).find('p.user_sendmessage, p.user_viewprofile, p.user_unfriend').show();
			jQuery("p.user_avatar img").css({"border":"3px solid #ffff00"});
		}, 
		function () {
			jQuery(this).find('p.user_date, p.user_name, p.user_meta').show();
			jQuery(this).find('p.user_sendmessage, p.user_viewprofile, p.user_unfriend').hide();
			jQuery("p.user_avatar img").css({"border":"3px solid #fff"});
		}
	);
});

//show/hide Message
jQuery(function() {
	jQuery(".social_item").find("div.user_message p:first").show();
	jQuery("a.show_some_message").click(function () {
	    jQuery(this).parent().parent().find("div.user_message *:not(:first)").slideToggle();
		jQuery(this).parent().parent().find("div.user_message p").show();
	});
});

//show/hide Status update btn
jQuery(function() {
	jQuery('.logged_status').hover(
		function () {
			jQuery(this).find('p.status_update_btn').show();
		}, 
		function () {
			jQuery(this).find('p.status_update_btn').hide();
		}
	);
});

jQuery(function() {
	//Cufon
	Cufon.replace('.nav li a, .banner_info span.showtitle, .onair, .showdjs, h2.main-title, .page_menu ul li a, .post_head h3, .box_show_info p.bsi_name, .dj_info p.dj_info_name, .dj_info p.dj_info_time, .dj_info p a', {
		fontFamily: 'HelveticaNeue77', 
		hover:true 
	});
	
	Cufon.replace(', h1, .updates h1, .page_menu h2, .page_head h1, .dark h1, .box_show_info p.bsi_time, .social h2, ul.social_nav li a, ', {
		fontFamily: 'HelveticaNeue57',
		hover:true 
	});
});

//************************* SHINY EFFECTS **************************//

jQuery(document).ready(function() {
	jQuery.easing.def = "easeInOutSine"; 
	jQuery('.post_intro, .block, .box_update_item, .comment, .update, .friend_item').bind('mouseenter',function(){
		jQuery(this).stop().animate({
			backgroundColor: "#373737" }, 200)
	}).bind('mouseleave',function(){
		jQuery(this).stop().animate({
			backgroundColor: "#fff" }, 300)
	});
	//home latest news
	jQuery('.pink').find('.chunk_body').bind('mouseenter',function(){
		jQuery(this).stop().animate({
			backgroundColor: "#373737" }, 200)
	}).bind('mouseleave',function(){
		jQuery(this).stop().animate({
			backgroundColor: "#fff" }, 300)
	});
	//home competitions
	jQuery('.yellow').find('.chunk_body').bind('mouseenter',function(){
		jQuery(this).stop().animate({
			backgroundColor: "#373737" }, 200)
	}).bind('mouseleave',function(){
		jQuery(this).stop().animate({
			backgroundColor: "#fff" }, 300)
	});
	//home events
	jQuery('.blue').find('.chunk_body').bind('mouseenter',function(){
		jQuery(this).stop().animate({
			backgroundColor: "#373737" }, 200)
	}).bind('mouseleave',function(){
		jQuery(this).stop().animate({
			backgroundColor: "#fff" }, 300)
	});
	//home events
	jQuery('.green').find('.update').bind('mouseenter',function(){
		jQuery(this).stop().animate({
			backgroundColor: "#373737" }, 200)
	}).bind('mouseleave',function(){
		jQuery(this).stop().animate({
			backgroundColor: "#fff" }, 300)
	});
	//station updates
	jQuery('.box_update_item').bind('mouseenter',function(){
		jQuery(this).stop().animate({
			backgroundColor: "#373737" }, 200)
	}).bind('mouseleave',function(){
		jQuery(this).stop().animate({
			backgroundColor: "#fff" }, 300)
	});
	
});

//************************* GALLERY **************************//

jQuery(function() {
jQuery(".thumb_carousel").jCarouselLite({
        btnNext: ".thumbs_next",
        btnPrev: ".thumbs_prev",
    	speed: 500,
		circular: false
    });
});

// Initially set opacity on thumbs and add
// additional styling for hover effect on thumbs
var onMouseOutOpacity = 0.67;
jQuery('#thumbs ul.thumbs li').css('opacity', onMouseOutOpacity)
	.hover(
		function () {
			jQuery(this).not('.selected_thumb').fadeTo('fast', 1.0);
		}, 
		function () {
			jQuery(this).not('.selected_thumb').fadeTo('fast', onMouseOutOpacity);
		}
	);

jQuery(function() {
	// Initialize Advanced Galleriffic Gallery
	var galleryAdv = jQuery('#gallery').galleriffic('#thumbs', {
		delay:                  2000,
		numThumbs:              100,
		preloadAhead:           0,
		enableTopPager:         false,
		enableBottomPager:      false,
		imageContainerSel:      '#slideshow',
		controlsContainerSel:   '#controls',
		captionContainerSel:    '#caption',
		loadingContainerSel:    '#loading',
		renderSSControls:       false,
		renderNavControls:      false,
		playLinkText:           'Play Slideshow',
		pauseLinkText:          'Pause Slideshow',
		prevLinkText:           '&lsaquo; Previous Photo',
		nextLinkText:           'Next Photo &rsaquo;',
		nextPageLinkText:       'Next &rsaquo;',
		prevPageLinkText:       '&lsaquo; Prev',
		enableHistory:          false,
		autoStart:              false,
		onChange:               function(prevIndex, nextIndex) {
			jQuery('#thumbs ul.thumbs').children()
				.eq(prevIndex).fadeTo('fast', onMouseOutOpacity).end()
				.eq(nextIndex).fadeTo('fast', 1.0);
		},
		onTransitionOut:        function(callback) {
			jQuery('#caption').fadeTo('fast', 0.0);
			jQuery('#slideshow').fadeTo('fast', 0.0, callback);
		},
		onTransitionIn:         function() {
			jQuery('#slideshow').fadeTo('fast', 1.0);
			jQuery('#caption').fadeTo('fast', 1.0);
		}
	});
});


// Logout
$(function() {
    $("#sign_out").live("click", function () {
        var currentTime = new Date();
        var time = currentTime.getTime();
        $("#account_links").load("/logout?" + time);
    });
});


// Like
function afterLike(data)
{
    json = eval(data);
    jQuery(".ps_likes_num").text(json.score.score);
}

$(function() {
    $("#like_link").live("click", function () {
        var data = {};
        jQuery.post(jQuery(this).attr('href'), 
            data, 
            afterLike,
            "json"
        );
        return false;
    });
});

// Profile Form
function validateProfile() {
    var validator = $("#frmProfile").validate({
        onkeyup: false,
        onclick: false,
        rules: {
            username: {
                required: true,
                minlength: 4,
                remote: {
                    url: "/validate/username/",
                    type: "post",
                    timeout: 20000,
                    error: function (XMLHttpRequest, textStatus, errorThrown) { showDefaultAjaxError("username", validator); },
                    beforeSend: function (XMLHttpRequest) { showBusy("username"); },
                    onSuccess: function () { hideBusy("username"); }
                }
            },
            password: {
                minlength: 4,
                remote: {
                    url: "/validate/password/",
                    type: "post",
                    timeout: 20000
                }
            },
            password_confirm: {
                minlength: 4,
                remote: {
                    url: "/validate/password-confirm/",
                    type: "post",
                    timeout: 20000,
                    data: {
                        password: function() {
                            return $("#id_password").val();
                        }
                    }
                }
            },
            birth_date_day: {
                birthDate: true
            },
            birth_date_month: {
                birthDate: true
            },
            birth_date_year: {
                birthDate: true
            }
        },

        groups: {
            birth_date: "birth_date_day birth_date_month birth_date_year"
        },
        errorPlacement: function(error, element) {
            if (element.attr("name") == "birth_date_day" || element.attr("name") == "birth_date_month" || element.attr("name") == "birth_date_year" )
               error.insertAfter("#id_birth_date_year");
            else
                error.insertAfter(element);
        }
    });

    $.validator.addMethod("birthDate",
        function(value, element) {
            day = $("#id_birth_date_day").val();
            month = $("#id_birth_date_month").val();
            year = $("#id_birth_date_year").val();
            if (day != "" & month != "" & year != "") {
                var date = new Date(year, month - 1, day);
                var convertedDate = "" + date.getFullYear() + (date.getMonth()+1) + date.getDate();
                var givenDate = "" + year + month + day;
                return (givenDate == convertedDate);
            }
            return true
        },
        "Invalid date, please try again"
    );
}

// Profile Picture Form
function validateProfilePicture() {
    var validator = $("#frmProfilePicture").validate({
        onkeyup: false,
        onclick: false,
        rules: {
            image: {
                required: true
            }
        }
    });
}

// Competition Form
function validateEnterCompetition() {
    var validator = $("#frmEnterCompetition").validate({
        onkeyup: false,
        onclick: false,
        rules: {
            answer: {
                required: true
            }
        }
    });
}

// Comments
function validateComments() {
    var validator = $("#frmComments").validate({
        onkeyup: false,
        onclick: false,
        submitHandler: function(form) {
            $("#register_buttons").hide();
            $("#register_progress").show();
            $('#frmComments').ajaxSubmit(function(response) { 
                $("#comments").replaceWith(response);
	            bindForm();
                validateComments();
            }); 
        },
        rules: {
            comment: {
                required: true
            }
        }
    });
}
