import html from '../core.js';
import Header from './Header.js' 
import Footer from './Footer.js' 
import { connect } from '../store.js';

function SignUpPage({ users }) {
    return html`
        ${Header()}

        <div id="signin">
            <div class="container">
                <h1>Welcome! Sign Up</h1>

                <form action="" method="POST" class="" id="">
                    <div class="form-control">
                        <input 
                            type="text" name="fullname" id="" class="" required
                            value="${users[users.length-1].fullname}"
                        >
                        <label for="fullname" class="form__label">Tên đầy đủ</label>
                    </div>

                    <div class="form-control">
                        <input 
                            type="text" name="username" id="" class="" required
                            value="${users[users.length-1].username}"
                        >
                        <label for="username" class="form__label">Username</label>
                    </div>

                    <div class="form-control">
                        <input 
                            type="tel" name="phonenumber" id="" class="" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required
                            value=${users[users.length-1].username}
                        >
                        <label for="phonenumber" class="form__label">Số điện thoại</label>
                    </div>

                    <div class="form-control">
                        <input type="text" name="address" id="" class="" required
                            value="${users[users.length-1].address}"
                        >
                        <label for="address" class="form__label">Địa chỉ</label>
                    </div>

                    <div class="form-control">
                        <input type="email" name="email" id="" class="" required
                            value="${users[users.length-1].email}"
                        >
                        <label for="email" class="form__label">Email</label>
                    </div>

                    <div class="form-control">
                        <input type="password" name="password" id="" class="" required
                            value="${users[users.length-1].password}"
                        >
                        <label>Password</label>
                    </div>

                    <button class="btn">Sign In</button>

                    <p class="text">Already have an account? <a href="./signin.html">Sign in now!</a> </p>
                </form>
            </div> 
        </div>

        ${Footer()}
    `;
}

export default connect()(SignUpPage);
