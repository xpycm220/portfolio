$(document).ready(function() {
    
    function sendForm() {
        $.magnificPopup.open({
            items: {
                src: '#form_send'
            },
                type: 'inline',
                mainClass: 'my-mfp-zoom-in',
                removalDelay: 300,
        }, 0);
    };

    function errorForm() {
        $.magnificPopup.open({
            items: {
                src: '#form_error'
            },
                type: 'inline',
                mainClass: 'my-mfp-zoom-in',
                removalDelay: 300,
        }, 0);
    };

    $(function(){
        $("._form").on("submit", function(e){
            e.preventDefault();
            var fd = new FormData( this );
                $.ajax({
                    url: "scripts/phpmailer/send_mail.php",
                    type: "POST",
                    contentType: false, 
                    processData: false, 
                    data: fd,
                    success: function() {
                        $('._form').trigger('reset');
                        sendForm();
                    },
                    error: function() {
                        // errorForm();
                    }
            });
        });
});
    
});