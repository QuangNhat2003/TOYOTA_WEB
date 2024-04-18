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
