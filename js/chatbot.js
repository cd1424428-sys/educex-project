document.getElementById('sendBtn').addEventListener('click', function() {
    const inputField = document.getElementById('userInput');
    const chatBox = document.getElementById('chatBox');
    const userText = inputField.value.trim();

    if (userText === "") return;

    chatBox.innerHTML += `<p class="text-end"><strong>Tú:</strong> ${userText}</p>`;
    
    let respuestaBot = "Recuerda que puedes acudir al IMSS Bienestar de Villa Victoria para recibir atención médica especializada y confidencial.";
    const textoMin = userText.toLowerCase();

    if (textoMin.includes('hola') || textoMin.includes('buenos dias')) {
        respuestaBot = "¡Hola! Estoy aquí para orientarte de forma segura sobre prevención del embarazo adolescente.";
    } else if (textoMin.includes('metodos') || textoMin.includes('anticonceptivos')) {
        respuestaBot = "Los métodos anticonceptivos son herramientas clave. En los centros de salud puedes solicitar preservativos e implantes.";
    } else if (textoMin.includes('centro') || textoMin.includes('donde ir') || textoMin.includes('atencion')) {
        respuestaBot = "Puedes consultar los centros de atención médica respaldados por la Secretaría de Salud en Villa Victoria.";
    }

    setTimeout(() => {
        chatBox.innerHTML += `<p class="text-success"><strong>ChatBot:</strong> ${respuestaBot}</p>`;
        chatBox.scrollTop = chatBox.scrollHeight;
    }, 400);

    inputField.value = "";
});