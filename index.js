document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    // Get email and password values
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
  
    // Create user data object
    var userData = { email: email, password: password };
  
    // Convert user data to JSON string
    var jsonData = JSON.stringify(userData);
  
    // Save JSON data to a file
    var blob = new Blob([jsonData], { type: 'application/json' });
    var url = URL.createObjectURL(blob);
    var a = document.createElement('a');
    a.href = url;
    a.download = 'user_data.json';
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(url);
  
    // Alert user about successful save
    alert('User data saved successfully!');
  
    // Clear form fields
    document.getElementById('loginForm').reset();
  });
  