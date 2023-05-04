import html from '../core.js';
import { connect } from '../store.js';

function CheckoutModal({ order, totalMoney }) {
    return html`
        <div class="modal__checkout modal" tabindex="-1" role="dialog">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">
                            Đặt hàng thành công
                            <i class="fa-sharp fa-solid fa-fire fa-shake fa-lg text-success"></i>
                            <i class="fa-sharp fa-solid fa-fire fa-shake fa-lg text-success"></i>
                            <i class="fa-sharp fa-solid fa-fire fa-shake fa-lg text-success"></i>
                        </h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>

                    <div class="modal-body">
                        <p>
                            <span>
                                <i class="fa-solid fa-signature fa-flip text-info"></i>
                                Họ tên: ${order.lastname + order.firstname} 
                            </span>
                        </p>
                        <p>
                            <span>
                                <i class="fa-regular fa-envelopes-bulk fa-flip text-info"></i>
                                Email: ${order.email}
                            </span>
                        </p>
                        <p>
                            <span>
                                <i class="fa-sharp fa-solid fa-location-dot fa-beat text-info"></i>
                                Địa chỉ: ${order.address}
                            </span>
                        </p>
                        <p>
                            <span>
                                <i class="fa-regular fa-money-bills fa-bounce text-info"></i>
                                Tổng tiền: ${totalMoney.priceTag} VNĐ
                            </span>
                        </p>
                    </div>

                    <div class="modal-footer d-flex">
                        <button type="button" class="modal__checkout__btn btn btn-primary flex-grow-1" data-dismiss="modal">Tiếp tục mua sắm</button>
                    </div>
                </div>
            </div>
        </div>
    `;
}

export default connect()(CheckoutModal);
