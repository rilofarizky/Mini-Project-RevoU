function validateForm() {
  var name = document.forms["card-content"]["form-name"].value;
  var email = document.forms["card-content"]["form-email"].value;
  var interest = document.forms["card-content"]["interest"].value;
  const success = document.getElementById("success");
  const failed = document.getElementById("failed");

  if (name == "" || email == "" || interest == "") {
    failed.style.display = 'block';
  }
  else {
    setTimeout(() => {
      name.value = '';
      email.value = '';
      interest.value = '';
    }, 2000);
    success.style.display = 'block'
  }

  setTimeout(() => {
    failed.style.display = 'none';
    success.style.display = 'none'
  }, 4000);
}

