console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('Form submitted successfully!');
}

function complimentUser() {
	alert('Awesome outfit!')
}

let form = document.querySelector('form#contact');

form.addEventListener('submit', handleSubmit);

let image = document.querySelector('img')

image.addEventListener('mouseover', complimentUser)