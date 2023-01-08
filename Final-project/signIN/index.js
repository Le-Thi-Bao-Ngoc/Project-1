var eml = document.querySelector("#email")
var pswd = document.querySelector("#password")
var btn = document.querySelector("#btn")

btn.addEventListener("click",checkValue)
function checkValue(event){
    event.preventDefault();
    if(eml.value == ""){
        alert("Không để chống")
    }
    else if(pswd.value == ""){
        alert("Không để chống")
    }
    else if(pswd.value.length < 6){
        alert("Mật khẩu cần lớn hơn 6 kí tự")
    }else{
        window.location.href = "../index.html";
    }
}