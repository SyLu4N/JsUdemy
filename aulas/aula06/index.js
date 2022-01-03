let nomeDigitado = prompt('Qual o seu nome completo?');
const nome = nomeDigitado.toLowerCase();
document.body.innerHTML += `Olá <strong>${nomeDigitado}</strong>, Muito prazer!<br />`;
let nomeSemEspaco = nome.replace(/ /g, "");
let nomeTratamento = nome;
document.body.innerHTML +=`Seu nome tem <strong>${nomeSemEspaco.length}</strong> letras.<br />`;
document.body.innerHTML += `A segunda letra do seu nome é: <strong>${nomeTratamento.charAt(1)}</strong><br />`;
document.body.innerHTML += `O primeiro índice da letra A do seu nome é :<strong>${nomeTratamento.indexOf('a')}</strong><br />`;
document.body.innerHTML += `O último índice da letra A do seu nome é :<strong>${nomeTratamento.lastIndexOf('a')}</strong><br />`;
document.body.innerHTML += `As últimas 3 letras do seu nome são: <strong>${nomeSemEspaco.slice(-3)}</strong><br />`;
nomeTratamento = nomeTratamento.replace(/ /g, ' - ');
document.body.innerHTML += `As palavras do seu nome são: <strong>${nomeTratamento}<br />`;
document.body.innerHTML += `Seu nome com letras maiúsculas: <strong>${nome.toUpperCase()}</strong><br />`;
document.body.innerHTML += `Seu nome com letras minúsculas: <strong>${nome.toLowerCase()}</strong><br />`;

