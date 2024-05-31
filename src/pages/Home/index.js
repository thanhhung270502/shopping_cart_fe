import clsx from 'clsx';
import styles from './home.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiamond } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

function Home() {
    const [options, setOptions] = useState(['arrivals', 'deals', 'sales']);

    const handleChangeOption = (newOptions) => {
        let newResult = [];
        for (let i = 0; i < newOptions.length; i++) {
            newResult.push(newOptions[i]);
        }
        setOptions(newResult);
    };

    return (
        <div className={clsx(styles.home)}>
            <div className={clsx(styles.introduction)}>
                <div className="container">
                    <div className={clsx(styles.inner)}>
                        <div className={clsx(styles.title)}>PolkaDots - SHOPPING CART</div>
                        <div className={clsx(styles.subTitle)}>Buy-For-Now</div>
                        <a className={clsx(styles.btnShop)} href="./products">
                            SHOP NOW
                        </a>
                    </div>
                </div>
            </div>
            <div className={clsx(styles.products)}>
                <div className="container">
                    <div className={clsx(styles.inner)}>
                        <div className={clsx(styles.optionsBar)}>
                            <div
                                className={clsx(
                                    styles.option,
                                    `${options && options.length === 3 && styles.optionActive}`,
                                )}
                                onClick={() => handleChangeOption(['arrivals', 'deals', 'sales'])}
                            >
                                All
                            </div>
                            <div
                                className={clsx(
                                    styles.option,
                                    `${
                                        options &&
                                        options.length === 1 &&
                                        options[0] === 'arrivals' &&
                                        styles.optionActive
                                    }`,
                                )}
                                onClick={() => handleChangeOption(['arrivals'])}
                            >
                                New Arrivals
                            </div>
                            <div
                                className={clsx(
                                    styles.option,
                                    `${
                                        options && options.length === 1 && options[0] === 'deals' && styles.optionActive
                                    }`,
                                )}
                                onClick={() => handleChangeOption(['deals'])}
                            >
                                Hot Deals
                            </div>
                            <div
                                className={clsx(
                                    styles.option,
                                    `${
                                        options && options.length === 1 && options[0] === 'sales' && styles.optionActive
                                    }`,
                                )}
                                onClick={() => handleChangeOption(['sales'])}
                            >
                                Flash Sales
                            </div>
                        </div>
                        {options &&
                            options.map((option, idx) => {
                                if (option === 'arrivals') {
                                    return (
                                        <div className={clsx(styles.block)}>
                                            <div className={clsx(styles.title)}>
                                                <span>
                                                    <FontAwesomeIcon icon={faDiamond} />
                                                </span>
                                                New Arrivals
                                            </div>
                                            <div className={clsx(styles.block__items)}>
                                                <div className={clsx(styles.item, 'col-3')}>
                                                    <div className={clsx(styles.item__name)}>Lorem</div>
                                                    <div className={clsx(styles.item__image)}>
                                                        <img
                                                            src="/images/clothes/2-2-2-3.jpg"
                                                            className="img-fluid"
                                                            alt=""
                                                        />
                                                    </div>
                                                    <div className={clsx(styles.item__prices)}>
                                                        <div
                                                            className={clsx(styles.item__price, styles.item__oldPrice)}
                                                        >
                                                            $17.25
                                                        </div>
                                                        <div
                                                            className={clsx(styles.item__price, styles.item__newPrice)}
                                                        >
                                                            $17.25
                                                        </div>
                                                    </div>
                                                    <div className={clsx(styles.item__btn, styles.item__btnBuy)}>
                                                        <a href="./" className={clsx(styles.item__link)}>
                                                            Buy Now
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className={clsx(styles.item, 'col-3')}>
                                                    <div className={clsx(styles.item__name)}>Lorem</div>
                                                    <div className={clsx(styles.item__image)}>
                                                        <img
                                                            src="/images/clothes/2-2-2-3.jpg"
                                                            className="img-fluid"
                                                            alt=""
                                                        />
                                                    </div>
                                                    <div className={clsx(styles.item__prices)}>
                                                        <div
                                                            className={clsx(styles.item__price, styles.item__oldPrice)}
                                                        >
                                                            $17.25
                                                        </div>
                                                        <div
                                                            className={clsx(styles.item__price, styles.item__newPrice)}
                                                        >
                                                            $17.25
                                                        </div>
                                                    </div>
                                                    <div className={clsx(styles.item__btn, styles.item__btnBuy)}>
                                                        <a href="./" className={clsx(styles.item__link)}>
                                                            Buy Now
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className={clsx(styles.item, 'col-3')}>
                                                    <div className={clsx(styles.item__name)}>Lorem</div>
                                                    <div className={clsx(styles.item__image)}>
                                                        <img
                                                            src="/images/clothes/2-2-2-3.jpg"
                                                            className="img-fluid"
                                                            alt=""
                                                        />
                                                    </div>
                                                    <div className={clsx(styles.item__prices)}>
                                                        <div
                                                            className={clsx(styles.item__price, styles.item__oldPrice)}
                                                        >
                                                            $17.25
                                                        </div>
                                                        <div
                                                            className={clsx(styles.item__price, styles.item__newPrice)}
                                                        >
                                                            $17.25
                                                        </div>
                                                    </div>
                                                    <div className={clsx(styles.item__btn, styles.item__btnBuy)}>
                                                        <a href="./" className={clsx(styles.item__link)}>
                                                            Buy Now
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className={clsx(styles.item, 'col-3')}>
                                                    <div className={clsx(styles.item__name)}>Lorem</div>
                                                    <div className={clsx(styles.item__image)}>
                                                        <img
                                                            src="/images/clothes/2-2-2-3.jpg"
                                                            className="img-fluid"
                                                            alt=""
                                                        />
                                                    </div>
                                                    <div className={clsx(styles.item__prices)}>
                                                        <div
                                                            className={clsx(styles.item__price, styles.item__oldPrice)}
                                                        >
                                                            $17.25
                                                        </div>
                                                        <div
                                                            className={clsx(styles.item__price, styles.item__newPrice)}
                                                        >
                                                            $17.25
                                                        </div>
                                                    </div>
                                                    <div className={clsx(styles.item__btn, styles.item__btnBuy)}>
                                                        <a href="./" className={clsx(styles.item__link)}>
                                                            Buy Now
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className={clsx(styles.item, 'col-3')}>
                                                    <div className={clsx(styles.item__name)}>Lorem</div>
                                                    <div className={clsx(styles.item__image)}>
                                                        <img
                                                            src="/images/clothes/2-2-2-3.jpg"
                                                            className="img-fluid"
                                                            alt=""
                                                        />
                                                    </div>
                                                    <div className={clsx(styles.item__prices)}>
                                                        <div
                                                            className={clsx(styles.item__price, styles.item__oldPrice)}
                                                        >
                                                            $17.25
                                                        </div>
                                                        <div
                                                            className={clsx(styles.item__price, styles.item__newPrice)}
                                                        >
                                                            $17.25
                                                        </div>
                                                    </div>
                                                    <div className={clsx(styles.item__btn, styles.item__btnBuy)}>
                                                        <a href="./" className={clsx(styles.item__link)}>
                                                            Buy Now
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className={clsx(styles.item, 'col-3')}>
                                                    <div className={clsx(styles.item__name)}>Lorem</div>
                                                    <div className={clsx(styles.item__image)}>
                                                        <img
                                                            src="/images/clothes/2-2-2-3.jpg"
                                                            className="img-fluid"
                                                            alt=""
                                                        />
                                                    </div>
                                                    <div className={clsx(styles.item__prices)}>
                                                        <div
                                                            className={clsx(styles.item__price, styles.item__oldPrice)}
                                                        >
                                                            $17.25
                                                        </div>
                                                        <div
                                                            className={clsx(styles.item__price, styles.item__newPrice)}
                                                        >
                                                            $17.25
                                                        </div>
                                                    </div>
                                                    <div className={clsx(styles.item__btn, styles.item__btnBuy)}>
                                                        <a href="./" className={clsx(styles.item__link)}>
                                                            Buy Now
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                } else if (option === 'deals') {
                                    return (
                                        <div className={clsx(styles.block)}>
                                            <div className={clsx(styles.title)}>
                                                <span>
                                                    <FontAwesomeIcon icon={faDiamond} />
                                                </span>
                                                Hot Deals
                                            </div>
                                            <div className={clsx(styles.block__items)}>
                                                <div className={clsx(styles.item, 'col-3')}>
                                                    <div className={clsx(styles.item__name)}>Lorem</div>
                                                    <div className={clsx(styles.item__image)}>
                                                        <img
                                                            src="/images/clothes/2-2-2-3.jpg"
                                                            className="img-fluid"
                                                            alt=""
                                                        />
                                                    </div>
                                                    <div className={clsx(styles.item__prices)}>
                                                        <div
                                                            className={clsx(styles.item__price, styles.item__oldPrice)}
                                                        >
                                                            $17.25
                                                        </div>
                                                        <div
                                                            className={clsx(styles.item__price, styles.item__newPrice)}
                                                        >
                                                            $17.25
                                                        </div>
                                                    </div>
                                                    <div className={clsx(styles.item__btn, styles.item__btnBuy)}>
                                                        <a href="./" className={clsx(styles.item__link)}>
                                                            Buy Now
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className={clsx(styles.item, 'col-3')}>
                                                    <div className={clsx(styles.item__name)}>Lorem</div>
                                                    <div className={clsx(styles.item__image)}>
                                                        <img
                                                            src="/images/clothes/2-2-2-3.jpg"
                                                            className="img-fluid"
                                                            alt=""
                                                        />
                                                    </div>
                                                    <div className={clsx(styles.item__prices)}>
                                                        <div
                                                            className={clsx(styles.item__price, styles.item__oldPrice)}
                                                        >
                                                            $17.25
                                                        </div>
                                                        <div
                                                            className={clsx(styles.item__price, styles.item__newPrice)}
                                                        >
                                                            $17.25
                                                        </div>
                                                    </div>
                                                    <div className={clsx(styles.item__btn, styles.item__btnBuy)}>
                                                        <a href="./" className={clsx(styles.item__link)}>
                                                            Buy Now
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className={clsx(styles.item, 'col-3')}>
                                                    <div className={clsx(styles.item__name)}>Lorem</div>
                                                    <div className={clsx(styles.item__image)}>
                                                        <img
                                                            src="/images/clothes/2-2-2-3.jpg"
                                                            className="img-fluid"
                                                            alt=""
                                                        />
                                                    </div>
                                                    <div className={clsx(styles.item__prices)}>
                                                        <div
                                                            className={clsx(styles.item__price, styles.item__oldPrice)}
                                                        >
                                                            $17.25
                                                        </div>
                                                        <div
                                                            className={clsx(styles.item__price, styles.item__newPrice)}
                                                        >
                                                            $17.25
                                                        </div>
                                                    </div>
                                                    <div className={clsx(styles.item__btn, styles.item__btnBuy)}>
                                                        <a href="./" className={clsx(styles.item__link)}>
                                                            Buy Now
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className={clsx(styles.item, 'col-3')}>
                                                    <div className={clsx(styles.item__name)}>Lorem</div>
                                                    <div className={clsx(styles.item__image)}>
                                                        <img
                                                            src="/images/clothes/2-2-2-3.jpg"
                                                            className="img-fluid"
                                                            alt=""
                                                        />
                                                    </div>
                                                    <div className={clsx(styles.item__prices)}>
                                                        <div
                                                            className={clsx(styles.item__price, styles.item__oldPrice)}
                                                        >
                                                            $17.25
                                                        </div>
                                                        <div
                                                            className={clsx(styles.item__price, styles.item__newPrice)}
                                                        >
                                                            $17.25
                                                        </div>
                                                    </div>
                                                    <div className={clsx(styles.item__btn, styles.item__btnBuy)}>
                                                        <a href="./" className={clsx(styles.item__link)}>
                                                            Buy Now
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className={clsx(styles.item, 'col-3')}>
                                                    <div className={clsx(styles.item__name)}>Lorem</div>
                                                    <div className={clsx(styles.item__image)}>
                                                        <img
                                                            src="/images/clothes/2-2-2-3.jpg"
                                                            className="img-fluid"
                                                            alt=""
                                                        />
                                                    </div>
                                                    <div className={clsx(styles.item__prices)}>
                                                        <div
                                                            className={clsx(styles.item__price, styles.item__oldPrice)}
                                                        >
                                                            $17.25
                                                        </div>
                                                        <div
                                                            className={clsx(styles.item__price, styles.item__newPrice)}
                                                        >
                                                            $17.25
                                                        </div>
                                                    </div>
                                                    <div className={clsx(styles.item__btn, styles.item__btnBuy)}>
                                                        <a href="./" className={clsx(styles.item__link)}>
                                                            Buy Now
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className={clsx(styles.item, 'col-3')}>
                                                    <div className={clsx(styles.item__name)}>Lorem</div>
                                                    <div className={clsx(styles.item__image)}>
                                                        <img
                                                            src="/images/clothes/2-2-2-3.jpg"
                                                            className="img-fluid"
                                                            alt=""
                                                        />
                                                    </div>
                                                    <div className={clsx(styles.item__prices)}>
                                                        <div
                                                            className={clsx(styles.item__price, styles.item__oldPrice)}
                                                        >
                                                            $17.25
                                                        </div>
                                                        <div
                                                            className={clsx(styles.item__price, styles.item__newPrice)}
                                                        >
                                                            $17.25
                                                        </div>
                                                    </div>
                                                    <div className={clsx(styles.item__btn, styles.item__btnBuy)}>
                                                        <a href="./" className={clsx(styles.item__link)}>
                                                            Buy Now
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                } else {
                                    return (
                                        <div className={clsx(styles.block)}>
                                            <div className={clsx(styles.title)}>
                                                <span>
                                                    <FontAwesomeIcon icon={faDiamond} />
                                                </span>
                                                Flash Sales
                                            </div>
                                            <div className={clsx(styles.block__items)}>
                                                <div className={clsx(styles.item, 'col-3')}>
                                                    <div className={clsx(styles.item__name)}>Lorem</div>
                                                    <div className={clsx(styles.item__image)}>
                                                        <img
                                                            src="/images/clothes/2-2-2-3.jpg"
                                                            className="img-fluid"
                                                            alt=""
                                                        />
                                                    </div>
                                                    <div className={clsx(styles.item__prices)}>
                                                        <div
                                                            className={clsx(styles.item__price, styles.item__oldPrice)}
                                                        >
                                                            $17.25
                                                        </div>
                                                        <div
                                                            className={clsx(styles.item__price, styles.item__newPrice)}
                                                        >
                                                            $17.25
                                                        </div>
                                                    </div>
                                                    <div className={clsx(styles.item__btn, styles.item__btnBuy)}>
                                                        <a href="./" className={clsx(styles.item__link)}>
                                                            Buy Now
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className={clsx(styles.item, 'col-3')}>
                                                    <div className={clsx(styles.item__name)}>Lorem</div>
                                                    <div className={clsx(styles.item__image)}>
                                                        <img
                                                            src="/images/clothes/2-2-2-3.jpg"
                                                            className="img-fluid"
                                                            alt=""
                                                        />
                                                    </div>
                                                    <div className={clsx(styles.item__prices)}>
                                                        <div
                                                            className={clsx(styles.item__price, styles.item__oldPrice)}
                                                        >
                                                            $17.25
                                                        </div>
                                                        <div
                                                            className={clsx(styles.item__price, styles.item__newPrice)}
                                                        >
                                                            $17.25
                                                        </div>
                                                    </div>
                                                    <div className={clsx(styles.item__btn, styles.item__btnBuy)}>
                                                        <a href="./" className={clsx(styles.item__link)}>
                                                            Buy Now
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className={clsx(styles.item, 'col-3')}>
                                                    <div className={clsx(styles.item__name)}>Lorem</div>
                                                    <div className={clsx(styles.item__image)}>
                                                        <img
                                                            src="/images/clothes/2-2-2-3.jpg"
                                                            className="img-fluid"
                                                            alt=""
                                                        />
                                                    </div>
                                                    <div className={clsx(styles.item__prices)}>
                                                        <div
                                                            className={clsx(styles.item__price, styles.item__oldPrice)}
                                                        >
                                                            $17.25
                                                        </div>
                                                        <div
                                                            className={clsx(styles.item__price, styles.item__newPrice)}
                                                        >
                                                            $17.25
                                                        </div>
                                                    </div>
                                                    <div className={clsx(styles.item__btn, styles.item__btnBuy)}>
                                                        <a href="./" className={clsx(styles.item__link)}>
                                                            Buy Now
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className={clsx(styles.item, 'col-3')}>
                                                    <div className={clsx(styles.item__name)}>Lorem</div>
                                                    <div className={clsx(styles.item__image)}>
                                                        <img
                                                            src="/images/clothes/2-2-2-3.jpg"
                                                            className="img-fluid"
                                                            alt=""
                                                        />
                                                    </div>
                                                    <div className={clsx(styles.item__prices)}>
                                                        <div
                                                            className={clsx(styles.item__price, styles.item__oldPrice)}
                                                        >
                                                            $17.25
                                                        </div>
                                                        <div
                                                            className={clsx(styles.item__price, styles.item__newPrice)}
                                                        >
                                                            $17.25
                                                        </div>
                                                    </div>
                                                    <div className={clsx(styles.item__btn, styles.item__btnBuy)}>
                                                        <a href="./" className={clsx(styles.item__link)}>
                                                            Buy Now
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className={clsx(styles.item, 'col-3')}>
                                                    <div className={clsx(styles.item__name)}>Lorem</div>
                                                    <div className={clsx(styles.item__image)}>
                                                        <img
                                                            src="/images/clothes/2-2-2-3.jpg"
                                                            className="img-fluid"
                                                            alt=""
                                                        />
                                                    </div>
                                                    <div className={clsx(styles.item__prices)}>
                                                        <div
                                                            className={clsx(styles.item__price, styles.item__oldPrice)}
                                                        >
                                                            $17.25
                                                        </div>
                                                        <div
                                                            className={clsx(styles.item__price, styles.item__newPrice)}
                                                        >
                                                            $17.25
                                                        </div>
                                                    </div>
                                                    <div className={clsx(styles.item__btn, styles.item__btnBuy)}>
                                                        <a href="./" className={clsx(styles.item__link)}>
                                                            Buy Now
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className={clsx(styles.item, 'col-3')}>
                                                    <div className={clsx(styles.item__name)}>Lorem</div>
                                                    <div className={clsx(styles.item__image)}>
                                                        <img
                                                            src="/images/clothes/2-2-2-3.jpg"
                                                            className="img-fluid"
                                                            alt=""
                                                        />
                                                    </div>
                                                    <div className={clsx(styles.item__prices)}>
                                                        <div
                                                            className={clsx(styles.item__price, styles.item__oldPrice)}
                                                        >
                                                            $17.25
                                                        </div>
                                                        <div
                                                            className={clsx(styles.item__price, styles.item__newPrice)}
                                                        >
                                                            $17.25
                                                        </div>
                                                    </div>
                                                    <div className={clsx(styles.item__btn, styles.item__btnBuy)}>
                                                        <a href="./" className={clsx(styles.item__link)}>
                                                            Buy Now
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                }
                            })}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
