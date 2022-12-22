

const todoText = document.querySelector('.todo-text');
const todoBtn = document.querySelector('.todo-btn');
const todoList = document.querySelector('.todo-list');


todoBtn.addEventListener('click', addTarefa);
todoList.addEventListener('click', deletarTarefa);



function addTarefa(e){
e.preventDefault();
const box = document.createElement('div');
box.classList.add('box');

const todoItem = document.createElement('li');
todoItem.classList.add('todo-item');
todoItem.innerHTML = todoText.value;
todoText.value = '';

box.appendChild(todoItem);

const apagarBtn = document.createElement('button');
apagarBtn.innerText = 'X';
apagarBtn.classList.add('apagar-btn');
box.appendChild(apagarBtn);

todoList.appendChild(box);
}

function deletarTarefa(e){
const item = e.target;
const apagar = item.parentElement;
apagar.remove();

}