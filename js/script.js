document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('email2').addEventListener('blur', function() {
      var email1 = document.getElementById('email1').value;
      var email2 = this.value;
  
      var message = document.getElementById('message');
      if (email1 !== email2) {
          message.textContent = "Emails do not match.";
      } else {
          message.textContent = "";
      }
  });
});
