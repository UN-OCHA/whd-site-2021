(function iife ($) {
  Drupal.behaviors.frontPage = {
    attach: function (context, settings) {
      var $mainNavLinks = $('.main-nav__contents a');

      // Set up smooth-scrolling for Hamburger nav.
      //
      // First, check for prefers-reduced-motion and only continue if the media
      // query resolves to false.
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches === false) {
        $mainNavLinks.on('click', function smoothScroll (ev) {
          ev.preventDefault();
          var target = '#' + $(this).attr('href').split('#')[1];
          $(target).get(0).scrollIntoView({behavior: 'smooth'});
        });
      }
    },
  };
})(jQuery);
