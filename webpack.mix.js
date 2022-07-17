const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.autoload({
    jquery: ['$', 'window.jQuery', 'jquery']
})
    .js('resources/js/app.js', 'public/js').extract()
    .sass('resources/scss/vendors/bootstrap.scss', 'public/css')
    .sass('resources/scss/vendors/lity.scss', 'public/css')
    .sass('resources/scss/vendors/splide.scss', 'public/css')
    .sass('resources/scss/app.scss', 'public/css')

if (mix.inProduction()) {
    mix.version();
}
