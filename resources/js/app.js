// This is all you.

// import '@popperjs/core'
import 'bootstrap'
import '@splidejs/splide'
import 'lity'

import Splide from '@splidejs/splide';

var elms = document.getElementsByClassName('splide');

for (var i = 0; i < elms.length; i++) {
    new Splide(elms[i], {
        lazyLoad: 'nearby',
        paginationKeyboard: true,
        paginationDirection: 'ltr',
        keyboard: 'focused',
        slideFocus: true,
        breakpoints: {
            992: {
                lazyLoad: "nearby",
                perPage: 1,
                arrows: false
            }
        }
    }).mount();
}
