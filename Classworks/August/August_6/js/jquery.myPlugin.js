// $.fn.
// $.extend()

/*  !Deprecated syntax
$.fn.myPlugin = function() {
    console.log('My Deprecated Plugin');
}
*/




/*  Better syntax
(function($) {
    $.fn.myPlugin = function() {
        console.log('My Plugin ');
    }
})(jQuery);
*/



/*  
(function($) {
    $.extend($.fn, {
        myPlugin() {
            console.log('My Plugin ');
        },
        myPlugin2() {
            console.log('My Plugin 2 ');
        }
    });
})(jQuery);
*/




(function($) {
    $.fn.styleElement = function(options) {
        let config = $.extend({
            text: 'styleElement Default Text',
            color: 'white',
            fontStyle: null,
            fontSize: '16px',
            backgroundColor: 'purple',
            padding: '10px'
        }, options);

        return this.each(function() {
            $(this).text(config.text);

            if (config.color) {
                $(this).css('color', config.color);
            }
            if (config.fontStyle) {
                $(this).css('font-style', config.fontStyle);
            }
            if (config.fontSize) {
                $(this).css('font-size', config.fontSize);
            }
            if (config.backgroundColor) {
                $(this).css('background-color', config.backgroundColor);
            }
            if (config.padding) {
                $(this).css('padding', config.padding);
            }
        });
    }
})(jQuery);