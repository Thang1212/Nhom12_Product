import html from '../core.js';
import Header from './Header.js';
import NavBar from './NavBar.js';
import Footer from './Footer.js' 
import { connect } from '../store.js';

function CheckoutCartPage({ shoppingCarts, iphones, samsungs, oppos, googlePixels, totalMoney }) {
    let phones = { iphones, samsungs, oppos, googlePixels };

    return html`
        ${Header()}
        ${NavBar()}

		<main>
            <section class="container pb-5">
                <div class="py-5 text-center">
                    <img src="../Nhom12UI2/img/logo5.png" alt="">
                    <h2>Đơn đặt hàng</h2>
                    <p class="lead">
                    </p>
                </div>

                <div class="row g-5">
                    <div class="col-md-5 col-lg-4 order-md-last">
                        <h4 class="d-flex justify-content-between align-items-center mb-3">
                            <span class="text-primary">Giỏ hàng của bạn</span>
                            <span class="badge bg-primary rounded-pill">
                                ${shoppingCarts.reduce((acc, product) => acc += product.amount, 0)}
                            </span>
                        </h4>
                        <ul class="list-group mb-3">

                            ${shoppingCarts.map((product, index) => html`
                                <li class="list-group-item d-flex justify-content-between lh-sm">
                                    <div>
                                        <h6 class="my-0">${phones[product.phoneBrand][product.phoneIndex].name} <span class="text-danger">x${product.amount}</span></h6>
                                        <small class="text-muted">Chính hãng, VNA</small>
                                    </div>
                                    <span class="text-muted">${phones[product.phoneBrand][product.phoneIndex].priceTags.actualPrice}đ</span>
                                </li>
                            `)}

                            <li class="list-group-item d-flex justify-content-between bg-light">
                                <div class="text-success">
                                    <h6 class="my-0">Promo code</h6>
                                    <small>NHOM12P / THEROCK</small>
                                </div>
                                <span class="text-success">−${totalMoney.discountPriceTag}đ</span>
                            </li>
                            <li class="list-group-item d-flex justify-content-between">
                                <span>Total (VNĐ)</span>
                                <strong>${totalMoney.priceTag}</strong>
                            </li>
                        </ul>

                        <form class="card p-2">
                            <div class="input-group">
                                <input type="text" class="form-control" placeholder="Promo code">
                                <button 
                                    type="submit" class="btn btn-secondary"
                                >
                                    Apply
                                </button>
                            </div>
                        </form>
                    </div>
                    <div class="col-md-7 col-lg-8">
                        <h4 class="mb-3">Địa chỉ thanh toán</h4>
                        <form class="needs-validation" novalidate>
                            <div class="row g-3">
                                <div class="col-sm-6">
                                    <label for="firstName" class="form-label">Tên</label>
                                    <input type="text" class="form-control" id="firstName" placeholder=""
                                        value="" required>
                                    <div class="invalid-feedback">
                                        Valid first name is required.
                                    </div>
                                </div>

                                <div class="col-sm-6">
                                    <label for="lastName" class="form-label">Họ</label>
                                    <input type="text" class="form-control" id="lastName" placeholder=""
                                        value="" required>
                                    <div class="invalid-feedback">
                                        Valid last name is required.
                                    </div>
                                </div>

                                <div class="col-12">
                                    <label for="username" class="form-label">Username</label>
                                    <div class="input-group has-validation">
                                        <span class="input-group-text">@</span>
                                        <input type="text" class="form-control" id="username"
                                            placeholder="Username" required>
                                        <div class="invalid-feedback">
                                            Your username is required.
                                        </div>
                                    </div>
                                </div>

                                <div class="col-12">
                                    <label for="email" class="form-label">Email <span class="text-muted">(Không bắt buộc)</span></label>
                                    <input type="email" class="form-control" id="email"
                                        placeholder="you@example.com">
                                    <div class="invalid-feedback">
                                        Please enter a valid email address for shipping updates.
                                    </div>
                                </div>

                                <div class="col-12">
                                    <label for="address" class="form-label">Địa chỉ </label>
                                    <input type="text" class="form-control" id="address" placeholder="1234
                                        Đường chính" required>
                                    <div class="invalid-feedback">
                                        Please enter your shipping address.
                                    </div>
                                </div>

                                <div class="col-12">
                                    <label for="address2" class="form-label">Địa chỉ 2 <span
                                            class="text-muted">(Không bắt buộc)</span></label>
                                    <input type="text" class="form-control" id="address2"
                                        placeholder="Căn hộ hoặc chung cư">
                                </div>

                                <div class="col-md-3">
                                    <label for="zip" class="form-label">Zip code</label>
                                    <input type="text" class="form-control" id="zip" placeholder=""
                                        required>
                                    <div class="invalid-feedback">
                                        Zip code required.
                                    </div>
                                </div>
                            </div>

                            <hr class="my-4">

                            <div class="form-check">
                                <input type="checkbox" class="form-check-input" id="same-address">
                                <label class="form-check-label" for="same-address">Địa chỉ giao hàng giống với địa chỉ thanh toán của tôi</label>
                            </div>

                            <div class="form-check">
                                <input type="checkbox" class="form-check-input" id="save-info">
                                <label class="form-check-label" for="save-info"> Lưu thông tin này cho những lần sau</label>
                            </div>

                            <hr class="my-4">

                            <h4 class="mb-3">Phương thức thanh toán</h4>

                            <div class="my-3">
                                <div class="form-check">
                                    <input id="credit" name="paymentMethod" type="radio"
                                        class="form-check-input" checked required>
                                    <label class="form-check-label" for="credit">Thẻ tín dụng</label>
                                </div>
                                <div class="form-check">
                                    <input id="debit" name="paymentMethod" type="radio"
                                        class="form-check-input" required>
                                    <label class="form-check-label" for="debit">Thẻ ghi nợ</label>
                                </div>
                                <div class="form-check">
                                    <input id="paypal" name="paymentMethod" type="radio"
                                        class="form-check-input" required>
                                    <label class="form-check-label" for="paypal">PayPal</label>
                                </div>
                            </div>

                            <div class="row gy-3">
                                <div class="col-md-6">
                                    <label for="cc-name" class="form-label">Tên card</label>
                                    <input type="text" class="form-control" id="cc-name" placeholder=""
                                        required>
                                    <small class="text-muted">Tên đầy đủ như hiển thị trên thẻ</small>
                                    <div class="invalid-feedback">
                                        Name on card is required
                                    </div>
                                </div>

                                <div class="col-md-6">
                                    <label for="cc-number" class="form-label">Số series card</label>
                                    <input type="text" class="form-control" id="cc-number" placeholder=""
                                        required>
                                    <div class="invalid-feedback">
                                        Credit card number is required
                                    </div>
                                </div>

                                <div class="col-md-3">
                                    <label for="cc-expiration" class="form-label">Ngày hết hạn</label>
                                    <input type="text" class="form-control" id="cc-expiration"
                                        placeholder="" required>
                                    <div class="invalid-feedback">
                                        Expiration date required
                                    </div>
                                </div>

                                <div class="col-md-3">
                                    <label for="cc-cvv" class="form-label">CVV</label>
                                    <input type="text" class="form-control" id="cc-cvv" placeholder=""
                                        required>
                                    <div class="invalid-feedback">
                                        Security code required
                                    </div>
                                </div>
                            </div>

                            <hr class="my-4">

                            <button class="w-100 btn btn-primary btn-lg" type="submit">Tiếp tục đặt hàng</button>
                        </form>
                    </div>
                </div>
            </section>
		</main>

        ${Footer()}
    `;
}

export default connect()(CheckoutCartPage);
