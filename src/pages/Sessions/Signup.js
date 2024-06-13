import clsx from 'clsx';
import styles from './session.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGoogle } from '@fortawesome/free-brands-svg-icons';

function Signup() {
    return (
        <div className={clsx(styles.session, styles.signup)}>
            <div className="container">
                <div className={clsx(styles.inner)}>
                    <div className="col-12 col-lg-5">
                        <div className={clsx(styles.right)}>
                            <div className={clsx(styles.image)}>
                                <img src="/images/signup.png" alt="" className={clsx(styles.img)} />
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-7">
                        <div className={clsx(styles.left)}>
                            <div className={clsx(styles.logo)}>HoLuon</div>
                            <div className={clsx(styles.title)}>Get Started Now</div>
                            <div className={clsx(styles.subTitle)}>
                                Enter your details below to create your account and get started.
                            </div>
                            <div className={clsx(styles.method__block)}>
                                <div className={clsx(styles.method__item)}>
                                    <span>
                                        <img
                                            src="/images/logo/google_logo.png"
                                            alt="google"
                                            className={clsx(styles.method__logo)}
                                        />
                                    </span>
                                    Continue with Google
                                </div>
                            </div>
                            <div className={clsx(styles.divider)}>----------or sign up with email----------</div>
                            <div className="form-floating mb-3 mt-2">
                                <input
                                    type="text"
                                    className="form-control"
                                    id="floatingInput"
                                    placeholder="name@example.com"
                                />
                                <label for="floatingInput">Full Name</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input
                                    type="text"
                                    className="form-control"
                                    id="floatingInput"
                                    placeholder="name@example.com"
                                />
                                <label for="floatingInput">Phone Number</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input
                                    type="password"
                                    className="form-control"
                                    id="floatingPassword"
                                    placeholder="Password"
                                />
                                <label for="floatingPassword">Password</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input
                                    type="password"
                                    className="form-control"
                                    id="floatingPassword"
                                    placeholder="Password"
                                />
                                <label for="floatingPassword">Confirm Password</label>
                            </div>
                            <div className={clsx(styles.btn, styles.btnSubmit)}>Sign Up</div>
                            <div className={clsx('pt-3 textCenter')}>
                                Already have an account?{' '}
                                <a href="/login" className={clsx(styles.link)}>
                                    Login
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Signup;
