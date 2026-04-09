function submitQuiz() {
    let score = 0;
    let total = 5;

    let answers = {
        q1: "a",
        q2: "b",
        q3: "c",
        q4: "b",
        q5: "a"
    };

    let form = document.getElementById("quizForm");

    for (let key in answers) {
        let resposta = form.elements[key].value;

        if (resposta === answers[key]) {
            score++;
        }
    }

    let mensagem = "";

    if (score === total) {
        mensagem = "🔥 Perfeito! Você é um verdadeiro nerd!";
    } else if (score >= 3) {
        mensagem = "😎 Mandou bem! Mas dá pra melhorar!";
    } else {
        mensagem = "😅 Tá precisando maratonar mais hein!";
    }

    alert("Você acertou " + score + " de " + total + " questões.\n" + mensagem);
}