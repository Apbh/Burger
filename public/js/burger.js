
$(".burgersAvailable").on("submit", function(event){
    event.preventDefault();
    $.ajax("/api/burgers/" + $(this).attr("id"), {
        type:"PUT",

    }).then(function(){
        location.reload();
    })
})