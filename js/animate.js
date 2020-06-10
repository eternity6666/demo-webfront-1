function fadeIn(node, element, callback) {
	animate1(node, element, 'fadeIn', callback);
}

function animate1(node, element, animationName, callback) {
	node.classList.remove('animated', animationName, element);
	node.classList.add('animated', animationName, 'slow');

	function handleAnimationEnd() {
		node.classList.remove('animated', animationName, "yaction");
		node.removeEventListener('animationend', handleAnimationEnd);

		if (typeof callback === 'function') callback();
	}

	node.addEventListener('animationend', handleAnimationEnd);
}

function animateCSS(element, speed, callback) {
	const nodes = document.querySelectorAll('.' + element);
	if (!nodes.length) {
		return
	}
	speed = speed || 350;
	nodes.forEach(function (node, index) {
		setTimeout(function () {
			fadeIn(node, element);
		}, index * speed)
	})
}