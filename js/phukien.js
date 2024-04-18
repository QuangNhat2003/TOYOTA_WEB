window.addEventListener('load', () => {
	var gioithieu = document.querySelector('#gioithieu');
	var trangchu = document.querySelector('#trangchu');
	var tragop = document.querySelector('#installment');
	var newcar = document.querySelector('#newcar');
	var sanpham = document.querySelector('#sanpham');
	var news = document.querySelector('#news');
	var contact = document.querySelector('#contact');
	var gioithieuFooter = document.querySelector('#gioithieuFooter');
	var installmentFooter = document.querySelector('#installmentFooter');
	var newcarFooter = document.querySelector('#newcarFooter');
	var dangnhap = document.querySelector('#Loggin');
	var xecu = document.querySelector('#oldcar');
	gioithieu.addEventListener('click', () => {
		window.location.href = 'introduce.html';
	});
	trangchu.addEventListener('click', () => {
		window.location.href = 'index.html';
	});
	tragop.addEventListener('click', () => {
		window.location.href = 'installment.html';
	});
	newcar.addEventListener('click', () => {
		console.log(gioithieuFooter);
		window.location.href = 'newcarprice.html';
	});
	sanpham.addEventListener('click', () => {
		window.location.href = 'product.html';
	});
	news.addEventListener('click', () => {
		window.location.href = 'news.html';
	});
	contact.addEventListener('click', () => {
		window.location.href = 'contact.html';
	});
	gioithieuFooter.addEventListener('click', () => {
		console.log(gioithieuFooter);
		window.location.href = 'introduce.html';
	});
	installmentFooter.addEventListener('click', () => {
		console.log(gioithieuFooter);
		window.location.href = 'installment.html';
	});
	newcarFooter.addEventListener('click', () => {
		console.log(gioithieuFooter);
		window.location.href = 'newcarprice.html';
	});
	dangnhap.addEventListener('click', () => {
		console.log(gioithieuFooter);
		window.location.href = 'formdangnhap/index.html';
	});
	xecu.addEventListener('click', () => {
		console.log(gioithieuFooter);
		window.location.href = 'oldcarprice.html';
	});
});
const bannerImages = document.querySelectorAll('.banner img');
let currentImageIndex = 0;

function showNextImage() {
	const currentImage = bannerImages[currentImageIndex];
	currentImage.classList.remove('active');

	currentImageIndex = (currentImageIndex + 1) % bannerImages.length;
	const nextImage = bannerImages[currentImageIndex];
	nextImage.classList.add('active');

	// Hiệu ứng chuyển ảnh mờ dần
	currentImage.style.opacity = 0;
	currentImage.style.transition = 'opacity 10s ease';
	setTimeout(() => {
		currentImage.style.display = 'none';
		currentImage.style.opacity = 1;
		currentImage.style.transition = '';
	}, 500);

	// Hiển thị ảnh 2 sau khi ảnh 1 mờ dần
	setTimeout(() => {
		nextImage.style.display = 'block';
	}, 500);
}

setInterval(showNextImage, 3000);
