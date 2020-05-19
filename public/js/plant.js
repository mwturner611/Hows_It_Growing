
$(document).ready(function(){
   
   

    // activate tabs on the listed plant card
    $('.tabs').tabs();

    // Changing the watered state of each plant.
    $('.watered').on('click', function(e) {
        e.preventDefault();
        
        var id = $(this).data('id');
        var newWateredState = {
            watered: 1
        };

        $.ajax('/api/plant/' + id, {
            type: 'PUT',
            data: newWateredState
        }).then(
            function(){
                location.reload();
                console.log('success')
            }
        );
    });

    $('#add-plant').on('submit', function(event) {
        event.preventDefault();
        console.log('clicked')
        // var plantTypeInput = $('#plant-type');
        // var nickNameInput = $('#nick-name');

        // // Won't submit if fields are empty
        // if (!plantTypeInput.val().trim() || !nickNameInput.val().trim()) {
        //     return;
        //   };
        // // Create new object from inputs that query will expect
        // var newPlant = {
        //     plantType: plantTypeInput.val().trim(),
        //     nickName: nickNameInput.val().trim(),
        //     userId: req.params.user
        // };
        // console.log('plant grabbed', newPlant);
        // console.log('working??');
        // $.post("/api/plant/:user", newPlant)
        // .then(function(res){
        // console.log(res)
        //  console.log("plant added", newPlant)
        // });

        
    });

    // Defining function to handle post 
    // function submitPlant(Plants) {
    //     $.post("/api/plant/:user", Plants)
    //     .then(function(res){
    //     console.log(res)
    //      console.log("plant added", newPlant)
    //     });
        
        
    //   };



});


