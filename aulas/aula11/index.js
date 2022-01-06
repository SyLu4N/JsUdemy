function formulario () {
  /* form.onsubmit = function (evento) {
    evento.preventDefault();
    alert(1);
    console.log('Enviado')
  }; */

  const pessoas = [];

  const resultado = document.querySelector('.resultado');
  const form = document.querySelector('.grid');
  
  function recebeEventoForm(evento) {
    evento.preventDefault();

    const nome = form.querySelector('.nome');
    const sobrenome = form.querySelector('.sobrenome');
    const peso = form.querySelector('.peso');
    const altura = form.querySelector('.altura');
     
    pessoas.push({
      nome: nome.value,
      sobrenome: sobrenome.value,
      peso: peso.value,
      altura: altura.value
    });

    console.log(pessoas);

    resultado.innerHTML += `Nome: ${ nome.value} Sobrenome: ${sobrenome.value} Peso: ${peso.value} Altura: ${altura.value} <br / >`;  
  }
  
  form.addEventListener('submit', recebeEventoForm);
}

formulario();