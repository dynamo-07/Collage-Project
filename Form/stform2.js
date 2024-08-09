document.getElementById('form').addEventListener('submit' ,function(event){
    event.preventDefault();
    const Student_Name = document.getElementById('Student_Name').value;
    console.log(Student_Name);
    const Date_of_Birth= document.getElementById('Date_of_Birth').value;
    console.log(Date_of_Birth);
    const Gender = document.getElementById('Gender').value;
    console.log(Gender);
    const Email = document.getElementById('Email').value;
    console.log(Email);
    const Phone_No = document.getElementById('Phone_No').value;
    console.log(Phone_No);
    const Address = document.getElementById('Address').value;
    console.log(Address);
    const Current_Collage_Name = document.getElementById('Current_Collage_Name').value;
    console.log(Current_Collage_Name);
    const Current_Collage_Addres = document.getElementById('Current_Collage_Address').value;
    console.log(Current_Collage_Addres);
    const Marks_Card_No = document.getElementById('Marks_Card_No').value;
    console.log(Marks_Card_No);
    const values =`<tr>
        <td>${Student_Name}</td>
        <td>${Date_of_Birth}</td>
        <td>${Gender}</td>
        <td>${Email}</td>
        <td>${Phone_No}</td>
        <td>${Address }</td>
        <td>${Current_Collage_Name}</td>
        <td>${Current_Collage_Addres}</td>
        <td>${Marks_Card_No}</td>
        <button>Edit</button>
        <button>Delete</button>
    </tr>`;
    document.getElementById('table').innerHTML += values ;  
})
