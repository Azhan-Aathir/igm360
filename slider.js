//var W,H;
var slideIndex = 0;

document.addEventListener("DOMContentLoaded", function(){
    showSlides();
});


function showSlides() {
    var width = window.innerWidth;
    var height = window.innerHeight;
    //W=width;
    //H=height;
    var mq = window.matchMedia("(orientation: portrait)");
    var i;
    var slides = document.getElementsByClassName("slideshow");  
    if(mq.matches || width>=1000 || (!mq.matches&& height>=500)){
  
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";}
        //$('slides[i]').hide();
        slideIndex++;
        if (slideIndex > slides.length) {slideIndex = 1}
        //$(slides[slideIndex-1]).fadeIn('slow');
    
        slides[slideIndex-1].style.display = "block";
        var q = document.getElementsByClassName("slideshow")[slideIndex-1].id;
        if (q=="q1")
        {
            setTimeout(showSlides, 13000);
        }
        else if (q=="q2")
        {
            setTimeout(showSlides, 12000);
        }
        else if (q="q3")
        {
            setTimeout(showSlides, 9000);
        }
        else if(q="q4")
        {
            setTimeout(showSlides, 10000);
        }
        }
    else //mq doesnt matches
        {
            
            for (i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";}
            //document.getElementById("logo").style.top="50%";
            setTimeout(showSlides,2000);}
            
        //$('slides[i]').hide();  

}

/*
function checkdimensions()
{
    var widthCD = window.innerwidth;
    var heightCD = window.innerheight;
    var mq = window.matchMedia("(orientation: portrait)");   
    //trigger if height is less than 500px
    if (H>=500 && heightCD<500 && widthCD > heightCD)
    {showSlides();}
    
    //trigger if width goes more than 1000px , if it is less than 1000px before
    else if(W<1000 && widthCD>=1000)
    {showSlides();}
    
    //PortraitMode
    else if(mq.matches)
    {showSlides();}
    

    //
    //
    
}
*/

window.addEventListener("orientationchange", function() {
    //alert("resize");
    // Get screen size (inner/outerWidth, inner/outerHeight)
showSlides();
}, false);

window.addEventListener("resize", debounce(function() {
    //alert("resize");
    // Get screen size (inner/outerWidth, inner/outerHeight)
//checkdimensions();
    //setimg();
    showSlides();
}, 05));