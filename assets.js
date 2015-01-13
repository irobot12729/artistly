// assets to be used by the 'hapi-assets' module based on process.env.NODE_ENV
module.exports = {
    development: {
        js: ['js/jquery.js',
            'js/bootstrap-transition.js',
            'js/bootstrap-alert.js',
            'js/bootstrap-modal.js',
            'js/bootstrap-dropdown.js',
            'js/bootstrap-scrollspy.js',
            'js/bootstrap-tab.js',
            'js/bootstrap-tooltip.js',
            'js/bootstrap-popover.js',
            'js/bootstrap-button.js',
            'js/bootstrap-collapse.js',
            'js/bootstrap-carousel.js',
            'js/bootstrap-typeahead.js',
            'js/jquery.mixitup.js',
            'js/global.js',
            'js/waypoints.js',
            'js/scripts.js'
        ],
        css: [
            "css/bootstrap.css",
            "css/style.css",
            "css/bootstrap-responsive.css",
            "css/animate.css"
        ]
    },
    production: {
        js: ['js/scripts.min.js'],
        css: ['css/styles.min.css']
    }
};