
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
    // Initiate event listener for add button
    $('#addPlant-btn').on('click', function(event) {
        event.preventDefault();
        var id = $(this).data('id');
        console.log('clicked')
        var plantTypeInput = $('#plant-type');
        var nickNameInput = $('#nick-name');

        // Won't submit if fields are empty
        if (!plantTypeInput.val().trim() || !nickNameInput.val().trim()) {
            return;
          };
        // Create new object from inputs that query will expect
        var newPlant = {
            plantType: plantTypeInput.val().trim(),
            nickName: nickNameInput.val().trim(),
            userId: id
        };
        console.log('plant grabbed', newPlant);
        console.log('working??');
        $.post("/api/plant/" +id , newPlant)
        .then(function(res){
        console.log(res)
        location.reload();
        
        });
    });

    // Add listener for water day update 
    $('.water-update').on('click', function(event) {
        event.preventDefault();
        var id=$(this).data('id');
        var checked =$('#' + id + ' p label input:checked');
        console.log('clicked');
        console.log(id);
        console.log('checked days', checked);
    })

    // var checked =$(id + ':input:checked');
    //     var id=$(this).data('id');
        



});


