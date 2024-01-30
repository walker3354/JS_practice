let todo_list = [];

find_save();

function find_save() {
    if (localStorage.getItem('message') === null)
        return false;
    else {
        alert('find save');
        todo_list_save = JSON.parse(localStorage.getItem('message'));
        console.log(todo_list_save);
        todo_list = todo_list_save.slice();
        display_todo_list();
    }
}

function storage_save() {
    console.log(JSON.stringify(todo_list));
    localStorage.setItem('message', JSON.stringify(todo_list));
}

function add_todo() {
    const todo_struct = {
        name: '',
        Duedata: ''
    }
    todo_struct.name = document.querySelector('.js-todo-name-input').value;
    todo_struct.Duedata = document.querySelector('.js-Duedata-input').value;
    todo_list.push(todo_struct);
    document.querySelector('.js-todo-name-input').value = '';
    display_todo_list();
}

function detect_string_end(key) {
    if (key === 'Enter')
        add_todo();
}

function display_todo_list() {
    let todo_str = '';
    for (let i = 0; i < todo_list.length; i++) {
        todo_str += `<div>${todo_list[i].name}</div> <div>${todo_list[i].Duedata}</div>
        <button class= "js-delete-button delete-button" onclick = "delete_todo(${i})">Delete</button>
        `;
    }
    document.querySelector('.js-todo-list').innerHTML = todo_str;
    storage_save()
}

function delete_todo(todo_id) {
    todo_list.splice(todo_id, 1);
    document.querySelector('.js-todo-list').innerHTML = '';
    display_todo_list();
}

