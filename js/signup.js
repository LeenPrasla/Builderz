function signupData() {
    const message = document.getElementById("message")
    const fname = document.getElementById("firstName").value;
    const lname = document.getElementById("lastName").value;
    const mobNum = document.getElementById("mobNum").value;
    const Email = document.getElementById("Email").value;
    const Password = document.getElementById("Password").value;
    const gender = document.getElementsByName("gender");

    var selectgender = false;
    var selectgendervalue;
    for (var i = 0; i < gender.length; i++) {
        if (gender[i].checked) {
            selectgender = true
            selectgendervalue = gender[i].value;
        }
    }

    if (fname === "") {
        message.setAttribute("class", "error_message")
        message.innerHTML = "please enter your First Name "
        message.style.display = "block"
        firstName.focus()
        setTimeout(() => {
            message.style.display = "none";
        }, 3000)
    } else if (lname === "") {
        message.setAttribute("class", "error_message")
        message.innerHTML = "please enter your last Name"
        message.style.display = "block";
        lastName.focus()
        setTimeout(() => {
            message.style.display = "none";
        }, 3000)
    } else if (mobNum === "") {
        message.setAttribute("class", "error_message")
        message.innerHTML = "please enter your Mobile Number"
        message.style.display = "block";
        // mobNum.focus()
        setTimeout(() => {
            message.style.display = "none";
        }, 3000)
    } else if (Email === "") {
        message.setAttribute("class", "error_message")
        message.innerHTML = "please enter your correct Email Address"
        message.style.display = "block";
        // Email.focus()
        setTimeout(() => {
            message.style.display = "none";
        }, 3000)
    } else if (Password === "") {
        message.setAttribute("class", "error_message")
        message.innerHTML = "please enter your correct Password"
        message.style.display = "block";
        // Password.focus()
        setTimeout(() => {
            message.style.display = "none";
        }, 3000)
    } else if (!selectgender) {
        message.setAttribute("class", "error_message")
        message.innerHTML = "please select gender"
        message.style.display = "block";
        // Password.focus()
        setTimeout(() => {
            message.style.display = "none";
        }, 3000)
    }
    else {
        const obj = {
            fname: fname,
            lname: lname,
            mobNum: mobNum,
            Email: Email,
            Password: Password,

            selectgendervalue: selectgendervalue,

        }

        //    console.log(obj)

        // firebase.firestore().collection(`allUsers`).add({
        //     fname: fname,
        //     lname: lname,
        //     mobNum: mobNum,
        //     Email: Email,
        //     Password: Password,
        //     // selectgendervalue : selectgendervalue.value,

        // });



        firebase.auth().createUserWithEmailAndPassword(obj.Email, obj.Password)



            .then((user) => {

                message.innerHTML = "Signup successfully !";
                message.style.display = "block";

                message.style.backgroundColor = "rgb(141, 255, 147)"
                message.style.Color = "green"

                
                // user.user.sendEmailVerification();
                // obj.uid = user.user.uid;
                // firebase.firestore().collection(`allUsers`)
                //     .doc(user.user.uid)
                //     .set(obj).then((d) => {
                //         console.log(d)
                //     })
                // if (user.user.emailVerified === false) {
                //     setTimeout(()=>{
                //         // window.location.href = "./../pages/emailverify.html"
                //         window.location.href = "C:\Users\NTech\Downloads\project\1\js"

                //         // alert()
                //     },3000)
                // }
                setTimeout(() => {
                    // window.location = "./login.html"
                }, 1000)
                setTimeout(() => {
                    message.style.display = "none";
                }, 3000)
            })
            .catch((err) => {
                // console.log(err.message)
                message.innerHTML = err.message
                message.style.display = "block"
                setTimeout(() => {
                    message.style.display = "none";
                }, 3000)

                // alert("errorororo")


            })


    }

}