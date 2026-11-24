function evaluarQuizCompleto() {
    const p1 = document.querySelector('input[name="p1"]:checked');
    const p2 = document.querySelector('input[name="p2"]:checked');
    const p3 = document.querySelector('input[name="p3"]:checked');
    const p4 = document.querySelector('input[name="p4"]:checked');
    const resultadoDiv = document.getElementById('resultadoQuiz');

    if (!p1 || !p2 || !p3 || !p4) {
        resultadoDiv.innerHTML = `<div class="alert alert-warning">Por favor responde todas las preguntas antes de calificar.</div>`;
        return;
    }

    let puntaje = 0;
    const totalPreguntas = 4;

    if (p1.value === "correcto") puntaje++;
    if (p2.value === "correcto") puntaje++;
    if (p3.value === "correcto") puntaje++;
    if (p4.value === "correcto") puntaje++;

    let mensaje = `Obtuviste ${puntaje} de ${totalPreguntas} aciertos. `;
    if (puntaje === 4) {
        mensaje += "¡Excelente trabajo! Dominas perfectamente los conceptos clave.";
    } else {
        mensaje += "¡Buen esfuerzo! Te recomendamos repasar los módulos informativos.";
    }

    resultadoDiv.innerHTML = `<div class="alert alert-success fw-bold">${mensaje}</div>`;
}