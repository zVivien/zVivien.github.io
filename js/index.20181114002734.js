(function(d){var h=[];d.loadImages=function(a,e){"string"==typeof a&&(a=[a]);for(var f=a.length,g=0,b=0;b<f;b++){var c=document.createElement("img");c.onload=function(){g++;g==f&&d.isFunction(e)&&e()};c.src=a[b];h.push(c)}}})(window.jQuery);
$.fn.hasAttr = function(name) { var attr = $(this).attr(name); return typeof attr !== typeof undefined && attr !== false; };


$(document).ready(function() {
r=function(){dpi=window.devicePixelRatio;$('.js').attr('src', (dpi>1) ? 'images/11-2400.jpg' : 'images/11-1200.jpg');
$('.js-2').attr('src', (dpi>1) ? 'images/tuo-yuan-xing-68.png' : 'images/tuo-yuan-xing-34.png');
$('.js-3').attr('src', (dpi>1) ? 'images/xing-zhuang--66.png' : 'images/xing-zhuang--33.png');
$('.js-4').attr('src', (dpi>1) ? 'images/xing-zhuang-50.png' : 'images/xing-zhuang-25.png');
$('.js-5').attr('src', (dpi>1) ? 'images/xing-zhuang1-68.png' : 'images/xing-zhuang1-34.png');
$('.js-6').attr('src', (dpi>1) ? 'images/xing-zhuang3-66.png' : 'images/xing-zhuang3-33.png');
$('.js-7').attr('src', (dpi>1) ? 'images/welcome-120.png' : 'images/welcome-60.png');
$('.js-8').attr('src', (dpi>1) ? 'images/fen-zu-0-140.png' : 'images/fen-zu-0-70.png');
$('.js-9').attr('src', (dpi>1) ? 'images/fen-zu1--100.png' : 'images/fen-zu1--50.png');
$('.js-10').attr('src', (dpi>1) ? 'images/jian-tou-554.png' : 'images/jian-tou-277.png');
$('.js-11').attr('src', (dpi>1) ? 'images/ju-xing222-690.png' : 'images/ju-xing222-345.png');
$('.js-12').attr('src', (dpi>1) ? 'images/bei-jing-2184.jpg' : 'images/bei-jing-1092.jpg');
$('.js-13').attr('src', (dpi>1) ? 'images/ju-xing-394.png' : 'images/ju-xing-197.png');
$('.js-14').attr('src', (dpi>1) ? 'images/lu-jing-50.png' : 'images/lu-jing-25.png');
$('.js-15').attr('src', (dpi>1) ? 'images/ju-1838.jpg' : 'images/ju-919.jpg');

$('.js-17').attr('src', (dpi>1) ? 'images/tuo-yuan-xing--544.png' : 'images/tuo-yuan-xing--272.png');
$('.js-18').attr('src', (dpi>1) ? 'images/zhong-wen-ming-zhao-ya-xuan-ying-wen-ming-vivien-zai-530.png' : 'images/zhong-wen-ming-zhao-ya-xuan-ying-wen-ming-vivien-zai-265.png');
$('.js-19').attr('src', (dpi>1) ? 'images/12-308.png' : 'images/12-154.png');
$('.js-20').attr('src', (dpi>1) ? 'images/zu-tu-2394.png' : 'images/zu-tu-1197.png');
$('.js-21').attr('src', (dpi>1) ? 'images/jin-jie-140.png' : 'images/jin-jie-70.png');
$('.js-22').attr('src', (dpi>1) ? 'images/xue-sheng-zu-zhi-148.png' : 'images/xue-sheng-zu-zhi-74.png');
$('.js-23').attr('src', (dpi>1) ? 'images/zhuan-ye-neng-li-140.png' : 'images/zhuan-ye-neng-li-70.png');
$('.js-24').attr('src', (dpi>1) ? 'images/ke-yu-huo-dong-130.png' : 'images/ke-yu-huo-dong-65.png');
$('.js-25').attr('src', (dpi>1) ? 'images/fen-zu-4-240.png' : 'images/fen-zu-4-120.png');

$('.js-27').attr('src', (dpi>1) ? 'images/jian-tou-264.png' : 'images/jian-tou-132.png');
$('.js-28').attr('src', (dpi>1) ? 'images/li-zi-442.png' : 'images/li-zi-221.png');
$('.js-29').attr('src', (dpi>1) ? 'images/li2-436.png' : 'images/li2-218.png');
$('.js-30').attr('src', (dpi>1) ? 'images/li3-372.png' : 'images/li3-186.png');
$('.js-31').attr('src', (dpi>1) ? 'images/tu-1730.jpg' : 'images/tu-865.jpg');
$('.js-32').attr('src', (dpi>1) ? 'images/vivien-220.png' : 'images/vivien-110.png');

$('.js-34').attr('src', (dpi>1) ? 'images/001-430.png' : 'images/001-215.png');
$('.js-35').attr('src', (dpi>1) ? 'images/0022-440.png' : 'images/0022-220.png');
$('.js-36').attr('src', (dpi>1) ? 'images/003-424.png' : 'images/003-212.png');
$('.js-37').attr('src', (dpi>1) ? 'images/zhi-shi-chu-bei-328.png' : 'images/zhi-shi-chu-bei-164.png');
$('.js-38').attr('src', (dpi>1) ? 'images/zhang-6-1.png' : 'images/zhang-3-1.png');
$('.js-39').attr('src', (dpi>1) ? 'images/zhao-tie-she-ji2017-2018-yi--424.png' : 'images/zhao-tie-she-ji2017-2018-yi--212.png');
$('.js-40').attr('src', (dpi>1) ? 'images/zhi-xian-2-294.png' : 'images/zhi-xian-2-147.png');
$('.js-41').attr('src', (dpi>1) ? 'images/qing-shang-534.png' : 'images/qing-shang-267.png');
$('.js-42').attr('src', (dpi>1) ? 'images/ju-xing44-6.png' : 'images/ju-xing44-3.png');
$('.js-43').attr('src', (dpi>1) ? 'images/di-qing-shang-ji-duan-380.jpg' : 'images/di-qing-shang-ji-duan-190.jpg');
$('.js-44').attr('src', (dpi>1) ? 'images/shuo-ming-1194.png' : 'images/shuo-ming-597.png');
$('.js-45').attr('src', (dpi>1) ? 'images/fen-zu-2-50.png' : 'images/fen-zu-2-25.png');
$('.js-46').attr('src', (dpi>1) ? 'images/xing-zhuang6-54.png' : 'images/xing-zhuang6-27.png');
$('.js-47').attr('src', (dpi>1) ? 'images/ju-xing5-1000.png' : 'images/ju-xing5-500.png');
$('.js-48').attr('src', (dpi>1) ? 'images/gao-qing-shang-wei-wan-shi-zhong-374.jpg' : 'images/gao-qing-shang-wei-wan-shi-zhong-187.jpg');
$('.js-49').attr('src', (dpi>1) ? 'images/di-qing-shang-si-wei-dan-yi-376.jpg' : 'images/di-qing-shang-si-wei-dan-yi-188.jpg');
$('.js-50').attr('src', (dpi>1) ? 'images/tu-1184.png' : 'images/tu-592.png');
$('.js-51').attr('src', (dpi>1) ? 'images/wei-xin-tu-pian_20170415153938-880.jpg' : 'images/wei-xin-tu-pian_20170415153938-440.jpg');
$('.js-52').attr('src', (dpi>1) ? 'images/sos--474.jpg' : 'images/sos--237.jpg');
$('.js-53').attr('src', (dpi>1) ? 'images/2017-2018-yi-bian-pai-she-ji-534.png' : 'images/2017-2018-yi-bian-pai-she-ji-267.png');

$('.js-55').attr('src', (dpi>1) ? 'images/za-zhi-feng-mian-gai-1254.png' : 'images/za-zhi-feng-mian-gai-627.png');
$('.js-56').attr('src', (dpi>1) ? 'images/zhi-xian-3-1920.png' : 'images/zhi-xian-3-960.png');
$('.js-57').attr('src', (dpi>1) ? 'images/img-620184128-0004-872.png' : 'images/img-620184128-0004-436.png');

$('.js-59').attr('src', (dpi>1) ? 'images/cha-tu-she-ji-474.png' : 'images/cha-tu-she-ji-237.png');
$('.js-60').attr('src', (dpi>1) ? 'images/zui-hou-2400.png' : 'images/zui-hou-1200.png');
$('.js-61').attr('src', (dpi>1) ? 'images/-vivienbook-258.png' : 'images/-vivienbook-129.png');
$('.js-62').attr('src', (dpi>1) ? 'images/dian-hua-66.png' : 'images/dian-hua-33.png');
$('.js-63').attr('src', (dpi>1) ? 'images/you-xiang-66.png' : 'images/you-xiang-33.png');
$('.js-64').attr('src', (dpi>1) ? 'images/wei-xin-68.png' : 'images/wei-xin-34.png');
$('.js-65').attr('src', (dpi>1) ? 'images/wei-bo-60.png' : 'images/wei-bo-30.png');};
if(!window.HTMLPictureElement){r();}

});