(function iife($) {
  Drupal.behaviors.whdDropdown = {
    attach: function (context, settings) {
      // Remove no-js since JS is indeed executing.
      document.documentElement.classList.remove('no-js');

      // Find our toggle button.
      const toggle = document.querySelector('.main-nav button[aria-expanded]');

      // Assign event listener to allow toggling.
      toggle.addEventListener('click', (ev) => {
        // Manage state of our toggle button.
        var pressed = ev.target.getAttribute('aria-expanded') === 'true';
        ev.target.setAttribute('aria-expanded', String(!pressed));

        // Toggle display of main-nav
        document.querySelector('.main-nav').classList.toggle('is--expanded');
      });
    },
  };
})(jQuery);
