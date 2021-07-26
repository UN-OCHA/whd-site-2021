(function iife($) {
  Drupal.behaviors.whdMailchimp = {
    attach: function (context, settings) {
      // Store some elements for repeated use
      $mcForm = $('#mc-embedded-subscribe-form');
      $mcComponent = $('.mailchimp-signup');
      $shareComponent = $('.share');

      $mcForm.on('submit', function handleMCSubmit(ev) {
        $mcComponent.addClass('mailchimp-signup--is-hidden');
        $shareComponent.addClass('share--is-visible');
      });
    },
  };
})(jQuery);
