//display the time 
let convertedDate = moment().format('MMM Do YYYY, h:mm:ss a ');
document.getElementById('currentDay').innerHTML = convertedDate;
var list = JSON.parse(localStorage.getItem('todolist')) || [];
function renderTodo(list){
   $('#save-button').empty();
   for (var i= 0; i<list.length; i++){
      var toDoItem = $('form-control');
      toDoItem.text(list[i]);
   }
};
//when the planning a task click on the button to add 
$('.save-button').on('click', function(event) {
    event.preventDefaut()
   console.log("1")
});
//$('save-button').on('click', function(save));
//loop for knowing the time of day 
//for (let i = 8; i = 18; i++) {}