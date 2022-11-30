// $(document).ready(function(){
//     $('.carousel__inner').slick({
//         speed: 1200,
//         adaptiveHeight: true,
//         prevArrow: '<button type="button" class="slick-prev"><img src="icons/left.png"></button>',
//         nextArrow: '<button type="button" class="slick-next"><img src="icons/right.png"></button>',
//         responsive: [
//             {
//                 breakpoint: 992,
//                 settings: {
//                   dots: true,
//                   arrows: false
//                 }                
//             }
//         ]
//     });
// });

const slider = tns({
    container: '.carousel__inner',
    items: 1,
    slideBy: 'page',
    autoplay: false,
    controls: false,
    nav: false
  });

document.querySelector('.prev').addEventListener('click', function () { 
    slider.goTo('prev');
    });

document.querySelector('.next').addEventListener('click', function () { 
    slider.goTo('next');
    });

$('ul.catalogue__tabs').on('click', 'li:not(.catalogue__tab_active)', function() {
    $(this)
    .addClass('catalogue__tab_active').siblings().removeClass('catalogue__tab_active')
    .closest('div.container').find('div.catalogue__content').removeClass('catalogue__content_active').eq($(this).index()).addClass('catalogue__content_active');
});

    // $('.catalogue-item__link').each(function(i) {
    //     $(this).on('click', function(e) {
    //         e.preventDefault();
    //         $('.catalogue-item__default').eq(i).toggleClass('catalogue-item__default_active');
    //         $('.catalogue-item__list').eq(i).toggleClass('catalogue-item__list_active');
    //         });
    //     });

    // $('.catalogue-item__back').each(function(i) {
    //     $(this).on('click', function(e) {
    //         e.preventDefault();
    //         $('.catalogue-item__default').eq(i).toggleClass('catalogue-item__default_active');
    //         $('.catalogue-item__list').eq(i).toggleClass('catalogue-item__list_active');
    //         });
    //     });

function toggleSlide (item) {
    $(item).each(function(i) {
        $(this).on('click', function(e) {
            e.preventDefault();
            $('.catalogue-item__default').eq(i).toggleClass('catalogue-item__default_active');
            $('.catalogue-item__list').eq(i).toggleClass('catalogue-item__list_active');
            });
        });
};

toggleSlide ('.catalogue-item__link');
toggleSlide ('.catalogue-item__back');

 // Modal

$('[data-modal=consultation]').on('click', function () {
    $('.overlay, #consultation').fadeIn('slow');
});

$('.modal__close').on('click', function () {
    $('.overlay, #consultation, #thanks, #order').fadeOut('slow');
});

$('.button_mini').each(function(i) {
    $(this).on('click', function() {
        $('#order .modal__descr').text($('.catalogue-item__subtitle').eq(i).text());
        $('.overlay, #order').fadeIn('slow');
    })
});

// $('#consult-form').validate();
// $('#consultation form').validate({
//     rules: {
//         name:  {
//             required: true,
//             minlength: 2
//         },
//         phone: "required",
//         email: {
//             required: true,
//             email: true
//         }
//     },
//     messages: {
//         name: {
//             required: "Пожалуйста, введите своё имя",
//             minlength: jQuery.validator.format("Минимум {0} символа!")
//         },
//         phone: "Пожалуйста, введите свой номер телефона",
//         email: {
//           required: "Пожалуйста, введите свой email",
//           email: "Неправильно введён адрес почты"
//         }
//     }
// });
// $('#order form').validate();

function validateForms(form){
    $(form).validate({
        rules: {
            name:  {
                required: true,
                minlength: 2
            },
            phone: "required",
            email: {
                required: true,
                email: true
            }
        },
        messages: {
            name: {
                required: "Пожалуйста, введите своё имя",
                minlength: jQuery.validator.format("Минимум {0} символа!")
            },
            phone: "Пожалуйста, введите свой номер телефона",
            email: {
              required: "Пожалуйста, введите свой email",
              email: "Неправильно введён адрес почты"
            }
        }
    });
};

validateForms('#consult-form');
validateForms('#consultation form');
validateForms('#order form');