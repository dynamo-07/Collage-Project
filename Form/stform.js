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
    const Collage_Name = document.getElementById('Collage_Name').value;
    console.log(Collage_Name);
    const Student_Marks_Card_No = document.getElementById('Student_Marks_Card-No').value;
    console.log(Student_Marks_Card_No);



    const values =`<tr>
        <td>${Student_Name}</td>
        <td>${Date_of_Birth}</td>
        <td>${Gender}</td>
        <td>${Email}</td>
        <td>${Phone_No}</td>
        <td>${Address }</td>
        <td>${Collage_Name}</td>
        <td>${Student_Marks_Card_No}</td>

        <button>Edit</button>
        <button>Delete</button>
    </tr>`;
    document.getElementById('table').innerHTML += values ;  
})
