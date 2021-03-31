'use strcit';

$(document).ready(function () {
    
    $('#btnMostrar').click(function () {
        
        $('#texto').html('Acabas de pulsar el boton');
    });

    $('#btnOcultar').click(function() {

        $('#texto').hide(1500);
        $('#texto').show(1000);
        
    });
});