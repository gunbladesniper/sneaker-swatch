

var buttons = document.querySelectorAll('.color-option');
var mainImage = document.querySelector('#main-image');

window.onload = function(){

	function handleButtonClick(e){
		var target;
		var image;
		if(e.target.nodeName === "IMG"){
			target = e.target.parentNode;
		}else{
			target = e.target;
		}
		image = target.dataset.option;
		mainImage.src = image;

	}
	buttons.forEach((button)=>{
		button.addEventListener('click',handleButtonClick)
	})
}
