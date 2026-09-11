/* =========================================
   PENGUINISMO
   SCRIPT PRINCIPAL
========================================= */
 
/* =========================================
   MENU MOBILE
========================================= */
 
const menuMobile = document.getElementById("menuMobile");
const menu = document.querySelector(".menu");
 
if (menuMobile && menu) {
 
    menuMobile.addEventListener("click", () => {
        menu.classList.toggle("ativo");
    });
 
    const linksMenu = menu.querySelectorAll("a");
 
    linksMenu.forEach(link => {
        link.addEventListener("click", () => {
            menu.classList.remove("ativo");
        });
    });
}
 
/* =========================================
   BOTÃO — NOSSA HISTÓRIA
========================================= */
 
const botaoHistoria = document.getElementById("botaoHistoria");
 
if (botaoHistoria) {
 
    botaoHistoria.addEventListener("click", (event) => {
 
        event.preventDefault();
 
        const historia = document.getElementById("historia");
 
        if (historia) {
 
            historia.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
 
        }
 
    });
 
}
 
/* =========================================
   BOTÃO — ENTRAR NA COMUNIDADE
========================================= */
 
const botaoComunidade = document.getElementById("botaoComunidade");
 
if (botaoComunidade) {
 
    botaoComunidade.addEventListener("click", (event) => {
 
        event.preventDefault();
 
        alert(
            "O espaço da comunidade está sendo construído! 🐧\n\nEm breve você poderá fazer parte do Penguinismo."
        );
 
    });
 
}
 
/* =========================================
   ANIMAÇÃO DOS ELEMENTOS
========================================= */
 
const elementosAnimados = document.querySelectorAll(
    ".card, .recurso, .mensagem, .historia-item"
);
 
const observador = new IntersectionObserver((entradas) => {
 
    entradas.forEach((entrada) => {
 
        if (entrada.isIntersecting) {
 
            entrada.target.classList.add("aparecer");
            observador.unobserve(entrada.target);
 
        }
 
    });
 
}, {
    threshold: 0.15
});
 
elementosAnimados.forEach((elemento) => {
    observador.observe(elemento);
});
 
/* =========================================
   ROLAGEM SUAVE DOS LINKS
========================================= */
 
document.querySelectorAll('a[href^="#"]').forEach((link) => {
 
    link.addEventListener("click", function (event) {
 
        const destino = document.querySelector(this.getAttribute("href"));
 
        if (destino) {
 
            event.preventDefault();
 
            destino.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
 
        }
 
    });
 
});
 
/* =========================================
   FECHAR MENU AO CLICAR FORA
========================================= */
 
document.addEventListener("click", (event) => {
 
    if (!menu || !menuMobile) return;
 
    const clicouNoMenu = menu.contains(event.target);
    const clicouNoBotao = menuMobile.contains(event.target);
 
    if (!clicouNoMenu && !clicouNoBotao) {
        menu.classList.remove("ativo");
    }
 
});
 
/* =========================================
   CONSOLE
========================================= */
 
console.log("🐧 Penguinismo carregado com sucesso!");