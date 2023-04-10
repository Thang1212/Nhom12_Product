import html from '../core.js';
import Header from './Header.js' 
import NavBar from './NavBar.js' 
import HeaderPanel from './HeaderPanel.js'
import Footer from './Footer.js' 
import { connect } from '../store.js';

function GooglePixelPage({ googlePixels, sortingType }) {
    return html`
        ${Header()}
        ${NavBar('googlepixel')}
        ${HeaderPanel()}

        <div id="toastmess"></div>

        <main>
            <section class="container-fluid bg-light d-flex justify-content-around p-5">
                <h2 class=""><strong>Google Pixel</strong></h2> 
                <select name="sort" id="" onchange="dispatch('sortingPrice', this.value)">
                    <option value="default" ${sortingType === 'default' && 'selected'}>Mặc định</option>
                    <option value="ascending" ${sortingType === 'ascending' && 'selected'}>Sắp xếp: từ thấp đến cao</option>
                    <option value="descending" ${sortingType === 'descending' && 'selected'}>Sắp xếp: từ cao đến thấp</option>
                </select>
            </section>

            <section class="product__list album bg-light p-5">
                <div class="container">
                    <div class="row g-md-5">
                        ${sortingType === 'ascending' ? 
                            googlePixels.slice(0).reverse().map((ggp, index) => html`
                                <div class="product__list__item col-md-3 mb-2">
                                    <div class="product__card card shadow-sm">
                                        <p class="product__discount"></p>
                                        <div class="product__img__container">
                                            <img src=${ggp.img} alt="" class="bd-placeholder-img card-img-top p-3">
                                        </div>

                                        <div class="product__body card-body">
                                            <a href="#" class="product__name card-text text-decoration-none">${ggp.name}</a>
                                            <div class="d-flex justify-content-between align-items-center">
                                                <div class="btn-group">
                                                    <p class="product__actualprice border border-danger text-sm-danger rounded p-1">${ggp.priceTags.actualPrice}đ</p>
                                                    <p class="product__initprice border border-secondary text-sm-muted rounded p-1 text-decoration-line-through">${ggp.priceTags.initPrice}đ</p>
                                                </div>
                                                <button 
                                                    class="product__cart btn btn-sm btn-outline-secondary mb-lg-3"
                                                    onclick="dispatch('increaseCart', 'googlePixels', ${index}); showSuccessToast();"
                                                >
                                                    <i class="fa-solid fa-cart-shopping"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            `)
                            :
                            googlePixels.map((ggp, index) => html`
                                <div class="product__list__item col-md-3 mb-2">
                                    <div class="product__card card shadow-sm">
                                        <p class="product__discount"></p>
                                        <div class="product__img__container">
                                            <img src=${ggp.img} alt="" class="bd-placeholder-img card-img-top p-3">
                                        </div>

                                        <div class="product__body card-body">
                                            <a href="#" class="product__name card-text text-decoration-none">${ggp.name}</a>
                                            <div class="d-flex justify-content-between align-items-center">
                                                <div class="btn-group">
                                                    <p class="product__actualprice border border-danger text-sm-danger rounded p-1">${ggp.priceTags.actualPrice}đ</p>
                                                    <p class="product__initprice border border-secondary text-sm-muted rounded p-1 text-decoration-line-through">${ggp.priceTags.initPrice}đ</p>
                                                </div>
                                                <button 
                                                    class="product__cart btn btn-sm btn-outline-secondary mb-lg-3"
                                                    onclick="dispatch('increaseCart', 'googlePixels', ${index}); showSuccessToast();"
                                                >
                                                    <i class="fa-solid fa-cart-shopping"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            `)
                        }
                    </div>
                </div>
            </section>
        </main>

        ${Footer()}
    `;
}

export default connect()(GooglePixelPage)
