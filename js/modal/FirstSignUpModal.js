import html from '../core.js';
import { connect } from '../store.js';

function FirstSignUpModal() {
    return html`
        <div class="modal__signup modal" tabindex="-1" role="dialog">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">
                            Ưu đãi cho thành viên mới
                            <i class="fa-sharp fa-solid fa-fire fa-shake fa-lg text-danger"></i>
                            <i class="fa-sharp fa-solid fa-fire fa-shake fa-lg text-danger"></i>
                            <i class="fa-sharp fa-solid fa-fire fa-shake fa-lg text-danger"></i>
                        </h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>

                    <div class="modal-body">
                        <p>
                            <i class="fa-sharp fa-solid fa-circle-check text-success"></i>
                            <span>Giảm thêm tới 1% cho thành viên VJPmember (áp dụng tùy sản phẩm)</span>
                        </p>
                        <p>
                            <i class="fa-sharp fa-solid fa-circle-check text-success"></i>
                            <span>
                                Bảo vệ 
                                <i class="fa-solid fa-shield-halved fa-beat-fade text-info"></i>
                                sản phẩm toàn diện với dịch vụ bảo hành mở rộng
                            </span>
                        </p>
                        <p>
                            <i class="fa-sharp fa-solid fa-circle-check text-success"></i>
                            <span>
                                Giảm thêm 5% tối đa 500.000đ khi thanh toán qua VNPay 
                                <i class="fa-solid fa-money-check-dollar fa-fade text-info"></i>
                                , OCB
                                <i class="fa-solid fa-piggy-bank fa-bounce text-info"></i>
                            </span>
                        </p>
                        <p>
                            <i class="fa-sharp fa-solid fa-circle-check text-success"></i>
                            <span>Nhận voucher 200.000đ mua hàng tại Mobile World</span>
                        </p>
                        <p>
                            <i class="fa-sharp fa-solid fa-circle-check text-success"></i>
                            <span>
                                Thu cũ đổi mới: Giá thu cao
                                <i class="fa-solid fa-hand-holding-dollar fa-flip text-info"></i>
                                - Thủ tục nhanh chóng  
                                <i class="fa-sharp fa-solid fa-bolt fa-beat-fade text-info"></i>
                                - Trợ giá tốt nhất
                            </span>
                        </p>
                    </div>

                    <div class="modal-footer d-flex">
                        <button type="button" class="modal__signup__btn btn btn-primary flex-grow-1" data-dismiss="modal">Tiếp tục mua sắm</button>
                    </div>
                </div>
            </div>
        </div>
    `;
}

export default connect()(FirstSignUpModal);
