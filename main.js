$(document).ready(function(){
    $('header button').click(function(){
        $('form').slideDown()
    })

    $('#minimizar').click(function(){
        $('form').slideUp()
    })

    $('form').on('submit', function(e){
        e.preventDefault()

        const tarefas = $('#tarefa').val()
        const novaTarefa = $("<li></li>")
        $(`<p>${tarefas}</p>`).appendTo(novaTarefa)

        $(novaTarefa).appendTo('ul')
        $(novaTarefa).fadeIn(1000)
        $('#tarefa').val('')
    })

    $('#listaTextos').on('click', 'li', function() {
        if (!$(this).hasClass('clicked')) {
            $(this).addClass('clicked');
        }
    });

    $('#limpar').click(function() {
        $('#listaTextos').empty();
    });
})