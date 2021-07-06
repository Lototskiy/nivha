var menu = document.querySelector('.mobile-menu');
var burger = document.querySelector('.header__burger');
var menuWrap = document.querySelector('.mobile-menu__wrap');
var closeMenu = document.querySelector('.mobile-menu__act--close');
window.MenuAllow = true;

burger.addEventListener('click', function () {
	window.showMenu();
});
closeMenu.addEventListener('click', function () {
	window.hideMenu();
});


window.showMenu = function () {
	if (window.MenuAllow) {
		window.MenuAllow = false;
		menu.classList.add('mobile-menu--active');
		menu.classList.add('mobile-menu--opacity0');
		raf(function () {
			menu.classList.add('mobile-menu--opacity1');
		});

		function leftMenu() {
			menuWrap.classList.add('mobile-menu__wrap--left0');
			if (event.propertyName == 'left') {
				window.MenuAllow = true; //-
				menu.removeEventListener('transitionend', leftMenu);
			}
		}

		menu.addEventListener('transitionend', leftMenu);
	}
}

window.hideMenu = function () {
	if (window.MenuAllow) {
		window.MenuAllow = false;
		menuWrap.classList.remove('mobile-menu__wrap--left0');

		function xxx() {
			menu.classList.remove('mobile-menu--opacity1');
			menu.classList.remove('mobile-menu--opacity0');
			setTimeout(function () {
				menu.classList.remove('mobile-menu--active');
				window.MenuAllow = true;
			}, 500);
			menuWrap.removeEventListener('transitionend', xxx);
		}

		menuWrap.addEventListener('transitionend', xxx);
	}
}



function raf(fn) {
	window.requestAnimationFrame(function () {
		window.requestAnimationFrame(function () {

			fn();
		});
	});
}


document.querySelector('.mobile-menu').addEventListener('click', function (e) {
	if (window.MenuAllow) {
		if (e.target.closest('.mobile-menu__wrap') == null) {
			window.hideMenu();
		}
	}
});