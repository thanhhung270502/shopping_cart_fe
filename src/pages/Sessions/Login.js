import clsx from 'clsx';
import styles from './session.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGoogle } from '@fortawesome/free-brands-svg-icons';

function Login() {
    return (
        <div className={clsx(styles.session, styles.login)}>
            <div className="container">
                <div className={clsx(styles.inner)}>
                    <div className="col-12 col-lg-6">
                        <div className={clsx(styles.left)}>
                            <div className={clsx(styles.logo)}>HoLuon</div>
                            <div className={clsx(styles.title)}>Log in to your Account</div>
                            <div className={clsx(styles.subTitle)}>Welcome back! Select method to log in:</div>
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
                                {/* 
                                    <div className={clsx(styles.method__item)}>
                                        <span>
                                            <FontAwesomeIcon icon={faFacebook} />
                                        </span>
                                        Facebook
                                    </div>
                                */}
                            </div>
                            <div className={clsx(styles.divider)}>----------or continue with email----------</div>
                            <div className="form-floating mb-3 mt-2">
                                <input
                                    type="text"
                                    className="form-control"
                                    id="floatingInput"
                                    placeholder="name@example.com"
                                />
                                <label for="floatingInput">Phone Number</label>
                            </div>
                            <div className="form-floating">
                                <input
                                    type="password"
                                    className="form-control"
                                    id="floatingPassword"
                                    placeholder="Password"
                                />
                                <label for="floatingPassword">Password</label>
                            </div>
                            <div className="form-check mt-3">
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                <label className="form-check-label" for="flexCheckDefault">
                                    Remember me
                                </label>
                            </div>
                            <div className={clsx(styles.btn, styles.btnSubmit)}>Log In</div>
                            <div className={clsx('pt-3 textCenter')}>
                                Don't have an account?{' '}
                                <a href="/signup" className={clsx(styles.link)}>
                                    Create an account
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-6">
                        <div className={clsx(styles.right)}>
                            <div className={clsx(styles.image)}>
                                <img src="/images/login.png" alt="" className={clsx(styles.img)} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
