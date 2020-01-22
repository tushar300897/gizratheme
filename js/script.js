/**
 * @file
 * Theme hooks for the Drupal Bootstrap base theme.
 */
(function ($, Drupal, gizra, Attributes) {

    $(".navbar-toggle").click(function(){
    $(".nav").show();

  });

    $(".closesidebar").click(function(){
    $(".nav").hide();

  });
  

})(window.jQuery, window.Drupal, window.Drupal.gizra, window.Attributes);
