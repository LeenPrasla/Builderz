function SIGN() {
    window.open("./PAGES\SIGNUP");
}





function readmore() {
    alert("please visit our website BULDERZ.COM")
}









function signup() {
    var fullname = document.getElementById("input1");
    var email = document.getElementById("input2");
    if (fullname.value === "") {
        alert("full name required");



    } else if (email.value === "") {
        alert("email required")



    } else {


        document.getElementById("input1").value = "";
        document.getElementById("input2").value = "";
        alert("your file submited");

    }
}