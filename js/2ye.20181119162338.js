(function(d){var h=[];d.loadImages=function(a,e){"string"==typeof a&&(a=[a]);for(var f=a.length,g=0,b=0;b<f;b++){var c=document.createElement("img");c.onload=function(){g++;g==f&&d.isFunction(e)&&e()};c.src=a[b];h.push(c)}}})(window.jQuery);
$.fn.hasAttr = function(name) { var attr = $(this).attr(name); return typeof attr !== typeof undefined && attr !== false; };

var lwi=-1;function thresholdPassed(){var w=$(window).width();var p=false;var cw=0;if(w>=480){cw++;}if(w>=768){cw++;}if(w>=960){cw++;}if(w>=1200){cw++;}if(lwi!=cw){p=true;}lwi=cw;return p;}

$(document).ready(function() {
r=function(){if(thresholdPassed()){dpi=window.devicePixelRatio;if($(window).width()>=1200){$('.js-462').attr('src', (dpi>1) ? 'images/wechatimg831-986.png' : 'images/wechatimg831-493.png');}else if($(window).width()>=960){$('.js-462').attr('src', (dpi>1) ? 'images/wechatimg831-790.png' : 'images/wechatimg831-395.png');}else if($(window).width()>=768){$('.js-462').attr('src', (dpi>1) ? 'images/wechatimg831-632.png' : 'images/wechatimg831-316.png');}else if($(window).width()>=480){$('.js-462').attr('src', (dpi>1) ? 'images/wechatimg831-394.png' : 'images/wechatimg831-197.png');}else{$('.js-462').attr('src', (dpi>1) ? 'images/wechatimg831-262.png' : 'images/wechatimg831-131.png');}}};
if(!window.HTMLPictureElement){$(window).resize(r);r();}

});