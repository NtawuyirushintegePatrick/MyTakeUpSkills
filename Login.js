
// var attempt = 3; // Variable to count number of attempts.
// // Below function Executes on click of login button.
// function validate(){
// var username = document.getElementById("username").value;
// var password = document.getElementById("password").value;
// if ( username == "admin" && password == "admin12"){
// alert ("Login successfully");
// window.location = "dashboard.html"; // Redirecting to other page.
// return false;
// }
// else{
// attempt --;// Decrementing by one.
// alert("You have left "+attempt+" attempt;");
// // Disabling fields after 3 attempts.
// if( attempt == 0){
// document.getElementById("username").disabled = true;
// document.getElementById("password").disabled = true;
// document.getElementById("submit").disabled = true;
// return false;
// }
// }
// }
// console.log("Initializing firebase");

// const firebaseConfig = {
//     apiKey: "AIzaSyDJ9D-YEpxmEnBZck-u1M6QOdfZNNvQTZs",
//     authDomain: "atlp-capstone-project-b6159.firebaseapp.com",
//     projectId: "atlp-capstone-project-b6159",
//     storageBucket: "atlp-capstone-project-b6159.appspot.com",
//     messagingSenderId: "1042536780820",
//     appId: "1:1042536780820:web:6c265cd2a51f99f41ac301"

//   };
 

//   firebase.initializeApp(firebaseConfig);
//   const db = firebase.database();
// //   console.log(app.name);

// const auth = firebase.auth();
	
	
// function logIn(){
    
  
//     const Username = document.getElementById("username").value;
//     const Password = document.getElementById("password").value;
    

//     auth.signInWithEmailAndPassword(Username, Password)
//     .then(function() {
   
//       var user = auth.currentUser
//       var database_ref = db.ref()
  
//       var user_data = {
//         last_login : Date.now()
//       }
  
//       database_ref.child('users/' + user.uid).update(user_data)
  
//       alert('User Logged In!!')
//     //   window.location.replace('../dashboard/home.html');
//       location.href = "../dashboard/home.html";
//     })
//     .catch(function(error) {
//       var error_code = error.code
//       var error_message = error.message
  
//       alert(error_message)
//     })

    


// }


// // SIGNUP

// const signup = async (e) => {
//     e.preventDefault();
  
//     const body = {
//       fullName: document.getElementById("signup_name").value,
//       email: document.getElementById("signup_email").value,
//       password: document.getElementById("singup_password").value,
//       confirmPassword: document.getElementById("singup_confirmpassword").value,
//     };
  
//     await fetch("https:/karerandela.herokuapp.com/api/v1/users", {
//       method: "post",
//       headers: {
//         Accept: "application/json",
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(body),
//     })
//       .then((res) => res.json())
//       .then((json) => console.log(json));
//     document.getElementById("login_email").value = "";
//     document.getElementById("login_password").value = "";
//   };
//   document.getElementById("signup_button").addEventListener("click", signup);
  
  // ........LOGIN...................
  
  const login = async () => {
    // e.preventDefault();
  
    const body = {
      email: document.getElementById("username").value,
      password: document.getElementById("password").value,
    };
    await fetch("http://localhost:3000/api/v1/users/login", {
      crossDomain: true,

      method: "POST",
      headers: {
        // Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    })
      .then((res) => res.json())
      .then((json) => {
        // const { accessToken } = json;
        localStorage.setItem("TOKEN", json);
        console.log("Token", json)
        if(json != "wrong credentials!"){
          location.href = "./dashboard.html";
        }
        

        // localStorage.setItem("token", JSON.stringify({ accessToken: accessToken }));
      }).catch((error) => {
        console.log(error);
      });
  
    document.getElementById("username").value = "";
    document.getElementById("password").value = "";
  };
//   document.getElementById("submit").addEventListener("click", login);