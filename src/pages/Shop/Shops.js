import clsx from 'clsx';
import styles from './shop.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faAnglesRight,
    faGear,
    faMessage,
    faPencil,
    faPlus,
    faStar,
    faStarHalf,
    faStore,
    faUserCheck,
    faUserGroup,
    faUserPlus,
} from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

function Shop() {
    const [isBoss, SetIsBoss] = useState(false);
    const [isEdit, SetIsEdit] = useState(true);
    const [isEditName, SetIsEditName] = useState(false);
    const [options, setOptions] = useState([
        'Home',
        'All Products',
        'Sản phầm bán chạy',
        'Sản phầm mới',
        'All Products',
        'Sản phầm bán chạy',
        'Sản phầm mới',
    ]);

    const [numOfCol, setNumOfCol] = useState(new Array(15).fill(true));

    const calcStar = (ratio) => {
        let star = parseInt(ratio);
        let halfStar = ratio - star > 0 ? 1 : 0;
        let noStar = 5 - star - halfStar;
        return {
            star: new Array(star).fill(true),
            halfStar: new Array(halfStar).fill(true),
            noStar: new Array(noStar).fill(true),
        };
    };

    return (
        <div className={clsx(styles.shop)}>
            <div className={clsx(styles.shop__header)}>
                <div className="container">
                    <div className={clsx(styles.shop__header__inner)}>
                        <div className={clsx(styles.shop__header__brand)}>
                            <div className={clsx(styles.brand__inner)}>
                                <div className={clsx(styles.shop__image)}>
                                    <img src="/images/MB.png" className="img__fluid" alt="" />
                                </div>
                                <div className={clsx(styles.shop__info)}>
                                    {!isEditName && (
                                        <div className={clsx(styles.shop__name)}>
                                            MixiGaming - Official Store
                                            {isEdit && (
                                                <span onClick={() => SetIsEditName(true)}>
                                                    <FontAwesomeIcon icon={faPencil} />
                                                </span>
                                            )}
                                        </div>
                                    )}
                                    <div className={clsx(styles.shop__time_connect)}>
                                        Active 4 minutes ago
                                    </div>
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
                                </div>
                            </div>
                            <div
                                className={clsx(styles.shop__header__img)}
                                style={{
                                    backgroundImage: 'url("/images/PC.png")',
                                }}
                            ></div>
                            <div className={clsx(styles.shop__header__bg)}></div>
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
                                <div className={clsx(styles.body__quantity)}>
                                    4.9 (573.1k Rating)
                                </div>
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
                        {options.map((option, i) => {
                            if (i <= 4) {
                                return (
                                    <div className={clsx(styles.optionsBar__option)}>
                                        <div className={clsx(styles.optionsBar__option__inner)}>
                                            {option}
                                        </div>
                                    </div>
                                );
                            }
                        })}
                        <div className={clsx(styles.optionsBar__option__more)}>
                            <div className={clsx(styles.optionsBar__option__inner)}>
                                <div className="dropdown">
                                    <button
                                        className={clsx(
                                            'dropdown-toggle',
                                            styles.optionsBar__option__dropdownToggle,
                                        )}
                                        type="button"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                    >
                                        More
                                    </button>
                                    <ul className="dropdown-menu">
                                        <li>
                                            <a className="dropdown-item" href="/">
                                                Action
                                            </a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item" href="/">
                                                Another action
                                            </a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item" href="/">
                                                Something else here
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={clsx(styles.shop__body)}>
                <div className="container">
                    <div className={clsx(styles.shop__body__block)}>
                        <div className={clsx(styles.shop__body__vouchers)}>
                            <div className={clsx(styles.block)}>
                                <div className={clsx(styles.voucher)}>
                                    <div className={clsx(styles.voucher__type)}>-50K off</div>
                                    <div className={clsx(styles.voucher__cond)}>
                                        Min. Spend 199K
                                    </div>
                                    <div className={clsx(styles.voucher__time)}>
                                        Valid Till: 14.6.2024
                                    </div>
                                </div>
                                <div className={clsx(styles.voucher__btn)}>Claim</div>
                            </div>
                            <div className={clsx(styles.block)}>
                                <div className={clsx(styles.voucher)}>
                                    <div className={clsx(styles.voucher__type)}>-50K off</div>
                                    <div className={clsx(styles.voucher__cond)}>
                                        Min. Spend 199K
                                    </div>
                                    <div className={clsx(styles.voucher__time)}>
                                        Valid Till: 14.6.2024
                                    </div>
                                </div>
                                <div className={clsx(styles.voucher__btn)}>Claim</div>
                            </div>
                            <div className={clsx(styles.block)}>
                                <div className={clsx(styles.voucher)}>
                                    <div className={clsx(styles.voucher__type)}>-50K off</div>
                                    <div className={clsx(styles.voucher__cond)}>
                                        Min. Spend 199K
                                    </div>
                                    <div className={clsx(styles.voucher__time)}>
                                        Valid Till: 14.6.2024
                                    </div>
                                </div>
                                <div className={clsx(styles.voucher__btn)}>Claim</div>
                            </div>
                            <div className={clsx(styles.block)}>
                                <div className={clsx(styles.voucher)}>
                                    <div className={clsx(styles.voucher__type)}>-50K off</div>
                                    <div className={clsx(styles.voucher__cond)}>
                                        Min. Spend 199K
                                    </div>
                                    <div className={clsx(styles.voucher__time)}>
                                        Valid Till: 14.6.2024
                                    </div>
                                </div>
                                <div className={clsx(styles.voucher__btn)}>Claim</div>
                            </div>
                            <div className={clsx(styles.block)}>
                                <div className={clsx(styles.voucher)}>
                                    <div className={clsx(styles.voucher__type)}>-50K off</div>
                                    <div className={clsx(styles.voucher__cond)}>
                                        Min. Spend 199K
                                    </div>
                                    <div className={clsx(styles.voucher__time)}>
                                        Valid Till: 14.6.2024
                                    </div>
                                </div>
                                <div className={clsx(styles.voucher__btn)}>Claim</div>
                            </div>
                        </div>
                    </div>

                    <div className={clsx(styles.shop__body__block)}>
                        <div className={clsx(styles.shop__body__section)}>
                            <div className={clsx(styles.section__header)}>
                                <div className={clsx(styles.section__title)}>
                                    RECOMMENDED FOR YOU
                                </div>
                                <div className={clsx(styles.section__link)}>
                                    See All <FontAwesomeIcon icon={faAnglesRight} />
                                </div>
                            </div>
                            <div className={clsx(styles.section__content)}>
                                {numOfCol.map((a) => {
                                    return (
                                        <div className={clsx(styles.section__col)}>
                                            <div className={clsx(styles.section__col__inner)}>
                                                <div className={clsx(styles.section__col__image)}>
                                                    <img
                                                        src="/images/MB.png"
                                                        alt="img"
                                                        className={clsx(styles.section__col__img)}
                                                    />
                                                </div>
                                                <div className={clsx(styles.section__col__content)}>
                                                    <div
                                                        className={clsx(styles.section__col__name)}
                                                    >
                                                        Áo thun nam Cotton Compact phiên bản Premium
                                                        chống nhăn Coolmate
                                                    </div>
                                                    <div
                                                        className={clsx(
                                                            styles.section__col__specials,
                                                        )}
                                                    >
                                                        <div
                                                            className={clsx(
                                                                styles.section__col__specials__discount,
                                                            )}
                                                        >
                                                            đ30k off
                                                        </div>
                                                        <div
                                                            className={clsx(
                                                                styles.section__col__specials__time,
                                                            )}
                                                        >
                                                            đ219.000 at 00:00
                                                        </div>
                                                    </div>
                                                    <div
                                                        className={clsx(
                                                            styles.section__col__prices,
                                                        )}
                                                    >
                                                        <div
                                                            className={clsx(
                                                                styles.section__col__prices__new,
                                                            )}
                                                        >
                                                            đ239.000
                                                        </div>
                                                        <div
                                                            className={clsx(
                                                                styles.section__col__prices__old,
                                                            )}
                                                        >
                                                            đ259.000
                                                        </div>
                                                        <div
                                                            className={clsx(
                                                                styles.section__col__prices__discount,
                                                            )}
                                                        >
                                                            -8%
                                                        </div>
                                                    </div>
                                                    <div
                                                        className={clsx(
                                                            styles.section__col__reviews,
                                                        )}
                                                    >
                                                        <div
                                                            className={clsx(
                                                                styles.section__col__reviews__star,
                                                            )}
                                                        >
                                                            {calcStar(4)['star'].map((s) => {
                                                                return (
                                                                    <FontAwesomeIcon
                                                                        icon={faStar}
                                                                    />
                                                                );
                                                            })}
                                                            {calcStar(4.5)['halfStar'].map((s) => {
                                                                return (
                                                                    <FontAwesomeIcon
                                                                        icon={faStarHalf}
                                                                    />
                                                                );
                                                            })}
                                                        </div>
                                                        <div
                                                            className={clsx(
                                                                styles.section__col__reviews__sold,
                                                            )}
                                                        >
                                                            88.1k Sold
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>

                    <div className={clsx(styles.shop__body__block)}>
                        <div className={clsx(styles.shop__body__bg)}>
                            <img src="/images/PC.png" alt="bg" className={clsx(styles.bg__img)} />
                        </div>
                    </div>

                    <div className={clsx(styles.shop__body__block)}>
                        <div className={clsx(styles.shop__body__section)}>
                            <div className={clsx(styles.section__header)}>
                                <div className={clsx(styles.section__title)}>
                                    RECOMMENDED FOR YOU
                                </div>
                                <div className={clsx(styles.section__link)}>
                                    See All <FontAwesomeIcon icon={faAnglesRight} />
                                </div>
                            </div>
                            <div className={clsx(styles.section__content)}>
                                {numOfCol.map((a) => {
                                    return (
                                        <div className={clsx(styles.section__col)}>
                                            <div className={clsx(styles.section__col__inner)}>
                                                <div className={clsx(styles.section__col__image)}>
                                                    <img
                                                        src="/images/MB.png"
                                                        alt="img"
                                                        className={clsx(styles.section__col__img)}
                                                    />
                                                </div>
                                                <div className={clsx(styles.section__col__content)}>
                                                    <div
                                                        className={clsx(styles.section__col__name)}
                                                    >
                                                        Áo thun nam Cotton Compact phiên bản Premium
                                                        chống nhăn Coolmate
                                                    </div>
                                                    <div
                                                        className={clsx(
                                                            styles.section__col__specials,
                                                        )}
                                                    >
                                                        <div
                                                            className={clsx(
                                                                styles.section__col__specials__discount,
                                                            )}
                                                        >
                                                            đ30k off
                                                        </div>
                                                        <div
                                                            className={clsx(
                                                                styles.section__col__specials__time,
                                                            )}
                                                        >
                                                            đ219.000 at 00:00
                                                        </div>
                                                    </div>
                                                    <div
                                                        className={clsx(
                                                            styles.section__col__prices,
                                                        )}
                                                    >
                                                        <div
                                                            className={clsx(
                                                                styles.section__col__prices__new,
                                                            )}
                                                        >
                                                            đ239.000
                                                        </div>
                                                        <div
                                                            className={clsx(
                                                                styles.section__col__prices__old,
                                                            )}
                                                        >
                                                            đ259.000
                                                        </div>
                                                        <div
                                                            className={clsx(
                                                                styles.section__col__prices__discount,
                                                            )}
                                                        >
                                                            -8%
                                                        </div>
                                                    </div>
                                                    <div
                                                        className={clsx(
                                                            styles.section__col__reviews,
                                                        )}
                                                    >
                                                        <div
                                                            className={clsx(
                                                                styles.section__col__reviews__star,
                                                            )}
                                                        >
                                                            {calcStar(4)['star'].map((s) => {
                                                                return (
                                                                    <FontAwesomeIcon
                                                                        icon={faStar}
                                                                    />
                                                                );
                                                            })}
                                                            {calcStar(4.5)['halfStar'].map((s) => {
                                                                return (
                                                                    <FontAwesomeIcon
                                                                        icon={faStarHalf}
                                                                    />
                                                                );
                                                            })}
                                                        </div>
                                                        <div
                                                            className={clsx(
                                                                styles.section__col__reviews__sold,
                                                            )}
                                                        >
                                                            88.1k Sold
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>

                    <div className={clsx(styles.shop__body__block)}>
                        <div className={clsx(styles.shop__body__bg)}>
                            <img src="/images/PC.png" alt="bg" className={clsx(styles.bg__img)} />
                        </div>
                    </div>

                    <div className={clsx(styles.shop__body__block)}>
                        <div className={clsx(styles.shop__body__bg)}>
                            <img src="/images/PC.png" alt="bg" className={clsx(styles.bg__img)} />
                        </div>
                    </div>

                    <div className={clsx(styles.shop__body__block)}>
                        <div className={clsx(styles.shop__body__section)}>
                            <div className={clsx(styles.section__header)}>
                                <div className={clsx(styles.section__title)}>
                                    RECOMMENDED FOR YOU
                                </div>
                                <a href="./" className={clsx(styles.section__link)}>
                                    See All <FontAwesomeIcon icon={faAnglesRight} />
                                </a>
                            </div>
                            <div className={clsx(styles.section__content)}>
                                {numOfCol.map((a) => {
                                    return (
                                        <div className={clsx(styles.section__col)}>
                                            <div className={clsx(styles.section__col__inner)}>
                                                <div className={clsx(styles.section__col__image)}>
                                                    <img
                                                        src="/images/MB.png"
                                                        alt="img"
                                                        className={clsx(styles.section__col__img)}
                                                    />
                                                </div>
                                                <div className={clsx(styles.section__col__content)}>
                                                    <div
                                                        className={clsx(styles.section__col__name)}
                                                    >
                                                        Áo thun nam Cotton Compact phiên bản Premium
                                                        chống nhăn Coolmate
                                                    </div>
                                                    <div
                                                        className={clsx(
                                                            styles.section__col__specials,
                                                        )}
                                                    >
                                                        <div
                                                            className={clsx(
                                                                styles.section__col__specials__discount,
                                                            )}
                                                        >
                                                            đ30k off
                                                        </div>
                                                        <div
                                                            className={clsx(
                                                                styles.section__col__specials__time,
                                                            )}
                                                        >
                                                            đ219.000 at 00:00
                                                        </div>
                                                    </div>
                                                    <div
                                                        className={clsx(
                                                            styles.section__col__prices,
                                                        )}
                                                    >
                                                        <div
                                                            className={clsx(
                                                                styles.section__col__prices__new,
                                                            )}
                                                        >
                                                            đ239.000
                                                        </div>
                                                        <div
                                                            className={clsx(
                                                                styles.section__col__prices__old,
                                                            )}
                                                        >
                                                            đ259.000
                                                        </div>
                                                        <div
                                                            className={clsx(
                                                                styles.section__col__prices__discount,
                                                            )}
                                                        >
                                                            -8%
                                                        </div>
                                                    </div>
                                                    <div
                                                        className={clsx(
                                                            styles.section__col__reviews,
                                                        )}
                                                    >
                                                        <div
                                                            className={clsx(
                                                                styles.section__col__reviews__star,
                                                            )}
                                                        >
                                                            {calcStar(4)['star'].map((s) => {
                                                                return (
                                                                    <FontAwesomeIcon
                                                                        icon={faStar}
                                                                    />
                                                                );
                                                            })}
                                                            {calcStar(4.5)['halfStar'].map((s) => {
                                                                return (
                                                                    <FontAwesomeIcon
                                                                        icon={faStarHalf}
                                                                    />
                                                                );
                                                            })}
                                                        </div>
                                                        <div
                                                            className={clsx(
                                                                styles.section__col__reviews__sold,
                                                            )}
                                                        >
                                                            88.1k Sold
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Shop;
