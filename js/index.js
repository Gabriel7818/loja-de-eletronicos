$(document).ready(function(){
    $(".ver-detalhes").click(function(){
        $(".modal").show(); // Mostra a tela modal quando o botão "Ver Detalhes" é clicado
    });

    $(".fechar-modal").click(function(){
        $(".modal").hide(); // Oculta a tela modal quando o botão "Fechar" é clicado
    });
});
