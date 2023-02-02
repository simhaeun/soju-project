// ********** scroll ************//
function check_animation() {
	const scrollTexts = document.querySelectorAll('.content p, .content h2, .content h3, .content h4, .content span, .content button')
	const scrollImages = document.querySelectorAll('.img > img')
	const banner = document.querySelectorAll('.banner-text')
	// const video = document.querySelectorAll('')
	
	const trigger = window.innerHeight / 1.2; 

	scrollTexts.forEach(scrollText => {
		const top = scrollText.getBoundingClientRect().top
		if (trigger > top) {
			scrollText.style.opacity = 1;
			scrollText.style.transition = '0.7s';
		} else {
			scrollText.style.opacity = 0;
			scrollText.style.transition = '0.7s';
		}
	})

	scrollImages.forEach(scrollImage => {
		const top = scrollImage.getBoundingClientRect().top
		if (trigger > top) {
			scrollImage.style.transform = 'scale(1)'
			scrollImage.style.transition = '1.2s';
		} else {
			scrollImage.style.transform = 'scale(1.2)'
			scrollImage.style.transition = '1.2s';
		}
	})

	banner.forEach(bannerText => {
		const top = bannerText.getBoundingClientRect().top
		if (trigger > top) {
			bannerText.classList.add('show')
			bannerText.style.opacity = 1
		} else {
			bannerText.classList.remove('show')
			bannerText.style.opacity = 0
		}
	})
}

window.addEventListener('scroll', check_animation)


// ********** nav ************//
const navbar = document.getElementById("nav");

window.addEventListener("scroll", function () {
  const scrollHeight = window.pageYOffset;
  const navHeight = navbar.getBoundingClientRect().height;
  if (scrollHeight > navHeight) {
    navbar.classList.add("fixed-nav");
  } else {
    navbar.classList.remove("fixed-nav");
  }
});


// ********** cart ************//
const overlay = document.querySelector('.content-overlay');
const cartOpen = document.querySelector('.cart-open');
const cart = document.querySelector('.cart');
const cartClose = document.querySelector('.cart-close');

cartOpen.addEventListener('click', function () {
	cart.classList.toggle('active')
	overlay.classList.toggle('active')
})
cartClose.addEventListener('click', function () {
	cart.classList.toggle('active')
	overlay.classList.toggle('active')
})
