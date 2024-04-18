window.addEventListener('load', () => {
	var trangchu = document.querySelector('#trangchu');
	var gioithieu = document.querySelector('#gioithieu');
	var tragop = document.querySelector('#installment');
	var sanpham = document.querySelector('#sanpham');
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
	sanpham.addEventListener('click', () => {
		window.location.href = 'product.html';
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
