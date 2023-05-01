import html from '../core.js';
import Header from './Header.js' 
import NavBar from './NavBar.js' 
import Footer from './Footer.js' 
import { connect } from '../store.js';

function SignUpPage() {
    return html`
        ${Header()}
        ${NavBar()}

        <div id="toastmess"></div>

        <main>
            <section class="container form-signup w-25 m-auto pt-5 pb-5 text-center">
                <form class="signup__form">
                    <h1 class="h3 mb-3 fw-normal">Đăng kí</h1>

                    <div class="form-floating">
                        <input type="text" class="form__control__name form-control border" name="fullname" id="floatingInput" required>
                        <label for="floatingInput">Tên đầy đủ</label>
                    </div>

                    <div class="form-floating">
                        <input type="tel" class="form__control__number form-control border" name="tel" id="floatingInput" placeholder="+84" required>
                        <label for="floatingInput">Số điện thoại</label>
                    </div>

                    <div class="form-floating">
                        <input type="text" class="form__control__address form-control border" name="address" id="floatingInput" placeholder="12 Nguyễn Văn Bảo" required>
                        <label for="floatingInput">Địa chỉ nhận hàng</label>
                    </div>

                    <div class="form-floating">
                        <input type="email" class="form__control__email form-control border" name="email" id="floatingInput" placeholder="name@example.com" required>
                        <label for="floatingInput">Email address</label>
                    </div>

                    <div class="form-floating">
                        <input type="password" class="form__control__password form-control border" name="password" id="floatingPassword" placeholder="Password"
                        >
                        <label for="floatingPassword">Password</label>
                    </div>

                    <div class="checkbox mb-3 mt-3">
                        <label>
                            <input class="form__control__license" type="checkbox" value="accept-license" required> Chấp nhận các điều khoản của công ty
                        </label>
                    </div>

                    <div class="checkbox mb-3">
                        <label>
                            <input type="checkbox" value="remember-me"> Nhớ tôi 
                        </label>
                    </div>

                    <p class="text-dark">Bạn đã có tài khoản? <a href="./signin.html"> Đăng nhập</a></p>
                    <button class="form__submit w-100 btn btn-lg btn-primary" type="submit">Đăng kí</button>
                    <p class="mt-5 mb-3 text-muted">&copy; 2023</p>
                </form>
            </section>
        </main>

        ${Footer()}
    `;
}

export default connect()(SignUpPage);
