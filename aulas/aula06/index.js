const nome = prompt('Qual o seu nome completo?');
document.body.innerHTML += `Seu nome é ${nome}. Muito prazer!<br />`;
let nomeTratamento = nome.replace(/ /g, "");
document.body.innerHTML +=`Seu nome tem ${nomeTratamento.length} letras.<br />`;
document.body.innerHTML += `A segunda letra do seu nome é: ${nomeTratamento.slice(1, 2)}<br />`;
document.body.innerHTML += `Qual o primeiro índice da letra LETRA no seu nome? ${nomeTratamento.slice(0,1)}<br />`;
document.body.innerHTML += `Qual o último índice da letra LETRA no seu nome? ${nomeTratamento.slice(-2, -3)}<br />`;
document.body.innerHTML += `As últimas 3 letras do seu nome são: ${nomeTratamento.slice(-4, -1)}<br />`;
nomeTratamento = nomeTratamento.replace(' ', '-');
document.body.innerHTML += `As palavras do seu nome são: ${nomeTratamento}<br />`;
document.body.innerHTML += `Seu nome com letras maiúsculas: ${nome.toUpperCase()}<br />`;
document.body.innerHTML += `Seu nome com letras minúsculas: ${nome.toLowerCase()}<br />`;

