function addEvent(node, type, callback) {
  if (node.addEventListener) {
    node.addEventListener(type, function(e) {
      callback(e, e.target);
    }, false);
  } else if (node.attachEvent) {
    node.attachEvent('on' + type, function(e) {
      callback(e, e.srcElement);
    });
  }
}


function instantValidation(field) {
    
    var x = field.getAttribute("id");
    if (x=="email")
        {
    if ((/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(form.email.value) || (form.email.value==="")))
        {
            field.removeAttribute("aria-invalid");

        }
    else
        {
            field.setAttribute("aria-invalid", "true");

        }}
    else if (x=="name"){
        if(((/^([a-zA-Z]+\s)*[a-zA-Z]+$/.test(form.name.value)) && ((form.name.value.length<=27) && (form.name.value.length>=3))) || (form.name.value===""))
           {
           field.removeAttribute("aria-invalid");
           }
         else
           {
           field.setAttribute("aria-invalid", "true");
           }
}}

addEvent(document, "change", function(e, target) {
  instantValidation(target);
});

var fields = [
  document.getElementsByTagName("input"),
  //document.getElementsByTagName("textarea")
];
for (var a = fields.length, i = 0; i < a; i++) {
  for (var b = fields[i].length, j = 0; j < b; j++) {
    addEvent(fields[i][j], "change", function(e, target) {
      instantValidation(target);
    });
  }
}


$(document).ready(function() {
    $('#mailer').click(function() {
        if ((/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(form.email.value)) && 
            ((/^\d{10}$/.test(form.pnumber.value)) && (form.pnumber.value.length==10)) &&
            ((/^[_A-z]*((-|\s)*[_A-z])*$/.test(form.msg.value)) && ((form.msg.value.length<=250) && (form.msg.value.length>=50))) &&
            ((/^([a-zA-Z]+\s)*[a-zA-Z]+$/.test(form.name.value)) && ((form.name.value.length<=27) && (form.name.value.length>=3)))) 
        {
            //alert("matches");
    Email.send({
    Host : "smtp.gmail.com",
    Username : "cockiller131619@gmail.com",
    Password : "131619cockiller",
    To : 'kingkhan12207@gmail.com',
    From : "cockiller131619@gmail.com",
    Subject : "sent from IGM360DEGREES.com ",
    Body : "NAME: "+$("#name").val()+"\nEMAIL: "+$("#email").val()+"\nPHONE NUMBER: "+$("#pnumber").val()+"Message: "+$("#msg").val()
}).then(
  
);
        }
        else
        {
            alert("Please Match All The Criteria of Contact Form");
        }
    /*Email.send({
    Host : "smtp.gmail.com",
    Username : "cockiller131619@gmail.com",
    Password : "131619cockiller",
    To : 'kingkhan12207@gmail.com',
    From : "cockiller131619@gmail.com",
    Subject : "sent from IGM360DEGREES.com ",
    Body : "NAME: "+$("#name").val()+"\nEMAIL: "+$("#email").val()+"\nPHONE NUMBER: "+$("#pnumber").val()+"Message: "+$("#msg").val()
}).then(
  
);*/
    });
});

//subject=' +$('#Fname').val() + '&