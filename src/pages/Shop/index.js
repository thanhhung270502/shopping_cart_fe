import clsx from 'clsx';
import styles from './shop.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faGear,
    faMessage,
    faPencil,
    faPlus,
    faStar,
    faStore,
    faUserCheck,
    faUserGroup,
    faUserPlus,
} from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

function Shop() {
    const [isBoss, SetIsBoss] = useState(true);
    const [isEdit, SetIsEdit] = useState(true);
    const [isEditName, SetIsEditName] = useState(false);
    return (
        <div className={clsx(styles.shop)}>
            <div className={clsx(styles.shop__header)}>
                <div className="container">
                    <div className={clsx(styles.shop__header__inner)}>
                        <div className={clsx(styles.shop__header__brand)}>
                            <div className="d-flex align-items-start pb-3">
                                <div className={clsx(styles.shop__image)}>
                                    <img src="/images/kim1.png" className="img__fluid" alt="" />
                                </div>
                                <div className={clsx(styles.shop__info)}>
                                    {!isEditName && (
                                        <div className={clsx(styles.shop__name)}>
                                            Coolmate - Official Store
                                            {isEdit && (
                                                <span onClick={() => SetIsEditName(true)}>
                                                    <FontAwesomeIcon icon={faPencil} />
                                                </span>
                                            )}
                                        </div>
                                    )}
                                    <div className={clsx(styles.shop__time_connect)}>Active 4 minutes ago</div>
                                </div>
                            </div>
                            {!isBoss && (
                                <div className={clsx(styles.shop__follows)}>
                                    <div className={clsx(styles.btnFollow)}>
                                        <span>
                                            <FontAwesomeIcon icon={faPlus} />
                                        </span>
                                        FOLLOW
                                    </div>
                                    <div className={clsx(styles.btnFollow)}>
                                        <span>
                                            <FontAwesomeIcon icon={faMessage} />
                                        </span>
                                        CHAT
                                    </div>
                                </div>
                            )}
                            {isBoss && (
                                <div className={clsx(styles.shop__follows)}>
                                    <div className={clsx(styles.btnFollow)}>
                                        <span>
                                            <FontAwesomeIcon icon={faGear} />
                                        </span>
                                        EDIT
                                    </div>
                                </div>
                            )}
                        </div>
                        <div className={clsx(styles.shop__header__block)}>
                            <div className={clsx(styles.body)}>
                                <div className={clsx(styles.body__icon)}>
                                    <FontAwesomeIcon icon={faStore} />
                                </div>
                                <div className={clsx(styles.body__title)}>Products: </div>
                                <div className={clsx(styles.body__quantity)}>699</div>
                            </div>
                            <div className={clsx(styles.body)}>
                                <div className={clsx(styles.body__icon)}>
                                    <FontAwesomeIcon icon={faUserPlus} />
                                </div>
                                <div className={clsx(styles.body__title)}>Following: </div>
                                <div className={clsx(styles.body__quantity)}>270</div>
                            </div>
                            <div className={clsx(styles.body)}>
                                <div className={clsx(styles.body__icon)}>
                                    <FontAwesomeIcon icon={faMessage} />
                                </div>
                                <div className={clsx(styles.body__title)}>Chat Performance: </div>
                                <div className={clsx(styles.body__quantity)}>99%</div>
                            </div>
                        </div>
                        <div className={clsx(styles.shop__header__block)}>
                            <div className={clsx(styles.body)}>
                                <div className={clsx(styles.body__icon)}>
                                    <FontAwesomeIcon icon={faUserGroup} />
                                </div>
                                <div className={clsx(styles.body__title)}>Followers: </div>
                                <div className={clsx(styles.body__quantity)}>1.5m</div>
                            </div>
                            <div className={clsx(styles.body)}>
                                <div className={clsx(styles.body__icon)}>
                                    <FontAwesomeIcon icon={faStar} />
                                </div>
                                <div className={clsx(styles.body__title)}>Rating: </div>
                                <div className={clsx(styles.body__quantity)}>4.9 (573.1k Rating)</div>
                            </div>
                            <div className={clsx(styles.body)}>
                                <div className={clsx(styles.body__icon)}>
                                    <FontAwesomeIcon icon={faUserCheck} />
                                </div>
                                <div className={clsx(styles.body__title)}>Joined: </div>
                                <div className={clsx(styles.body__quantity)}>7 years ago</div>
                            </div>
                        </div>
                    </div>
                    <div className={clsx(styles.shop__header__optionsBar)}>
                        <div className={clsx(styles.option, styles.option_active)}>Home</div>
                        <div className={clsx(styles.option)}>All Products</div>
                        <div className={clsx(styles.option)}>Sản phầm bán chạy</div>
                        <div className={clsx(styles.option)}>Sản phầm mới</div>
                    </div>
                </div>
            </div>
            <div className={clsx(styles.shop__body)}>
                <div className="container">
                    <div className={clsx(styles.shop__body__vouchers)}>
                        <div className={clsx(styles.block)}>
                            <div className={clsx(styles.voucher)}>
                                <div className={clsx(styles.voucher__type)}>-50K off</div>
                                <div className={clsx(styles.voucher__cond)}>Min. Spend 199K</div>
                                <div className={clsx(styles.voucher__time)}>Valid Till: 14.6.2024</div>
                            </div>
                            <div className={clsx(styles.voucher__btn)}>Claim</div>
                        </div>
                        <div className={clsx(styles.block)}>
                            <div className={clsx(styles.voucher)}>
                                <div className={clsx(styles.voucher__type)}>-50K off</div>
                                <div className={clsx(styles.voucher__cond)}>Min. Spend 199K</div>
                                <div className={clsx(styles.voucher__time)}>Valid Till: 14.6.2024</div>
                            </div>
                            <div className={clsx(styles.voucher__btn)}>Claim</div>
                        </div>
                        <div className={clsx(styles.block)}>
                            <div className={clsx(styles.voucher)}>
                                <div className={clsx(styles.voucher__type)}>-50K off</div>
                                <div className={clsx(styles.voucher__cond)}>Min. Spend 199K</div>
                                <div className={clsx(styles.voucher__time)}>Valid Till: 14.6.2024</div>
                            </div>
                            <div className={clsx(styles.voucher__btn)}>Claim</div>
                        </div>
                        <div className={clsx(styles.block)}>
                            <div className={clsx(styles.voucher)}>
                                <div className={clsx(styles.voucher__type)}>-50K off</div>
                                <div className={clsx(styles.voucher__cond)}>Min. Spend 199K</div>
                                <div className={clsx(styles.voucher__time)}>Valid Till: 14.6.2024</div>
                            </div>
                            <div className={clsx(styles.voucher__btn)}>Claim</div>
                        </div>
                        <div className={clsx(styles.block)}>
                            <div className={clsx(styles.voucher)}>
                                <div className={clsx(styles.voucher__type)}>-50K off</div>
                                <div className={clsx(styles.voucher__cond)}>Min. Spend 199K</div>
                                <div className={clsx(styles.voucher__time)}>Valid Till: 14.6.2024</div>
                            </div>
                            <div className={clsx(styles.voucher__btn)}>Claim</div>
                        </div>
                    </div>

                    <div className={clsx(styles.shop__body__recommend)}>
                        <div className={clsx(styles.title)}>RECOMMENDED FOR YOU</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Shop;
