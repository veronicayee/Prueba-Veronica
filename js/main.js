var $elBody = $("body");

$("body").on( "click" , ".cerrar" , cerrarMensaje );

function cerrarMensaje() {
    $(".modal").fadeOut(600,
        function cerrarMensaje() {
        $(this).remove();
        }
        )
    $(".cerrar").fadeOut(600,
        function cerrarMensaje() {
        $(this).remove();
        }
        )
    $(".mensaje").fadeOut(600,
        function cerrarMensaje() {
        $(this).remove();
        }
        )
    }
