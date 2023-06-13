var form = document.querySelector('form');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  
  var email = document.querySelector('#email').value;
  var password = document.querySelector('#password').value;
  
  if (email === '' || password === '') {
    alert('Please enter your email and password.');
  } else {
    form.submit();
  }
});

var button = document.querySelector('#button');

button.addEventListener('click', function() {
  alert('Thank you for registering!');
});
