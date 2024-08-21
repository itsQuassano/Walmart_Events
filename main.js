const menuItems = Array.from(document.querySelectorAll('.tab-content .menu-item')).map((item, index) => {
    return {
        id: index,
        image: item.querySelector('img').src,
        title: item.querySelector('h4').textContent,
        price: parseFloat(item.querySelector('.price-and-button h4').textContent.replace('$', ''))
    };
});

console.log(menuItems);

let cart = [];

function addtocart(a) {
    cart.push({ ...menuItems[a] });
    displaycart();
}


function delElement(a) {
    cart.splice(a, 1);
    displaycart();
}

function displaycart() {
    let j = 0, total = 0;
    document.getElementById("count").innerHTML = cart.length;
    if (cart.length === 0) {
        document.getElementById('cartItem').innerHTML = "Your cart is empty";
        document.getElementById("total").innerHTML = "$ 0.00";
    } else {
        document.getElementById("cartItem").innerHTML = cart.map((items) => {
            const { image, title, price } = items;
            total += price;
            document.getElementById("total").innerHTML = "$ " + total.toFixed(2);
            return (
                `<div class='cart-item'>
                    <div class='row-img'>
                        <img class='rowimg' src=${image}>
                    </div>
                    <p style='font-size:12px;'>${title}</p>
                    <h2 style='font-size: 15px;'>$ ${price.toFixed(2)}</h2>` +
                `<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 64 64" onclick='delElement(${j++})' style='cursor: pointer;'><path d="M 30 2 C 29 2 28.101563 2.5 27.5 3.300781 L 24.5 8 L 13 8 C 11.300781 8 10 9.300781 10 11 L 10 17 C 10 18.699219 11.300781 20 13 20 L 13.097656 20 L 16.597656 53.5 C 16.898438 56.101563 19 58 21.597656 58 L 46.402344 58 C 49 58 51.101563 56.101563 51.402344 53.5 L 54.902344 20 L 55 20 C 56.699219 20 58 18.699219 58 17 L 58 11 C 58 9.300781 56.699219 8 55 8 L 43.5 8 L 40.402344 3.300781 C 39.902344 2.5 38.902344 2 37.902344 2 Z M 30.097656 4 L 38 4 C 38.300781 4 38.601563 4.199219 38.800781 4.398438 L 41.097656 8 L 26.902344 8 L 29.199219 4.398438 C 29.398438 4.199219 29.699219 4 30.097656 4 Z M 13 10 L 55 10 C 55.601563 10 56 10.398438 56 11 L 56 17 C 56 17.601563 55.601563 18 55 18 L 13 18 C 12.398438 18 12 17.601563 12 17 L 12 11 C 12 10.398438 12.398438 10 13 10 Z M 16 12 C 15.398438 12 15 12.398438 15 13 L 15 15 C 15 15.601563 15.398438 16 16 16 C 16.601563 16 17 15.601563 17 15 L 17 13 C 17 12.398438 16.601563 12 16 12 Z M 21 12 C 20.398438 12 20 12.398438 20 13 L 20 15 C 20 15.601563 20.398438 16 21 16 C 21.601563 16 22 15.601563 22 15 L 22 13 C 22 12.398438 21.601563 12 21 12 Z M 26 12 C 25.398438 12 25 12.398438 25 13 L 25 15 C 25 15.601563 25.398438 16 26 16 C 26.601563 16 27 15.601563 27 15 L 27 13 C 27 12.398438 26.601563 12 26 12 Z M 31 12 C 30.398438 12 30 12.398438 30 13 L 30 15 C 30 15.601563 30.398438 16 31 16 C 31.601563 16 32 15.601563 32 15 L 32 13 C 32 12.398438 31.601563 12 31 12 Z M 37 12 C 36.398438 12 36 12.398438 36 13 L 36 15 C 36 15.601563 36.398438 16 37 16 C 37.601563 16 38 15.601563 38 15 L 38 13 C 38 12.398438 37.601563 12 37 12 Z M 42 12 C 41.398438 12 41 12.398438 41 13 L 41 15 C 41 15.601563 41.398438 16 42 16 C 42.601563 16 43 15.601563 43 15 L 43 13 C 43 12.398438 42.601563 12 42 12 Z M 47 12 C 46.398438 12 46 12.398438 46 13 L 46 15 C 46 15.601563 46.398438 16 47 16 C 47.601563 16 48 15.601563 48 15 L 48 13 C 48 12.398438 47.601563 12 47 12 Z M 52 12 C 51.398438 12 51 12.398438 51 13 L 51 15 C 51 15.601563 51.398438 16 52 16 C 52.601563 16 53 15.601563 53 15 L 53 13 C 53 12.398438 52.601563 12 52 12 Z M 15.097656 20 L 52.902344 20 L 49.402344 53.300781 C 49.199219 54.800781 48 56 46.402344 56 L 21.597656 56 C 20.097656 56 18.800781 54.800781 18.597656 53.300781 Z M 34 25 C 33.398438 25 33 25.398438 33 26 L 33 46 C 33 46.601563 33.398438 47 34 47 C 34.601563 47 35 46.601563 35 46 L 35 26 C 35 25.398438 34.601563 25 34 25 Z M 25 25.097656 C 24.398438 25.097656 24 25.597656 24.097656 26.097656 L 25.097656 46.097656 C 25 46.597656 25.5 47 26 47 C 26.601563 47 27 46.5 27 46 L 26 26 C 26 25.398438 25.5 25 25 25.097656 Z M 43.097656 25.097656 C 42.5 25.097656 42.097656 25.5 42.097656 26 L 41.097656 46 C 41 46.5 41.398438 47 42 47 C 42.601563 47 43 46.597656 43 46.097656 L 44 26.097656 C 44 25.5 43.597656 25.097656 43.097656 25.097656 Z M 23 52 C 22.398438 52 22 52.398438 22 53 C 22 53.601563 22.398438 54 23 54 L 37 54 C 37.601563 54 38 53.601563 38 53 C 38 52.398438 37.601563 52 37 52 Z M 41 52 C 40.398438 52 40 52.398438 40 53 C 40 53.601563 40.398438 54 41 54 L 45 54 C 45.601563 54 46 53.601563 46 53 C 46 52.398438 45.601563 52 45 52 Z"></path></svg></div>`
            );
        }).join('');
    }
}

$('.cart').click(function () {
    $('#cartModal').toggleClass('hidden show');
});

// Close the cart modal if clicked outside
$(document).mouseup(function (e) {
    var cartModal = $('#cartModal');
    if (!cartModal.is(e.target) && cartModal.has(e.target).length === 0 && !$('.cart').is(e.target)) {
        cartModal.removeClass('show').addClass('hidden');
    }
});
(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner(0);
    
    
    // Initiate the wowjs
    new WOW().init();
    
    
   // Back to top button
   $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
        $('.back-to-top').fadeIn('slow');
    } else {
        $('.back-to-top').fadeOut('slow');
    }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Modal Video
    $(document).ready(function () {
        var $videoSrc;
        $('.btn-play').click(function () {
            $videoSrc = $(this).data("src");
        });
        console.log($videoSrc);

        $('#videoModal').on('shown.bs.modal', function (e) {
            $("#video").attr('src', $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0");
        })

        $('#videoModal').on('hide.bs.modal', function (e) {
            $("#video").attr('src', $videoSrc);
        })
    });


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });


    // Testimonial carousel
    $(".testimonial-carousel-1").owlCarousel({
        loop: true,
        dots: false,
        margin: 25,
        autoplay: true,
        slideTransition: 'linear',
        autoplayTimeout: 0,
        autoplaySpeed: 10000,
        autoplayHoverPause: false,
        responsive: {
            0:{
                items:1
            },
            575:{
                items:1
            },
            767:{
                items:2
            },
            991:{
                items:3
            }
        }
    });

    $(".testimonial-carousel-2").owlCarousel({
        loop: true,
        dots: false,
        rtl: true,
        margin: 25,
        autoplay: true,
        slideTransition: 'linear',
        autoplayTimeout: 0,
        autoplaySpeed: 10000,
        autoplayHoverPause: false,
        responsive: {
            0:{
                items:1
            },
            575:{
                items:1
            },
            767:{
                items:2
            },
            991:{
                items:3
            }
        }
    });

    
})(jQuery);

