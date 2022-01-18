const tarefas = document.querySelector('.tarefas');
const tarefaInput = document.querySelector('.inputTarefa');
const button = document.querySelector('.btnAddTarefa');

tarefaInput.addEventListener('keypress', function (e) {
  if (e.keyCode === 13){
    criaTarefa(tarefaInput.value);
  }
});

button.addEventListener('click', function () {
  if (!tarefaInput.value) return;
  const tarefa = tarefaInput.value;
  criaTarefa(tarefa);
});

function criaTarefa(tarefa) {
  const li = document.createElement('li');
  tarefas.appendChild(li);
  li.innerHTML += tarefa;
}

