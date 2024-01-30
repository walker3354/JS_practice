const todo_list = [];



function add_todo() {
    const todo_element = document.querySelector('.js-todo-input');
    const Duedata = document.querySelector('.js-Due-data');
    const todo_struct = {
        name: '',
        Duedata: ''
    };

    todo_struct.name = todo_element.value;
    todo_struct.Duedata = Duedata.value;
    todo_list.push(todo_struct);
    todo_element.value = '';;
    display_todo_list();
}

function detect_string_end(key) {
    if (key === 'Enter')
        add_todo();
}

function display_todo_list() {
    let todo_list_html = '';
    for (let i = 0; i < todo_list.length; i++) {
        console.log(todo_list[i]);
        todo_list_html += `
        <div>${todo_list[i].name}</div>
        <div>${todo_list[i].Duedata}</div>
        <button onclick="delete_todo_list(${i})" class= "delete-button">Delete</button>
        `;
    }
    document.querySelector('.js-todo-list-display').innerHTML = todo_list_html;
}

function delete_todo_list(array_pos) {
    todo_list.splice(array_pos, 1);
    display_todo_list();
}