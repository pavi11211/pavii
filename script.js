// Handle form submission for contact page
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
  
    if (name && email && message) {
      alert('Thank you for reaching out! We will get back to you shortly.');
      // Optionally, clear the form fields after submission
      document.getElementById('contact-form').reset();
    } else {
      alert('Please fill in all fields.');
    }
  });
  