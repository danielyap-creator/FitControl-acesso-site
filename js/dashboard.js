const openMenu = document.getElementById("openMenu");
const closeMenu = document.getElementById("closeMenu");
const sidebar = document.getElementById("sidebar");
const tabelaAlunos = document.getElementById("tabelaAlunos");

if (openMenu) {
  openMenu.addEventListener("click", () => {
    sidebar.classList.add("show");
  });
}

if (closeMenu) {
  closeMenu.addEventListener("click", () => {
    sidebar.classList.remove("show");
  });
}

const alunosSalvos = JSON.parse(localStorage.getItem("alunos")) || [];

if (tabelaAlunos) {
  if (alunosSalvos.length === 0) {
    tabelaAlunos.innerHTML = `
      <tr>
        <td colspan="4">Nenhum aluno cadastrado ainda.</td>
      </tr>
    `;
  } else {
    tabelaAlunos.innerHTML = alunosSalvos.map(aluno => `
      <tr>
        <td>${aluno.nome}</td>
        <td>${aluno.email}</td>
        <td>${aluno.telefone}</td>
        <td>${aluno.plano}</td>
      </tr>
    `).join("");
  }
}

const matriculasCtx = document.getElementById("matriculasChart");
if (matriculasCtx) {
  new Chart(matriculasCtx, {
    type: "line",
    data: {
      labels: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun"],
      datasets: [{
        label: "Matrículas",
        data: [180, 195, 210, 225, 248, 265],
        borderWidth: 3,
        fill: true,
        tension: 0.3
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          display: true
        }
      }
    }
  });
}

const planosCtx = document.getElementById("planosChart");
if (planosCtx) {
  new Chart(planosCtx, {
    type: "bar",
    data: {
      labels: ["Mensal", "Trimestral", "Semestral", "Anual"],
      datasets: [{
        label: "Planos vendidos",
        data: [45, 30, 15, 10],
        borderWidth: 1
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          display: true
        }
      }
    }
  });
}