const openMenu = document.getElementById("openMenu");
const closeMenu = document.getElementById("closeMenu");
const sidebar = document.getElementById("sidebar");
const nomeUsuario = document.getElementById("nomeUsuario");
const planoAtual = document.getElementById("planoAtual");
const tabelaPlano = document.getElementById("tabelaPlano");
const valorPlano = document.getElementById("valorPlano");

if (openMenu) {
  openMenu.addEventListener("click", () => sidebar.classList.add("show"));
}

if (closeMenu) {
  closeMenu.addEventListener("click", () => sidebar.classList.remove("show"));
}

const nomeLogado = localStorage.getItem("usuarioLogado");
const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
const alunos = JSON.parse(localStorage.getItem("alunos")) || [];

const usuario = usuarios.find(user => user.nome === nomeLogado);

if (usuario) {
  nomeUsuario.textContent = usuario.nome;

  const aluno = alunos.find(item => item.email === usuario.email);

  if (aluno) {
    planoAtual.textContent = aluno.plano;

    let valor = "R$ 99,90";
    if (aluno.plano.toLowerCase().includes("premium")) valor = "R$ 149,90";
    if (aluno.plano.toLowerCase().includes("basic")) valor = "R$ 79,90";

    valorPlano.textContent = valor;

    tabelaPlano.innerHTML = `
      <tr>
        <td>${aluno.plano}</td>
        <td>30 dias</td>
        <td>Academia e aulas</td>
        <td>Ativo</td>
      </tr>
    `;
  }
}