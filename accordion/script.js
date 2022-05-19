const accordion = document.querySelectorAll('.accordion-box');
const accordionContent = document.querySelectorAll('.accordion-content');


accordion.forEach((item) => {
	item.addEventListener('click', function () {

		if (this.classList.contains('active')) {
			this.classList.remove('active')
		} else {

			accordion.forEach((elem) => {
				elem.classList.remove('active');
			})

			this.classList.add('active')
		}

	})
})
















