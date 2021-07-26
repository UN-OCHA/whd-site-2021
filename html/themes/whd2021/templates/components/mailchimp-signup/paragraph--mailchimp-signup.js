(function iife($) {
  Drupal.behaviors.whdMailchimp = {
    attach: function (context, settings) {
      // Store some elements for repeated use
      $mcForm = $('#mc-embedded-subscribe-form');
      $mcComponent = $('.mailchimp-signup');
      $shareComponent = $('.share');
      cookieValue = 'whd2021signup=true';

      // MailChimp Embed submission handler.
      $mcForm.on('submit', function handleMCSubmit(ev) {
        transitionUi();

        // Set submission cookie
        // So that the MCE form won't show next time the page loads.
        document.cookie = cookieValue +'; path=/; max-age=31536000; SameSite=Strict';
      });

      // Check submission cookie
      // If the cookie exists, update the UI to show Share dialog automatically.
      if (document.cookie.indexOf(cookieValue) !== -1) {
        transitionUi();
      }

      /**
       * Helper function to transition the UI uniformly across multiple events
       */
      function transitionUi() {
        $mcComponent.addClass('mailchimp-signup--is-hidden').attr('aria-hidden', 'true');
        $shareComponent.addClass('share--is-visible').attr('aria-hidden', 'false');
      }
    },
  };
})(jQuery);
