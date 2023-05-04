$(document).ready(function () {
    let shoppingCarts = JSON.parse(localStorage.getItem('SHOPPINGCARTS'));
    let userData = null;

    function validateFirstName() {
        let firstNameRegex = /^([A-Z]{1}[a-z]{1,10})$/;

        if ($('.form__control__firstname').val() === '') {
            $('.form__control__firstname').addClass('border-danger');
            showErrorToast('Bắt buộc nhập!!!');

            return false;
        }

        if (firstNameRegex.test($('.form__control__firstname').val())) {
            $('.form__control__firstname').addClass('border-success');

            return true;
        } else {
            $('.form__control__firstname').addClass('border-danger');
            showErrorToast('Tên phải bắt đầu bằng chữ cái in hoa!!')

            return false;
        }
    }
    $('.form__control__firstname').blur(validateFirstName);

    $('.form__control__firstname').on('input', function () {
        $('.form__control__firstname').removeClass('border-danger');
        $('.form__control__firstname').removeClass('border-success');
    });

    function validateLastName() {
        let lastNameRegex = /^([A-Z]{1}[a-z]{1,10})$/;

        if ($('.form__control__lastname').val() === '') {
            $('.form__control__lastname').addClass('border-danger');
            showErrorToast('Bắt buộc nhập!!!');

            return false;
        }

        if (lastNameRegex.test($('.form__control__lastname').val())) {
            $('.form__control__lastname').addClass('border-success');

            return true;
        } else {
            $('.form__control__lastname').addClass('border-danger');
            showErrorToast('Họ phải bắt đầu bằng chữ cái in hoa!!')

            return false;
        }
    }
    $('.form__control__lastname').blur(validateLastName);

    $('.form__control__lastname').on('input', function () {
        $('.form__control__lastname').removeClass('border-danger');
        $('.form__control__lastname').removeClass('border-success');
    });
    
    function validateUsername() {
        let usernameRegex = /^[A-Z a-z]{1,20}$/;

        if ($('.form__control__username').val() === '') {
            $('.form__control__username').addClass('border-danger');
            showErrorToast('Bắt buộc nhập!!!');

            return false;
        }

        if (usernameRegex.test($('.form__control__username').val())) {
            $('.form__control__username').addClass('border-success');

            return true;
        } else {
            $('.form__control__username').addClass('border-danger');
            showErrorToast('Username chỉ tối đa 20 kí tự và không có kí tự đặc biệt!!')

            return false;
        }
    }
    $('.form__control__username').blur(validateUsername);

    $('.form__control__username').on('input', function () {
        $('.form__control__username').removeClass('border-danger');
        $('.form__control__username').removeClass('border-success');
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

    function validateAddress1() {
        if ($('.form__control__address1').val() === '') {
            $('.form__control__address1').addClass('border-danger');
            showErrorToast('Bắt buộc nhập!!!');

            return false;
        } else {
            $('.form__control__address1').addClass('border-success');

            return true;
        }
    }
    $('.form__control__address1').blur(validateAddress1);

    $('.form__control__address1').on('input', function () {
        $('.form__control__address1').removeClass('border-danger');
        $('.form__control__address1').removeClass('border-success');
    });

    function validateZipcode() {
        let zipcodeRegex = /^\d{5}$/;

        if ($('.form__control__zipcode').val() === '') {
            $('.form__control__zipcode').addClass('border-danger');
            showErrorToast('Bắt buộc nhập!!!');

            return false;
        }

        if (zipcodeRegex.test($('.form__control__zipcode').val())) {
            $('.form__control__zipcode').addClass('border-success');

            return true;
        } else {
            $('.form__control__zipcode').addClass('border-danger');
            showErrorToast('Zip code bắt buộc có 5 chữ số!!')

            return false;
        }
    }
    $('.form__control__zipcode').blur(validateZipcode);

    $('.form__control__zipcode').on('input', function () {
        $('.form__control__zipcode').removeClass('border-danger');
        $('.form__control__zipcode').removeClass('border-success');
    });

    function validateCardname() {
        let cardnameRegex = /^[A-Z a-z]{1,10}$/;

        if ($('.form__control__cardname').val() === '') {
            $('.form__control__cardname').addClass('border-danger');
            showErrorToast('Bắt buộc nhập!!!');

            return false;
        }

        if (cardnameRegex.test($('.form__control__cardname').val())) {
            $('.form__control__cardname').addClass('border-success');

            return true;
        } else {
            $('.form__control__cardname').addClass('border-danger');
            showErrorToast('Tên card nên được ghi rõ!!')

            return false;
        }
    }
    $('.form__control__cardname').blur(validateCardname);

    $('.form__control__cardname').on('input', function () {
        $('.form__control__cardname').removeClass('border-danger');
        $('.form__control__cardname').removeClass('border-success');
    });

    function validateSeriescard() {
        let seriescardRegex = /^\d{16,19}$/;

        if ($('.form__control__seriescard').val() === '') {
            $('.form__control__seriescard').addClass('border-danger');
            showErrorToast('Bắt buộc nhập!!!');

            return false;
        }

        if (seriescardRegex.test($('.form__control__seriescard').val())) {
            $('.form__control__seriescard').addClass('border-success');

            return true;
        } else {
            $('.form__control__seriescard').addClass('border-danger');
            showErrorToast('Số series ngân hàng phải bao gồm 16 - 19 số!!')

            return false;
        }
    }
    $('.form__control__seriescard').blur(validateSeriescard);

    $('.form__control__seriescard').on('input', function () {
        $('.form__control__seriescard').removeClass('border-danger');
        $('.form__control__seriescard').removeClass('border-success');
    });

    function isFormValid() {
        if (validateFirstName() && validateLastName && validateUsername() && 
            validateEmail() && validateAddress1() && validateZipcode() && 
            validateCardname() && validateSeriescard()) {

            userData = {
                firstname: $('.form__control__firstname').val(),
                lastname: $('.form__control__lastname').val(),
                username: $('.form__control__username').val(),
                email: $('.form__control__email').val(),
                address: $('.form__control__address1').val(),
                zipcode: $('.form__control__zipcode').val(),
                cardname: $('.form__control__cardname').val(),
                seriescard: $('.form__control__seriescard').val(),
            }

            if (!shoppingCarts || !shoppingCarts.length) {
                showErrorToast('Giỏ hàng đang trống, xin vui lòng quay trở lại!!')
                return false;
            }

            return true;
        }

        return false;
    }

    $('.checkout__btn__submit').click(function (event) {
        event.preventDefault();

        if (isFormValid()) {
            dispatch('beginCheckout', userData);
        }
    })
})
