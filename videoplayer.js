
  
  

$('#cc').bind('click', function (e) {
    
    var iFrameSrc = $('iframe').attr('src');
    $('iframe').attr('src','');
    $('iframe').attr('src',iFrameSrc);
});


var videos = document.getElementsByTagName("iframe"), fraction = 0.8;

function checkScroll() {
    //alert("hellloooooo");


  for(var i = 0; i < videos.length; i++) {
    var video = videos[i];

    var x = 0,
        y = 0,
        w = video.width,
        h = video.height,
        r, //right
        b, //bottom 
        visibleX, visibleY, visible,
        parent;


    parent = video;
    while (parent && parent !== document.body) {
      x += parent.offsetLeft;
      y += parent.offsetTop;
      parent = parent.offsetParent;
    }

    r = x + parseInt(w);
    b = y + parseInt(h);


    visibleX = Math.max(0, Math.min(w, window.pageXOffset + window.innerWidth - x, r - window.pageXOffset));
    visibleY = Math.max(0, Math.min(h, window.pageYOffset + window.innerHeight - y, b - window.pageYOffset));


    visible = visibleX * visibleY / (w * h);


    if (visible < fraction) {
      var iFrameSrc = $('iframe').attr('src');
    $('iframe').attr('src','');
    $('iframe').attr('src',iFrameSrc);
    } 
  }

};

window.addEventListener('scroll', checkScroll, false);
window.addEventListener('resize', checkScroll, false);

//check at least once so you don't have to wait for scrolling for the video to start
window.addEventListener('load', checkScroll, false);
checkScroll();