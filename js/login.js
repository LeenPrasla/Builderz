const message =document.getElementById("message")
function loginData(){
    let Email =document.getElementById("Email").value;
    let Password =document.getElementById("Password").value;
  
    if (Email === ""){
        message.setAttribute("class", "error_message")
        message.innerHTML="please enter your correct Email Address"
        message.style.display="block"
         setTimeout(()=>{
     message.style.display="none";
        },3000)
    }else if(Password === ""){
        message.setAttribute("class", "error_message")
        message.innerHTML="please enter your correct Password"
        message.style.display="block";
        // Password.focus()
        setTimeout(()=>{
     message.style.display="none";
        },3000)
    }else{
         const obj ={
             Email: Email,
             Password: Password,
 
         }

        // console.log(obj)
        
        firebase.auth().signInWithEmailAndPassword(obj.Email,obj.Password)
     .then((user)=>{
           console.log(user.user)   
    
      message.innerHTML = "Login successfully !";
        message.style.display="block";
        // Password.focus()
        message.style.backgroundColor="rgb(141, 255, 147)"
        message.style.Color="green"
          setTimeout(()=>{
     window.location.href ="../index.html"
        },3000)
    })
     
     
     .catch((error)=>{
        
        message.innerHTML = error.message ;
      
        message.style.display = "block"
        setTimeout(() => {
            message.style.display = "none";
        }, 3000)
 
     })

      

      
    }
}