

// Setup selectors using jquery
var trashCan = $("li span");
var toDoItem = $("li");
var newToDoItem = $("input");
var plusSign = $("#plusSign");

// This is the initial call function
init();

// initialize the Todo List
function init() {
   userAction();
}

function userAction() {
   $("#plusSign").on("click", function() {newToDoItem.fadeToggle(1000)});
   // toDoItem.on("mouseenter", function () {trashCanDisplay($(this));});
   $("li").on("click", function() {$(this).toggleClass("crossout")});
   $("li span").on("click", function () {deleteItem($(this))});
   newToDoItem.keypress(function (event) {
      if (event.which === 13) {
         addNewItem($(this).val());
         newToDoItem.val("");
      }
   })
}


// function trashCanDisplay(item) {
//    item.firstElementChild.animate({width: "70%"})};

function addNewItem(todo) {
   $("ul").append('<li><span><i class="fa fa-trash-o"></i></span>'+todo
   + '</li>');
   trashCan = $("li span");
   toDoItem = $("li");
}

function deleteItem(item) {
   alert(item);
   item.parent().remove();
}
