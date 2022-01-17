$("a[href^='#']").click(function(e){
e.preventDefault();
var position=$($(this).attr("href")).offset().top;
$("body,html").animate({
    screenTop:position
})
});


