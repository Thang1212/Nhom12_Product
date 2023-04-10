import html from '../core.js';
import Header from './Header.js';
import NavBar from './NavBar.js';
import HeaderPanel from './HeaderPanel.js'
import Footer from './Footer.js' 
import { connect } from '../store.js';

function CartPage({ shoppingCarts, iphones, samsungs, oppos, googlePixels, totalMoney }) {
    let phones = { iphones, samsungs, oppos, googlePixels };

    return html`
        ${Header()}
        ${NavBar()}
        ${HeaderPanel()}

        <div id="toastmess"></div>

        <main>
            <section class="container p-5">
                <div class="cart-row">
                    <span class="cart-item cart-header cart-column">Sản Phẩm</span>
                    <span class="cart-price cart-header cart-column">Giá</span>
                    <span class="cart-quantity cart-header cart-column">Số
                        Lượng</span>
                </div>

                <div class="cart-items">
                    ${shoppingCarts.map((product, index) => html`
                        <div class="cart-row">
                            <div class="cart-item cart-column">
                                <img class="cart-item-image"
                                    src=${phones[product.phoneBrand][product.phoneIndex].img}
                                    width="100" height="100">
                                <span class="cart-item-title">
                                    ${phones[product.phoneBrand][product.phoneIndex].name}
                                </span>
                            </div>
                            <span class="cart-price cart-column">${phones[product.phoneBrand][product.phoneIndex].priceTags.actualPrice}đ</span>
                            <div class="cart-quantity cart-column">
                                <input 
                                    class="cart-quantity-input" type="number"
                                    value=${product.amount}
                                    onclick="
                                        dispatch('changeCart', '${product.phoneBrand}', ${product.phoneIndex}, ${index}, this.value);
                                        this.value > ${product.amount} ? showSuccessToast() : showWarningToast();
                                    "
                                >
                                <button 
                                    class="btn btn-danger" type="button"
                                    onclick="dispatch('deleteCart', ${index}); showWarningToast();"
                                >
                                    Xóa
                                </button>
                            </div>
                        </div>
                    `)}


                    <div class="cart-total">
                        <strong class="cart-total-title">Tổng Cộng:</strong>
                        <span class="cart-total-price">${totalMoney.priceTag} VNĐ</span>
                    </div>
                </div>
            </section>
        </main>

        ${Footer()}
    `;
}

export default connect()(CartPage);
