document.getElementById("quiz-form").addEventListener("submit", function(event) {
    event.preventDefault();     

    let score = 0;
    let total = 6;

    const p1 = document.querySelector("input[name='p1']:checked");
    if (!p1) return alert("Responda a pergunta 1!");
    score += Number(p1.value);

    const p2 = document.querySelectorAll("input[name='p2']:checked");
    if (p2.length < 2) return alert("Escolha 2 opções na pergunta 2!");
    p2.forEach(cb => score += Number(cb.value));

    const p3 = document.querySelector("select[name='p3']");
    if (p3.value === "") return alert("Selecione uma opção na pergunta 3!");
    score += Number(p3.value);

    const resultArea = document.getElementById("result-area");
    resultArea.style.display = "block";

    if (score === total) {
        resultArea.className = "alert alert-success";
        resultArea.innerHTML = `🎉 Parabéns! Você acertou tudo! Pontuação: <strong>${score}/${total}</strong>`;
    } else {
        resultArea.className = "alert alert-warning";
        resultArea.innerHTML = `Você fez <strong>${score}</strong> de <strong>${total}</strong>. Continue praticando!`;
    }

    let feedback = document.createElement("p");
    feedback.innerText = "Obrigado por jogar! Atualize a página para tentar novamente.";
    feedback.classList.add("mt-3");
    resultArea.appendChild(feedback);
});
