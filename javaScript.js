let todos = ['Ali', 'Ahmad', 'Ayan'];
let form = document.querySelector('.addText');
// list-items parent
const list = document.querySelector('.todoList');

// Add todo
form.addEventListener('submit', function (e) {
	e.preventDefault();
	//
	let inputField = document.getElementById('inputText');
	const formData = new FormData(e.target);
	let inputData = formData.get('inputText');
	todos.push(inputData);
	// Reset the Input Field
	inputField.value = '';
	// Display Updated Todo
	display();
});

//Display Function
function display() {
	// CLear the Existing List
	list.innerHTML = '';
	todos.forEach((todo, index) => {
		const li = document.createElement('li');

		// edit sign to each
		const editSpan = document.createElement('span');
		editSpan.className = 'editBtn';
		editSpan.innerHTML = '&#9998;';

		// delete sign to each list
		const deleteSpan = document.createElement('span');
		let txt = document.createTextNode('\u00D7');
		deleteSpan.className = 'closeBtn';
		deleteSpan.appendChild(txt);
		// adding list item to the todos list
		li.style.backgroundColor = 'white';
		li.style.color = 'black';
		li.style.fontSize = '24px';
		li.className = 'list-item';
		li.id = index;
		li.appendChild(document.createTextNode(todo));
		li.appendChild(editSpan);
		li.appendChild(deleteSpan);

		list.appendChild(li);
		// console.log(li);
	});
	removeTodo();
	editTodo();
}

display();
//

function removeTodo() {
	let closeButtons = document.querySelectorAll('.closeBtn');
	closeButtons.forEach(item => {
		// console.log(item.parentElement.firstChild.data);
		// console.log(todos);
		item.onclick = function () {
			let parent = this.parentElement;
			parent.style.display = 'none';
			// console.log(todos);
			let p = this.parentElement.firstChild.data;
			// console.log(this.parentElement.firstChild.data);
			let remP = todos.filter(elem => {
				return elem === p;
			});
			todos.splice(remP, 1);
		};
	});
}

function editTodo() {
	// Edit functionality
	// Get the modal
	var modal = document.getElementById('myModal');

	// Get the button that opens the modal
	// var btn = document.getElementById('myBtn');
	let editbtns = document.querySelectorAll('.editBtn');
	// console.log(editbtns);
	// Get the <span> element that closes the modal
	let myedit = Array.from(editbtns);
	myedit.forEach(btn => {
		btn.addEventListener('click', function (e) {
			console.log(e.target.parentElement.id);
			let id = e.target.parentElement.id;
			console.log(todos);
			updateTodo(id);
			var span = document.getElementsByClassName('close')[0];
			modal.style.display = 'block';
			span.onclick = function () {
				modal.style.display = 'none';
			};
			window.onclick = function (event) {
				if (event.target == modal) {
					modal.style.display = 'none';
				}
			};
		});
	});

	// edit functionality End
}

// Update funcitonality
function updateTodo(editId) {
	let updateForm = document.querySelector('.updateForm');

	updateForm.addEventListener('submit', function (e) {
		e.preventDefault();

		let updateField = document.getElementById('updateText');
		const updateFormData = new FormData(e.target);
		let updateData = updateFormData.get('updateText');

		// Update the todo at the specified index (editId)
		if (todos[editId] !== undefined) {
			todos[editId] = updateData;
			// clear update filed
			updateField = '';
		}

		// Display the updated todos
		display();

		// Close the modal
		var modal = document.getElementById('myModal');
		modal.style.display = 'none';
	});
}
