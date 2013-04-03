(function($){
    $(document).ready(function() {
        // page scroll actions - for sidebar
        var sidebar = $('.floating'),
            sidebar_posY = sidebar.offset() && sidebar.offset().top;
            
        $(document).scroll(function(){
            var scrollY = $(window).scrollTop();
            
            // if the scrolling elements aren't fixed
            // recalculate default y position because of
            // slow loading elements like header and ads
            if (!sidebar.hasClass('fixed')) {
                sidebar_posY = sidebar.offset() && sidebar.offset().top;
            }
            
            // sidebar
            if (scrollY > sidebar_posY-10) {
                sidebar.addClass('fixed');
            } else {
                sidebar.removeClass('fixed');
            }
        });
        
        $('.show-links').find('a').click(function(e) {
            e.preventDefault();
            if ($(this).hasClass('active')) {
                $(this).removeClass('active').parent().next('.class-links').hide(200);
                $(this).html('Class links');
           } else {
                $(this).addClass('active').parent().next('.class-links').show(300);
                $(this).html('Hide links');
            }
        });
    });
})(jQuery);