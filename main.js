 function submitUserDetails(event){
    event.preventDefault();
    var email = document.getElementById("email").value;
    var name = document.getElementById("name").value;
    var userDetails = {
        name: name,
        email: email
    };
    localStorage.setItem("userDetails",JSON.stringify(userDetails));
 }
 var DetailsString=localStorage.getItem("userDerails");
 var details=JSON.parse(DetailsString);
 if (details) {
    var storedName = details.name;
    var storedEmail = details.email;
    console.log(storedName);
    console.log(storedEmail);
  } else {
    console.log("No user details found in local storage.");
  }