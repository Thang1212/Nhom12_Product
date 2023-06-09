import storage, { iphones, samsungs, googlePixels, oppos, sacduphong, saccap, oplungdienthoai } from './util/storage.js';

const init = {
    currentProductDetail: storage.getCurrentProductDetail(),

    logo: 'https://drive.google.com/uc?export=view&id=1NlE5IQq064nBUXG7iUL3CPyqULeHTvc0',

    sortingType: 'default',

    iphones,

    samsungs,

    googlePixels,

    oppos,

    sacduphong,

    saccap,

    oplungdienthoai,

    panelImgs: [
        {
            location: './html/iphone.html',
            link: 'https://drive.google.com/uc?export=view&id=1XSeI31Jzcd3nDJp2mB-Lw-7cxnBQoEFt',
        },
        {
            location: './html/iphone.html',
            link: 'https://drive.google.com/uc?export=view&id=1yE8h8AOOQwoPYZynDc_qw-DEozcAcI1a',
        },
        {
            location: './html/samsung.html',
            link: 'https://drive.google.com/uc?export=view&id=1UEdrvEB_FHv_jfgWNbvAvbFd211yUQ6a',
        },
        {
            location: './html/samsung.html',
            link: 'https://drive.google.com/uc?export=view&id=1pj0zQm2eX-XJDmVOt0zeWjxRcmlcA98A',
        },
        {
            location: './html/googlepixel.html',
            link: 'https://drive.google.com/uc?export=view&id=1bVtfptfhmGI1Gf0K2stUtv49kgol8A_2',
        },
        {
            location: './html/googlepixel.html',
            link: 'https://drive.google.com/uc?export=view&id=1xq5bAKJdQdZ_BTnkUx0MNfPCB9GKDf9p',
        }, 
        {
            location: './html/oppo.html',
            link: 'https://drive.google.com/uc?export=view&id=1t-loQXKkBtrJZg6j91AeK8dJgmnWm7Qg',
        },
        {
            location: './html/oppo.html',
            link: 'https://drive.google.com/uc?export=view&id=1MWyY33BqlWa3iiqBGViFykpOH_t5gKxq',
        },
    ],

    shoppingCarts: storage.getCarts(), 
    
    vouchers: ['NHOM12P', 'THEROCK'],

    totalMoney: storage.getTotalMoney(),

    users: storage.getUsers(),

    currentUser: storage.getCurrentUser(),

    isFirstSignUp: storage.getIsFirstSignUp(),

    beginCheckout: storage.getBeginCheckout(),

    order: storage.getOrder()
}

let MoneyFormat = new Intl.NumberFormat().format;

const actions = {
    sortingPrice(state, type) {
        state.sortingType = type;
    },

    increaseCart(state, phoneBrand, phoneIndex) {
        let currentProductPrice = state[phoneBrand][phoneIndex].price;

        state.totalMoney.initPrice += currentProductPrice;
        state.totalMoney.discountPrice = 0;
        state.totalMoney.discountPriceTag = MoneyFormat(0);
        state.totalMoney.payment = state.totalMoney.initPrice;
        state.totalMoney.priceTag = MoneyFormat(state.totalMoney.payment);
        storage.setTotalMoney(state.totalMoney);

        if (state.shoppingCarts.length) {
            for (let x of state.shoppingCarts) {
                if (x.phoneBrand === phoneBrand && x.phoneIndex === phoneIndex) {
                    x.amount += 1;
                    x.price += currentProductPrice;
                    x.priceTag = MoneyFormat(x.price);

                    storage.setCarts(state.shoppingCarts)
                    return;
                }
            }
        } 

        state.shoppingCarts.push({ 
            amount: 1, phoneBrand, phoneIndex, 
            price: currentProductPrice,
            priceTag: MoneyFormat(currentProductPrice)
        })

        storage.setCarts(state.shoppingCarts)
    }, 
    
    decreaseCart(state, phoneBrand, phoneIndex, cartIndex) {
        let currentProductPrice = state[phoneBrand][phoneIndex].price;

        state.totalMoney.initPrice -= currentProductPrice;
        state.totalMoney.discountPrice = 0;
        state.totalMoney.discountPriceTag = MoneyFormat(0);
        state.totalMoney.payment = state.totalMoney.initPrice;
        state.totalMoney.priceTag = MoneyFormat(state.totalMoney.payment);
        storage.setTotalMoney(state.totalMoney);

        if (state.shoppingCarts[cartIndex].amount === 1) {
            state.shoppingCarts.splice(cartIndex, 1);
            storage.setCarts(state.shoppingCarts);
            return;
        }

        state.shoppingCarts[cartIndex].amount -= 1;
        state.shoppingCarts[cartIndex].price -= currentProductPrice;
        state.shoppingCarts[cartIndex].priceTag = MoneyFormat(state.shoppingCarts[cartIndex].price);
        storage.setCarts(state.shoppingCarts);
    },

    changeCart(state, phoneBrand, phoneIndex, cartIndex, value = 0) {
        value > state.shoppingCarts[cartIndex].amount ?
        this.increaseCart(state, phoneBrand, phoneIndex)
        : 
        this.decreaseCart(state, phoneBrand, phoneIndex, cartIndex)
    },

    deleteCart(state, cartIndex) {
        state.totalMoney.initPrice -= state.shoppingCarts[cartIndex].price;
        state.totalMoney.discountPrice = 0;
        state.totalMoney.discountPriceTag = MoneyFormat(0);
        state.totalMoney.payment = state.totalMoney.initPrice;
        state.totalMoney.priceTag = MoneyFormat(state.totalMoney.payment);
        storage.setTotalMoney(state.totalMoney);

        state.shoppingCarts.splice(cartIndex, 1);
        storage.setCarts(state.shoppingCarts);
    },

    applyVoucher(state, inputValue) {
        if (state.vouchers.includes(inputValue)) {
            state.totalMoney.discountPrice = Math.floor(state.totalMoney.initPrice * 2/10);
            state.totalMoney.payment = state.totalMoney.initPrice - state.totalMoney.discountPrice;

            state.totalMoney.discountPriceTag = MoneyFormat(state.totalMoney.discountPrice);
            state.totalMoney.priceTag = MoneyFormat(state.totalMoney.payment);

            storage.setTotalMoney(state.totalMoney);
        }
    },

    createUserAccount(state) {
        if (!state.users.length || state.users[state.users.length-1].isValidate) {
            state.users.push({
                fullname: null,
                username: null,
                phonenumber: null,
                address: null,
                email: null,
                password: null,
                isValidate: false,
            })

            storage.setUsers(state.users);
        }
    },

    validateFullNameToUser(state, nameValue) {
        state.users[state.users.length-1].fullname = nameValue;
        storage.setUsers(state.users);
    },

    validateUserNameToUser(state, usernameValue) {
        let isUserNameApprove = !state.users.some(user => user.username !== usernameValue);

        if (isUserNameApprove === true)
            console.log('same username');
    },

    navigateCurrentProductDetail(state, productBrand, productIndex) {
        let currentProduct = state[productBrand][productIndex];

        state.currentProductDetail.productBrand = productBrand
        state.currentProductDetail.productIndex = productIndex 
        state.currentProductDetail.name = currentProduct.name
        state.currentProductDetail.price = currentProduct.price
        state.currentProductDetail.priceTags = currentProduct.priceTags
        state.currentProductDetail.details = currentProduct.details
        state.currentProductDetail.img = currentProduct.img

        storage.setCurrentProductDetail(state.currentProductDetail);
        window.location = '../html/productdetail.html';
    },

    navigateCheckOutCart(state, productBrand, productIndex) {
        this.increaseCart(state, productBrand, productIndex);

        window.location = '../html/checkoutcart.html';
    },

    userSignUp(state, userData) {
        state.users.push(userData);
        state.currentUser = userData;
        state.isFirstSignUp = true;

        storage.setUsers(state.users);
        storage.setCurrentUser(userData);
        storage.setIsFirstSignUp(true);

        window.location = '../index.html';
    },

    showFirstSignUpModal(state) {
        state.firstSignUp = false;
    },

    userSignIn(state, userData) {
        state.users.forEach(user => {
            if (user.email === userData.email && user.password === userData.password) {
                storage.setCurrentUser(user);
                return;
            }
        })

        window.location = '../index.html';
    },

    endOfFirstSignUpModal(state) {
        state.firstSignUp = false;

        storage.setIsFirstSignUp(false);
    },

    beginCheckout(state, orderData) {
        state.beginCheckout = true;
        state.order.firstname = orderData.firstname;
        state.order.lastname = orderData.lastname;
        state.order.username = orderData.username;
        state.order.email = orderData.email;
        state.order.address = orderData.address;
        state.order.zipcode = orderData.zipcode;
        state.order.cardname = orderData.cardname;
        state.order.seriescard = orderData.seriescard;

        storage.setBeginCheckout(true);
        storage.setOrder(state.order);

        window.location = '../index.html';
    },

    endCheckout(state) {
        state.beginCheckout = false;

        storage.setBeginCheckout(false);
    }
}

export default function reducer(state = init, action, args) {
    actions[action] && actions[action](state, ...args);

    return state;
}
