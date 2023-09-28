var x = document.getElementById("login")
var y = document.getElementById("register")
var z = document.getElementById("btn")

function login(){
    x.style.left = "27px"
    y.style.left = "350px"
    z.style.left = "0px"
}
function register(){
    x.style.left = "-350px"
    y.style.left = "25px"
    z.style.left = "150px"
}


function myLogPass(){
    var a = document.getElementById("logPass")
    var b = document.getElementById("eye")
    var c = document.getElementById("eye-slash")
    
    if(a.type=="password"){
        a.type= "text"
        b.style.opacity = "0"
        c.style.opacity = "1"
    }else{
        a.type= "password"
        b.style.opacity = "1"
        c.style.opacity = "0"
    }

}
