$(function(){
    // New Burger Added::::
    $("#submit").on("click",function(event){
        // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newBurger = {
      name: $("#burger").val()
    };

    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newburger
    }).then(
      function() {
        console.log("created new cat");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

//   Update Burger to Devoured:::::
  $("#devour").on("click",function(){
      var id = $(this).data("id");
      var eatStatus = $(this).data("newdevoured");
      
      var newEatStatus = {
          devoured : true
      };
      $.ajax("/api/burgers/" + id, {
          type: "PUT",
          data: newEatStatus
      }).then(function(){
          console.log("changed Devoured status to: "+ newEatStatus);
          location.reload();
      }
    );
  });




});
