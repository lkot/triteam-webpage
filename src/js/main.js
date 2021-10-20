const navMobile = document.querySelector('.nav-mobile');
const navBtn = document.querySelector('.hamburger');
const mobileLogo = document.querySelector('.header__logo');
const allNavLinks = document.querySelectorAll('.nav__link');

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

navBtn.addEventListener('click', handleNav);
