const add = document.querySelector('.add');
const elemento = [  
  {tag: 'p', texto: 'frase 1'},
  {tag: 'div', texto: 'frase 2'},
  {tag: 'footer', texto: 'frase 3'},
  {tag: 'section', texto: 'frase 4'},
];

for( i = 0; i < elemento.length; i++){
  const {tag, texto} = elemento[i];
  const criado = document.createElement(tag);
  add.appendChild(criado);
  criado.innerHTML += `${texto}`
}
