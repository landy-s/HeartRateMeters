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
       .closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
    });
