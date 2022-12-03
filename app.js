var items=document.querySelector('#items');
console.log(items.parentElement);
items.parentElement.style.backgroundColor='#f4f4f4';


console.log(items.lastChild);
console.log(items.lastElementChild);
items.lastElementChild.style.backgroundColor='coral';

console.log(items.firstChild);
console.log(items.firstElementChild);
items.firstElementChild.style.backgroundColor='yellow';

console.log(items.nextSibling);
console.log(items.nextElementSibling);

console.log(items.previousSibling);
console.log(items.previousElementSibling);
items.previousElementSibling.style.color = 'red';

var newDiv=document.createElement('div');

newDiv.className='hello';
newDiv.id='hello1';
newDiv.setAttribute('title','Hello Div');

var newDivText=document.createTextNode('Hello World');
newDiv.appendChild(newDivText);

var container=document.querySelector('header .container');
var h1=document.querySelector('header h1');

console.log(newDiv);

container.insertBefore(newDiv,h1);
