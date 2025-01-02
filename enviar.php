<?php
ini_set('display_errors', 1);
error_reporting(E_ALL);


if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Cambia a tu correo electrónico
    $destinatario = "julianleal259@gmail.com";
    $asunto = "Mensaje desde el formulario de contacto";

    // Datos del formulario
    $nombre = htmlspecialchars($_POST['campo1']);
    $telefono = htmlspecialchars($_POST['campo2']);
    $email = htmlspecialchars($_POST['campo3']);
    $mensaje = htmlspecialchars($_POST['mensaje']);

    // Formato del mensaje
    $cuerpo = "Nombre: $nombre\n";
    $cuerpo .= "Teléfono: $telefono\n";
    $cuerpo .= "Email: $email\n\n";
    $cuerpo .= "Mensaje:\n$mensaje";

    // Cabeceras para el correo
    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";

    // Enviar correo
    if (mail($destinatario, $asunto, $cuerpo, $headers)) {
        echo "Mensaje enviado exitosamente.";
    } else {
        echo "Error al enviar el mensaje.";
    }
}
?>
