// Array para almacenar los mensajes
let mensajes = [];

// Elemento del DOM donde se mostrarán los mensajes
const chat = document.getElementById("chat");

// Función para obtener respuesta (Lógica ultra simple)
function obtenerRespuestaBot(entrada) {
    const texto = entrada.toLowerCase();

    // Respuestas directas por palabras clave
    if (texto.includes("hola") || texto.includes("buenas")) {
        return "¡Hola! ¿Cómo puedo ayudarte hoy? 😊";
    }
    if (texto.includes("nombre") || texto.includes("quien eres")) {
        return "Soy ChatBot, tu asistente sencillo. 🤖";
    }
    if (texto.includes("hora")) {
        return `Son las ${new Date().toLocaleTimeString('es-ES')} ⏰`;
    }
    if (texto.includes("fecha") || texto.includes("dia")) {
        return `Hoy es ${new Date().toLocaleDateString('es-ES')} 📅`;
    }
    if (texto.includes("gracias")) {
        return "¡De nada! Un placer. ✨";
    }
    if (texto.includes("adios") || texto.includes("chao")) {
        return "¡Hasta luego! Que tengas un buen día. 👋";
    }
    if (texto.includes("ayuda")) {
        return "Pregúntame la hora, la fecha o simplemente charlemos. 💡";
    }

    // Respuesta si no entiende
    return "No entiendo eso, pero sigo aprendiendo. 🤔";
}

// Función para mostrar mensajes en pantalla
function render() {
    let contenido = "";
    for (let i = 0; i < mensajes.length; i++) {
        // Si el texto es "...", aplicamos una clase especial para la animación
        const clasePensando = mensajes[i].texto === "..." ? "pensando" : "";
        contenido += `
            <div class="mensaje ${mensajes[i].tipo} ${clasePensando}">
                <p>${mensajes[i].texto}</p>
            </div>
        `;
    }
    chat.innerHTML = contenido;
    chat.scrollTop = chat.scrollHeight;
}

// Función para enviar mensaje
function enviarMensaje() {
    const input = document.getElementById("inputMensaje");
    const textoUsuario = input.value.trim();

    if (textoUsuario === "") return;

    // 1. Guardar y mostrar mensaje del usuario
    mensajes.push({ tipo: "usuario", texto: textoUsuario });
    render();

    // 2. Limpiar el cuadro de texto
    input.value = "";
    input.focus();

    // 3. Mostrar animación de "escribiendo..."
    setTimeout(() => {
        mensajes.push({ tipo: "bot", texto: "..." });
        render();

        // 4. Quitar los puntos y mostrar la respuesta real tras otro breve tiempo
        setTimeout(() => {
            // Eliminamos el último mensaje (que son los puntos "...")
            mensajes.pop(); 
            
            const respuesta = obtenerRespuestaBot(textoUsuario);
            mensajes.push({ tipo: "bot", texto: respuesta });
            render();
        }, 1200); // Tiempo que dura "pensando"
    }, 300);
}

// Escuchar la tecla Enter
document.getElementById("inputMensaje").addEventListener("keypress", function(e) {
    if (e.key === "Enter") {
        enviarMensaje();
    }
});

// Función para los botones de emojis (opcional)
function agregarEmoji(emoji) {
    const input = document.getElementById("inputMensaje");
    input.value += emoji;
    input.focus();
}

// Carga inicial
render();