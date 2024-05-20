// navbar
function fixMenu() {
    let imgHeight = $(".header-nav").height() + $(".logo-section").height();
    if ($(window).scrollTop() > imgHeight) {
        $(".main-navbar").css({ position: "fixed", top: "0", width: '100%', "z-index": 4 });
    } else {
        $(".main-navbar").css({ position: "sticky", top: "0", width: '100%', "z-index": 4 });
    }
}

fixMenu();

$(window).scroll(function () {
    fixMenu();
});

$(window).resize(function () {
    fixMenu();
});
// navbar end

// news
$(document).ready(function () {
    $("#news-slider").owlCarousel({
        itemsDesktop: [1199, 3],
        itemsDesktopSmall: [980, 2],
        itemsMobile: [600, 1],
        navigation: true,
        navigationText: ["", ""],
        pagination: true,
        autoPlay: true,

        responsive: {
            0: {
                items: 1
            },
            700: {
                items: 2
            },
            992: {
                items: 3
            },
            1200: {
                items: 3
            }
        }

    });
});

// news end

// Usefull Links

$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    video: true,
    nav: true,
    lazyLoad: true,
    autoplay: true,
    autoplayTimeout: 1000,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1
        },
        480: {
            items: 2
        },
        560: {
            items: 2
        },
        760: {
            items: 3
        },
        990: {
            items: 3
        },
        1200: {
            items: 3
        },
        1500: {
            items: 3
        }
    }
})


// Usefull Links End

// todays


//   back to top
$(document).ready(() => {

    const backToTop = $('#backToTop')
    const amountScrolled = 300

    $(window).scroll(() => {
        $(window).scrollTop() >= amountScrolled
            ? backToTop.fadeIn('fast')
            : backToTop.fadeOut('fast')
    })

    backToTop.click(() => {
        $('body, html').animate({
            scrollTop: 0
        }, 600)
        return false
    })
})
//back to top/
// loader
var loader = document.querySelector('.loader');
var scrollPosition = [
    self.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft,
    self.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
];
var html = jQuery('html');
html.data('scroll-position', scrollPosition);
html.data('previous-overflow', html.css('overflow'));
html.css('overflow', 'hidden');
window.scrollTo(scrollPosition[0], scrollPosition[1]);

$(document).ready(function () {
    setTimeout(function () {
        var html = jQuery('html');
        var scrollPosition = html.data('scroll-position');
        html.css('overflow', html.data('previous-overflow'));
        window.scrollTo(scrollPosition[0], scrollPosition[1]);
        loader.style.display = "none";
    }, 1000);

});
// loader end