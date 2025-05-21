document.addEventListener("DOMContentLoaded", () => {
    var button = document.getElementById("send_message");
    var rules_span = document.getElementById('rules_span');

    rules_span.addEventListener("click", (event) => {
        alert("Как образец речи для голосовой модели AI от weights.gg, я предлагаю разнообразный вокальный деапозон, который улавливает тонкости человеческой речи. Мой голос заложил основу для ИИ системы, которая может общаться с ясностью и эмоциями.");
    })

    button.addEventListener("click", (event) => {
        alert("пiпiдастр");
    })
});