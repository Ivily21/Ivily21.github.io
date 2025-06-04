const form = document.getElementById("formulario");
const btnListar = document.getElementById("listar");
const listaContainer = document.getElementById("listaOnibus");
const dialogTela = document.getElementById("dialogTela");
const editNome = document.getElementById("edit_nome");
const editLinha = document.getElementById("edit_linha");
const atualizar = document.getElementById("atualizar");
const fechar = document.getElementById("fechar");
let editIndex = -1;

function mostrarLista() {
  const lista = JSON.parse(localStorage.getItem("onibus")) || [];
  listaContainer.innerHTML = "";

  lista.forEach((onibus, index) => {
    const item = document.createElement("div");
    item.className = "item-onibus";
    item.innerHTML = `
      <span><b>${onibus.nome}</b> | Linha: ${onibus.linha}</span>
      <div class="botoes-item">
        <button data-index="${index}" class="editar">✏️</button>
        <button data-index="${index}" class="excluir">🗑️</button>
      </div>
    `;
    listaContainer.appendChild(item);
  });

  listaContainer
    .querySelectorAll(".editar")
    .forEach((btn) => (btn.onclick = () => editarOnibus(btn.dataset.index)));

  listaContainer
    .querySelectorAll(".excluir")
    .forEach((btn) => (btn.onclick = () => excluirOnibus(btn.dataset.index)));
}

form.onsubmit = (e) => {
  e.preventDefault();
  const nome = form.input_nome.value.trim();
  const linha = form.input_linha.value.trim();

  if (!nome || !linha) return alert("Preencha todos os campos.");

  const lista = JSON.parse(localStorage.getItem("onibus")) || [];
  lista.push({ nome, linha });
  localStorage.setItem("onibus", JSON.stringify(lista));

  form.reset();
};

btnListar.onclick = mostrarLista;

function editarOnibus(index) {
  const lista = JSON.parse(localStorage.getItem("onibus"));
  const { nome, linha } = lista[index];
  editNome.value = nome;
  editLinha.value = linha;
  editIndex = index;
  dialogTela.showModal();
}

atualizar.onclick = () => {
  if (editIndex === -1) return;

  const lista = JSON.parse(localStorage.getItem("onibus"));
  lista[editIndex] = {
    nome: editNome.value.trim(),
    linha: editLinha.value.trim(),
  };
  localStorage.setItem("onibus", JSON.stringify(lista));
  editIndex = -1;
  dialogTela.close();
  mostrarLista();
};

function excluirOnibus(index) {
  const lista = JSON.parse(localStorage.getItem("onibus"));
  lista.splice(index, 1);
  localStorage.setItem("onibus", JSON.stringify(lista));
  mostrarLista();
}

fechar.onclick = () => dialogTela.close();
