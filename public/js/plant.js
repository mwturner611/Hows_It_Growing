
$(document).ready(function(){
   

    // activate tabs on the listed plant card
    if (document.querySelector('.tab') !== null){
        $('.tabs').tabs();
    }
    

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
        $.ajax('/api/plant/' +id , {
            type: 'POST',
            data: newPlant
        })
        .then(function(res){
        console.log(res)
        location.reload();
        
        });
    });

    // Add listener for water day update 
    $('.water-update').on('click', function(event) {
        event.preventDefault();
        var id=$(this).data('id');
        
        var sun = $(`.sunCheck${id}`).is(':checked');
        var mon = $(`.monCheck${id}`).is(':checked');
        var tue = $(`.tueCheck${id}`).is(':checked');
        var wed = $(`.wedCheck${id}`).is(':checked');
        var thu = $(`.thuCheck${id}`).is(':checked');
        var fri = $(`.friCheck${id}`).is(':checked');
        var sat = $(`.satCheck${id}`).is(':checked');

        // create object to send to put 
        var waterDays = {
            sunday: sun,
            monday: mon,
            tuesday: tue,
            wednesday: wed,
            thursday: thu,
            friday: fri,
            saturday: sat
        };

        $.ajax('/api/plant/' + id, {
            type: 'PUT',
            data: waterDays
        }).then(
            function(){
                location.reload();
                console.log('success')
            }
        );
    })

    
        



});


