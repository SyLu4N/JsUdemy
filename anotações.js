/* https://docs.emmet.io/cheat-sheet/ = abreviação */

//Não podemos redeclarar uma let mais de uma vez
//Não podemos criar variáveis com palavras reservadas
//Não podemos começar uma variável com números
//Variáveis tem que ter nomes significativos
//Não podemos alterar o valor de uma constante
//`` = usado para puxar let ou const
//prompt = input
// "\texto\" = pode ser usado mesmo dentro de asbas duplas
//Contas com javascript pode não ser exata
//Toda vez que chamar uma função é necessário os ()
------------------------------------------------------------------------------------------------------------------
String = Primitivo (imutáveis)

typeof(variável)  = saber qual tipo é
parseInt('5.2')   = converte para number int = 5
parseFloat('5.2') = converte para number float = 5.2
Number('5.2') = converte number
alert('Deseja continuar?') = cria um alerta
if(variável == false){código} = if em javascript
else{código} = else em javascript
indexOf('palavra') = descobrir aonde 'palavra' começa
indexOf('palavra' , 3) = descobrir aonde 'palavra' começa pelo 3
lastIndexOf('palavra') = descobrir aonde 'palavra'. varrendo de trás pra frente
.replace('palavra', 'frase') = troca 'palavra' por 'frase' na minha String
palavra.replace(/ espaço /g, ' - ') = troca todos os espaços por ' - '
.length(palavra) = tamanho da String
palavra.slice(2, 6) = lavr
palavra.split(' ') = divide a frase por espaços
palavra.toUpperCase() = TUDO MAISCULO
palavra.toLowerCase() = Tudo minusculo
palavra.charAt(1) = Pega a segunda letra
palavra.toString() = Converte pra string 
toString(2 = binário)
variavel palavra = document.createElement('palavra') = criar um elemento
palavra.appendChild(palavra); = inserir o elemento
palavra.classList.add('corVermelha') = cria uma class
------------------------------------------------------------------------------------------------------------------
Number = Primitivo (imutáveis)

numero.toFixed(2) = mostrá até 2 casas decimais aredondando para cima
Number.isInteger(numero) = 'Boolean' número inteiro ou não
Number.isNaN(numero) = 'Boolean' A conta realizada é NaN? True = NaN. False = Conta válida
numero += Number(num1 + num2.toFixed(2)); = Corrige a impressisão
numero = Math.floor(num1) = arredondar num1 para baixo
numero = Math.ceil(num1) = arredondar num1 para cima
numero = Math.round(num1) = arredondar num1 para o mais próximo
Math.max() = pega o maior número
Math.min() = pega o menor número
const numero = Math.round(Math.random() * (10 /* numero maximo*/ - 0 /*número minimo */) + 0 /*número minimo */);
Math.sqrt() = raiz quadrada
------------------------------------------------------------------------------------------------------------------
Lista = referência (mutável)

lista[0] = 'Eduardo' = troca o oque tiver no índice 0 por 'Eduardo'
lista.push('Otávio'); = Adiciona a lista
lista.unshift('Lucas') = Adiciona no começo da lista
lista.pop(); = remove o ultimo da lista / podemos salvar em uma variavel
lista.shift(); = remove o primeiro da lista / podemos salvar em uma variavel
delete lista[2]; = remove o indice 2 da lista
instanceof Array = Boolean true = array / false = não array
let lista2 = [...lista] = copiar a lista de fato.
[primeiro, segundo ...resto] = '...resto' = variavel resto recebe o resto do array
------------------------------------------------------------------------------------------------------------------
Formulario

form.onsubmit = function (evento){} = caso click no submit
preventDefault(); = agir diferente do padrão
------------------------------------------------------------------------------------------------------------------
Operadores Lógicos

>=  Maior ou igual
<=  Menor ou igual
>   maior que
<   menor que
&&  And = e
||  or = ou
!   not = não
?   Se for true executa tal ação
:   Se for false executa tal ação
------------------------------------------------------------------------------------------------------------------
try = tenta executar a ação
catch = caso n consiga executar, faça  tal coisa
throw = lança um erro
throw new error('DEU ERRO AI EM') = função construtora