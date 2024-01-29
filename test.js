console.clear();

let greeting = 'Hello';
let myName = 'Guzman';
const contentElement=document.getElementById('content');contentElement.innerHTML=`<h1 id="title">${greeting + ' ' + myName + '!'}</h1>`;