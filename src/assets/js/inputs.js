// Навешивание класса невалидности ( в целях стилизации ) при изменение поля;

if (document.querySelector('input.inputs__field')) {
    let inputs = document.querySelectorAll('input.inputs__field, .inputs__checkbox-input');
    for (var i = 0; i < inputs.length; i++) {
        inputs[i].addEventListener('change', function () {
            this.classList.add('inputs__field--invalid');
        });
    }
}

// Навешивание класса невалидности ( в целях стилизации ) при попытке отправить форму;


$('form button[type="submit"]').on('click', function () {
    $(this).closest('form').find('.inputs__checkbox-input').addClass('inputs__field--invalid');
    $(this).closest('form').find('input.inputs__field').addClass('inputs__field--invalid');
});

// Ajax отправки данных на сервер;

$('form').on('submit', function (e) {
    e.preventDefault();

    close_popup('form');
    show_popup('thank');
    // e.preventDefault();
    // $.ajax({
    //     type: 'post',
    //     url: '../send.php',
    //     data: $(this).serialize(),
    //     success:function(d) {
    //     }
    // });
});