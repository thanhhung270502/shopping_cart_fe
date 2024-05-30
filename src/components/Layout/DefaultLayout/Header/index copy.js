import clsx from 'clsx';
import styles from './header.module.scss';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-regular-svg-icons';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

function Header() {
    const [isLight, setIsLight] = useState(true);

    const handleChangeDarkMode = () => {
        var currentTheme = localStorage.getItem('theme');
        if (currentTheme && currentTheme === 'dark') {
            document.documentElement.setAttribute('data-theme', 'light');
            localStorage.setItem('theme', 'light');
            setIsLight(true);
        } else if (!currentTheme || currentTheme === 'light') {
            document.documentElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
            setIsLight(false);
        }
    };

    useEffect(() => {
        const savedCheckedState = localStorage.getItem('theme');
        if (savedCheckedState && savedCheckedState === 'dark') {
            document.documentElement.setAttribute('data-theme', 'dark');
            setIsLight(false);
        }
    }, []);

    return (
        <nav className={clsx(styles.nav)}>
            <div className={clsx(styles.topbar)}>
                <div className="container">
                    <div className={clsx(styles.inner__topbar)}>
                        <div className={clsx('d-flex', 'align-items-center')}>
                            <div className={clsx(styles.topbar__item)}>Sell with PolkaDots</div>
                            <span className={clsx(styles.divide)}>|</span>
                            <div className={clsx(styles.topbar__item)}>
                                Connect to
                                <a href="./" className={clsx(styles.topbar__icon)}>
                                    <FontAwesomeIcon icon={faFacebook} />
                                </a>
                                <a href="./" className={clsx(styles.topbar__icon)}>
                                    <FontAwesomeIcon icon={faInstagram} />
                                </a>
                            </div>
                        </div>
                        <div className={clsx('d-flex', 'align-items-center')}>
                            <a className={clsx(styles.btn, styles.btnLogin)} href="./">
                                Login
                            </a>
                            <a className={clsx(styles.btn, styles.btnSignup)} href="./">
                                Signup
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className={clsx(styles.navBar)}>
                <div className="container">
                    <div className={clsx(styles.inner__navbar)}>
                        <a href="./" className={clsx(styles.logo)}>
                            PolkaDots
                        </a>
                        <div className={clsx(styles.midBar)}>
                            <div className={clsx(styles.searchBar)}>
                                <input type="text" className={clsx(styles.input)} />
                            </div>
                        </div>
                        <div className={clsx(styles.cart)}>
                            <button
                                type="button"
                                class="btn btn-primary"
                                data-bs-toggle="modal"
                                data-bs-target="#exampleModal"
                            >
                                <FontAwesomeIcon icon={faCartShopping} />
                            </button>

                            <div
                                class="modal fade"
                                id="exampleModal"
                                tabindex="-1"
                                aria-labelledby="exampleModalLabel"
                                aria-hidden="true"
                            >
                                <div class="modal-dialog">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <h1 class="modal-title fs-5" id="exampleModalLabel">
                                                Modal title
                                            </h1>
                                            <button
                                                type="button"
                                                class="btn-close"
                                                data-bs-dismiss="modal"
                                                aria-label="Close"
                                            ></button>
                                        </div>
                                        <div class="modal-body">...</div>
                                        <div class="modal-footer">
                                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                                                Close
                                            </button>
                                            <button type="button" class="btn btn-primary">
                                                Save changes
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Header;
