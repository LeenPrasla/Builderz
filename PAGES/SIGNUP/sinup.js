function signup(){
    var fullname = document.getElementById("lname");
    var fathername = document.getElementById("fname");
    var email = document.getElementById("mail");
    var password = document.getElementById("passwor");
    var alert = document.getElementById("cho");
    if (fullname.value === ""){
        alert.innerHTML = "full name required "
        alert.style.color = "red"
        fullname.focus();
        return false;
    }else if(fathername.value === ""){
        alert.innerHTML = "father name required "
        alert.style.color = "red"
        fathername.focus();
        return false;
    }else if (email.value === ""){
        alert.innerHTML = "email required"
        alert.style.color = "red"
        email.focus();//
        return false;
     }else if (password.value === ""){
        cho.innerHTML = "password required"
        cho.style.color = "red"
        password.focus();
        return false;
     }else{
       cho.innerHTML = "succcesfully submited"
        cho.style.color = "green"
      console.log("fullname :",fullname.value)
      console.log("Father Name : ",fathername.value)
      console.log("Email Address :",email.value)
      console.log("Password",password.value)

      document.getElementById("lname").value = "";
      document.getElementById("fname").value = "";
      document.getElementById("mail").value = "";
      document.getElementById("passwor").value = "";
} 
}