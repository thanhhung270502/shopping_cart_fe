import clsx from 'clsx';
import styles from './session.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { useState } from 'react';
import { login } from '~/api/users';

function Login() {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [password, setPassword] = useState('');
    const [remember, setRemember] = useState(false);
    const [val, setVal] = useState(false);

    const Checkbox = (props) => {
        return (
            <div className="form-check mt-3">
                <input
                    className="form-check-input"
                    type="checkbox"
                    name={props.name}
                    checked={props.val}
                    onChange={() => {
                        props.setValue(!props.val);
                    }}
                />
                <label className="form-check-label" for="flexCheckDefault">
                    Remember me
                </label>
            </div>
        );
    };

    const handleSubmit = async () => {
        // console.log(phoneNumber, password, val);
        const res = await login({
            phone_number: phoneNumber,
            password,
        });

        console.log(res);

        if (res.code === 400) {
            // setErrorLogin('Incorrect password or User is not existed');
        } else if (res.code === 201) {
            var session = {
                accessToken: res.body.accessToken,
                user: res.body.user,
            };
            localStorage.setItem('session', JSON.stringify(session));
            window.location.href = '../';
        }
    };

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
                                    value={phoneNumber}
                                    onChange={(event) => setPhoneNumber(event.target.value)}
                                />
                                <label for="floatingInput">Phone Number</label>
                            </div>
                            <div className="form-floating">
                                <input
                                    type="password"
                                    className="form-control"
                                    id="floatingPassword"
                                    placeholder="Password"
                                    value={password}
                                    onChange={(event) => setPassword(event.target.value)}
                                />
                                <label for="floatingPassword">Password</label>
                            </div>
                            <Checkbox value={val} setValue={setVal}></Checkbox>
                            <div className={clsx(styles.btn, styles.btnSubmit)} onClick={handleSubmit}>
                                Log In
                            </div>
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
