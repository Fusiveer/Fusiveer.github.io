function changeTab(evt, cityName) {
  $(".app-section🔶").hide();
  $(".app-navigation-button🔶").removeClass("app-navigation-button-active🔶");
  $("#" + cityName).css("display", "flex");
  $(evt.currentTarget).addClass("app-navigation-button-active🔶");
}
