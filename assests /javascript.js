//display the time 
let convertedDate = moment().format('MMM Do YYYY, h:mm:ss a ');
document.getElementById("currentDay").innerHTML = convertedDate;

let hourPlanner = document.getElementsByClassName('#task-add-button')
//when the planning a task click on the button to add 
 hourPlanner.addEventListener('click', addPlans);
 function addPlans(){
 console.log("working")};
    // event.preventDefalt()
   // let hour = $(this).attr("id").split("-")[0]
    // let planner = $('#'+ hour + "-plan").val()
    // localStorage.setItem(hour, planner)
    // console.log("working")
 //});
//loop for knowing the time of day 
 //for (let i=8; i=18;i++){}