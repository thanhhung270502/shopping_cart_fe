import clsx from 'clsx';
import styles from './home.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBoltLightning, faDiamond, faStar, faTruckFast } from '@fortawesome/free-solid-svg-icons';
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
                    <div className={clsx(styles.introduction__inner)}>
                        <div className={clsx(styles.introduction__bg)}>
                            <img src="/images/homeBG.png" className={clsx(styles.introduction__img)} alt="" />
                        </div>
                        <div className={clsx(styles.introduction__optionsBar)}>
                            <div className={clsx(styles.option__image)}>
                                <img src="/images/logo/ahamove.png" className="" alt="ahamove_logo" />
                            </div>

                            <div className={clsx(styles.option__image)}>
                                <img src="/images/logo/be.png" className="" alt="be_logo" />
                            </div>

                            <div className={clsx(styles.option__image)}>
                                <img src="/images/logo/grab.png" className="" alt="grab_logo" />
                            </div>

                            <div className={clsx(styles.option__image)}>
                                <img src="/images/logo/jt.png" className="" alt="j&t_logo" />
                            </div>

                            <div className={clsx(styles.option__image)}>
                                <img src="/images/logo/spx.png" className="" alt="spx_logo" />
                            </div>

                            <div className={clsx(styles.option__image)}>
                                <img src="/images/logo/viettel.png" className="" alt="viettel_logo" />
                            </div>

                            <div className={clsx(styles.option__image)}>
                                <img src="/images/logo/vp.png" className="" alt="vp_logo" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={clsx(styles.categories)}>
                <div className="container">
                    <div className={clsx(styles.categories__inner)}>
                        <div className={clsx(styles.title)}>Explore Popular Categories</div>
                        <div className="d-flex align-items-center">
                            <div className={clsx(styles.category)}>
                                <img
                                    src="/images/categories/01_PopularDestination_Luxury.jpg"
                                    alt="luxury"
                                    className={clsx(styles.category__image)}
                                />
                                <div className={clsx(styles.category__name)}>Luxury</div>
                            </div>
                            <div className={clsx(styles.category)}>
                                <img
                                    src="/images/categories/02_PopularDestination_Sneakers.jpg"
                                    alt="luxury"
                                    className={clsx(styles.category__image)}
                                />
                                <div className={clsx(styles.category__name)}>Sneakers</div>
                            </div>
                            <div className={clsx(styles.category)}>
                                <img
                                    src="/images/categories/03_PopularDestination_Tire.jpg"
                                    alt="luxury"
                                    className={clsx(styles.category__image)}
                                />
                                <div className={clsx(styles.category__name)}>P&A</div>
                            </div>
                            <div className={clsx(styles.category)}>
                                <img
                                    src="/images/categories/04_ECM_PopularDestination_Reburbished.jpg"
                                    alt="luxury"
                                    className={clsx(styles.category__image)}
                                />
                                <div className={clsx(styles.category__name)}>Refurbished</div>
                            </div>
                            <div className={clsx(styles.category)}>
                                <img
                                    src="/images/categories/05_PopularDestination_Cards.jpg"
                                    alt="luxury"
                                    className={clsx(styles.category__image)}
                                />
                                <div className={clsx(styles.category__name)}>Trading cards</div>
                            </div>
                            <div className={clsx(styles.category)}>
                                <img
                                    src="/images/categories/06_PopularDestination_PreLoved.jpg"
                                    alt="luxury"
                                    className={clsx(styles.category__image)}
                                />
                                <div className={clsx(styles.category__name)}>Pre-loved Luxury</div>
                            </div>
                            <div className={clsx(styles.category)}>
                                <img
                                    src="/images/categories/07_PopularDestination_Toys.jpg"
                                    alt="luxury"
                                    className={clsx(styles.category__image)}
                                />
                                <div className={clsx(styles.category__name)}>Toys</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={clsx(styles.products)}>
                <div className="container">
                    <div className={clsx(styles.inner)}>
                        {/*
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
                        */}
                        <div className={clsx(styles.block)}>
                            <div className={clsx(styles.block__header)}>
                                <div className={clsx(styles.title)}>RECOMMENDED FOR YOU</div>
                                <div className={clsx(styles.block__link)}></div>
                            </div>
                        </div>
                        {options &&
                            options.map((option, idx) => {
                                if (option === 'arrivals') {
                                    return (
                                        <div className={clsx(styles.block)}>
                                            <div className={clsx(styles.title, styles.title1)}>New Arrivals</div>
                                            <div className={clsx(styles.block__items)}>
                                                <div className={clsx(styles.item, 'col-2')}>
                                                    <div className={clsx(styles.item__image)}>
                                                        <img
                                                            src="/images/clothes/2-2-2-3.jpg"
                                                            className="img-fluid"
                                                            alt=""
                                                        />
                                                    </div>
                                                    <div className="px-3">
                                                        <div className={clsx(styles.item__name)}>
                                                            Lorem Ipsum is simply
                                                        </div>
                                                        <div className={clsx(styles.item__prices)}>
                                                            <div
                                                                className={clsx(
                                                                    styles.item__price,
                                                                    styles.item__newPrice,
                                                                )}
                                                            >
                                                                $17.25
                                                            </div>
                                                            <div
                                                                className={clsx(
                                                                    styles.item__price,
                                                                    styles.item__oldPrice,
                                                                )}
                                                            >
                                                                <span>$17.25</span> -0%
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className={clsx(styles.item, 'col-2')}>
                                                    <div className={clsx(styles.item__image)}>
                                                        <img
                                                            src="/images/clothes/2-2-2-3.jpg"
                                                            className="img-fluid"
                                                            alt=""
                                                        />
                                                    </div>
                                                    <div className="px-3">
                                                        <div className={clsx(styles.item__name)}>
                                                            Lorem Ipsum is simply
                                                        </div>
                                                        <div className={clsx(styles.item__prices)}>
                                                            <div
                                                                className={clsx(
                                                                    styles.item__price,
                                                                    styles.item__newPrice,
                                                                )}
                                                            >
                                                                $17.25
                                                            </div>
                                                            <div
                                                                className={clsx(
                                                                    styles.item__price,
                                                                    styles.item__oldPrice,
                                                                )}
                                                            >
                                                                <span>$17.25</span> -0%
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className={clsx(styles.item, 'col-2')}>
                                                    <div className={clsx(styles.item__image)}>
                                                        <img
                                                            src="/images/clothes/2-2-2-3.jpg"
                                                            className="img-fluid"
                                                            alt=""
                                                        />
                                                    </div>
                                                    <div className="px-3">
                                                        <div className={clsx(styles.item__name)}>
                                                            Lorem Ipsum is simply
                                                        </div>
                                                        <div className={clsx(styles.item__prices)}>
                                                            <div
                                                                className={clsx(
                                                                    styles.item__price,
                                                                    styles.item__newPrice,
                                                                )}
                                                            >
                                                                $17.25
                                                            </div>
                                                            <div
                                                                className={clsx(
                                                                    styles.item__price,
                                                                    styles.item__oldPrice,
                                                                )}
                                                            >
                                                                <span>$17.25</span> -0%
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className={clsx(styles.item, 'col-2')}>
                                                    <div className={clsx(styles.item__image)}>
                                                        <img
                                                            src="/images/clothes/2-2-2-3.jpg"
                                                            className="img-fluid"
                                                            alt=""
                                                        />
                                                    </div>
                                                    <div className="px-3">
                                                        <div className={clsx(styles.item__name)}>
                                                            Lorem Ipsum is simply
                                                        </div>
                                                        <div className={clsx(styles.item__prices)}>
                                                            <div
                                                                className={clsx(
                                                                    styles.item__price,
                                                                    styles.item__newPrice,
                                                                )}
                                                            >
                                                                $17.25
                                                            </div>
                                                            <div
                                                                className={clsx(
                                                                    styles.item__price,
                                                                    styles.item__oldPrice,
                                                                )}
                                                            >
                                                                <span>$17.25</span> -0%
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className={clsx(styles.item, 'col-2')}>
                                                    <div className={clsx(styles.item__image)}>
                                                        <img
                                                            src="/images/clothes/2-2-2-3.jpg"
                                                            className="img-fluid"
                                                            alt=""
                                                        />
                                                    </div>
                                                    <div className="px-3">
                                                        <div className={clsx(styles.item__name)}>
                                                            Lorem Ipsum is simply
                                                        </div>
                                                        <div className={clsx(styles.item__prices)}>
                                                            <div
                                                                className={clsx(
                                                                    styles.item__price,
                                                                    styles.item__newPrice,
                                                                )}
                                                            >
                                                                $17.25
                                                            </div>
                                                            <div
                                                                className={clsx(
                                                                    styles.item__price,
                                                                    styles.item__oldPrice,
                                                                )}
                                                            >
                                                                <span>$17.25</span> -0%
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className={clsx(styles.item, 'col-2')}>
                                                    <div className={clsx(styles.item__image)}>
                                                        <img
                                                            src="/images/clothes/2-2-2-3.jpg"
                                                            className="img-fluid"
                                                            alt=""
                                                        />
                                                    </div>
                                                    <div className="px-3">
                                                        <div className={clsx(styles.item__name)}>
                                                            Lorem Ipsum is simply
                                                        </div>
                                                        <div className={clsx(styles.item__prices)}>
                                                            <div
                                                                className={clsx(
                                                                    styles.item__price,
                                                                    styles.item__newPrice,
                                                                )}
                                                            >
                                                                $17.25
                                                            </div>
                                                            <div
                                                                className={clsx(
                                                                    styles.item__price,
                                                                    styles.item__oldPrice,
                                                                )}
                                                            >
                                                                <span>$17.25</span> -0%
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                } else if (option === 'deals') {
                                    return (
                                        <div className={clsx(styles.block)}>
                                            <div className={clsx(styles.title, styles.title2)}>
                                                <span>
                                                    <FontAwesomeIcon icon={faTruckFast} />
                                                </span>
                                                Hot Deals
                                            </div>
                                            <div className={clsx(styles.block__items)}>
                                                <div className={clsx(styles.item, 'col-2')}>
                                                    <div className={clsx(styles.item__image)}>
                                                        <img
                                                            src="/images/clothes/2-2-2-3.jpg"
                                                            className="img-fluid"
                                                            alt=""
                                                        />
                                                    </div>
                                                    <div className="px-3">
                                                        <div className={clsx(styles.item__name)}>
                                                            Lorem Ipsum is simply
                                                        </div>
                                                        <div className={clsx(styles.item__prices)}>
                                                            <div
                                                                className={clsx(
                                                                    styles.item__price,
                                                                    styles.item__newPrice,
                                                                )}
                                                            >
                                                                $17.25
                                                            </div>
                                                            <div
                                                                className={clsx(
                                                                    styles.item__price,
                                                                    styles.item__oldPrice,
                                                                )}
                                                            >
                                                                <span>$17.25</span> -0%
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className={clsx(styles.item, 'col-2')}>
                                                    <div className={clsx(styles.item__image)}>
                                                        <img
                                                            src="/images/clothes/2-2-2-3.jpg"
                                                            className="img-fluid"
                                                            alt=""
                                                        />
                                                    </div>
                                                    <div className="px-3">
                                                        <div className={clsx(styles.item__name)}>
                                                            Lorem Ipsum is simply
                                                        </div>
                                                        <div className={clsx(styles.item__prices)}>
                                                            <div
                                                                className={clsx(
                                                                    styles.item__price,
                                                                    styles.item__newPrice,
                                                                )}
                                                            >
                                                                $17.25
                                                            </div>
                                                            <div
                                                                className={clsx(
                                                                    styles.item__price,
                                                                    styles.item__oldPrice,
                                                                )}
                                                            >
                                                                <span>$17.25</span> -0%
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className={clsx(styles.item, 'col-2')}>
                                                    <div className={clsx(styles.item__image)}>
                                                        <img
                                                            src="/images/clothes/2-2-2-3.jpg"
                                                            className="img-fluid"
                                                            alt=""
                                                        />
                                                    </div>
                                                    <div className="px-3">
                                                        <div className={clsx(styles.item__name)}>
                                                            Lorem Ipsum is simply
                                                        </div>
                                                        <div className={clsx(styles.item__prices)}>
                                                            <div
                                                                className={clsx(
                                                                    styles.item__price,
                                                                    styles.item__newPrice,
                                                                )}
                                                            >
                                                                $17.25
                                                            </div>
                                                            <div
                                                                className={clsx(
                                                                    styles.item__price,
                                                                    styles.item__oldPrice,
                                                                )}
                                                            >
                                                                <span>$17.25</span> -0%
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className={clsx(styles.item, 'col-2')}>
                                                    <div className={clsx(styles.item__image)}>
                                                        <img
                                                            src="/images/clothes/2-2-2-3.jpg"
                                                            className="img-fluid"
                                                            alt=""
                                                        />
                                                    </div>
                                                    <div className="px-3">
                                                        <div className={clsx(styles.item__name)}>
                                                            Lorem Ipsum is simply
                                                        </div>
                                                        <div className={clsx(styles.item__prices)}>
                                                            <div
                                                                className={clsx(
                                                                    styles.item__price,
                                                                    styles.item__newPrice,
                                                                )}
                                                            >
                                                                $17.25
                                                            </div>
                                                            <div
                                                                className={clsx(
                                                                    styles.item__price,
                                                                    styles.item__oldPrice,
                                                                )}
                                                            >
                                                                <span>$17.25</span> -0%
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className={clsx(styles.item, 'col-2')}>
                                                    <div className={clsx(styles.item__image)}>
                                                        <img
                                                            src="/images/clothes/2-2-2-3.jpg"
                                                            className="img-fluid"
                                                            alt=""
                                                        />
                                                    </div>
                                                    <div className="px-3">
                                                        <div className={clsx(styles.item__name)}>
                                                            Lorem Ipsum is simply
                                                        </div>
                                                        <div className={clsx(styles.item__prices)}>
                                                            <div
                                                                className={clsx(
                                                                    styles.item__price,
                                                                    styles.item__newPrice,
                                                                )}
                                                            >
                                                                $17.25
                                                            </div>
                                                            <div
                                                                className={clsx(
                                                                    styles.item__price,
                                                                    styles.item__oldPrice,
                                                                )}
                                                            >
                                                                <span>$17.25</span> -0%
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className={clsx(styles.item, 'col-2')}>
                                                    <div className={clsx(styles.item__image)}>
                                                        <img
                                                            src="/images/clothes/2-2-2-3.jpg"
                                                            className="img-fluid"
                                                            alt=""
                                                        />
                                                    </div>
                                                    <div className="px-3">
                                                        <div className={clsx(styles.item__name)}>
                                                            Lorem Ipsum is simply
                                                        </div>
                                                        <div className={clsx(styles.item__prices)}>
                                                            <div
                                                                className={clsx(
                                                                    styles.item__price,
                                                                    styles.item__newPrice,
                                                                )}
                                                            >
                                                                $17.25
                                                            </div>
                                                            <div
                                                                className={clsx(
                                                                    styles.item__price,
                                                                    styles.item__oldPrice,
                                                                )}
                                                            >
                                                                <span>$17.25</span> -0%
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                } else {
                                    return (
                                        <div className={clsx(styles.block)}>
                                            <div className={clsx(styles.title, styles.title3)}>
                                                <span>
                                                    <FontAwesomeIcon icon={faBoltLightning} />
                                                </span>
                                                Flash Sales
                                            </div>
                                            <div className={clsx(styles.block__items)}>
                                                <div className={clsx(styles.item, 'col-2')}>
                                                    <div className={clsx(styles.item__image)}>
                                                        <img
                                                            src="/images/clothes/2-2-2-3.jpg"
                                                            className="img-fluid"
                                                            alt=""
                                                        />
                                                    </div>
                                                    <div className="px-3">
                                                        <div className={clsx(styles.item__name)}>
                                                            Lorem Ipsum is simply
                                                        </div>
                                                        <div className={clsx(styles.item__prices)}>
                                                            <div
                                                                className={clsx(
                                                                    styles.item__price,
                                                                    styles.item__newPrice,
                                                                )}
                                                            >
                                                                $17.25
                                                            </div>
                                                            <div
                                                                className={clsx(
                                                                    styles.item__price,
                                                                    styles.item__oldPrice,
                                                                )}
                                                            >
                                                                <span>$17.25</span> -0%
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className={clsx(styles.item, 'col-2')}>
                                                    <div className={clsx(styles.item__image)}>
                                                        <img
                                                            src="/images/clothes/2-2-2-3.jpg"
                                                            className="img-fluid"
                                                            alt=""
                                                        />
                                                    </div>
                                                    <div className="px-3">
                                                        <div className={clsx(styles.item__name)}>
                                                            Lorem Ipsum is simply
                                                        </div>
                                                        <div className={clsx(styles.item__prices)}>
                                                            <div
                                                                className={clsx(
                                                                    styles.item__price,
                                                                    styles.item__newPrice,
                                                                )}
                                                            >
                                                                $17.25
                                                            </div>
                                                            <div
                                                                className={clsx(
                                                                    styles.item__price,
                                                                    styles.item__oldPrice,
                                                                )}
                                                            >
                                                                <span>$17.25</span> -0%
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className={clsx(styles.item, 'col-2')}>
                                                    <div className={clsx(styles.item__image)}>
                                                        <img
                                                            src="/images/clothes/2-2-2-3.jpg"
                                                            className="img-fluid"
                                                            alt=""
                                                        />
                                                    </div>
                                                    <div className="px-3">
                                                        <div className={clsx(styles.item__name)}>
                                                            Lorem Ipsum is simply
                                                        </div>
                                                        <div className={clsx(styles.item__prices)}>
                                                            <div
                                                                className={clsx(
                                                                    styles.item__price,
                                                                    styles.item__newPrice,
                                                                )}
                                                            >
                                                                $17.25
                                                            </div>
                                                            <div
                                                                className={clsx(
                                                                    styles.item__price,
                                                                    styles.item__oldPrice,
                                                                )}
                                                            >
                                                                <span>$17.25</span> -0%
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className={clsx(styles.item, 'col-2')}>
                                                    <div className={clsx(styles.item__image)}>
                                                        <img
                                                            src="/images/clothes/2-2-2-3.jpg"
                                                            className="img-fluid"
                                                            alt=""
                                                        />
                                                    </div>
                                                    <div className="px-3">
                                                        <div className={clsx(styles.item__name)}>
                                                            Lorem Ipsum is simply
                                                        </div>
                                                        <div className={clsx(styles.item__prices)}>
                                                            <div
                                                                className={clsx(
                                                                    styles.item__price,
                                                                    styles.item__newPrice,
                                                                )}
                                                            >
                                                                $17.25
                                                            </div>
                                                            <div
                                                                className={clsx(
                                                                    styles.item__price,
                                                                    styles.item__oldPrice,
                                                                )}
                                                            >
                                                                <span>$17.25</span> -0%
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className={clsx(styles.item, 'col-2')}>
                                                    <div className={clsx(styles.item__image)}>
                                                        <img
                                                            src="/images/clothes/2-2-2-3.jpg"
                                                            className="img-fluid"
                                                            alt=""
                                                        />
                                                    </div>
                                                    <div className="px-3">
                                                        <div className={clsx(styles.item__name)}>
                                                            Lorem Ipsum is simply
                                                        </div>
                                                        <div className={clsx(styles.item__prices)}>
                                                            <div
                                                                className={clsx(
                                                                    styles.item__price,
                                                                    styles.item__newPrice,
                                                                )}
                                                            >
                                                                $17.25
                                                            </div>
                                                            <div
                                                                className={clsx(
                                                                    styles.item__price,
                                                                    styles.item__oldPrice,
                                                                )}
                                                            >
                                                                <span>$17.25</span> -0%
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className={clsx(styles.item, 'col-2')}>
                                                    <div className={clsx(styles.item__image)}>
                                                        <img
                                                            src="/images/clothes/2-2-2-3.jpg"
                                                            className="img-fluid"
                                                            alt=""
                                                        />
                                                    </div>
                                                    <div className="px-3">
                                                        <div className={clsx(styles.item__name)}>
                                                            Lorem Ipsum is simply
                                                        </div>
                                                        <div className={clsx(styles.item__prices)}>
                                                            <div
                                                                className={clsx(
                                                                    styles.item__price,
                                                                    styles.item__newPrice,
                                                                )}
                                                            >
                                                                $17.25
                                                            </div>
                                                            <div
                                                                className={clsx(
                                                                    styles.item__price,
                                                                    styles.item__oldPrice,
                                                                )}
                                                            >
                                                                <span>$17.25</span> -0%
                                                            </div>
                                                        </div>
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
