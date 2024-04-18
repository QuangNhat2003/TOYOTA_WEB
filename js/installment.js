window.addEventListener('load', () => {
	var trangchu = document.querySelector('#trangchu');
	var gioithieu = document.querySelector('#gioithieu');
	var newcar = document.querySelector('#newcar');
	var sanpham = document.querySelector('#sanpham');
	var news = document.querySelector('#news');
	var contact = document.querySelector('#contact');
	var gioithieuFooter = document.querySelector('#gioithieuFooter');
	var newcarFooter = document.querySelector('#newcarFooter');
	var dangnhap = document.querySelector('#Loggin');
	var xecu = document.querySelector('#oldcar');
	trangchu.addEventListener('click', () => {
		window.location.href = 'index.html';
	});
	gioithieu.addEventListener('click', () => {
		window.location.href = 'introduce.html';
	});
	newcar.addEventListener('click', () => {
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
		window.location.href = 'introduce.html';
	});
	newcarFooter.addEventListener('click', () => {
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
