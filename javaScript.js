const todos = ['Ali', 'Ahmad', 'Ayan'];
const list = document.querySelector('.todoList');
function display() {
	todos.map(todo => {
		const li = document.createElement('li');
		li.style.backgroundColor = 'white';
		li.style.color = 'black';
		li.style.fontSize = '24px';
		li.className = 'list-item';
		li.appendChild(document.createTextNode(todo));
		console.log(li);
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
