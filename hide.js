var W;
$(document).ready(function(){
    W = window.innerWidth;
  $(window).resize(function(){
  	var width = window.innerWidth;
      
      if((W>1070) && (width<=1070))
      {
          //alert("W -- >>"+ W +"width -->> "+ width);
          W = width;
          if((document.getElementById("spbtn").innerText=="Hide College Plan") && (document.getElementById("btnstud").innerText=="Hide"))
          {
              document.getElementById("Stud").style.display="none";
              document.getElementById("Stud2").style.display="block";
              document.getElementById("btnstud2").innerHTML="Hide";
              window.location.href="#Stud2";
              
          }
          
          
          else if((document.getElementById("scpbtn").innerText=="Hide School Plan") && (document.getElementById("btnschool").innerText=="Hide"))
          {
             
              document.getElementById("School").style.display="none";
              document.getElementById("School2").style.display="block";
              document.getElementById("btnschool2").innerHTML="Hide";
              window.location.href="#School2";
          }
          
          
          else if((document.getElementById("cpbtn").innerText=="Hide Corporate Plan") && (document.getElementById("btncorp").innerText=="Hide"))
          {
           
              document.getElementById("Corp").style.display="none";
              document.getElementById("Corp2").style.display="block";
              document.getElementById("btncorp2").innerHTML="Hide";
              window.location.href="#Corp2";
          }}
          
          else if((W<=1070) && (width>1070)) 
          {
              //alert("W -- >>"+ W +"width -->> "+ width);
              W = width;
              if((document.getElementById("spbtn").innerText=="Hide College Plan") && (document.getElementById("btnstud2").innerText=="Hide"))
          {
              
              document.getElementById("Stud").style.display="block";
              document.getElementById("Stud2").style.display="none";
              document.getElementById("btnstud").innerHTML="Hide";
              window.location.href="#Stud";
          }
          else if((document.getElementById("scpbtn").innerText=="Hide School Plan") && (document.getElementById("btnschool2").innerText=="Hide"))
          {
              document.getElementById("School2").style.display="none";
              document.getElementById("School").style.display="block";
              document.getElementById("btnschool").innerHTML="Hide";
              window.location.href="#School";
          }
          else if((document.getElementById("cpbtn").innerText=="Hide Corporate Plan") && (document.getElementById("btncorp2").innerText=="Hide"))
          {
              
              document.getElementById("Corp2").style.display="none";
              document.getElementById("Corp").style.display="block";
              document.getElementById("btncorp").innerHTML="Hide";
              window.location.href="#Corp";
          }
          
          }
          
     })})

function visibility()
{
if(document.getElementById("btn1").innerText=="Read More")
{

document.getElementById("extra").style.display="block";
document.getElementById("btn1").innerHTML="Read Less";
window.location.href="#About";
}
else
{
document.getElementById("extra").style.display="none";
document.getElementById("btn1").innerHTML="Read More";
}}


function show1(scrWidth)
{
if(document.getElementById("spbtn").innerText=="Show College Plan")
{

document.getElementById("spbtn").innerHTML="Hide College Plan";

if(scrWidth>1070){
document.getElementById("Stud").style.display="block";
document.getElementById("btnstud").innerHTML="Hide";
window.location.href="#Stud";}
else{
document.getElementById("Stud2").style.display="block";
document.getElementById("btnstud2").innerHTML="Hide";
window.location.href="#Stud2";}
}
    
else
{
document.getElementById("spbtn").innerHTML="Show College Plan";
if(scrWidth>1070){    
document.getElementById("Stud").style.display="none";
document.getElementById("btnstud").innerHTML="Show";}
else{
document.getElementById("Stud2").style.display="none";
document.getElementById("btnstud2").innerHTML="Show";}    

}}


function show2(scrWidth)
{
if(document.getElementById("cpbtn").innerText=="Show Corporate Plan")
{
document.getElementById("cpbtn").innerHTML="Hide Corporate Plan";
if(scrWidth>1070){
document.getElementById("Corp").style.display="block";
document.getElementById("btncorp").innerHTML="Hide";
window.location.href="#Corp";}
else{
document.getElementById("Corp2").style.display="block";
document.getElementById("btncorp2").innerHTML="Hide";
window.location.href="#Corp2";}
}
    
else
{
document.getElementById("cpbtn").innerHTML="Show Corporate Plan";
if(scrWidth>1070){
document.getElementById("Corp").style.display="none";
document.getElementById("btncorp").innerHTML="Show";}
else{
document.getElementById("Corp2").style.display="none";
document.getElementById("btncorp2").innerHTML="Show";}
  
}}

  

function show3(scrWidth)
{
if(document.getElementById("scpbtn").innerText=="Show School Plan")
{
document.getElementById("scpbtn").innerHTML="Hide School Plan";
if(scrWidth>1070){
document.getElementById("School").style.display="block";
document.getElementById("btnschool").innerHTML="Hide";
window.location.href="#School";}
else{
document.getElementById("School2").style.display="block";
document.getElementById("btnschool2").innerHTML="Hide";
window.location.href="#School2";}
    
}

else
{
document.getElementById("scpbtn").innerHTML="Show School Plan";
if(scrWidth>1070){    
document.getElementById("School").style.display="none";
document.getElementById("btnschool").innerHTML="Show";}
else{
document.getElementById("School2").style.display="none";
document.getElementById("btnschool2").innerHTML="Show";}
    
}

}  


function show4()
{
if(document.getElementById("tr1").innerText=="Show Trainer Profile")
{

document.getElementById("Train").style.display="block";
document.getElementById("tr1").innerHTML="Hide Trainer Profile";
document.getElementById("btntr").innerHTML="Hide";
window.location.href="#Train";

}
else
{
document.getElementById("Train").style.display="none";
document.getElementById("tr1").innerHTML="Show Trainer Profile";
document.getElementById("btntr").innerHTML="Show";

}}

function show(order)
{   
    var scrWidth = window.innerWidth;
    
    //alert("The order is "+order);
    if(order == 2)
        {
            if( ((document.getElementById("cpbtn").innerText == "Hide Corporate Plan") || (document.getElementById("cpbtn").innerText == "Show Corporate Plan") ) && ((document.getElementById("spbtn").innerText == "Show College Plan") && (document.getElementById("scpbtn").innerText == "Show School Plan")))
                {
                    //alert("Corp Plan");
                    show2(scrWidth);
                }
            else if(document.getElementById("spbtn").innerText == "Hide College Plan")
                {
                    show1(scrWidth);
                    show2(scrWidth);
                }
            else if(document.getElementById("scpbtn").innerText == "Hide School Plan")
                {
                    show3(scrWidth);
                    show2(scrWidth);
                }
            
        }
    else if(order == 1)
        {
            
            if( ((document.getElementById("spbtn").innerText == "Hide College Plan") || (document.getElementById("spbtn").innerText == "Show College Plan") ) && ((document.getElementById("cpbtn").innerText == "Show Corporate Plan") && (document.getElementById("scpbtn").innerText == "Show School Plan")))
                {
                    //alert("show1");
                    //alert("Student Plan");
                    show1(scrWidth);
                }
            
            else if(document.getElementById("cpbtn").innerText == "Hide Corporate Plan")
                {
                    show2(scrWidth);
                    show1(scrWidth);
                }
            else if(document.getElementById("scpbtn").innerText == "Hide School Plan")
                {
                    show3(scrWidth);
                    show1(scrWidth);
                }
            
            
        }
    else if(order == 3)
        {
            
            if( ((document.getElementById("scpbtn").innerText == "Hide School Plan") || (document.getElementById("scpbtn").innerText == "Show School Plan") ) && ((document.getElementById("cpbtn").innerText == "Show Corporate Plan") && (document.getElementById("spbtn").innerText == "Show College Plan")))
                {
                    //alert("School Plan");
                    show3(scrWidth);
                }
            
            else if(document.getElementById("spbtn").innerText == "Hide College Plan")
                {
                    show1(scrWidth);
                    show3(scrWidth);
                }
            else if(document.getElementById("cpbtn").innerText == "Hide Corporate Plan")
                {
                    show2(scrWidth);
                    show3(scrWidth);
                }
        }
    
}

$(window).resize(function() {
  
    adapt();
    
});

$(window).load(function() {
    adapt();
});

function adapt()
{
    var scrwidth = window.innerWidth;
    
    if(scrwidth<=360)
        {
            document.getElementById("img1").className="small";
            document.getElementById("img2").className="small";
            document.getElementById("img3").className="small";
            document.getElementById("img4").className="small";
        }
    else
        {
            document.getElementById("img1").className="big";
            document.getElementById("img2").className="big";
            document.getElementById("img3").className="big";
            document.getElementById("img4").className="big";
            
        }
   /* alert("profile");
    var scrwidth = window.innerWidth;
    var q1 = window.matchMedia("(max-width:845px)")
    if (q1.matches)
        {
            alert("macth 1");
            document.getElementById("right").flex-flow="column";
        }
    else
        {
            alert("macth 2");
            
            document.getElementById("right").flex-flow="row";
        }
    /*
    if (scrwidth<845)
        {
            //alert("Columnlength")
        
    }
    else if(scrwidth>=845)
        {
            //a=document.getElementById('cplan').offsetHeight;
            //b=document.getElementById('splan').offsetHeight;
            document.getElementById('splan').=a+"px";
            //alert(a+" and "+b);
            //alert("Columnlength");
            //alert("Columnlength")
}*/
    //alert(scrwidth);
}

$(document).on('click','.navbar-collapse.show',function(e) {

    if( $(e.target).is('a') && ( $(e.target).attr('class') != 'dropdown-toggle' ) ) {
        $(this).collapse('hide');
    }

});

$(document).ready(function() {
    
    var dynamic = $('.dynamic');
    var static = $('.static');
    
    static.height(dynamic.height());

});



/*$(document).ready(function(){
  //$(window).onload(function(){
  	var width = window.innerWidth;
	  document.getElementById("spbtn").innerHTML="Show College Plan";
      document.getElementById("scpbtn").innerHTML="Show School Plan";
      document.getElementById("cpbtn").innerHTML="Show Corporate Plan";
	  if (width > 1000) {
	    document.getElementById("Stud2").style.display="none";
        document.getElementById("School2").style.display="none";
        document.getElementById("Corp2").style.display="none";
      }
    else
        {
        document.getElementById("Stud").style.display="none";
        document.getElementById("School").style.display="none";
        document.getElementById("Corp").style.display="none";

            
        }
        
  })
*/