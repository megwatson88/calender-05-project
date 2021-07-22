//display the time 
let convertedDate = moment().format('MMM Do YYYY');
document.getElementById('currentDay').innerHTML = convertedDate;

//list out the tasks 
var list = JSON.parse(localStorage.getItem('todolist')) || [];
function renderTodo(list) {
   $('#save-button').empty();
   for (var i = 0; i < list.length; i++) {
      var toDoItem = $('form-control');
      toDoItem.text(list[i]);

   }
};

//when the planning a task click on the button to add 
$('.save-button').on('click', function (event) {
   //event.preventDefaut();
   // console.log("1");

   //var value = $(this).parent().attr("todolist")
   var eightamvalue = document.querySelector("#eightam").value;
   localStorage.setItem('8am', eightamvalue);

   var nineamvalue = document.querySelector("#nineam").value;
   localStorage.setItem('9am', nineamvalue);

   var tenamvalue = document.querySelector("#tenam").value;
   localStorage.setItem('10am', tenamvalue);

   var elevenamvalue = document.querySelector("#elevenam").value;
   localStorage.setItem('11am', elevenamvalue);

   var noonvalue = document.querySelector("#noonam").value;
   localStorage.setItem('12pm', noonvalue);

   var onepmvalue = document.querySelector("#onepm").value;
   localStorage.setItem('1pm', onepmvalue);

   var twopmvalue = document.querySelector("#twopm").value;
   localStorage.setItem('2pm', twopmvalue);

   var threepmvalue = document.querySelector("#threepm").value;
   localStorage.setItem('3pmm', threepmvalue);

   var fourpmvalue = document.querySelector("#fourpm").value;
   localStorage.setItem('4pm', fourpmvalue);

   var fivepmvalue = document.querySelector("#fivepm").value;
   localStorage.setItem('5pm', fivepmvalue);

   var sixpmvalue = document.querySelector("#sixpm").value;
   localStorage.setItem('6pm', sixpmvalue);

   list.push("todolist");
   toDoItem = toDoItem.prepend(toDoClose);
   $('#to-do').append(toDoItem);

});

var t = new Date().getHours();

if (t < convertedDate) {
   document.write("Past");
   document.body.style.backgroundColor = "red";
} else if (t === convertedDate) {
   document.write("Right now");
   document.body.style.backgroundColor = "white";
} else {
   document.write("future");
   document.body.style.backgroundColor = "green";
};


