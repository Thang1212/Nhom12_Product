$(document).ready(function () {
    let users = JSON.parse(localStorage.getItem('USERS'));
    let userData = null;

    function validateEmail() {
        let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

        if ($('.form__control__email').val() === '') {
            $('.form__control__email').addClass('border-danger');
            showErrorToast('Bắt buộc nhập!!!');

            return false;
        }

        if (emailRegex.test($('.form__control__email').val())) {
            $('.form__control__email').addClass('border-success');

            return true;
        } else {
            $('.form__control__email').addClass('border-danger');
            showErrorToast('Email không hợp lệ!!')

            return false;
        }
    }
    $('.form__control__email').blur(validateEmail);

    $('.form__control__email').on('input', function () {
        $('.form__control__email').removeClass('border-danger');
        $('.form__control__email').removeClass('border-success');
    });

    function validatePassword() {
        if ($('.form__control__password').val() === '') {
            $('.form__control__password').addClass('border-danger');
            showErrorToast('Bắt buộc nhập!!!');

            return false;
        }

        if ($('.form__control__password').val().length >= 6) {
            $('.form__control__password').addClass('border-success');

            return true;
        } else {
            $('.form__control__password').addClass('border-danger');
            showErrorToast('Mật khẩu tối đa phải có 6 kí tự!!')
            
            return false;
        }
    }
    $('.form__control__password').blur(validatePassword);

    $('.form__control__password').on('input', function () {
        $('.form__control__password').removeClass('border-danger');
        $('.form__control__password').removeClass('border-success');
    });

    function isFormValid() {
        if (validateEmail() && validatePassword()) {
            userData = {
                email: $('.form__control__email').val(),
                password: $('.form__control__password').val(),
            }

            let isValid = false;
            if (users) {
                users.forEach(user => {
                    if (user.email === userData.email && user.password === userData.password) {
                        isValid = true;
                        return;
                    }
                })
            } 

            if (!isValid || !users)
                showErrorToast('Tài khoản này chưa được đăng kí!!')

            return isValid;
        }

        return false;
    }

    $('.form__submit__signin').click(function (event) {
        event.preventDefault();

        if (isFormValid()) {
            dispatch('userSignIn', userData);
        }
    })
})
