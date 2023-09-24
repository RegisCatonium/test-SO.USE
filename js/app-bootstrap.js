"use strict";

document.addEventListener('DOMContentLoaded', function() {

	const btn = document.querySelector('#btn');
	const block = document.querySelector('#block');
	const arrCards = block.querySelectorAll('.col');
	
	btn.addEventListener('click', (event) => {
		event.preventDefault();
		arrCards.forEach(el => {
			el.dataset.order = random()
		})
	});

	function random() {
		return Math.floor(Math.random() * 8);
	}

	 
})