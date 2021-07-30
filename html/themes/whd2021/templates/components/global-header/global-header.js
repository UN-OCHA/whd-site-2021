(function iife($) {
  Drupal.behaviors.whdDropdown = {
    attach: function (context, settings) {
      // Remove no-js since JS is indeed executing.
      document.documentElement.classList.remove('no-js');

      // Find our toggle button.
      var $mainNav = $('.main-nav');
      var $mainNavToggle = $('.main-nav button[aria-expanded]');
      var $mainNavContents = $('.main-nav__contents');
      var $mainNavLinks = $('.main-nav__contents a');

      // Assign event listener to allow toggling.
      $mainNavToggle.on('click', function (ev) {
        // Manage state of our toggle button.
        var pressed = $mainNavToggle.attr('aria-expanded') === 'true';
        $mainNavToggle.attr('aria-expanded', String(!pressed));

        // Toggle display of main-nav
        $mainNav.toggleClass('is--expanded');
        $mainNavContents.attr('aria-hidden', String(pressed));
      });
    },
  };
})(jQuery);
