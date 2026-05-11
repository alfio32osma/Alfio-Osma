let mensajes = [];
let idioma = "es";

const textos = {
    es: {
        titulo: "Pruebas JavaScript",
        placeholder: "Escribe un mensaje...",
        boton: "Agregar Mensaje",
        simonDice: "Simon dice: ",
        mensajes: [
            "Simon dice: Crear un botón",
            "Simon dice: Añadir mensajes",
            "Simon dice: Renderizar",
            "Simon dice: Agregar página de estilos CSS",
            "Simon dice: Escribir en la página"
        ]
    },
    en: {
        titulo: "JavaScript Tests",
        placeholder: "Write a message...",
        boton: "Add Message",
        simonDice: "Simon says: ",
        mensajes: [
            "Simon says: Create a button",
            "Simon says: Add messages",
            "Simon says: Render",
            "Simon says: Add CSS style page",
            "Simon says: Write on the page"
        ]
    },
    fr: {
        titulo: "Tests JavaScript",
        placeholder: "Écrivez un message...",
        boton: "Ajouter un message",
        simonDice: "Simon dit: ",
        mensajes: [
            "Simon dit: Créer un bouton",
            "Simon dit: Ajouter des messages",
            "Simon dit: Rendre",
            "Simon dit: Ajouter une page de style CSS",
            "Simon dit: Écrire sur la page"
        ]
    }
};

// Inicializar mensajes en español
mensajes = [...textos.es.mensajes];

function cambiarIdioma(lang) {
    idioma = lang;
    document.getElementById("inputMensaje").placeholder = textos[idioma].placeholder;
    document.getElementById("tituloBoton").textContent = textos[idioma].boton;
    document.querySelector("h1").textContent = textos[idioma].titulo;
    // Reiniciar mensajes con el nuevo idioma
    mensajes = [...textos[idioma].mensajes];
    render();
}

function agregarMensaje() {
    const input = document.getElementById("inputMensaje");
    if (input.value.trim() !== "") {
        mensajes.push(textos[idioma].simonDice + input.value);
        input.value = "";
        render();
    }
}

function render() {
    document.getElementById("contenido").innerHTML = mensajes.join("<br>");
}

// Renderizar al cargar la página
render();