import clsx from 'clsx';
import styles from './shop.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle, faLeftLong, faRightLong } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

function CreateShopComponent({ state, mainChild }) {
    return (
        <div className={clsx(styles.createShop)}>
            <div className={clsx(styles.createShop__header)}>
                <div className={clsx('container')}>
                    <div className={clsx(styles.createShop__header__inner)}>
                        <div className={clsx(styles.createShop__header__lines)}>
                            <div
                                className={clsx(
                                    styles.createShop__header__line,
                                    styles.createShop__header__line__outside,
                                    styles.createShop__header__line_active,
                                )}
                            ></div>
                            <div
                                className={clsx(
                                    styles.createShop__header__line,
                                    `${
                                        state !== 'information' &&
                                        styles.createShop__header__line_active
                                    }`,
                                )}
                            ></div>
                            <div
                                className={clsx(
                                    styles.createShop__header__line,
                                    `${
                                        (state === 'complete' || state === 'done') &&
                                        styles.createShop__header__line_active
                                    }`,
                                )}
                            ></div>
                            <div
                                className={clsx(
                                    styles.createShop__header__line,
                                    styles.createShop__header__line__outside,
                                    `${state === 'done' && styles.createShop__header__line_active}`,
                                )}
                            ></div>
                        </div>
                        <div className={clsx(styles.createShop__header__circles)}>
                            <Link
                                to="/seller/new/information"
                                className={clsx(styles.createShop__header__circle)}
                            >
                                <div
                                    className={clsx(
                                        styles.circle__text,
                                        `${
                                            (state === 'information' || state === 'done') &&
                                            styles.createShop__header__circle_active
                                        }`,
                                    )}
                                >
                                    Shop Information
                                </div>
                                <div
                                    className={clsx(
                                        styles.circle__icon,
                                        styles.createShop__header__circle_active,
                                    )}
                                >
                                    <FontAwesomeIcon icon={faCircle} />
                                </div>
                            </Link>
                            <Link
                                to="/seller/new/transportation"
                                className={clsx(styles.createShop__header__circle)}
                            >
                                <div
                                    className={clsx(
                                        styles.circle__text,
                                        `${
                                            (state === 'transportation' || state === 'done') &&
                                            styles.createShop__header__circle_active
                                        }`,
                                    )}
                                >
                                    Transportation Settings
                                </div>
                                <div
                                    className={clsx(
                                        styles.circle__icon,
                                        `${
                                            state !== 'information' &&
                                            styles.createShop__header__circle_active
                                        }`,
                                    )}
                                >
                                    <FontAwesomeIcon icon={faCircle} />
                                </div>
                            </Link>
                            <Link
                                to="/seller/new/complete"
                                className={clsx(styles.createShop__header__circle)}
                            >
                                <div
                                    className={clsx(
                                        styles.circle__text,
                                        `${
                                            (state === 'complete' || state === 'done') &&
                                            styles.createShop__header__circle_active
                                        }`,
                                    )}
                                >
                                    Complete
                                </div>
                                <div
                                    className={clsx(
                                        styles.circle__icon,
                                        `${
                                            (state === 'complete' || state === 'done') &&
                                            styles.createShop__header__circle_active
                                        }`,
                                    )}
                                >
                                    <FontAwesomeIcon icon={faCircle} />
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className={clsx(styles.createShop__body)}>
                <div className="container">{mainChild}</div>
            </div>
            <div className={clsx(styles.createShop__footer)}>
                <div className="container">
                    <div className={clsx(styles.createShop__footer__inner)}>
                        <Link to="" className={clsx(styles.createShop__footer__btn)}>
                            <FontAwesomeIcon icon={faLeftLong} />
                        </Link>
                        <Link to="" className={clsx(styles.createShop__footer__btn)}>
                            <FontAwesomeIcon icon={faRightLong} />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CreateShopComponent;
