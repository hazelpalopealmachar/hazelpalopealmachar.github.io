document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();
  const statusMsg = document.getElementById('statusMsg');
  
  // Validation
  if (!name || !email || !message) {
    statusMsg.textContent = '⚠️ Please fill in all fields.';
    statusMsg.className = 'text-center font-medium text-red-600';
    return;
  }
  
  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    statusMsg.textContent = '⚠️ Please enter a valid email address.';
    statusMsg.className = 'text-center font-medium text-red-600';
    return;
  }
  
  // Success message
  statusMsg.textContent = '✓ Message sent successfully! I\'ll get back to you soon.';
  statusMsg.className = 'text-center font-medium text-green-600';
  
  // Clear form
  document.getElementById('contactForm').reset();
  
  // Clear success message after 5 seconds
  setTimeout(() => {
    statusMsg.textContent = '';
  }, 5000);
});
