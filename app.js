window.onload = function(){ 

let user_name=document.getElementById('username');
let user_password=document.getElementById('password');

var btn=document.getElementById('btn');

btn.onclick=function(){    
    if(user_name.value==="admin"&&user_password.value==="12345"){
        //location.href="https://www.google.com/";
        location.href="all.html";
    }
    else{
        alert("no")
    }

}

}