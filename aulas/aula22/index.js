
const div = document.querySelector('.paragrafos');
const ps = div.querySelectorAll('p');

const styleBody = getComputedStyle(document.body);
const backgroundColorBody = styleBody.backgroundColor;
console.log(backgroundColorBody);

for(let p of ps){
  p.style.backgroundColor = backgroundColorBody;
  p.style.color = 'black';
}
