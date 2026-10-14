
const menuBotao = document.getElementById("menuBotao");
const menu = document.getElementById("menu");

menuBotao.addEventListener("click", function () {
    const aberto = menu.classList.toggle("aberto");

    menuBotao.setAttribute("aria-expanded", aberto);
    menuBotao.setAttribute(
        "aria-label",
        aberto ? "Fechar menu" : "Abrir menu"
    );

    menuBotao.textContent = aberto ? "✕" : "☰";
});

document.querySelectorAll("#menu a").forEach(function (link) {
    link.addEventListener("click", function () {
        menu.classList.remove("aberto");
        menuBotao.setAttribute("aria-expanded", "false");
        menuBotao.textContent = "☰";
    });
});

document.getElementById("ano").textContent =
    new Date().getFullYear();
