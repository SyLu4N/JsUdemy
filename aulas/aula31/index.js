const tarefas = document.querySelector('.tarefas');
const tarefaInput = document.querySelector('.inputTarefa');
const button = document.querySelector('.btnAddTarefa');
let contador = 0;
let contadorLista = [];

button.addEventListener('click', function () {
  if (!tarefaInput.value.trim()){
    tarefaInput.setAttribute('placeholder', 'Insira um valor válido!');
    tarefaInput.setAttribute('id', 'red');
    return;
  }
  tarefaInput.removeAttribute('id', 'red');
  tarefaInput.removeAttribute('placeholder');
  const tarefa = tarefaInput.value;
  criaTarefa(tarefa);
});

tarefaInput.addEventListener('keypress', function (e) {
  if (e.keyCode === 13){
    if (!tarefaInput.value.trim()){
      tarefaInput.setAttribute('placeholder', 'Insira um valor válido!');
      tarefaInput.setAttribute('id', 'red');
      return;
    }
    tarefaInput.removeAttribute('id', 'red');
    tarefaInput.removeAttribute('placeholder');
    const tarefa = tarefaInput.value;
    criaTarefa(tarefa);
  }
});

function addContador() {
  contador ++;
  contadorLista.push(contador);
  console.log(contadorLista);
}

function apagarTarefa(li) {
  li.innerText += ' ';
  const apagar = document.createElement('button');
  apagar.innerText = '✖';
  apagar.setAttribute('class', 'btnApagar');
  apagar.setAttribute('title', 'Apagar essa tarefa');
  li.appendChild(apagar);
}

function limpaInput() {
  tarefaInput.value = '';
  tarefaInput.focus();
}

function criaTarefa(tarefa) {
  const li = document.createElement('li');
  tarefas.appendChild(li);
  addContador();
  li.innerHTML += `${contador}${tarefa}`;
  li.classList.add('flexLista');
  apagarTarefa(li);
  limpaInput();
  salvaTarefas();
}

document.addEventListener('click', function (e) {
  const click = e.target;
  if (click.classList.contains('btnApagar')){
    click.parentElement.remove();
    contador--;
    salvaTarefas();  
  }
});

function salvaTarefas() {
  const liTarefas = tarefas.querySelectorAll('li');
  const listaTarefas = [];

  for (let tarefa of liTarefas){
    let tarefaText = tarefa.innerHTML;
    for(let i in contadorLista.length){
      console.log(i)
      tarefaText = tarefaText.replace(i, '');
    }
    tarefaText = tarefaText.replace('✖', '').trim();
    listaTarefas.push(tarefaText);
  }

  const tarefasJSON = JSON.stringify(listaTarefas); //stringify igual string
  localStorage.setItem('tarefas', tarefasJSON);
}

function addTarefas() {
  const tarefas = localStorage.getItem('tarefas');
  const listaTarefas = JSON.parse(tarefas); //parse igual objeto

  for(let lista of listaTarefas){
    criaTarefa(lista);
  }
}

addTarefas();
