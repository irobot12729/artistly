function ComingAnimations() {
    "use strict";

    var t = setTimeout(function() {
        $('.download-bar').addClass('animated fadeIn')
    }, 3000)
    jQuery('.coming > .span12').waypoint(function(event) {
        jQuery(this).each(function(index) {
            var jQuerythis = jQuery(this);
            jQuerythis.delay(0 * (index + 1)).queue(function() {
                jQuerythis.addClass('animated fadeInDownBig');
            });
        });
    });
    jQuery('div.coming form.special').waypoint(function(event) {
        jQuery(this).each(function(index) {
            var jQuerythis = jQuery(this);
            jQuerythis.delay(1100 * (index + 1)).queue(function() {
                jQuerythis.addClass('animated flipInX');
            });
        });
    });
}

function fixDiv() {
    "use strict";
    var jQuerycache = jQuery('#getFixed');
    if (jQuery(window).scrollTop() > 100) {
        jQuerycache.css({
            'position': 'fixed',
            'top': '0px'
        });
    } else {
        jQuerycache.css({
            'position': 'relative',
            'top': 'auto'
        });
    }
}

function showTopButton() {
    "use strict";
    var jQuerybtn = jQuery('#back-to-top');
    if (jQuery(window).scrollTop() > 100) {
        jQuerybtn.css({
            'display': 'block'
        });
    } else {
        jQuerybtn.css({
            'display': 'none'
        });
    }
}

jQuery(document).ready(function() {
    "use strict";


    showTopButton();
    fixDiv();
});

jQuery(window).load(function() {
    "use strict";
    jQuery('.navbar-inverse .brand, .navbar-inverse ul.nav').removeClass('animated bounceInDown');
    jQuery('.img-landing').removeClass('bounceInRight');
});


jQuery(window).scroll(function() {
    "use strict";
    fixDiv();
    showTopButton();
});