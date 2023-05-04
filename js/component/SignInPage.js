import html from '../core.js';
import Header from './Header.js' 
import NavBar from './NavBar.js' 
import Footer from './Footer.js' 
import { connect } from '../store.js';

function SignInPage({ }) {
    return html`
        ${Header()}
        ${NavBar()}

        <div id="toastmess"></div>

        <main>
            <section class="container form-signin w-25 m-auto pt-5 pb-5 text-center">
                <form>
                    <h1 class="h3 mb-3 fw-normal">Vui lòng đăng nhập</h1>

                    <div class="form-floating">
                        <input type="email" class="form__control__email form-control border" id="floatingInput" placeholder="name@example.com" required>
                        <label for="floatingInput">Email address</label>
                    </div>
                    <div class="form-floating">
                        <input type="password" class="form__control__password form-control border" id="floatingPassword" placeholder="Password" required>
                        <label for="floatingPassword">Password</label>
                    </div>

                    <div class="checkbox mb-3 mt-3">
                        <label>
                            <input type="checkbox" value="remember-me"> Nhớ tôi 
                        </label>
                    </div>
                    <p class="text-dark">Chưa có tài khoản? <a href="./signup.html"> Đăng kí</a></p>
                    <button class="form__submit__signin w-100 btn btn-lg btn-primary" type="submit">Đăng nhập</button>
                    <p class="mt-5 mb-3 text-muted">&copy; 2023</p>
                </form>
            </section>
        </main>

        ${Footer()}
    `;
}

export default connect()(SignInPage);
