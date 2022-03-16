$('.home-page-2-sub-container').slick({
    dots: false,
    arrows: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    infinite: false,
    responsive: [{
            breakpoint: 1030,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: false,
                dots: false,

            }
        }, {
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        }, {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }

    ]
});

$('.facebook_side_main_content').slick({
    dots: false,
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    infinite: true,
    responsive: [{
        breakpoint: 1212,
        settings: {
            slidesToShow: 3,
            slidesToScroll: 1
        },
    }, {
        breakpoint: 865,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 1
        }
    }, {
        breakpoint: 768,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1
        }
    }]
});