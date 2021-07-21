//display the time 
let convertedDate = moment().format('MMM Do YYYY, h:mm:ss a ');
document.getElementById('currentDay').innerHTML = convertedDate;

//list out the tasks 
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
   localStorage.setItem("todoList")
   
});
