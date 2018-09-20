(function(d){var h=[];d.loadImages=function(a,e){"string"==typeof a&&(a=[a]);for(var f=a.length,g=0,b=0;b<f;b++){var c=document.createElement("img");c.onload=function(){g++;g==f&&d.isFunction(e)&&e()};c.src=a[b];h.push(c)}}})(window.jQuery);
$.fn.hasAttr = function(name) { var attr = $(this).attr(name); return typeof attr !== typeof undefined && attr !== false; };


$(document).ready(function() {
r=function(){dpi=window.devicePixelRatio;var a='data-src'; if($('.js .slide0').hasAttr('src')) { a='src'; } $('.js .slide0').attr(a, (dpi>1) ? 'images/ping-mu-kuai-zhao-2018-09-20-shang-wu9.42.53-1000.png' : 'images/ping-mu-kuai-zhao-2018-09-20-shang-wu9.42.53-500.png');
var a='data-src'; if($('.js .slide1').hasAttr('src')) { a='src'; } $('.js .slide1').attr(a, (dpi>1) ? 'images/ping-mu-kuai-zhao-2018-09-20-shang-wu11.33.07-1000.png' : 'images/ping-mu-kuai-zhao-2018-09-20-shang-wu11.33.07-500.png');};
if(!window.HTMLPictureElement){r();}
$('.js .slider').slick({lazyLoad: 'ondemand',slidesToShow: 1,slidesToScroll: 1,speed: 100,dots: true,arrows: true,infinite: false,autoplay: true,pauseOnHover: false,autoplaySpeed: 2050});
});