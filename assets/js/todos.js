//check off specific todos by clicking
$("ul").on("click", "li", function(){
    $(this).toggleClass('completed');
});
//click on x to delete the completed task
$("ul").on("click", "span", function(event){
   $(this).parent().fadeOut(1000,function(){
       $(this).remove();
   });
   event.stopPropagation(); 
});

//for input type adding new todos in task list

$("input").keypress(function(event){
    if(event.which === 13){
        //grabbing new To-Dos from text input
        var addToDotxt = $(this).val();
        $(this).val("");
        //adding them to the list
        $("ul").append("<li><span><i class='fa fa-trash' aria-hidden='true'></i></span> " + addToDotxt + "</li>");
    }
    
});

$(".fa-plus").click(function(){
    $("input").fadeToggle();
})