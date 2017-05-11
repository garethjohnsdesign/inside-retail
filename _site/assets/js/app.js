$(document).foundation();

$('body').removeClass('fade-out');

$('.gallery').flickity({
  // options
  imagesLoaded: true,
  setGallerySize: false,
  arrowShape: {
      x0: 10,
  x1: 60, y1: 50,
  x2: 60, y2: 40,
  x3: 20
    }
});


function subscribe() {

if (document.getElementById("form-callout").style.height == "0px" || document.getElementById("form-callout").style.height == "") {
document.getElementById("form-callout").style.height= "auto";
document.getElementById("form-callout").style.padding= "20px";
}

else {
document.getElementById("form-callout").style.height= "0px";
document.getElementById("form-callout").style.padding= "0px";
}
}