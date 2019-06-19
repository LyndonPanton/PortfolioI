window.onload = function() {
	document.getElementById("copyright-year").textContent = (new Date().getFullYear());

	function scrollDownEvent(event) {
		let header = document.getElementById("header");

		if (window.scrollY > 150) {
			header.classList.add("header-transparent");
		} else {
			header.classList.remove("header-transparent");
		}
	}

	window.addEventListener("scroll", scrollDownEvent);

	scrollDownEvent();
}