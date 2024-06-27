import clsx from 'clsx';
import styles from './header.module.scss';
import { useEffect, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-regular-svg-icons';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import {
    faCartShopping,
    faGear,
    faMoneyBill,
    faRightFromBracket,
    faShop,
    faUser,
} from '@fortawesome/free-solid-svg-icons';
import { checkAuth, getAvatar } from '~/api/users';
import { Link } from 'react-router-dom';
import { getUserGoogle, logoutGoogle } from '~/api/auth';

function Header() {
    const [isLight, setIsLight] = useState(true);
    const [text, setText] = useState('');
    const [currentUser, setCurrentUser] = useState();
    const [avatar, setAvatar] = useState();
    const [openMenu, setOpenMenu] = useState(false);
    let userMenuRef = useRef();

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

    const handleLogout = () => {
        localStorage.setItem('session', '');
        window.location.href = '/';
    };

    const getAvatarUrl = () => {
        let imageData = currentUser.avatar;
        const str = imageData.data.map((byte) => String.fromCharCode(byte)).join('');
        console.log(str);
        return str;
    };

    useEffect(() => {
        const savedCheckedState = localStorage.getItem('theme');
        if (savedCheckedState && savedCheckedState === 'dark') {
            document.documentElement.setAttribute('data-theme', 'dark');
            setIsLight(true);
        }
    }, []);

    useEffect(() => {
        (async () => {
            var session = localStorage.getItem('session');
            if (session) {
                session = JSON.parse(session);
                const authen = await checkAuth(session.accessToken);
                if (authen.login === true) {
                    const avatar = await getAvatar({ id: session.user.id });
                    session['avatar'] = avatar.body;
                    let imageData = session.avatar;
                    const str = imageData.data.map((byte) => String.fromCharCode(byte)).join('');
                    setAvatar(str);
                    setCurrentUser(session.user);
                }
            } else {
                const userGoogle = await getUserGoogle();
                console.log(userGoogle);
                if (userGoogle.code === 200) {
                    session = {
                        accessToken: userGoogle.body.body.accessToken,
                        user: userGoogle.body.body.user,
                    };
                    console.log(session);
                    localStorage.setItem('session', JSON.stringify(session));
                    await logoutGoogle();
                    window.location.href = '../';
                }
            }
        })();
    }, []);

    useEffect(() => {
        if (currentUser) {
            let handler = (e) => {
                // if (e.target) {
                if (!userMenuRef.current.contains(e.target)) {
                    setOpenMenu(false);
                }
            };

            document.addEventListener('mousedown', handler);

            return () => {
                document.removeEventListener('mousedown', handler);
            };
        }
    });

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
                                <Link to="./" className={clsx(styles.topbar__icon)}>
                                    <FontAwesomeIcon icon={faFacebook} />
                                </Link>
                                <Link to="./" className={clsx(styles.topbar__icon)}>
                                    <FontAwesomeIcon icon={faInstagram} />
                                </Link>
                            </div>
                        </div>
                        {!currentUser && (
                            <div className={clsx('d-flex', 'align-items-center')}>
                                <Link className={clsx(styles.btn, styles.btnLogin)} to="/login">
                                    Login
                                </Link>
                                <Link className={clsx(styles.btn, styles.btnSignup)} to="/signup">
                                    Signup
                                </Link>
                            </div>
                        )}
                        {currentUser && (
                            <div className={clsx(styles.dropdown)} ref={userMenuRef}>
                                <div
                                    className={clsx(styles.dropdownToggle)}
                                    onClick={() => setOpenMenu(!openMenu)}
                                >
                                    <FontAwesomeIcon icon={faUser} />
                                </div>
                                <ul
                                    className={clsx(
                                        styles.dropdownMenu,
                                        `${!openMenu ? styles.dropdownMenuHide : ''}`,
                                    )}
                                >
                                    <li>
                                        <div className={clsx(styles.dropdownItem, 'pb-3')} to="./">
                                            <div className={clsx(styles.dropdownItem__image)}>
                                                <img
                                                    src={avatar}
                                                    alt="avatar"
                                                    className={clsx(styles.dropdownItem__img)}
                                                />
                                            </div>
                                            <div className={clsx(styles.dropdownItem__info)}>
                                                <Link
                                                    className={clsx(styles.dropdownItem__name)}
                                                    to={`/customer/edit`}
                                                >
                                                    {currentUser.name}
                                                </Link>
                                                <div className={clsx(styles.dropdownItem__email)}>
                                                    {currentUser.email}
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <Link
                                            className={clsx(
                                                'dropdown-item',
                                                styles.dropdownItem,
                                                styles.dropdownItem__border,
                                            )}
                                            to="/seller/edit/"
                                        >
                                            <div className={clsx(styles.dropdownItem__icon)}>
                                                <FontAwesomeIcon icon={faShop} />
                                            </div>
                                            <div className={clsx(styles.dropdownItem__text)}>
                                                Shop
                                            </div>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            className={clsx('dropdown-item', styles.dropdownItem)}
                                            to="./"
                                        >
                                            <div className={clsx(styles.dropdownItem__icon)}>
                                                <FontAwesomeIcon icon={faMoneyBill} />
                                            </div>
                                            <div className={clsx(styles.dropdownItem__text)}>
                                                Orders
                                            </div>
                                        </Link>
                                    </li>
                                    <li>
                                        <div
                                            className={clsx(
                                                'dropdown-item',
                                                styles.dropdownItem,
                                                styles.dropdownItem__border,
                                            )}
                                        >
                                            <div className={clsx(styles.dropdownItem__icon)}>
                                                <FontAwesomeIcon icon={faSun} />
                                            </div>
                                            <div
                                                className={clsx(
                                                    styles.dropdownItem__text,
                                                    styles.dropdownItem__text__darkmode,
                                                )}
                                            >
                                                Dark mode
                                            </div>
                                            <div>
                                                <label class={clsx(styles.switch)}>
                                                    <input
                                                        type="checkbox"
                                                        onChange={handleChangeDarkMode}
                                                        checked={!isLight}
                                                    />
                                                    <span
                                                        class={clsx(styles.slider, styles.round)}
                                                    ></span>
                                                </label>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <Link
                                            className={clsx('dropdown-item', styles.dropdownItem)}
                                            to={`/customer/edit`}
                                        >
                                            <div className={clsx(styles.dropdownItem__icon)}>
                                                <FontAwesomeIcon icon={faGear} />
                                            </div>
                                            <div className={clsx(styles.dropdownItem__text)}>
                                                Setting
                                            </div>
                                        </Link>
                                    </li>
                                    <li>
                                        <div
                                            className={clsx(
                                                'dropdown-item',
                                                styles.dropdownItem,
                                                styles.dropdownItem__border,
                                            )}
                                            onClick={handleLogout}
                                        >
                                            <div className={clsx(styles.dropdownItem__icon)}>
                                                <FontAwesomeIcon icon={faRightFromBracket} />
                                            </div>
                                            <div className={clsx(styles.dropdownItem__text)}>
                                                Logout
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <div className={clsx(styles.navBar)}>
                <div className="container">
                    <div className={clsx(styles.inner__navbar)}>
                        <Link to="/" className={clsx(styles.logo)}>
                            HoLuon
                        </Link>
                        <div className={clsx(styles.midBar)}>
                            <div className={clsx(styles.searchBar)}>
                                <input type="text" className={clsx('form-control', styles.input)} />
                            </div>
                        </div>
                        <div className={clsx(styles.cart)}>
                            <button
                                type="button"
                                class={clsx(styles.btnCart)}
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
                                            <button
                                                type="button"
                                                class="btn btn-secondary"
                                                data-bs-dismiss="modal"
                                            >
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
