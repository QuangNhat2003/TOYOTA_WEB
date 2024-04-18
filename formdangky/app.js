function checkForm(option) {
	var formElement = document.querySelector(option.form);
	if (formElement) {
		formElement.onsubmit = function (e) {
			e.preventDefault();
			var checkAll = true;
			option.rules.forEach(function (rule) {
				var inputElement = formElement.querySelector(rule.selecter);
				var check = checkError(inputElement, rule);
				if (!check) {
					checkAll = false;
				}
				var fullname = document.querySelector('#fullname').value;
				var email = document.querySelector('#email').value;
				var password = document.querySelector('#password').value;
				var phone = document.querySelector('#phone').value;
				var username = document.querySelector('#username').value;
				var user = {
					fullname: fullname,
					email: email,
					password: password,
					phone: phone,
					username: username,
				};
				var json = JSON.stringify(user);
				if (
					!fullname == '' &&
					!email == '' &&
					!password == '' &&
					!phone == '' &&
					!username == ''
				) {
					localStorage.setItem(username, json);
				}
			});
			if (checkAll) {
				window.location.href = '../formdangnhap/index.html';
			} else {
				alert('Đăng ký thất bại');
			}
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
			return !errorMessage;
		}

		option.rules.forEach(function (rule) {
			var inputElement = formElement.querySelector(rule.selecter);
			if (inputElement) {
				inputElement.onblur = function () {
					var errorMessage = rule.test(inputElement.value);
					var messageElement =
						inputElement.parentElement.querySelector('.message');
					checkError(inputElement, rule);
				};
			}
		});
	}
}

checkForm.isResquired = function (selecter) {
	return {
		selecter: selecter,
		test: function (value) {
			return value.trim() ? undefined : 'Vui lòng nhập tên đăng nhập';
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
checkForm.isPassword = function (selecter, min) {
	return {
		selecter: selecter,
		test: function (value) {
			return value.length >= min
				? undefined
				: `Vui lòng nhập mật khẩu trên ${min} ký tự`;
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
checkForm.isUsername = function (selecter) {
	return {
		selecter: selecter,
		test: function (value) {
			var userName =
				/[ÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễếệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ]/g;
			return userName.test(value) ? undefined : 'Vui lòng nhập đúng họ tên';
		},
	};
};

// var btn = $("#btnSubmitAddRoles");
//         var l = Ladda.create(document.querySelector("#btnSubmitAddRoles"));
//         l.start();
//         l.setProgress(0.75);
//         btn.addClass('disabled');

//         var roleid = accounting.parse($("#cborole").val());

//         var username = $("#inputEmail").val();
//         var password = $("#inputpassword").val();
//         var fullname = $("#inputfullname").val();
//         var phone = $("#inputphone").val();
//         var regexPhone = /(84|0[3|5|7|8|9])+([0-9]{8})\b/g;
//         var regexEmail = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
//         if (username.length <= 0) {
//             toastr.warning("Vui lòng nhập UserName", "Thông báo");
//             btn.removeClass('disabled');
//             Ladda.stopAll();
//             $("#username").focus();
//             return;
//         }
//         if (regexEmail.test(username) == false) {
//             toastr.warning("Vui lòng nhập Email đúng định dạng", "Thông báo");
//             btn.removeClass('disabled');
//             Ladda.stopAll();
//             $("#username").focus();
//             return;
//         }

//         if (password.length <= 0) {
//             toastr.warning("Vui lòng nhập Password", "Thông báo");
//             btn.removeClass('disabled');
//             Ladda.stopAll();
//             $("#password").focus();
//             return;
//         }
//         if (fullname.length <= 0) {
//             toastr.warning("Vui lòng nhập Fullname", "Thông báo");
//             btn.removeClass('disabled');
//             Ladda.stopAll();
//             $("#fullname").focus();
//             return;
//         }
//         if (phone.length <= 0) {
//             toastr.warning("Vui lòng nhập Phone", "Thông báo");
//             btn.removeClass('disabled');
//             Ladda.stopAll();
//             $("#phone").focus();
//             return;
//         }
//         else if (phone.length > 11) {
//             toastr.warning("Vui lòng nhập đúng định dạng Phone", "Thông báo");
//             btn.removeClass('disabled');
//             Ladda.stopAll();
//             $("#phone").focus();
//             return;
//         }
//         else if (regexPhone.test(phone) == false) {
//             toastr.warning("Vui lòng nhập đúng định dạng Phone", "Thông báo");
//             btn.removeClass('disabled');
//             Ladda.stopAll();
//             $("#phone").focus();
//             return;
//         }
