$(window).scroll(function () {
  var top_of_element = $("#bars").offset().top;
  var bottom_of_element = $("#bars").offset().top + $("#bars").outerHeight();
  var bottom_of_screen = $(window).scrollTop() + $(window).innerHeight();
  var top_of_screen = $(window).scrollTop();

  if (bottom_of_screen > top_of_element && top_of_screen < bottom_of_element) {
    jQuery(".progress-bar").each(function () {
      jQuery(this)
        .find(".progress-content")
        .animate(
          {
            width: jQuery(this).attr("data-percentage"),
          },
          2000
        );

      jQuery(this)
        .find(".progress-number-mark")
        .animate(
          { left: jQuery(this).attr("data-percentage") },
          {
            duration: 2000,
            step: function (now, fx) {
              var data = Math.round(now);
              jQuery(this)
                .find(".percent")
                .html(data + "%");
            },
          }
        );
    });
  }
});
