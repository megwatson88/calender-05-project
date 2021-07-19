//display the time 
let convertedDate = moment().format('MMM Do YYYY, h:mm:ss a ');
document.getElementById('currentDay').innerHTML = convertedDate;
//when the planning a task click on the button to add 
$('.task-add-button').on('click', function () {
   function addPlans() {
      console.log("1")

      let hour = $(this).attr("id").split("-")[0]
      let planner = $('#' + hour + "-plan").val()
      localStorage.setItem(hour, planner)
      console.log("working")
   }});
   //loop for knowing the time of day 
  // for (let i = 8; i = 18; i++) 