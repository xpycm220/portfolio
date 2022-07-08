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

    $(".validate").each(function() {
        $(this).validate({
            rules: {
                name: "required",
                phone: "required",
                email: {
                    required: true,
                    email: true
                }
            },
            errorPlacement: function(error, element) {
                error.insertAfter(element);
            },
            messages: {
                name: "Ваше имя?",
                phone: "Ваш телефон?",
                email: {
                    required: "Ваш email?",
                    email: "Пожалуйста, введите привильный адрес электронной почты"
                }

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


    $("._form").each(function() {
        $(this).submit(function() {
            if ($(this).valid()) {
                var form_data = $(this).serialize();
                $.ajax({
                    url: "scripts/phpmailer/send_mail.php",
                    type: 'POST',
                    data: form_data,
                    success: function() {
                        $('._form').trigger('reset');
                        sendForm();
                    },
                    error: function() {
                        errorForm();
                    }
                });
            } else {}
            return false;
        });
    });
    
});