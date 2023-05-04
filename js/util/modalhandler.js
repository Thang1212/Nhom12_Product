$(document).ready(function () {
    let isFirstSignUp = JSON.parse(localStorage.getItem('ISFIRSTSIGNUP')) || false;
    let isBeginCheckout = JSON.parse(localStorage.getItem('BEGINCHECKOUT')) || false;

    if (isFirstSignUp) {
        $('.modal__signup').modal('show');
    }

    $('.modal__signup__btn').click(function () {
        $('.modal__signup').modal('hide');
        dispatch('endOfFirstSignUpModal');
    })

    $('.modal__signup').blur(function () {
        $('.modal__signup').modal('hide');
        dispatch('endOfFirstSignUpModal');
    })

    if (isBeginCheckout) {
        $('.modal__checkout').modal('show');
    }

    $('.modal__checkout__btn').click(function () {
        $('.modal__checkout').modal('hide');
        dispatch('endCheckout');
    })

    $('.modal__checkout').blur(function () {
        $('.modal__checkout').modal('hide');
        dispatch('endCheckout');
    })
})
