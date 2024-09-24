// const titulo = document.querySelector('h1');

// console.log(titulo.innerHTML)
// console.log(titulo.innerText)
// console.log(titulo.textContent)

// titulo.textContent = 'Meu novo paragrafo';

// const titulo = document.querySelector('h1');
// titulo.remove();

// const body = document.querySelector('body');
// const ancora = document.createElement('a');
// ancora.setAttribute('href','https://www.ifro.edu.br')
// ancora.setAttribute('target','_blank')
// ancora.textContent = 'IFRO';
// ancora.style.color = '#f09'
// ancora.style.textDecoration = 'none';
// ancora.style.fontWeight = 'bold';
// ancora.style.fontSize = '40px'
// body.appendChild(ancora)

const body = document.querySelector('body');
const lista = document.createElement('ul');
const item1 = document.createElement('li');
const item2 = document.createElement('li');
const item3 = document.createElement('li');
item1.textContent = 'item-1';
item2.textContent = 'item-2';
item3.textContent = 'item-3';
lista.append(item1);
lista.append(item2);
lista.append(item3);
body.append(lista);


