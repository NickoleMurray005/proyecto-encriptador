// Función para encriptar el texto
function encryptText(text) {
    return text.replace(/e/g, "enter")
               .replace(/i/g, "imes")
               .replace(/a/g, "ai")
               .replace(/o/g, "ober")
               .replace(/u/g, "ufat");
}

// Función para desencriptar el texto usando las nuevas reglas
function decryptText(text) {
    return text.replace(/enter/g, "e")
               .replace(/imes/g, "i")
               .replace(/ai/g, "a")
               .replace(/ober/g, "o")
               .replace(/ufat/g, "u");
}

// Asignar funciones a botones
document.getElementById("encryptBtn").addEventListener("click", function() {
    let input = document.getElementById("inputText").value.toLowerCase();
    document.getElementById("outputText").innerText = encryptText(input);
    
});

document.getElementById("decryptBtn").addEventListener("click", function() {
    let input = document.getElementById("inputText").value.toLowerCase();
    document.getElementById("outputText").innerText = decryptText(input);
});

// Función para copiar el texto al portapapeles
document.getElementById("copyBtn").addEventListener("click", function() {
    let output = document.getElementById("outputText").innerText;
    navigator.clipboard.writeText(output).then(() => {
        alert("Texto copiado al portapapeles");
    }).catch(err => {
        console.error('Error al copiar el texto: ', err);
    });
});
