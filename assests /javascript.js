//display the time 
let convertedDate = moment().format('MMM Do YYYY, h:mm:ss a ');
document.getElementById('currentDay').innerHTML = convertedDate;
//when the planning a task click on the button to add 
$('.save-button').on('click', function(event) {
    event.preventDefaut()
   console.log("1")
});
//$('save-button').on('click', function(save));
//loop for knowing the time of day 
//for (let i = 8; i = 18; i++) {}