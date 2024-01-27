const todo_list = [];

function add_todo() {
    const todo_element = document.querySelector('.js-todo-input');
    todo_list.push(todo_element.value);
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
        todo_list_html += `<p>${todo_list[i]}</p>`;
    }
    document.querySelector('.js-todo-list-display').innerHTML = todo_list_html;
}