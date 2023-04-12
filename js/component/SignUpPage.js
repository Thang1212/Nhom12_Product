import html from '../core.js';
import Header from './Header.js' 
import Footer from './Footer.js' 
import { connect } from '../store.js';

function SignUpPage() {
    return html`
        ${Header()}

        <main>
            <section class="container form-signin w-25 m-auto pt-5 pb-5 text-center">
                <form>
                    <h1 class="h3 mb-3 fw-normal">Đăng kí</h1>

                    <div class="form-floating">
                        <input type="text" class="form-control" id="floatingInput" placeholder="Nguyen Van A" pattern="/(^[A-Z]{1}[a-z]+)(\s[A-Z]{1}[a-z]*)+$/" required>
                        <label for="floatingInput">Tên đầy đủ</label>
                    </div>

                    <div class="form-floating">
                        <input type="tel" class="form-control" id="floatingInput" placeholder="+84" required>
                        <label for="floatingInput">Số điện thoại</label>
                    </div>

                    <div class="form-floating">
                        <input type="text" class="form-control" id="floatingInput" placeholder="12 Nguyễn Văn Bảo" required>
                        <label for="floatingInput">Địa chỉ nhận hàng</label>
                    </div>

                    <div class="form-floating">
                        <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" required>
                        <label for="floatingInput">Email address</label>
                    </div>

                    <div class="form-floating">
                        <input type="password" class="form-control" id="floatingPassword" placeholder="Password">
                        <label for="floatingPassword">Password</label>
                    </div>

                    <div class="checkbox mb-3 mt-3">
                        <label>
                            <input type="checkbox" value="accept-license" required> Chấp nhận các điều khoản của công ty
                        </label>
                    </div>

                    <div class="checkbox mb-3">
                        <label>
                            <input type="checkbox" value="remember-me"> Nhớ tôi 
                        </label>
                    </div>

                    <p class="text-dark">Bạn đã có tài khoản? <a href="./signin.html"> Đăng nhập</a></p>
                    <button class="w-100 btn btn-lg btn-primary" type="submit">Đăng kí</button>
                    <p class="mt-5 mb-3 text-muted">&copy; 2023</p>
                </form>
            </section>
        </main>

        ${Footer()}
    `;
}

export default connect()(SignUpPage);
