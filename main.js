//
//  JS File
//  You may remove the code below - it's just boilerplate
//
let preloader = document.querySelector('.preloader');
let logo = document.querySelector('.logo-header');
let logoSpan = document.querySelectorAll('.company');

window.addEventListener('DOMContentLoaded', ()=>{

  setTimeout(()=>{

    logoSpan.forEach((span, idx)=>{
      setTimeout(()=>{
        span.classList.add('active');
      }, (idx + 1) * 400)
    });

    setTimeout(()=>{
      logoSpan.forEach((span, idx)=>{

        setTimeout(()=>{
          span.classList.remove('active');
          span.classList.add('fade');
        }, (idx + 1) * 50)

      })
    },2000);

    setTimeout(()=>{
      preloader.style.top = '-100vh';
    }, 2300);

  })
})


window.addEventListener('load', () => {
  todos = JSON.parse(localStorage.getItem('todos')) || [];
  const nameInput = document.querySelector('#name');
  const newTodoForm = document.querySelector('#new-todo-form');

  const username = localStorage.getItem('username') || '';

  nameInput.value = username;

  nameInput.addEventListener('change', e => {
    localStorage.setItem('username', e.target.value);

  })

  newTodoForm.addEventListener('submit', e => {
    e.preventDefault();

    const todo = {
      content: e.target.elements.content.value, 
      category: e.target.elements.category.value,
      done: false,
      
    }

    todos.push(todo);

    localStorage.setItem('todos', JSON.stringify(todos));

    e.target.reset();

    DisplayTodos();

  })

  DisplayTodos();
})

function DisplayTodos () {
  const todoList = document.querySelector('#todo-list');

  todoList.innerHTML = '';

  todos.forEach(todo => {
    const todoItem = document.createElement('div');
    todoItem.classList.add('todo-item')

    const label = document.createElement('label');
    const input = document.createElement('input');
    const span = document.createElement('span');
    const content = document.createElement('div');
    const actions = document.createElement('div');
    const edit = document.createElement('button');
    const deleteButton = document.createElement('button');

    input.type ='checkbox';
    input.checked = todo.done;
    span.classList.add('bubble');

    if (todo.category == 'personal') {
      span.classList.add('personal');
    }
     else {
      span.classList.add('important');
    }

    content.classList.add('todo-content');
    actions.classList.add('actions');
    edit.classList.add('edit');
    deleteButton.classList.add('Delete');

    content.innerHTML = `<input type="text" value="${todo.content}"
    readonly>`;
    edit.innerHTML = 'Edit';
    deleteButton.innerHTML = 'Delete';

    label.appendChild(input);
    label.appendChild(span);
    actions.appendChild(edit);
    actions.appendChild(deleteButton);
    todoItem.appendChild(label);
    todoItem.appendChild(content);
    todoItem.appendChild(actions);

    todoList.appendChild(todoItem);

    if (todo.done) {
      todoItem.classList.add('done');
    }

    input.addEventListener('click', e => {
      todo.done = e.target.checked;
      localStorage.setItem('todos', JSON.stringify(todos));

      if(todo.done) {
        todoItem.classList.add('done');
      } else {
        todoItem.classList.remove('done');
      }

      DisplayTodos();
    })

    edit.addEventListener('click', e => {
      const input = content.querySelector('input');
      input.removeAttribute('readonly');
      input.focus();
      input.addEventListener('blur', e=> {
        input.setAttribute('readonly', true);
        todo.content = e.target.value;
        localStorage.setItem('todos', JSON.stringify(todos));
        DisplayTodos();
      })
    })

    deleteButton.addEventListener('click', e => {
      todos = todos.filter(t => t != todo);
      localStorage.setItem('todos', JSON.stringify(todos));
      DisplayTodos();
    })

  })
}













//
// Variables
//

// Constants
const appID = "app";


// Variables

// DOM Elements
let appContainer = document.getElementById(appID);

//
// Functions
//

// Add a heading to the app container
function inititialise() {
  // If anything is wrong with the app container then end
  if (!appContainer) {
    console.error("Error: Could not find app contianer");
    return;
  }

  // Create an h1 and add it to our app
  const h1 = document.createElement("h1");
  h1.innerText = headingText;
  appContainer.appendChild(h1);

  // Init complete
  console.log("App successfully initialised");
}

//
// Inits & Event Listeners
//

inititialise();
