var todos = [];
let btnAddTask = document.querySelector('.but');
let taskName = document.querySelector('.aler');
console.log(todos);

function onAddClick() {
	var newTodo = document.getElementById("newTodo").value;
	todos.push(newTodo);
	document.getElementById("newTodo").value = "";

	if (newTodo.trim() === '') {
		alert('Bạn chưa nhập dữ liệu')

	} else {

		return updateTodoList();
	}


}

function updateTodoList() {
	var eleTodoList = document.getElementById("todo-list");

	eleTodoList.innerHTML = "";

	for (var i = 0; i < todos.length; i++) {
		eleTodoList.innerHTML +=
			'<div   class="box__Task-todo-list-son-2-todo-value">' +
			'<input class="inp"  type="checkbox" onclick="moreh()"  name="check" value="checkbox">' +
			'<p class="pp">' +
			todos[i] +
			"</p>" +
			'<a href="#" id="todo-list" onClick="event.preventDefault(); call()" > <div class="detail"><p>Deteal</p></div></a>' +
			'<a href="#" onClick="event.preventDefault(); onTodoClick(' +
			i +
			')" > <div class="remove"><p>Remove</p></div></a>' +
			"</div>";
	}
}

function call() {
	var eleTodoListt = document.getElementById("todo-list");
	eleTodoListt.innerHTML +=
		'<div class="box__Task-todo-list-son-2-con-info">' +
		'<input type="text" name="" value="" placeholder="Chage title...">' +
		'<div class="dis">' +
		'<p class="no" >Description</p>' +
		'<textarea  class="no-1" name="" id="" cols="52" rows="4"></textarea>' +
		"</div>" +
		'<div class="box-time">' +
		'<div class="box__Task-1">' +
		"<strong>Due Date</strong>" +
		'<input value="2022-01-14" type="date" name="bday">' +
		"</div>" +
		'<div class="box__Task-2">' +
		"<strong>Piority</strong>" +
		'<select name="skill" id="skills-2">' +
		'<option value="0">Normal</option>' +
		'<option value="1">High</option>' +
		'<option value="2">Low</option>' +
		'</select>' +
		"</div>" +
		"</div>" +
		'<a href="#" class="link" >' +
		'<div class="update"><p>Update</p></div>' +
		"</a>" +
		"</div>";
}

function onTodoClick(index) {
	todos.splice(index, 1);
	updateTodoList();
}

document.getElementById("newTodo")
	.addEventListener("keyup", function (event) {
		event.preventDefault();
		if (event.keyCode === 13) {
			document.getElementById("btnn").click();
		}
	});




function buttonCode() {
	alert("Button code executed.");
}

function moreh() {
	var eleTodoListt = document.getElementById("todo-list");
	eleTodoListt.innerHTML +=
		'<p>hello</p>'
}