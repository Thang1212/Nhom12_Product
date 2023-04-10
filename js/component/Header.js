import html from '../core.js';
import { connect } from '../store.js';

function Header({ logo, shoppingCarts }) {
    return html`
        <header class="container-fluid p-3">
            <div class="row">
                <a href="#" class="header__logo col-lg-3 d-flex justify-content-center">
                    <img src="${logo}" alt="" class="logo__img"> 
                </a>

                <div class="header__search d-flex align-items-center col-lg-5">
                    <input type="" name="" value="" placeholder="Tìm kiếm sản phẩm" class="search__input p-2 flex-grow-1 border border-white rounded-pill">
                    <button type="" class="btn btn-primary rounded-pill">
                        <i class="fa-solid fa-magnifying-glass"></i>
                    </button>
                </div>
        
                <div class="header__userinfo col-lg-4 d-flex align-items-center justify-content-around">
                    <button type="" class="userinfo__bill btn btn-light">
                        <a href="./checkoutcart.html" class="text-dark text-decoration-none">
                            <strong>Kiểm tra đơn hàng</strong>
                        </a>
                    </button>
        
                    <button type="" class="userinfo__cart btn btn-light p-2">
                        <a href="./cart.html" class="text-dark">
                            <p class="cart__amount bg-info">
                                ${shoppingCarts.reduce((acc, product) => acc += product.amount, 0)}
                            </p>
                            <i class="cart__icon fa-solid fa-cart-shopping"></i>
                        </a>
                    </button>
        
                    <button type="" class="userinfo__signin btn btn-outline-secondary">
                        <a href="#" class="signin__link text-dark text-decoration-none">
                            <i class="signin__icon far fa-user"></i>
                            <span><strong>Tài khoản</strong></span>
                        </a>
                    </button>
                </div>
            </div>  
        </header>
    `
}

export default connect()(Header);
