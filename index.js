var button = document.querySelector('.sign-up a');

button.addEventListener('click', function() {
  alert('Thank you for signing up!');
});

var productCards = document.querySelectorAll('.product-card');

for (var i = 0; i < productCards.length; i++) {
  productCards[i].addEventListener('click', function() {
    var productName = this.getAttribute('data-name');
    
    alert('You clicked on ' + productName);
  });
}
