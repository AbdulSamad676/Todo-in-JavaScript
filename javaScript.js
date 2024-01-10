let todos = ['Ali', 'Ahmad', 'Ayan'];
let form = document.querySelector('form');
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

const list = document.querySelector('.todoList');

// add close button to all elements

//Display Function
function display() {
	// CLear the Existing List
	list.innerHTML = '';
	todos.forEach(todo => {
		const li = document.createElement('li');
		const span = document.createElement('span');
		//
		let txt = document.createTextNode('\u00D7');
		span.className = 'close';
		span.appendChild(txt);

		li.style.backgroundColor = 'white';
		li.style.color = 'black';
		li.style.fontSize = '24px';
		li.className = 'list-item';
		li.appendChild(document.createTextNode(todo));
		li.appendChild(span);
		list.appendChild(li);
	});
}
display();
//
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
