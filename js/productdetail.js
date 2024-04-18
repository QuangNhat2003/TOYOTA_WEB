// slaiok
var imageToyota = document.querySelectorAll('.imageToyota img');
var leftBtn = document.querySelector('.left');
var rightBtn = document.querySelector('.right');
let index = 0;
rightBtn.addEventListener('click', () => {
	index++;
	if (index > imageToyota.length - 1) {
		index = 0;
	}
	removeActive();
	imgNumber[index].classList.add('active');
	document.querySelector('.imageToyota').style.right = index * 100 + '%';
});

leftBtn.addEventListener('click', () => {
	index--;
	if (index < 0) {
		index = imageToyota.length - 1;
	}
	removeActive();
	imgNumber[index].classList.add('active');
	document.querySelector('.imageToyota').style.right = index * 100 + '%';
});
function sliderAuto() {
	index = index + 1;
	if (index > imageToyota.length - 1) {
		index = 0;
	}
	document.querySelector('.imageToyota').style.right = index * 100 + '%';
	removeActive();
	imgNumber[index].classList.add('active');
}
setInterval(sliderAuto, 5000);

const imgNumber = document.querySelectorAll('.box-list span');
imgNumber.forEach(function (image, index) {
	image.addEventListener('click', function () {
		removeActive();
		document.querySelector('.imageToyota').style.right = index * 100 + '%';
		image.classList.add('active');
	});
});

function removeActive() {
	let imgactive = document.querySelector('.active');
	imgactive.classList.remove('active');
}
// chức năng

function searchProduct() {
	let searchBar = document.querySelector('#search').value.toUpperCase();
	let productItem = Array.from(document.querySelectorAll('.product-item'));
	let productName = document.querySelectorAll('h3');
	console.log(productName);

	for (let i = 0; i < productName.length; i++) {
		if (productName[i].innerHTML.toUpperCase().indexOf(searchBar) >= 0) {
			productItem[i].style.display = '';
			// console.log("haha")
		} else {
			productItem[i].style.display = 'none';
		}
	}
}

var searchBox = document.querySelector('.search');
console.log(searchBox);
searchBox.addEventListener('keyup', searchProduct);

window.addEventListener('load', () => {
	var trangchu = document.querySelector('#trangchu');
	var gioithieu = document.querySelector('#gioithieu');
	var tragop = document.querySelector('#installment');
	var newcar = document.querySelector('#newcar');
	var news = document.querySelector('#news');
	var contact = document.querySelector('#contact');
	var installmentFooter = document.querySelector('#installmentFooter');
	var dangnhap = document.querySelector('#Loggin');
	var xecu = document.querySelector('#oldcar');
	trangchu.addEventListener('click', () => {
		window.location.href = 'index.html';
	});
	gioithieu.addEventListener('click', () => {
		window.location.href = 'introduce.html';
	});
	tragop.addEventListener('click', () => {
		window.location.href = 'installment.html';
	});
	newcar.addEventListener('click', () => {
		window.location.href = 'newcarprice.html';
	});
	news.addEventListener('click', () => {
		window.location.href = 'news.html';
	});
	contact.addEventListener('click', () => {
		window.location.href = 'contact.html';
	});
	installmentFooter.addEventListener('click', () => {
		window.location.href = 'installment.html';
	});
	dangnhap.addEventListener('click', () => {
		window.location.href = 'formdangnhap/index.html';
	});
	xecu.addEventListener('click', () => {
		window.location.href = 'oldcarprice.html';
	});
});

// thay đổi màu sắc xe
