  function submitUserDetails(event){
    event.preventDefault();
    var email = document.getElementById("email").value;
    var name = document.getElementById("name").value;
    var userDetails = {
        name: name,
        email: email
    };
    localStorage.setItem("userDetails",JSON.stringify(userDetails));
    showUserOnScreen(userDetails);
 }
 function showUserOnScreen(userDetails){
  const parentItem=document.getElementById('users');
  const item = document.createElement('li');
  item.textContent=userDetails.name+" "+userDetails.email;
  parentItem.appendChild(item);
 }
 