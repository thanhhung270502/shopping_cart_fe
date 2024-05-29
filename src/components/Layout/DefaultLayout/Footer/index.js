import clsx from 'clsx';
import styles from './footer.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRegistered } from '@fortawesome/free-solid-svg-icons';

function Footer() {
    return (
        <div className={clsx(styles.footer)}>
            <div className={clsx('container')}>
                <div className="d-flex align-items-center">
                    <div className={clsx(styles.icon)}>
                        <FontAwesomeIcon icon={faRegistered} />
                    </div>
                    <div className={clsx(styles.text)}>2024 Thanh Hung Ly. All rights reserved.</div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
