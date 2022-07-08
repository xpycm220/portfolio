$(document).ready(function() {
   $(".validate").each(function() {
        $(this).validate({
            rules: {
                name: "required",
                tel: {
                    required: true,
                    minlength: 10
                }
                // email: "required",
                // messages: "required",
            },
            errorPlacement: function(error, element) {
                error.insertAfter(element);
            },
            messages: {
                name: "Ваше имя?",
                tel: "Ваш телефон?"
                // messages: "Ваше обращение",
                // email: {
                //     required: "Ваш email?",
                //     email: "Пожалуйста, введите привильный адрес электронной почты"
                // }
            },
            highlight: function(element) {
                $(element)
                    .text('').addClass('error')
            },

            success: function(element) {
                element
                    .text('').addClass('valid')
            }
        });
    });

    function sendForm() {
        $.magnificPopup.open({
            items: {
                src: '#sent_popup'
            },
                type: 'inline',
                mainClass: 'my-mfp-zoom-in',
                removalDelay: 300,
        }, 0);
    };

    // function errorForm() {
    //     $.magnificPopup.open({
    //         items: {
    //             src: '#form_error'
    //         },
    //             type: 'inline',
    //             mainClass: 'my-mfp-zoom-in',
    //             removalDelay: 300,
    //     }, 0);
    // };

    $("form").each(function() {
        $(this).submit(function() {
            if ($(this).valid()) {
                // var form_data = $(this).serialize();
                var form_data = new FormData(this);
                $.ajax({
                    url: "scripts/phpmailer/send_mail.php",
                    type: 'POST',
                    data: form_data,
                    cache: false,
                    contentType: false,
                    processData: false,
                    success: function() {
                        // $('._form').trigger('reset');
                        $("form")[0].reset();
                        sendForm();
                    },
                    error: function() {
                        // errorForm();
                    }
                });
            } else {}
            return false;
        });
    });
});