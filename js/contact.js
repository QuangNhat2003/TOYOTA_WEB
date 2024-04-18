function checkForm(option) {
	var formElement = document.querySelector(option.form);
	if (formElement) {
		formElement.onsubmit = function (e) {
			e.preventDefault();
			option.rules.forEach(function (rule) {
				var inputElement = formElement.querySelector(rule.selecter);
				checkError(inputElement, rule);
			});
		};
		function checkError(inputElement, rule) {
			var errorMessage = rule.test(inputElement.value);
			var messageElement = inputElement.parentElement.querySelector('.message');
			if (errorMessage) {
				messageElement.innerText = errorMessage;
				inputElement.classList.add('error');
				inputElement.classList.remove('accept');
			} else {
				messageElement.innerText = '';
				inputElement.classList.remove('error');
				inputElement.classList.add('accept');
			}
		}
		option.rules.forEach(function (rule) {
			var inputElement = formElement.querySelector(rule.selecter);
			if (inputElement) {
				inputElement.onblur = function () {
					checkError(inputElement, rule);
				};
			}
		});
	}
}
checkForm.isFullname = function (selecter) {
	return {
		selecter: selecter,
		test: function (value) {
			var userName =
				/[ÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễếệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ]/g;
			return userName.test(value) ? undefined : 'Vui lòng nhập đúng họ tên';
		},
	};
};
checkForm.isPhone = function (selecter) {
	return {
		selecter: selecter,
		test: function (value) {
			var phone = /(84|0[3|5|7|8|9])+([0-9]{8})\b/g;
			return phone.test(value)
				? undefined
				: 'Vui lòng nhập số điện thoại đúng định dạng';
		},
	};
};
checkForm.isEmail = function (selecter) {
	return {
		selecter: selecter,
		test: function (value) {
			var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
			return regex.test(value)
				? undefined
				: 'Vui lòng nhập đúng định dạng email';
		},
	};
};

window.addEventListener('load', () => {
	var gioithieu = document.querySelector('#gioithieu');
	var trangchu = document.querySelector('#trangchu');
	var tragop = document.querySelector('#installment');
	var newcar = document.querySelector('#newcar');
	var sanpham = document.querySelector('#sanpham');
	var news = document.querySelector('#news');
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
		window.location.href = '../formdangnhap/index.html';
	});
	xecu.addEventListener('click', () => {
		console.log(gioithieuFooter);
		window.location.href = 'oldcarprice.html';
	});
});
