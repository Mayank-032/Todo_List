/*$(this).css("color", "gray");
$(this).css("text-decoration", "line-through");*/

//Another Way
/*$(this).css({
    color: "gray",
    textDecoration: "line-through" // Also we cannot write text-decoration in javascript
});*/

//This code is for deleting and non-deleting effect after clicking on item of list.
$("ul").on("click", "li", function(){ // This line means this code will run for <ul> but only when <li> is clicked.
    /*if($(this).css("color") === "rgb(128, 128, 128)"){
        $(this).css({
            color: "black",
            textDecoration: "none" 
        });
    }else{
        $(this).css({
            color: "gray",
            textDecoration: "line-through" 
        });
    }*/

    //ReFactoring
    $(this).toggleClass("completed");
});

/*Note:
(A) Event Bubbling: For eg if we have triggered body, ul, li, and X in above code, then as soon as we 
    click on span then all the tiggered elements will occur from inside to outside i.e. 
    1.) span, 2.) li, 3.) ul, and 4.) body : in this way series of events will occur.

(B) Difference between ".click" and ".on("click")": 
        ".click" wil only trigger the elements which is written in the actual code but it will fail 
        for future added elements in todo.

        ".on("click")" will trigger both, "elements present in actual code", as well as "elements going
         to be added in future in the list".
*/

//Now this code is for clicking on X to delete a todo item from a list.
$("ul").on("click", "span", function(event){    // This function is to target "X".  // This line means this code will run for <ul> but only when <span> is clicked
    $(this).parent().fadeOut(500, function(){   // This is used to target list item to be faded out.
        $(this).remove();   // This is used to target that the element will also be deleted from the
    });                     //  code.

    event.stopPropagation(); // This is used to target that if any function is written for its parent
});                          // parent element then that function should be stopped else inshort we 
                             // can say that no event bubbling will occur.

$("input[type='text']").keypress(function(event){
    if(event.which === 13){
        //Grabbing new todo from input
        var newTodo = $(this).val();
        $(this).val("");

        //creating a new li and adding it to ul by using append method which insert new li at last.
        $("ul").append("<li><span><i class='fa fa-trash'></i></span> "+ newTodo + "</li>");
    }
});

$(".fa-plus").click(function(){
    $("input[type='text']").fadeToggle();
});