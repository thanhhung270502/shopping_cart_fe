import clsx from 'clsx';
import styles from './session.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { useState } from 'react';
import { signup } from '~/api/users';

function Signup() {
    const [fullName, setFullName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSubmit = async () => {
        if (password !== confirmPassword) {
            // handle errors
            return;
        }
        const res = await signup({
            name: fullName,
            phone_number: phoneNumber,
            password,
        });

        if (res.code === 400) {
            // handle errors
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
                                    value={fullName}
                                    onChange={(e) => setFullName(e.target.value)}
                                />
                                <label for="floatingInput">Full Name</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input
                                    type="text"
                                    className="form-control"
                                    id="floatingInput"
                                    placeholder="name@example.com"
                                    value={phoneNumber}
                                    onChange={(e) => setPhoneNumber(e.target.value)}
                                />
                                <label for="floatingInput">Phone Number</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input
                                    type="password"
                                    className="form-control"
                                    id="floatingPassword"
                                    placeholder="Password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                                <label for="floatingPassword">Password</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input
                                    type="password"
                                    className="form-control"
                                    id="floatingPassword"
                                    placeholder="Password"
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                />
                                <label for="floatingPassword">Confirm Password</label>
                            </div>
                            <div className={clsx(styles.btn, styles.btnSubmit)} onClick={handleSubmit}>
                                Sign Up
                            </div>
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
