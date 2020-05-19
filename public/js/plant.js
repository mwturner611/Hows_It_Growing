
$(document).ready(function(){
    // activate tabs on the listed plant card
    $('.tabs').tabs();

    $('#watered').on('click', function(e) {
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

    var getWateredState = function() {
        var waterbtn = $('#watered');

        if(waterbtn.data('watered')) {
            $('#watercan-icon').removeClass('hide');
        } else {
            $('#watercan-icon').addClass('hide');
        }
    };

    getWateredState();

});


