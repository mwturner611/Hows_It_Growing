
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
            function() {
            //   $('#watercan-icon').removeClass('hide');
            getWateredState(id)
            }
        );
    });

    // var getWateredState = function(id) {

    //     $.ajax('api/plant/' + id, {
    //         type: 'GET',
    //         dataType: 'json'
    //     }).then(
    //         function(data) {
    //             console.log(data);
    //         }
    //     );
    // };

});


