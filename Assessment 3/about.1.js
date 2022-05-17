console.log("hello world");



// function handleSubmit(evt) {
// 	evt.preventDefault();
	
// 	console.log('form submit');
// }

const alert = () => {
	alert('Form has been submitted!');
  }
  
  button.addEventListener('click', alert);


let form = document.querySelector('form#contact');

form.addEventListener('submit', handleSubmit);