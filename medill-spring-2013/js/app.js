(function($){
    var $window = $(window);
    
    // side bar
    setTimeout(function () {
      var topoffset = $('.sidebar-nav').offset().top - $('.navbar').height();
      $('.sidebar-nav').affix({
        offset: {
          top: function () { return topoffset }
        }
      })
    }, 100)
    
    // open external links in a new tab
    $('section').find('a[href*="http"]').attr('target','_blank');
})(jQuery);