// import '@popperjs/core'
import 'bootstrap'
import '@splidejs/splide'
import 'lity'

import Splide from '@splidejs/splide';

new Splide('#slider1', {
    lazyLoad: 'nearby',
    paginationKeyboard: true,
    paginationDirection: 'ltr',
    keyboard: 'focused',
    slideFocus: true,
    perPage: 3,
    arrows: false,
    breakpoints: {

        992: {
            lazyLoad: "nearby", perPage: 1, arrows: false
        }
    }
}).mount();

new Splide('#slider2', {
    lazyLoad: 'nearby',
    paginationKeyboard: true,
    paginationDirection: 'ltr',
    keyboard: 'focused',
    slideFocus: true,
    perPage: 3,
    type: 'loop',
    padding: '5em',
    pagination: false,
    breakpoints: {

        992: {
            type: false, padding: false, lazyLoad: "nearby", perPage: 1, arrows: false, pagination: true
        }
    }
}).mount();

$(function () {
    $(document).scroll(function () {
        var $nav = $(".fixed-top");
        $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });
});

$('#mobile_button').click(function(){
    $('#navbar').toggleClass("bg-change-click");
    $('#navbar').toggleClass( "bg-transparent");
})