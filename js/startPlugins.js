$(".main-carousel").flickity({
  // options
  contain: true,
  pageDots: false,
  wrapAround: true,
});

$(".carousel-nav").flickity({
  asNavFor: ".main-carousel",
  cellAlign: "center",
  contain: true,
  pageDots: false,
  prevNextButtons: false,
});

$(function () {
  $(
    "#inputModel, #lizingInputModel, #inputTime, #inputAppealType"
  ).selectmenu();
});

$(function () {
  $("#havalLang").selectmenu().selectmenu("menuWidget").addClass("langWidget");
});
$(function () {
  $("#inputDate").datepicker();
});

$(document).ready(function () {
  $(".zoom-gallery-exterior").magnificPopup({
    delegate: "a",
    type: "image",
    closeOnContentClick: false,
    closeBtnInside: false,
    mainClass: "mfp-with-zoom mfp-img-mobile",
    gallery: {
      enabled: true,
    },
    zoom: {
      enabled: true,
      duration: 300,
      opener: function (element) {
        return element.find("img");
      },
    },
  });
});
$(document).ready(function () {
  $(".zoom-gallery-interior").magnificPopup({
    delegate: "a",
    type: "image",
    closeOnContentClick: false,
    closeBtnInside: false,
    mainClass: "mfp-with-zoom mfp-img-mobile",
    gallery: {
      enabled: true,
    },
    zoom: {
      enabled: true,
      duration: 300,
      opener: function (element) {
        return element.find("img");
      },
    },
  });
});

$(document).ready(function () {
  $(".zoom-gallery-comfort").magnificPopup({
    delegate: "a",
    type: "image",
    closeOnContentClick: false,
    closeBtnInside: false,
    mainClass: "mfp-with-zoom mfp-img-mobile",
    gallery: {
      enabled: true,
    },
    zoom: {
      enabled: true,
      duration: 300,
      opener: function (element) {
        return element.find("img");
      },
    },
  });
});
