console.log("Sesion web1");

function changeGreeting(){
    // obtener nombre cliente
    const clientName = getNameOfclient();

    // obtener referencia de label h1
    const greetingReference = getReferenceOfIdGreeting();

    // cambiar el saludo
    greetingReference.innerHTML = "Hola " + clientName;
}

function getNameOfclient(){
    const clientName = prompt("Escribe tu nobre");
    return clientName;
}

function getReferenceOfIdGreeting(){
    return document.getElementById("greeting");
}