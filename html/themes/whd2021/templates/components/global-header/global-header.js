(function iife($) {
  Drupal.behaviors.whdDropdown = {
    attach: function (context, settings) {
      // Remove no-js since JS is indeed executing.
      document.documentElement.classList.remove('no-js');

      // Find our toggle button.
      var mainNav = document.querySelector('.main-nav');
      var mainNavToggle = document.querySelector('.main-nav button[aria-expanded]');
      var mainNavContents = document.querySelector('.main-nav__contents');

      // Assign event listener to allow toggling.
      mainNavToggle.addEventListener('click', (ev) => {
        // Manage state of our toggle button.
        var pressed = ev.target.getAttribute('aria-expanded') === 'true';
        ev.target.setAttribute('aria-expanded', String(!pressed));

        // Toggle display of main-nav
        mainNav.classList.toggle('is--expanded');
        mainNavContents.setAttribute('aria-hidden', String(pressed));
      });
    },
  };
})(jQuery);
