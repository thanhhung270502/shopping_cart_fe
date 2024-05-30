import clsx from 'clsx';
import styles from './header.module.scss';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-regular-svg-icons';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faCartShopping, faMagnifyingGlass, faShoppingCart, faUser } from '@fortawesome/free-solid-svg-icons';

function Header() {
    const [isLight, setIsLight] = useState(true);
    const [currentUser, setCurrentUser] = useState({
        name: 'Thanh Hung Ly',
        email: 'thanhhung270502@gmail.com',
        avatar: 'https://static-images.vnncdn.net/files/publish/2024/3/25/sao-nu-hoang-nuoc-mat-giau-co-doc-than-o-tuoi-32-687.jpg?width=0&s=_pfLlDsYwXWnxKtF9rde8w',
    });
    const [text, setText] = useState('');

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

    const handleChangeText = (event) => {
        setText(event.target.value);
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
            <div className={clsx('container')}>
                <div className={clsx(styles.inner)}>
                    <a href="./" className={clsx(styles.logo)}>
                        PolkaDots
                    </a>
                    <div className={clsx(styles.menu)}>
                        <div className={clsx(styles.item)}>
                            <a href="./" className={clsx(styles.link)}>
                                Home
                            </a>
                        </div>
                        <div className={clsx(styles.item)}>
                            <a href="./" className={clsx(styles.link)}>
                                Products
                            </a>
                        </div>
                        <div className={clsx(styles.item)}>
                            <a href="./" className={clsx(styles.link)}>
                                Blogs
                            </a>
                        </div>
                    </div>
                    {!currentUser && (
                        <div className={clsx(styles.user)}>
                            <a className={clsx(styles.btn, styles.btnLogin)} href="./">
                                Login
                            </a>
                            <a className={clsx(styles.btn, styles.btnSignup)} href="./">
                                Signup
                            </a>
                        </div>
                    )}
                    {currentUser && (
                        <div className={clsx(styles.user)}>
                            <button
                                type="button"
                                className={clsx(styles.btnUser, styles.btnCart)}
                                data-bs-toggle="modal"
                                data-bs-target="#exampleModal"
                            >
                                <FontAwesomeIcon icon={faShoppingCart} />
                            </button>

                            <div
                                className="modal fade"
                                id="exampleModal"
                                tabindex="-1"
                                aria-labelledby="exampleModalLabel"
                                aria-hidden="true"
                            >
                                <div className="modal-dialog modal-dialog-scrollable">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h1 className="modal-title fs-5" id="exampleModalLabel">
                                                Modal title
                                            </h1>
                                            <button
                                                type="button"
                                                className="btn-close"
                                                data-bs-dismiss="modal"
                                                aria-label="Close"
                                            ></button>
                                        </div>
                                        <div className="modal-body">...</div>
                                        <div className="modal-footer">
                                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                                                Close
                                            </button>
                                            <button type="button" className="btn btn-primary">
                                                Save changes
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <button
                                type="button"
                                className={clsx(styles.btnUser)}
                                data-bs-toggle="modal"
                                data-bs-target="#staticBackdrop"
                            >
                                <FontAwesomeIcon icon={faMagnifyingGlass} />
                            </button>

                            <div
                                className="modal fade"
                                id="staticBackdrop"
                                data-bs-backdrop="static"
                                data-bs-keyboard="false"
                                tabindex="-1"
                                aria-labelledby="staticBackdropLabel"
                                aria-hidden="true"
                            >
                                <div className={clsx('modal-dialog', styles.modalDialog)}>
                                    <div className={clsx('modal-content', styles.modalContent)}>
                                        <div className={clsx(styles.modalSearch)}>
                                            <input
                                                type="text"
                                                className={clsx('form-control', styles.input)}
                                                value={text}
                                                onChange={handleChangeText}
                                            />
                                            <button className={clsx(styles.iconSearch)} data-bs-dismiss="modal">
                                                <FontAwesomeIcon icon={faMagnifyingGlass} />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="dropdown">
                                <button
                                    className={clsx('dropdown-toggle', styles.btnUser)}
                                    type="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    <FontAwesomeIcon icon={faUser} />
                                </button>
                                <ul className="dropdown-menu">
                                    <li>
                                        <a className="dropdown-item" href="./">
                                            Action
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="./">
                                            Another action
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="./">
                                            Something else here
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    );
}

export default Header;
