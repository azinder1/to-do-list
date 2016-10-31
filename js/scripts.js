
function Chore(child, tasks) {
  this.firstPerson = child;
  this.newTasks = tasks;
}

//user interface logic
$(function(){
  $('form#chore-list').submit(function(event){
    event.preventDefault();
    var inputUser = $('#kid-name').val();
    var userChores = [];
    $("input:checkbox[name=chores]:checked").each(function()  {
     var choreLists = $(this).val();
     userChores.push(choreLists);
     });
    var newChore = new Chore(inputUser, userChores);
    debugger;
    newChore.newTasks.forEach(function(newTask){
      $(".chores p").append("<input type=\"checkbox\" name=\"assignedChores\"><span class='chore'>" + newTask + "</span></input><br>")
    $(".chore").last().click(function() {
      $("#show-chore").show();
      $(".add-name").text(newChore.firstPerson);
    });
    });
  });
  $('form#chores').click(function(event){
    event.preventDefault();
    var userDoneChores = [];
    $("input:checkbox[name=assignedChores]:checked").each(function()  {
     var doneChores = $(this).val();
     userChoreDone.push(doneChores);
     console.log(userDoneChores);
   });
   userDoneChores.forEach(function(userDoneChore) {
     $(".chores p").shift("<input type=\"checkbox\" name=\"assignedChores\"><span class='chore'>" + userDoneChore+ "</span></input><br>")
  });
  });
});
