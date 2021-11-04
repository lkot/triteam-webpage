const navMobile = document.querySelector('.nav-mobile');
const navBtn = document.querySelector('.hamburger');
const mobileLogo = document.querySelector('.header__logo');
const allNavLinks = document.querySelectorAll('.nav__link');

const achievementList = document.querySelector('.achievements-list');
const achievementNumber = document.querySelectorAll('.achievement-number');

const scrollTopBtn = document.querySelector('.goto-btns--left');
const footerYear = document.querySelector('.footer__year');

// Mobile menu toggle function.
const handleNav = () => {
	// Class 'is-acive' is a hamburger's built-in class
	// It has to be toggled via JavaScript to do the animation.
	navBtn.classList.toggle('is-active');
	navMobile.classList.toggle('nav-mobile--active');
	mobileLogo.classList.toggle('header__logo--active');
	// document.body.style.position = 'fixed';
	document.body.style.overflow = 'hidden';

	// navBtn.addEventListener('click', () => {
	// 	document.body.style.overflow = '';
	// 	document.body.style.position = '';
	// });

	allNavLinks.forEach((item) => {
		item.addEventListener('click', () => {
			// document.body.style.overflow = '';
			// document.body.style.position = '';
			document.body.style.overflow = 'scroll';

			navBtn.classList.remove('is-active');
			navMobile.classList.remove('nav-mobile--active');
			mobileLogo.classList.remove('header__logo--active');
		});
	});
};

// Achievements counter function.
const options = {
	rootMargin: '-250px',
};

const startCounter = (entry) => {
	console.log(entry[0].isIntersecting);

	if (entry[0].isIntersecting) {
		achievementNumber.forEach((counter) => {
			const updateCounter = () => {
				const finalNumber = counter.getAttribute('data-number');
				const value = parseInt(counter.textContent);

				const speed = finalNumber / 200;

				if (value < finalNumber) {
					counter.textContent = `${Math.floor(value + speed)}`;
					setTimeout(updateCounter, 1);
				} else {
					counter.textContent = finalNumber;
				}
			};

			updateCounter();
		});
	}
};

// Scroll to the top function.
const scrollToTop = () => {
	window.scroll({
		top: 0,
		behavior: 'smooth',
	});
};

// Function updating year in the footer section.
const handleCurrentYear = () => {
	const year = new Date().getFullYear();
	footerYear.innerText = year;
};

navBtn.addEventListener('click', handleNav);
const observer = new IntersectionObserver(startCounter, options);
observer.observe(achievementList);
scrollTopBtn.addEventListener('click', scrollToTop);
handleCurrentYear();
