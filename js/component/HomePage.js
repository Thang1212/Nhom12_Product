import html from '../core.js';
import HeaderPanel from './HeaderPanel.js'
import Footer from './Footer.js' 
import FirstSignUpModal from '../modal/FirstSignUpModal.js';
import CheckoutModal from '../modal/CheckoutModal.js';
import { connect } from '../store.js';

function Home({ logo, panelImgs, shoppingCarts, currentUser }) {
    return html`
        ${FirstSignUpModal()}
        ${CheckoutModal()}

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
                        <a href="./html/checkoutcart.html" class="text-dark text-decoration-none">
                            <strong>Kiểm tra đơn hàng</strong>
                        </a>
                    </button>
        
                    <button type="" class="userinfo__cart btn btn-light p-2">
                        <a href="./html/cart.html" class="text-dark">
                            <p class="cart__amount bg-info">
                                ${shoppingCarts.reduce((acc, product) => acc += product.amount, 0)}
                            </p>
                            <i class="cart__icon fa-solid fa-cart-shopping"></i>
                        </a>
                    </button>
        
                    <button type="" class="userinfo__signin btn btn-outline-secondary">
                        <a href=${currentUser === null ? './html/signin.html' : '#'} class="signin__link text-dark text-decoration-none">
                            <i class="signin__icon far fa-user"></i>
                            <span><strong>${currentUser === null ? 'Tài khoản' : currentUser.name}</strong></span>
                        </a>
                    </button>
                </div>
            </div>  
        </header>

        <nav class="navbar navbar-expand-sm navbar-dark bg-dark">
            <div class="container-fluid collapse navbar-collapse justify-content-center" id="navbarNavDropdown">
                <ul class="nav__list navbar-nav gap-lg-5">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#">Trang chủ</a>
                    </li>

                    <li class="nav-item">
                        <a class="nav-link active" href="./html/iphone.html">Iphone</a>
                    </li>

                    <li class="nav-item">
                        <a class="nav-link active" href="./html/samsung.html">Samsung</a>
                    </li>

                    <li class="nav-item">
                        <a class="nav-link active" href="./html/googlepixel.html">Google Pixel</a>
                    </li>

                    <li class="nav-item">
                        <a class="nav-link active" href="./html/oppo.html">Oppo</a>
                    </li>

                    <li class="navbar__dropdown nav-item dropdown">
                        <a class="nav-link dropdown-toggle active" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Phụ kiện
                        </a>

                        <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <li><a class="dropdown-item" href="./html/sacduphong.html">Sạc dự phòng</a></li>
                            <li><a class="dropdown-item" href="./html/saccap">Sạc cáp</a></li>
                            <li><a class="dropdown-item" href="./html/oplungdienthoai.html">Ốp lưng điện thoại</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </nav>

        ${HeaderPanel()}

        <main>
            <section class="container-fluid mt-4 bg-black mt-3">
                <div class="row mt-3">
                    ${panelImgs.map(img => `
                        <a href=${img.location} class="col-sm-6 mb-4">
                            <img src=${img.link} alt="" class="h-100 w-100 object-fit-cover">
                        </a>
                    `)}
                </div>
            </section>
        </main>

        ${Footer()}
    `;
}

export default connect()(Home);
