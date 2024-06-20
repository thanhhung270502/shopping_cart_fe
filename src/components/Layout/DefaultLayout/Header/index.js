import clsx from 'clsx';
import styles from './header.module.scss';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-regular-svg-icons';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faCartShopping, faGear, faMoneyBill, faRightFromBracket, faUser } from '@fortawesome/free-solid-svg-icons';
import { checkAuth, getAvatar } from '~/api/users';

function Header() {
    const [isLight, setIsLight] = useState(true);
    const [text, setText] = useState('');
    const [currentUser, setCurrentUser] = useState();
    const [avatar, setAvatar] = useState();
    // const [currentUser, setCurrentUser] = useState({
    //     name: 'Thanh Hung Ly',
    //     email: 'thanhhung270502@gmail.com',
    //     avatar: 'https://static-images.vnncdn.net/files/publish/2024/3/25/sao-nu-hoang-nuoc-mat-giau-co-doc-than-o-tuoi-32-687.jpg?width=0&s=_pfLlDsYwXWnxKtF9rde8w',
    // });

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
            setIsLight(false);
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
                // const userGoogle = await getUserGoogle();
                // console.log(userGoogle);
                // if (userGoogle.code === 200) {
                //     session = {
                //         accessToken: userGoogle.body.body.accessToken,
                //         user: userGoogle.body.body.user,
                //     };
                //     localStorage.setItem('session', JSON.stringify(session));
                //     await logoutGoogle();
                //     window.location.href = '../';
                // }
            }
        })();
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
                        {!currentUser && (
                            <div className={clsx('d-flex', 'align-items-center')}>
                                <a className={clsx(styles.btn, styles.btnLogin)} href="/login">
                                    Login
                                </a>
                                <a className={clsx(styles.btn, styles.btnSignup)} href="/signup">
                                    Signup
                                </a>
                            </div>
                        )}
                        {currentUser && (
                            <div className={clsx(styles.user)}>
                                <div className="dropdown">
                                    <button
                                        className={clsx('dropdown-toggle', styles.btnUser)}
                                        type="button"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                    >
                                        <FontAwesomeIcon icon={faUser} />
                                    </button>
                                    <ul className={clsx('dropdown-menu', styles.dropdownMenu)}>
                                        <li>
                                            <div className={clsx(styles.dropdownItem)} href="./">
                                                <div className={clsx(styles.dropdownItem__image)}>
                                                    <img src={avatar} alt="avatar" className={clsx('img-fluid')} />
                                                </div>
                                                <div className={clsx(styles.dropdownItem__info)}>
                                                    <a
                                                        className={clsx(styles.dropdownItem__name)}
                                                        href={`/customer/edit`}
                                                    >
                                                        {currentUser.name}
                                                    </a>
                                                    <div className={clsx(styles.dropdownItem__email)}>
                                                        {currentUser.email}
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className={clsx(styles.dropdownItem, styles.dropdownItem__border)}>
                                                <div className={clsx(styles.dropdownItem__darkmode)}>
                                                    <div
                                                        className={clsx(
                                                            styles.dropdownItem__darkmode__item,
                                                            `${isLight && styles.dropdownItem__darkmode__item__active}`,
                                                        )}
                                                        onClick={() => handleChangeDarkMode('light')}
                                                    >
                                                        <div className={clsx(styles.dropdownItem__darkmode__icon)}>
                                                            <FontAwesomeIcon icon={faSun} />
                                                        </div>
                                                        <div className={clsx(styles.dropdownItem__darkmode__text)}>
                                                            Light
                                                        </div>
                                                    </div>
                                                    <div
                                                        className={clsx(
                                                            styles.dropdownItem__darkmode__item,
                                                            `${
                                                                !isLight && styles.dropdownItem__darkmode__item__active
                                                            }`,
                                                        )}
                                                        onClick={() => handleChangeDarkMode('dark')}
                                                    >
                                                        <div className={clsx(styles.dropdownItem__darkmode__icon)}>
                                                            <FontAwesomeIcon icon={faMoon} />
                                                        </div>
                                                        <div className={clsx(styles.dropdownItem__darkmode__text)}>
                                                            Dark
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <a
                                                className={clsx(
                                                    'dropdown-item',
                                                    styles.dropdownItem,
                                                    styles.dropdownItem__border,
                                                )}
                                                href="./"
                                            >
                                                <div className={clsx(styles.dropdownItem__icon)}>
                                                    <FontAwesomeIcon icon={faMoneyBill} />
                                                </div>
                                                <div className={clsx(styles.dropdownItem__text)}>Orders</div>
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                className={clsx('dropdown-item', styles.dropdownItem)}
                                                href={`/customer/edit`}
                                            >
                                                <div className={clsx(styles.dropdownItem__icon)}>
                                                    <FontAwesomeIcon icon={faGear} />
                                                </div>
                                                <div className={clsx(styles.dropdownItem__text)}>Setting</div>
                                            </a>
                                        </li>
                                        <li>
                                            <div
                                                className={clsx('dropdown-item', styles.dropdownItem)}
                                                onClick={handleLogout}
                                            >
                                                <div className={clsx(styles.dropdownItem__icon)}>
                                                    <FontAwesomeIcon icon={faRightFromBracket} />
                                                </div>
                                                <div className={clsx(styles.dropdownItem__text)}>Logout</div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <div className={clsx(styles.navBar)}>
                <div className="container">
                    <div className={clsx(styles.inner__navbar)}>
                        <a href="/" className={clsx(styles.logo)}>
                            HoLuon
                        </a>
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
