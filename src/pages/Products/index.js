import clsx from 'clsx';
import styles from './products.module.scss';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faCircleXmark, faMagnifyingGlass, faStar } from '@fortawesome/free-solid-svg-icons';
import { useSearchParams } from 'react-router-dom';

const categories = ['Shirt', 'T-shirt', 'Polo', 'Sweeter', 'Jacket', 'Hoddie', 'Trouser', 'Jean'];
const colors = ['Black', 'White', 'Red', 'Orange', 'Yellow', 'Green', 'Blue', 'Pink', 'Purple'];
const sizes = ['S', 'M', 'L', 'XL', 'XLL', 'XLLL'];

function Products() {
    // const [] = useState()
    const [params, setParams] = useSearchParams();
    const search = typeof params.get('search') === 'string' ? params.get('search') : undefined;

    const [_size, setSize] = useState('');
    const [_color, setColor] = useState('');
    const [_search, setSearch] = useState('peak');

    const handleChangeSize = (newSize) => {
        setSize(newSize);
    };

    const handleChangeColor = (newColor) => {
        setColor(newColor);
    };

    const handleChangeSearch = (event) => {
        setSearch(event.target.value);
    };

    return (
        <div className={clsx(styles.products)}>
            <div className="d-flex align-items-start">
                <div className="col-2">
                    <div className={clsx(styles.leftSite)}>
                        <div className={clsx(styles.block)}>
                            <div className={clsx(styles.title)}>Categories</div>
                            <div className={clsx(styles.options)}>
                                {categories.map((category, index) => {
                                    return (
                                        <div class={clsx('form-check', styles.formCheck)}>
                                            <input
                                                class={clsx('form-check-input', styles.formCheckInput)}
                                                type="checkbox"
                                                value=""
                                                id="flexCheckDefault"
                                            />
                                            <label class="form-check-label" for="flexCheckDefault">
                                                {category}
                                            </label>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                        <div className={clsx(styles.block)}>
                            <div className={clsx(styles.title)}>Colors</div>
                            <div className={clsx(styles.options)}>
                                {colors.map((color, index) => {
                                    return (
                                        <div class={clsx('form-check', styles.formCheck)}>
                                            <input
                                                class={clsx('form-check-input', styles.formCheckInput)}
                                                type="checkbox"
                                                value=""
                                                id="flexCheckDefault"
                                            />
                                            <label class="form-check-label" for="flexCheckDefault">
                                                {color}
                                            </label>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-7">
                    <div className={clsx(styles.mainSite)}>
                        {_search && (
                            <div className={clsx(styles.search)}>
                                Search results for <span>"{_search}"</span>
                            </div>
                        )}
                        <div className={clsx(styles.optionsBar)}>
                            <div className={clsx(styles.block, styles.block__active)}>All Products</div>
                            <div className={clsx(styles.block)}>Popular</div>
                            <div className={clsx(styles.block)}>Latest</div>
                            <div className={clsx(styles.block)}>Best Selling</div>
                            <div className={clsx(styles.block)}>Discount</div>
                        </div>
                        <div className={clsx('row', 'py-4')}>
                            {colors.map(() => {
                                return (
                                    <div className={clsx(styles.product)}>
                                        <div className={clsx(styles.product__inner)}>
                                            <div className={clsx(styles.product__image)}>
                                                <img src="/images/clothes/2-2-2-3.jpg" className="img-fluid" alt="" />
                                            </div>
                                            <div className={clsx(styles.product__name)}>Lorem Ipsum is simply</div>
                                            <div className={clsx(styles.product__reviews)}>
                                                <div className={clsx(styles.product__reviews__icon)}>
                                                    <FontAwesomeIcon icon={faStar} />
                                                </div>
                                                <div className={clsx(styles.product_reviews__text)}>
                                                    4.8 (511 Review)
                                                </div>
                                            </div>
                                            <div className={clsx(styles.product__prices)}>
                                                <div className={clsx(styles.product__price, styles.product__oldPrice)}>
                                                    $17.25
                                                </div>
                                                <div className={clsx(styles.product__price, styles.product__newPrice)}>
                                                    $15.25
                                                </div>
                                            </div>
                                            <a className={clsx(styles.product__btnBuy)} href="/products/1">
                                                Preview
                                            </a>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
                <div className="col-3">
                    <div className={clsx(styles.rightSite)}>
                        <div className={clsx(styles.title)}>Previews</div>
                        <div className={clsx(styles.preview__image)}>
                            <img src="/images/clothes/2-2-2-3.jpg" className="img-fluid" alt="" />
                        </div>
                        <div className={clsx(styles.preview__name)}>Lorem Ipsum is simply</div>
                        <div className={clsx(styles.preview__reviews)}>
                            <div className={clsx(styles.preview__reviews__icon)}>
                                <FontAwesomeIcon icon={faStar} />
                            </div>
                            <div className={clsx(styles.preview_reviews__text)}>4.8 (511 Review)</div>
                        </div>
                        <div className={clsx(styles.preview__prices)}>
                            <div className={clsx(styles.preview__price, styles.preview__oldPrice)}>$17.25</div>
                            <div className={clsx(styles.preview__price, styles.preview__newPrice)}>$15.25</div>
                        </div>
                        <div className={clsx(styles.preview__sizes)}>
                            <div className={clsx(styles.preview__sizes__label)}>Size</div>
                            <div className="d-flex align-items-center">
                                {sizes.map((size, i) => {
                                    return (
                                        <div
                                            className={clsx(
                                                styles.preview__sizes__size,
                                                `${_size === size && styles.preview__sizes__size__active}`,
                                            )}
                                            onClick={() => handleChangeSize(size)}
                                        >
                                            {size}
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                        <div className={clsx(styles.preview__colors)}>
                            <div className={clsx(styles.preview__colors__label)}>Color</div>
                            <div className={clsx(styles.preview__colors__options)}>
                                {colors.map((color, i) => {
                                    return (
                                        <div
                                            className={clsx(
                                                styles.preview__colors__color,
                                                `${color.toLowerCase()}`,
                                                `${_color === color && styles.preview__colors__color__active}`,
                                            )}
                                            onClick={() => handleChangeColor(color)}
                                        >
                                            <div
                                                className={clsx(
                                                    styles.preview__colors__color__tick,
                                                    `${
                                                        _color === color && styles.preview__colors__color__tick__active
                                                    }`,
                                                )}
                                            >
                                                <FontAwesomeIcon icon={faCheck} />
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                        <a className={clsx(styles.preview__btnBuy)} href="/products/1">
                            Buy Now
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Products;
