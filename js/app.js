window.onload = function() {
	document.getElementById("copyright-year").textContent = (new Date().getFullYear());

	function scrollDownEvent(event) {
		// console.log(window.scrollY);
		let header = document.getElementById("header");
		if (window.scrollY > 150) {
			// document.getElementById("header").style.opacity = 0.9;
			header.classList.add("header-transparent");

		} else {
			// document.getElementById("header").style.opacity = 1.0;
			header.classList.remove("header-transparent");
		}
	}

	window.addEventListener("scroll", scrollDownEvent);
}