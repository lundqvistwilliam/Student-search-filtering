/*
TASK:
Have an array with five objects minimun.
Each object should have a name, education and city

Create a group of radio-buttons for different educations (Frontend, Java, UX).
Create a Show Students-button that prints out everyone within that education when 
you press the button. OBS: There should be an option to print out everyone over all
educations.

Create a checkbox with the label "I am a teacher, I promise" that has to be
checked in order to view the list of students. If the checkbox is not checked,
alert "Please confirm you're a teacher!".


Create yet another group of radio-buttons for different cities. Filter the 
students based on both their education AND city when you press the Show
Students-button.

Create a dropdown where you can choose to filter with either year 1, year 2
or with every year.

*/

let classList = [
    {
      name: "Johan Johansson",
      education: "Frontend",
      city: "Stockholm",
      year: 2,
    },
    {
      name: "Alex Alexsson",
      education: "Java developer",
      city: "Stockholm", 
      year: 1,
      },
    {
      name: "David Davidsson",
      education: "Frontend",
      city: "Stockholm",
      year: 1,
    },
    {
      name: "Albert Albertsson",
      education: "Frontend",
      city: "Stockholm",
      year: 2,
      },
    {
      name: "William Williamsson",
      education: "Frontend",
      city: "Malmö",
      year: 2,
    },
    {
      name: "Kalle Kallesson",
      education: "UX",
      city: "Malmö",
      year: 2,
    }, 
    {
      name: "Olle Ollesson",
      education: "Java developer",
      city: "Malmö",
      year: 2,
      },
    {
      name: "Peter Petersson",
      education: "App dev",
      city: "Malmö",
      year: 1,
    },
    {
      name: "Ingrid Ingridsson",
      education: "UX",
      city: "Kalmar",
      year: 1,
    },
    {
      name: "Per Persson",
      education: "Frontend",
      city: "Kalmar", 
      year: 1,
    },
    {
      name: "Elin Elinsson",
      education: "App dev",
      city: "Kalmar",
      year: 2,
    },
  ];


  let showStudentsBtn = document.querySelector("#showStudents");
  let resultsUl = document.querySelector("#results")

  showStudentsBtn.addEventListener("click",() =>{
    resultsUl.innerHTML= "";
    let education = document.querySelector("[name='programme']:checked").value
    let isTeacher = document.querySelector("#teacherCheck").checked;
    let city = document.querySelector("[name='city']:checked").value;
    let year = document.querySelector("#year").value;


//Filtrering
  let filteredStudents = classList.filter((student) => {
    return (
      (education === "all" || student.education === education) &&
      (city === "all" || student.city === city) &&
      (year === "All" || +year === student.year)
    );
  });

  //Rendering
  if (isTeacher) {
    filteredStudents.forEach((student) => {
      let li = document.createElement("li");
      li.textContent = `Name: ${student.name} Education:${student.education} City: ${student.city} Year: ${student.year}`;
      resultsUl.append(li);
    });
  } else {
    alert("Please confirm that you are a teacher!");
  }
});



    

