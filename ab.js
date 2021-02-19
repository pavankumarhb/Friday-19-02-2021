function validateForm(){
    var name=document.getElementById("name");
    var phone=document.getElementById("phone");
    if(name.value==""){
        alert("enter the value in  name");
    }
    if(!(isNaN(name.value))){
        alert("p");
    }
    if(isNaN(phone.value)){
        alert("u");
    }
  

}