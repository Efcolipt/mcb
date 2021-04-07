;
($(function() {
    jQuery(document).ready(function($) {

        // Header
        $('.hamburger').click(function() {
            $(this).toggleClass('is-active');
        })

        let scrollTop = 0, header = $('header')
        if (header.offset().top > 0)
            header.addClass('header_bg')

        $(window).scroll(function(event) {
            let currentScrollTop = $(this).scrollTop()
            window.pageYOffset <= 0 ? header.removeClass('header_bg') : header.addClass('header_bg')
            scrollTop = currentScrollTop
        })


        $('.navbar_menu_item_link').click(function() {
            $('.navbar_menu_item_submenu').removeClass('navbar_menu_item_submenu_show')
            $(this).parent().find('.navbar_menu_item_submenu').stop().toggleClass('navbar_menu_item_submenu_show')
        })

        // /Header

        $('.services_list_item_sub').removeClass('services_list_item_sub_show')

        $('.services_list_item').hover(function() {
            $(this).find('.services_list_item_sub').toggleClass('services_list_item_sub_show')
        }, function() {
            $(this).find('.services_list_item_sub').toggleClass('services_list_item_sub_show')
        })

        $('.gas_aritcle_content_slider').slick({
            arrows:false,
            dots:true,
        })

        // Animate Scroll
        $('a').on('click', function() {
            let href = $(this).attr('href')
            if (href[0] == "#") {
                $('html, body').animate({
                    scrollTop: $(href).offset().top
                }, {
                    duration: 400,
                    easing: "swing"
                })
            } else {
                location.href = href
            }

            return false
        })
    })
}))
