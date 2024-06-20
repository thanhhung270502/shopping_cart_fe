import { clsx } from 'clsx';
import styles from './setting.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faMoneyBill, faUser } from '@fortawesome/free-solid-svg-icons';
import { faFirstOrder } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

function SettingComponent({ state, mainChild }) {
    return (
        <div className={clsx(styles.editProfile)}>
            <div className="container">
                <div className={clsx(styles.inner)}>
                    <div className={clsx(styles.sideBar)}>
                        <div className={clsx(styles.sideBar__title)}>Settings</div>
                        <div className={clsx(styles.sideBar__subTitle)}>General Settings</div>
                        <div className={clsx(styles.sideBar__options)}>
                            <Link
                                className={clsx(
                                    styles.sideBar__item,
                                    `${state === 'edit_profile' && styles.sideBar__item_active}`,
                                )}
                                to="/customer/edit"
                            >
                                <div className={clsx(styles.sideBar__icon)}>
                                    <FontAwesomeIcon icon={faUser} />
                                </div>
                                <div className={clsx(styles.sideBar__name)}>Profile</div>
                            </Link>
                            <Link
                                className={clsx(
                                    styles.sideBar__item,
                                    `${state === 'address' && styles.sideBar__item_active}`,
                                )}
                                to="/customer/address"
                            >
                                <div className={clsx(styles.sideBar__icon)}>
                                    <FontAwesomeIcon icon={faLocationDot} />
                                </div>
                                <div className={clsx(styles.sideBar__name)}>Address</div>
                            </Link>
                        </div>
                        <div className={clsx(styles.sideBar__subTitle)}>Order Settings</div>
                        <div className={clsx(styles.sideBar__options)}>
                            <Link
                                className={clsx(
                                    styles.sideBar__item,
                                    `${state === 'orders' && styles.sideBar__item_active}`,
                                )}
                            >
                                <div className={clsx(styles.sideBar__icon)}>
                                    <FontAwesomeIcon icon={faFirstOrder} />
                                </div>
                                <div className={clsx(styles.sideBar__name)}>Order Management</div>
                            </Link>
                            <Link
                                className={clsx(
                                    styles.sideBar__item,
                                    `${state === 'bill' && styles.sideBar__item_active}`,
                                )}
                            >
                                <div className={clsx(styles.sideBar__icon)}>
                                    <FontAwesomeIcon icon={faMoneyBill} />
                                </div>
                                <div className={clsx(styles.sideBar__name)}>Billing</div>
                            </Link>
                        </div>
                    </div>
                    <div className={clsx(styles.mainChild)}>{mainChild}</div>
                </div>
            </div>
        </div>
    );
}

export default SettingComponent;
