import html from '../core.js';
import Header from './Header.js';
import NavBar from './NavBar.js';
import HeaderPanel from './HeaderPanel.js'
import Footer from './Footer.js' 
import { connect } from '../store.js';

function ProductDetailPage({ currentProductDetail }) {
    console.log('value: ', currentProductDetail)

    return html`
        ${Header()}
        ${NavBar()}
        ${HeaderPanel()}

        <div id="toastmess"></div>

        <main>
            <section class="container pt-5 pb-5">
                <div class="row" data-masonry='{" percentPosition": true }'>
                    <div class="col-sm-6 col-lg-4 mb-4">
                        <div class="card">
                            <img class="bd-placeholder-img card-img-top p-md-3" src=${currentProductDetail.img} alt="">
                            <div class="card-body">
                                <h5 class="card-title">${currentProductDetail.name}</h5>
                                <p class="card-text">
                                    <i class="text-warning fa-solid fa-star"></i>
                                    <i class="text-warning fa-solid fa-star"></i>
                                    <i class="text-warning fa-solid fa-star"></i>
                                    <i class="text-warning fa-solid fa-star"></i>
                                    <i class="text-warning fa-solid fa-star"></i>
                                    <small class="text-muted">20 Đánh giá</small>
                                </p>
                            </div>
                        </div>
                    </div>

                    <div class="col-sm-6 col-lg-4 mb-4">
                        <div class="card bg-danger text-white text-center p-3">
                            <h4 class="card-text">Giá sốc online</h4>
                            <p class="text-warning card-text">${currentProductDetail.priceTags.actualPrice}đ <span class="text-light text-decoration-line-through"> ${currentProductDetail.priceTags.initPrice}đ</span></p>
                        </div>
                    </div>

                    <div class="col-sm-6 col-lg-4 mb-4">
                        <div class="card">
                            <div class="card-body">
                                <h4 class="card-title text-primary text-center"><strong>Thông tin sản phẩm</strong></h4>
                                ${Object.keys(currentProductDetail.details).map(detail => html`
                                    <p class="card-text"><strong>${detail}: </strong></span>${currentProductDetail.details[detail]}</p>
                                `)}
                            </div>
                        </div>
                    </div>

                    <div class="col-sm-6 col-lg-4 mb-4">
                        <div class="card">
                            <div class="card-body">
                                <p class="card-text"><span class="text-danger"><strong>1. </strong></span>Chỉ áp dụng giao tận nơi.</p>
                                <p class="card-text"><span class="text-danger"><strong>2. </strong></span>Thời gian nhận hàng: 1 ngày sau khi đặt</p>
                                <p class="card-text"><span class="text-danger"><strong>3. </strong></span>Không áp dụng chung với khuyến mãi khác.</p>
                                <p class="card-text"><span class="text-danger"><strong>4. </strong></span>Mỗi khách hàng (1 SĐT) chỉ được mua 1 sản phẩm</p>
                                <p class="card-text"><span class="text-danger"><strong>5. </strong></span>Áp dụng góp Online qua thẻ tín dụng</p>
                                <p class="card-text"><span class="text-danger"><strong>6. </strong></span>Bắt buộc khui hộp và kích hoạt khi nhận máy</p>
                                <p class="card-text"><span class="text-danger"><strong>7. </strong></span>Không áp dụng góp nhà tài chính</p>
                                <p class="card-text"><span class="text-danger"><strong>8. </strong></span>Số lượng có hạn, áp dụng tùy tỉnh thành</p>
                                <p class="card-text"><span class="text-danger"><strong>9. </strong></span>Hư gì đổi nấy trong 15 ngày nếu lỗi do nhà sản xuất</p>
                            </div>

                            <div class="card-footer text-center">
                                <button 
                                    class="btn btn-lg btn-primary p-2"
                                    onclick="dispatch('navigateCheckOutCart', '${currentProductDetail.productBrand}', ${currentProductDetail.productIndex})"
                                >
                                    Mua hàng ngay
                                </button>
                                <button 
                                    class="btn btn-lg btn-outline-secondary p-2"
                                    onclick="dispatch('increaseCart', '${currentProductDetail.productBrand}', ${currentProductDetail.productIndex}); showSuccessToast();"
                                >
                                    <i class="fa-solid fa-cart-shopping"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>

        ${Footer()}
    `;
}

export default connect()(ProductDetailPage);
