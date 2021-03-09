

/*     lis.click(function(){//this function written to change color and strike through when clicked
        //if li is gray 
        if ($(this).css("color")==="rgb(128, 128, 128)"){
            $(this).css({
                color:"black",
                textDecoration:'none'
            })
            
        }else{

            $(this).css({
            color:"gray",
            textDecoration:'line-through'
            })
        }
                
    }); */
//or we can do it like this

$("ul ").on('click','li',function(){//this function written to change color and strike through when clicked

    $(this).toggleClass("completed",500);            
});

/* To stop an element from bubbling out its click event to its parent,
 we just add function(event),
  where the event in the function parameter will stop from bubbling out 
  the click event to the elements parent by writing event.stopPropagation(); in the function. */

$("ul").on("click","span",function(event){//click on trash can to delete to do
    $(this).parent().fadeOut(500,function(){
       $(this).remove(); });//it removes the todo li and the second this refers to the li not the span
       

})


//We are now going to select the input and to take its value when we press enter

/* Note:
If our new elements aren't firing that's because we didn't use the on('click') 
which is responsible for getting the job done for all potential future elements. */
    $("input[type='text']").keypress(function(event){
        if (event.which===13){
        var todoText=$(this).val();
        $(this).val('');
        //creating a new li and add to ul 
        $('ul').append('<li><span class="delete"><i class="fas fa-trash-alt"></i></span> '+todoText+'</li>');
        }
});


$(".fa-plus").click(function(){
    $("input[type='text']").fadeToggle();
});