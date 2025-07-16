<?php
// Configuración
$to = 'contacto@inviertoya.com'; // Tu email
$subject = 'Nuevo mensaje de contacto - Invierto Ya';

// Validar que el formulario fue enviado
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    exit('Método no permitido');
}

// Obtener y sanitizar datos
$nombre = filter_input(INPUT_POST, 'nombre', FILTER_SANITIZE_STRING);
$email = filter_input(INPUT_POST, 'email', FILTER_SANITIZE_EMAIL);
$asunto = filter_input(INPUT_POST, 'asunto', FILTER_SANITIZE_STRING);
$experiencia = filter_input(INPUT_POST, 'experiencia', FILTER_SANITIZE_STRING);
$mensaje = filter_input(INPUT_POST, 'mensaje', FILTER_SANITIZE_STRING);
$newsletter = filter_input(INPUT_POST, 'newsletter-opt', FILTER_SANITIZE_STRING);

// Validar campos requeridos
if (empty($nombre) || empty($email) || empty($asunto) || empty($mensaje)) {
    http_response_code(400);
    exit('Todos los campos marcados con * son requeridos');
}

// Validar email
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    exit('El email no es válido');
}

// Construir mensaje
$body = "Nuevo mensaje de contacto:\n\n";
$body .= "Nombre: $nombre\n";
$body .= "Email: $email\n";
$body .= "Asunto: $asunto\n";
$body .= "Experiencia: " . ($experiencia ?: 'No especificada') . "\n";
$body .= "Newsletter: " . ($newsletter ? 'Sí' : 'No') . "\n\n";
$body .= "Mensaje:\n$mensaje\n\n";
$body .= "---\n";
$body .= "Enviado desde: https://inviertoya.com/contacto\n";
$body .= "IP: " . $_SERVER['REMOTE_ADDR'] . "\n";
$body .= "Fecha: " . date('Y-m-d H:i:s') . "\n";

// Headers del email
$headers = "From: $email\r\n";
$headers .= "Reply-To: $email\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

// Enviar email
if (mail($to, $subject, $body, $headers)) {
    // Redirigir a página de éxito
    header('Location: /contacto?success=1');
    exit();
} else {
    http_response_code(500);
    exit('Error al enviar el mensaje. Por favor, intenta nuevamente.');
}
?>
