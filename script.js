const data = [
    { name: "john", age: 24, profession: "developer" },
    { name: "jane", age: 27, profession: "admin" },
  ];
  
  // 1. Print Developers
  function printDeveloper() {
         console.log(data);
    }
    printDeveloper();
  
  // 2. Add Data
  function addData() {
    //Collect data from user through prompt
    const name = prompt("Enter name:");
    const age = parseInt(prompt("Enter age:"));
    const profession = prompt("Enter profession:");
    
    // Now we will check whether user provided valid input or not
    if(name && !isNaN(age) && profession){
        //Create a new data object with the collected data
        const newData={name, age, profession};
        //Add the new data object to the data Array
        data.push(newData);
        //Log a message to confirm addition
        console.log("Data added", newData);
    }else{
        console.log("Invalid Input.Data not added.")
    }

  }
  
  // 3. Remove Admins
  function removeAdmin() {
    const filteredData = data.filter(person => person.profession !== "admin");
    console.log("Admin removed:", filteredData);
  }
  
  // 4. Concatenate Array
  function concatenateArray() {
    const array1 = [1, 2, 3];
    const array2 =[4, 5, 6];  
  
    const concatenatedArray = array1.concat(array2);
    console.log("Concatinated Array", concatenatedArray);
  }
  
  // 5. Average Age
  function averageAge() {
    let totalAge = 0;
    for(let i=0; i<data.length; i++){
        totalAge += data[i].age;
    }
  const average = totalAge / data.length;
  console.log("Average Age:", average);
  }
  averageAge();
  
  // 6. Age Check
  function checkAgeAbove25() {
    const isAbove25 = data.some(person => person.age > 25);
    if (isAbove25) {
      console.log("There is at least one person above 25 years old.");
    } else {
      console.log("No person is above 25 years old.");
    }
  }
  
  // 7. Unique Professions
  function uniqueProfessions() {
    const uniqueProfessions = {}
    for(let i=0; i<data.length; i++){
        const profession = data[i].profession;
        uniqueProfessions[profession] = true;
    }
    const uniqueProfessionsArray=Object.keys(uniqueProfessions); 
    console.log("Unique Professions:", uniqueProfessionsArray);
  }
  
  // 8. Sort by Age
  function sortByAge() {
    data.sort((a, b) => a.age - b.age);
    console.log("Sorted by Age Ascending",data);
  }
  
  // 9. Update Profession
  function updateJohnsProfession() {
    const john = data.find(person => person.name === "john");
  if (john) {
    john.profession = "manager";
  }
    console.log("John's Updated Profession", data);
  }
  
  // 10. Profession Count
  function getTotalProfessions() {
    let developerCount = 0;
    let adminCount =0;
    for(let i=0; i<data.length; i++){
        const profession = data[i].profession;
        if(profession ==="developer"){
            adminCount++;
        }else if(
            profession === "admin"
        )
            adminCount++;
        }

  
    console.log("Total Developers:", developerCount);
    console.log("Total Admins:", adminCount);
  }
  