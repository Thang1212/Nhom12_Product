$(document).ready(function () {
    let users = JSON.parse(localStorage.getItem('USERS'));
    let userData = null;

    function validateName() {
        let nameRegex = /^([A-Z]{1}[a-z]{1,10})(\s[A-Z]{1}([a-z]){1,10}){1,5}$/;

        if ($('.form__control__name').val() === '') {
            $('.form__control__name').addClass('border-danger');
            showErrorToast('Bắt buộc nhập!!!');

            return false;
        }

        if (nameRegex.test($('.form__control__name').val())) {
            $('.form__control__name').addClass('border-success');

            return true;
        } else {
            $('.form__control__name').addClass('border-danger');
            showErrorToast('Tên phải bắt đầu bằng chữ cái in hoa!!')

            return false;
        }
    }
    $('.form__control__name').blur(validateName);

    $('.form__control__name').on('input', function () {
        $('.form__control__name').removeClass('border-danger');
        $('.form__control__name').removeClass('border-success');
    });

    function validateNumber() {
        let numberRegex = /^((\+84)|0)\d{9,11}$/;

        if ($('.form__control__number').val() === '') {
            $('.form__control__number').addClass('border-danger');
            showErrorToast('Bắt buộc nhập!!!');

            return false;
        }

        if (numberRegex.test($('.form__control__number').val())) {
            $('.form__control__number').addClass('border-success');

            return true;
        } else {
            $('.form__control__number').addClass('border-danger');
            showErrorToast('Sđt bắt đầu (+84) hoặc 0 và có 9-11 số!!')

            return false;
        }
    }
    $('.form__control__number').blur(validateNumber);

    $('.form__control__number').on('input', function () {
        $('.form__control__number').removeClass('border-danger');
        $('.form__control__number').removeClass('border-success');
    });

    function validateAddress() {
        if ($('.form__control__address').val() === '') {
            $('.form__control__address').addClass('border-danger');
            showErrorToast('Bắt buộc nhập!!!');

            return false;
        } else {
            $('.form__control__address').addClass('border-success');

            return true;
        }
    }
    $('.form__control__address').blur(validateAddress);

    $('.form__control__address').on('input', function () {
        $('.form__control__address').removeClass('border-danger');
        $('.form__control__address').removeClass('border-success');
    });

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
        if ($('.form__control__license:checked').val() === undefined) {
            showErrorToast('Bạn phải chấp nhận điều khoản của công ty!!');

            return false;
        }
        
        if (validateName() && validateNumber() && validateAddress() && validateEmail() && validatePassword()) {
            userData = {
                name: $('.form__control__name').val(),
                number: $('.form__control__number').val(),
                address: $('.form__control__address').val(),
                email: $('.form__control__email').val(),
                password: $('.form__control__password').val(),
            }

            if (users) {
                let isValid = true;
                users.forEach(user => {
                    if (user.number === userData.number || user.email === userData.email) {
                        isValid = false;
                        return;
                    }
                })

                if (!isValid) {
                    showErrorToast('Tài khoản email hoặc sđt này đã được đăng kí từ trước!!');

                    return false;
                }
            }

            return true;
        }

        return false;
    }

    $('.form__submit').click(function (event) {
        event.preventDefault();

        if (isFormValid()) {
            dispatch('userSignUp', userData);
        }
    })
})
