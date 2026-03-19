const form = document.getElementById("loginForm");
const usuarioInput = document.getElementById("usuario");
const senhaInput = document.getElementById("senha");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const usuario = usuarioInput.value.trim();
    const senha = senhaInput.value.trim();

    if (!usuario || !senha) {
        alert("Preencha usuário e senha.");
        return;
    }

    const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

    const usuarioEncontrado = usuarios.find(
        user => user.usuario === usuario && user.senha === senha
    );

    if (usuarioEncontrado) {
        localStorage.setItem("usuarioLogado", usuarioEncontrado.nome);
        alert("Login realizado com sucesso!");
        window.location.href = "dashboard.html";
    } else {
        alert("Usuário ou senha inválidos.");
    }
});