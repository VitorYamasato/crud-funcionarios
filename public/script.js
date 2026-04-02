const API = "/funcionarios";
let idEdicao = null;

// LISTAR
async function carregar() {
  const res = await fetch(API);
  const dados = await res.json();

  const lista = document.getElementById("lista");
  lista.innerHTML = "";

  dados.forEach(f => {
    lista.innerHTML += `
      <li>
        ${f.nome} - R$ ${f.salario}
        <button onclick="editar(${f.id}, '${f.nome}', '${f.salario}')">Editar</button>
        <button onclick="deletar(${f.id})">X</button>
      </li>
    `;
  });
}

// SALVAR / ATUALIZAR
async function salvar() {
  const nome = document.getElementById("nome").value;
  const salario = document.getElementById("salario").value;

  if (!nome || !salario) {
    return alert("Preencha tudo!");
  }

  const dados = {
    nome,
    salario: parseFloat(salario.replace(",", "."))
  };

  if (idEdicao) {
    // UPDATE
    await fetch(`${API}/${idEdicao}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(dados)
    });
  } else {
    // CREATE
    await fetch(API, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(dados)
    });
  }

  // limpar
  document.getElementById("nome").value = "";
  document.getElementById("salario").value = "";
  idEdicao = null;

  carregar();
}

// EDITAR
function editar(id, nome, salario) {
  document.getElementById("nome").value = nome;
  document.getElementById("salario").value = salario;

  idEdicao = id;
}

// DELETAR
async function deletar(id) {
  if (confirm("Deseja excluir?")) {
    await fetch(`${API}/${id}`, {
      method: "DELETE"
    });
    carregar();
  }
}

// iniciar
carregar();