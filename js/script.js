/**
 * @file
 * Theme hooks for the Drupal Bootstrap base theme.
 */
(function ($, Drupal, gizra, Attributes) {

    $(".navbar-toggle").click(function(){
    $(".nav").css("width","100%");

  });

    $(".closesidebar").click(function(){
    $(".nav").css("width","0");;

  });
  
   $(window).scroll(function() {
    if ($(document).scrollTop() > 15) {
      $("header").addClass("small");
    } else {
      $("header").removeClass("small");
    }
  });

})(window.jQuery, window.Drupal, window.Drupal.gizra, window.Attributes);
