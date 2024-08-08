document.getElementById('form').addEventListener('submit', function(event) {
  event.preventDefault();
  const username = document.getElementById('user').value;
  const email = document.getElementById('email').value;
  const phoneNumber = document.getElementById('pno').value;
  const movieName = document.getElementById('mname').value;

  if (!username || !email || !phoneNumber || !movieName) {
      alert('Please fill in all fields.');
      return;
  }
  const user = {
    'user': username,
    'email': email,
    'pno': phoneNumber,
    'movie': movieName,
  };
  localStorage.setItem('user', JSON.stringify(user));
  window.location.href = 'form1.html';
});
