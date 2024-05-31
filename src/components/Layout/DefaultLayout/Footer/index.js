import clsx from 'clsx';
import styles from './footer.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRegistered } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faSmile } from '@fortawesome/free-regular-svg-icons';

function Footer() {
    return (
        <div className={clsx(styles.footer)}>
            <div className={clsx(styles.topBar)}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-12 pb-2">
                            <div className={clsx(styles.footer__brand)}>PolkaDots</div>
                            <div className={clsx(styles.footer__text)}>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            </div>
                            <div className={clsx('d-flex', styles.footer__contact)}>
                                <a href="./" className={clsx(styles.footer__icon)}>
                                    <FontAwesomeIcon icon={faFacebook} />
                                </a>
                                <a href="./" className={clsx(styles.footer__icon)}>
                                    <FontAwesomeIcon icon={faInstagram} />
                                </a>
                                <a href="./" className={clsx(styles.footer__icon)}>
                                    <FontAwesomeIcon icon={faTwitter} />
                                </a>
                                <a href="./" className={clsx(styles.footer__icon)}>
                                    <FontAwesomeIcon icon={faLinkedin} />
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className={clsx(styles.footer__title, 'pb-2')}>CUSTOMER SERVICES</div>
                            <div className={clsx(styles.footer__items)}>
                                <div className={clsx(styles.footer__item)}>Help Center</div>
                                <div className={clsx(styles.footer__item)}>How To Buy</div>
                                <div className={clsx(styles.footer__item)}>How To sell</div>
                                <div className={clsx(styles.footer__item)}>Payment Methods</div>
                                <div className={clsx(styles.footer__item)}>Shipping and Returns</div>
                                <div className={clsx(styles.footer__item)}>Return Policies</div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className={clsx(styles.footer__title, 'pb-2')}>ABOUT US</div>
                            <div className={clsx(styles.footer__items)}>
                                <div className={clsx(styles.footer__item)}>PolkaDots Overview</div>
                                <div className={clsx(styles.footer__item)}>Privacy Policy</div>
                                <div className={clsx(styles.footer__item)}>Flash Sales</div>
                                <div className={clsx(styles.footer__item)}>Terms & Conditions</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={clsx(styles.bottom__footer)}>
                <div className="container">
                    <div className="d-flex justify-content-center align-item-center">
                        <div className={clsx(styles.bf__item)}>PRIVACY POLICY</div>
                        <div className={clsx(styles.bf__item)}>OPERATION REGULATIONS</div>
                        <div className={clsx(styles.bf__item)}>SHIPPING POLICY</div>
                        <div className={clsx(styles.bf__item)}>SHIPPING AND REFUND POLICY</div>
                    </div>
                    <div className="text-center">
                        <div className={clsx(styles.bf__title_icon)}>
                            <FontAwesomeIcon icon={faSmile} />
                        </div>
                        <div className={clsx(styles.bf__title)}>Company Limited PolkaDots</div>
                        <div className={clsx(styles.bf__item)}>
                            Address: Kí túc xá Khu A - Đại Học Quốc Gia TP.HCM, Khu phố 6, phường Linh Trung, thành phố
                            Thủ Đức.
                        </div>
                        <div className={clsx(styles.bf__item)}>
                            Contact center: 19002412 - Email: admin@polkadots.com - Phone: 0923 123 123
                        </div>
                        <div className={clsx(styles.bf__item)}>
                            <i className="fa-solid fa-copyright"></i> 2024 - Copyright belongs to PolkaDots
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
