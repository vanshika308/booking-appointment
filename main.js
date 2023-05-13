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
 
  var userList = document.getElementById("users");
  const item = document.createElement('li');
  item.setAttribute('class','element');
  const button =document.createElement('button');
  button.setAttribute('class','btn-li');
  
  button.textContent="delete";
  button.addEventListener("click",function(){
    userList.removeChild(item);
    localStorage.removeItem("userDetails");
  });
  item.textContent=userDetails.name+" "+userDetails.email;
  item.appendChild(button);
  const parentItem=document.getElementById('users');
  parentItem.appendChild(item);
 }
 