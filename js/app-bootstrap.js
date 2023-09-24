"use strict";

document.addEventListener('DOMContentLoaded', function() {

	const btn = document.querySelector('#btn');
	const block = document.querySelector('#block');
	const arrCards = block.querySelectorAll('.col');
	
	btn.addEventListener('click', (event) => {
		event.preventDefault();
		btn.disabled = true;
		arrCards.forEach(el => {
			el.classList.add('anim');
			setTimeout(() => {
				el.dataset.order = randomPosition();
			}, 1000)
			setTimeout(() => {
				el.classList.remove('anim');
			}, randomTime())
		})
		setTimeout(() => {
			btn.disabled = false;
		}, 5000)
	});

	function randomPosition() {
		return Math.floor(Math.random() * 8);
	}
	function randomTime() {
		return Math.floor(Math.random() * (5000 - 1100) + 1100);
	}
})