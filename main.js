function submitUserDetails(event) {
  event.preventDefault();
  var email = document.getElementById("email").value;
  var name = document.getElementById("name").value;
  var userDetails = {
    name: name,
    email: email
  };

  axios.post("https://crudcrud.com/api/663c8ab428a344cba11815b9dac23925/appointmentData", userDetails)
    .then((response) => {
      console.log(response.data);
      showUserOnScreen(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
}

window.addEventListener("DOMContentLoaded", () => {
  axios.get("https://crudcrud.com/api/663c8ab428a344cba11815b9dac23925/appointmentData")
    .then((response) => {
      console.log(response.data);
      response.data.forEach((userDetails) => {
        showUserOnScreen(userDetails);
      });
    })
    .catch((error) => {
      console.log(error);
    });
});

function showUserOnScreen(userDetails) {
  var userList = document.getElementById("users");
  const item = document.createElement('li');
  item.setAttribute('class', 'element');

  const deleteButton = document.createElement('button');
  deleteButton.setAttribute('class', 'btn-li');
  deleteButton.textContent = "delete";
  deleteButton.addEventListener("click", function () {
    axios.delete("https://crudcrud.com/api/663c8ab428a344cba11815b9dac23925/appointmentData/" + userDetails._id)
      .then((response) => {
        console.log(response);
        userList.removeChild(item);
      })
      .catch((error) => {
        console.log(error);
      });
  });

  const editButton = document.createElement('input');
  editButton.type = 'button';
  editButton.value = "edit";
  editButton.onclick = () => {
    editUserDetails(userDetails, item);
  };

  item.textContent = userDetails.name + " " + userDetails.email;
  item.appendChild(deleteButton);
  item.appendChild(editButton);
  userList.appendChild(item);
}

function editUserDetails(userDetails, listItem) {
  var name = userDetails.name;
  var email = userDetails.email;

  // Populate the input fields with the extracted values
  document.getElementById('name').value = name;
  document.getElementById('email').value = email;
}
