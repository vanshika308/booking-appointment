  function submitUserDetails(event){
    event.preventDefault();
    var email = document.getElementById("email").value;
    var name = document.getElementById("name").value;
   // var storedObjects = JSON.parse(localStorage.getItem("storedObjects")) || [];
    var userDetails = {
        name: name,
        email: email
    };
    //storedObjects.push(userDetails);
  axios.post("https://crudcrud.com/api/874a145083894416a44eb349b611fc5c/appointmentData", userDetails)
   .then((response)=>{
    showUserOnScreen(response.data)
    console.log(response)
   })
   .catch((error)=>{
    console.log(error)
   })

    showUserOnScreen(userDetails);
 }
 function showUserOnScreen(userDetails){
 
  var userList = document.getElementById("users");
  const item = document.createElement('li');
  item.setAttribute('class','element');

  const deleteButton =document.createElement('button');
  deleteButton.setAttribute('class','btn-li');
  deleteButton.textContent="delete";
  const editButton =document.createElement('input');
  editButton.type='button';
  editButton.value="edit";
  editButton.onclick=()=>{
    localStorage.removeItem("userDetails");
    parentItem.removeChild(item);
    document.getElementById('name').value=userDetails.name;
    document.getElementById('email').value=userDetails.email;
  }
  deleteButton.addEventListener("click",function(){
    userList.removeChild(item);
    localStorage.removeItem("userDetails");
  });
  item.textContent=userDetails.name+" "+userDetails.email;
  item.appendChild(deleteButton);
  item.appendChild(editButton);
  const parentItem=document.getElementById('users');
  parentItem.appendChild(item);
 }
 function editUserDetails(userDetails, listItem) {
  var name = listItem.querySelector('.name').textContent;
  var email = listItem.querySelector('.email').textContent;
  
  // Populate the input fields with the extracted values
  document.getElementById('name').value = name;
  document.getElementById('email').value = email;
}