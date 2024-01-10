let todos = ['Ali', 'Ahmad', 'Ayan'];
let form = document.querySelector('form');
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
	todos.forEach(todo => {
		const li = document.createElement('li');
		const span = document.createElement('span');
		// close sign to each list
		let txt = document.createTextNode('\u00D7');
		span.className = 'closeBtn';
		span.appendChild(txt);
		// adding list item to the todos list
		li.style.backgroundColor = 'white';
		li.style.color = 'black';
		li.style.fontSize = '24px';
		li.className = 'list-item';
		li.appendChild(document.createTextNode(todo));
		li.appendChild(span);
		list.appendChild(li);
	});
	removeTodo();
}

display();
//

function removeTodo() {
	let closeButtons = document.querySelectorAll('.closeBtn');
	closeButtons.forEach(item => {
		console.log(item.parentElement.firstChild.data);
		// console.log(todos);
		item.onclick = function () {
			let parent = this.parentElement;
			parent.style.display = 'none';
			console.log(todos);
			let p = this.parentElement.firstChild.data;
			console.log(this.parentElement.firstChild.data);
			let remP = todos.filter(elem => {
				return elem === p;
			});
			todos.splice(remP, 1);
		};
	});
}

// add close button to all elements

// let closeButtons = document.querySelectorAll('.closeBtn');
// closeButtons.forEach(item => {
// 	console.log(item.parentElement.firstChild.data);
// 	// console.log(todos);
// 	item.onclick = function () {
// 		let parent = this.parentElement;
// 		parent.style.display = 'none';
// 		console.log(todos);
// 		let p = this.parentElement.firstChild.data;
// 		console.log(this.parentElement.firstChild.data);
// 		let remP = todos.filter(elem => {
// 			return elem === p;
// 		});
// 		todos.splice(remP, 1);
// 	};
// });
// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById('myBtn');

// Get the <span> element that closes the modal
var span = document.getElementsByClassName('close')[0];

// When the user clicks the button, open the modal
btn.onclick = function () {
	modal.style.display = 'block';
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
	modal.style.display = 'none';
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
	if (event.target == modal) {
		modal.style.display = 'none';
	}
};
