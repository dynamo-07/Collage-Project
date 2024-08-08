const storedData = localStorage.getItem('user');

if (storedData) {

  const userData = JSON.parse(storedData);
  
  document.getElementById('val').innerText = userData.user; 
  document.getElementById('val1').innerText = userData.email; 
  document.getElementById('val2').innerText = userData.pno; 
  document.getElementById('val3').innerText = userData.movie;
   
} else {
  document.getElementById('val').innerText = 'No user data found.'; 
}
function clear(){
  localStorage.clear();
}
clear();