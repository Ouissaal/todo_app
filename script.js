
 $(document).ready(function () {

   function addTask(taskName) {
     $("#taskList").append(
       `<div class="inputzoon"><li><input type="checkbox" class="taskCheckbox">` +
         taskName +
         `<img src="img/delete.png" alt="" class="removeBtn"></li><div/>`
     );
   }

   $("#addTaskBtn").on("click",function () {
     let task = $("#taskInput").val();
     if (task !== "") {
       addTask(task);
       alert("Task added successfully");

       $("#taskInput").val("");
       
       }
       
      
     }
   )});

   $("#taskInput").keypress(function (e) {
     if (e.which === 13) {
       var task = $("#taskInput").val();
       if (task !== "") {
         addTask(task);
         $("#taskInput").val("");
       }
     }
   });


   $(document).on("change", ".taskCheckbox", function () {
     $(this).parent().toggleClass("completed");
   });


   $(document).on("click", ".removeBtn", function () {
     $(this).parent().remove();
     confirm("Are you sure you want to remove");
   });

 $("#errorMessages").empty();

  function showerrorMessages(message) {
    if(taskInput == null){
      showerrorMessages("something is wrong!!!");
    }
    let errorMessage = $("<h5>").text(message);
    $("#errorMessages").empty();
    $("#errorMessages").append(errorMessage);
  }
 if (!taskInput) {
       showerrorMessages("Please don't leave  field empty !");
    } 
      
     
   
  

