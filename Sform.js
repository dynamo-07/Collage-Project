document.getElementById("form").addEventListener('submit', function(event){
    event.preventDefault();
    const username = document.getElementById('Student Name').value;
    const Email = document.getElementById('Email').value;
    const PhoneNo = document.getElementById('Phone No').value;
    const AdharNo = document.getElementById('Adhar No').value;
    const CollageName = document.getElementById('Collage Name').value;
    const StudentMarksCardNo = document.getElementById('Student Marks Card No').value;
    
    if (!username || !Email || !PhoneNo || !AdharNo || !CollageName || !StudentMarksCardNo ) {
        alert('Please fill in all fields.');
        return;
    }
    const user = {
        'Student Name': username,
        'Email' : Email,
        'Phone No' : PhoneNo,
        'Adhar No': AdharNo,
        'Collage Name': CollageName,
        'Student Marks Card_No': StudentMarksCardNo,
    }
    localStorage.setItem('user',JSON.stringify(user));
})