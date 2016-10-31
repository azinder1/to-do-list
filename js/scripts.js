//user interface logic
$(function(){
  $('form#form-group').submit(function(event){
  event.preventDefault();

  var userChores = [];
  $("input:checkbox[name=chores]:checked").each(function()  {
    var choreLists = $(this).val();
    userChores.push(choreLists);
  var inputUser = $('#kidname').val();
  console.log(inputUser);
  })
  });
});
