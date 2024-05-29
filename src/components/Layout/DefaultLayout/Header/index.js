import clsx from 'clsx';
import styles from './header.module.scss';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-regular-svg-icons';

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
        <nav className={clsx('navbar', 'navbar-expand-lg', 'bg-body-tertiary', styles.nav)}>
            <div className="container">
                <a className={clsx('navbar-brand', styles.logo)} href="./">
                    Thanh Hung
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className={clsx('collapse', 'navbar-collapse', styles.navCollapse)} id="navbarSupportedContent">
                    <ul className={clsx('navbar-nav', styles.navMenu)}>
                        <li className={clsx('nav-item', styles.navItem)}>
                            <a className={clsx('nav-link', styles.navLink, styles.navActive)} href="#home">
                                Home
                            </a>
                        </li>
                        <li className={clsx('nav-item', styles.navItem)}>
                            <a className={clsx('nav-link', styles.navLink)} href="#aboutme">
                                About Me
                            </a>
                        </li>
                        <li className={clsx('nav-item', styles.navItem)}>
                            <a className={clsx('nav-link', styles.navLink)} href="#projects">
                                My Projects
                            </a>
                        </li>
                        <li className={clsx('nav-item', styles.navItem)}>
                            <a className={clsx('nav-link', styles.navLink)} href="#contact">
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>
                <div className={clsx(styles.darkMode)} onClick={handleChangeDarkMode}>
                    {isLight && <FontAwesomeIcon icon={faSun} />}
                    {!isLight && <FontAwesomeIcon icon={faMoon} />}
                </div>
            </div>
        </nav>
    );
}

export default Header;
