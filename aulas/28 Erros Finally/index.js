function retornaHora(hora) {
  if(!(hora instanceof Date)){
    throw new TypeError('Data inválida ou não definida')
  }
  if (!hora) hora = new Date();

  return hora.toLocaleTimeString ('Pt-br', { //toLocaleTimeString transformando em string
    hour: '2-digit', //Adiciona o 0 a esquerda
    minute: '2-digit',
    second: '2-digit',
    hour12: false //Não é 12hrs e sim 24hrs
  })
}

try {
  const date = new Date('10-10-1980 10:10:10');
  const hora = retornaHora();
  console.log(retornaHora(date));
} catch (error) {
  //tratar erro
} finally {
  console.log(retornaHora(new Date()));
  console.log('Tenha um bom dia!');
}