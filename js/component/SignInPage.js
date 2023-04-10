import html from '../core.js';
import Header from './Header.js' 
import Footer from './Footer.js' 
import { connect } from '../store.js';

function SignInPage({ }) {
    return html`
        ${Header()}

        <div id="signin">
            <div class="container">
                <h1>Please Login</h1>

                <form action="" method="POST" class="" id="">
                    <div class="form-control">
                        <input type="username" name="username" id="" class="" required>
                        <label for="username" class="form__label">Email / Name</label>
                    </div>

                    <div class="form-control">
                        <input type="password" name="password" id="" class="" required>
                        <label>Password</label>
                    </div>

                    <button class="btn">Login</button>

                    <p class="text">
                        Don't have an account?
                        <a 
                            href="./signup.html"
                            onclick="dispatch('createUserAccount')"
                        >
                            Register
                        </a>
                    </p>
                </form>
            </div> 
        </div>

        ${Footer()}
    `;
}

export default connect()(SignInPage);
