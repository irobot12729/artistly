// assets to be used by the 'hapi-assets' module based on process.env.NODE_ENV
module.exports = {
    development: {
        js: ['js/jquery.min.js', 'js/materialize.js', 'js/sweet-alert.js', 'js/scripts.js'],
        css: [
            "css/materialize.min.css",
            "css/sweet-alert.css",
            "css/animate.css",
            "css/app.css"
        ]
    },
    production: {
        js: ['js/scripts.min.js'],
        css: ['css/styles.min.css']
    }
};