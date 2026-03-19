const formAluno = document.getElementById("formAluno");
const listaAlunos = document.getElementById("listaAlunos");
const openMenuAluno = document.getElementById("openMenu");
const closeMenuAluno = document.getElementById("closeMenu");
const sidebarAluno = document.getElementById("sidebar");

if (openMenuAluno) {
  openMenuAluno.addEventListener("click", () => {
    sidebarAluno.classList.add("show");
  });
}

if (closeMenuAluno) {
  closeMenuAluno.addEventListener("click", () => {
    sidebarAluno.classList.remove("show");
  });
}

function carregarAlunos() {
  const alunos = JSON.parse(localStorage.getItem("alunos")) || [];

  if (alunos.length === 0) {
    listaAlunos.innerHTML = `
      <tr>
        <td colspan="4">Nenhum aluno cadastrado.</td>
      </tr>
    `;
    return;
  }

  listaAlunos.innerHTML = alunos.map(aluno => `
    <tr>
      <td>${aluno.nome}</td>
      <td>${aluno.email}</td>
      <td>${aluno.telefone}</td>
      <td>${aluno.plano}</td>
    </tr>
  `).join("");
}

if (formAluno) {
  formAluno.addEventListener("submit", function(event) {
    event.preventDefault();

    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const telefone = document.getElementById("telefone").value.trim();
    const plano = document.getElementById("plano").value;

    if (!nome || !email || !telefone || !plano) {
      alert("Preencha todos os campos.");
      return;
    }

    const novoAluno = { nome, email, telefone, plano };

    const alunos = JSON.parse(localStorage.getItem("alunos")) || [];
    alunos.push(novoAluno);
    localStorage.setItem("alunos", JSON.stringify(alunos));

    alert("Aluno cadastrado com sucesso!");
    formAluno.reset();
    carregarAlunos();
  });
}

carregarAlunos();