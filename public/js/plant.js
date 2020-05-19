
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

});


