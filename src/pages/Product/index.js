import clsx from 'clsx';
import styles from './product.module.scss';
import BreadCrumb from '~/components/Breadcrumb';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useSearchParams } from 'react-router-dom';
import { useState } from 'react';
import { faCheck, faMinus, faPlus, faStar } from '@fortawesome/free-solid-svg-icons';

const colors = ['Black', 'White', 'Red', 'Orange', 'Yellow', 'Green', 'Blue', 'Pink', 'Purple'];
const sizes = ['S', 'M', 'L', 'XL', 'XLL', 'XLLL'];

function Product() {
    const [params, setParams] = useSearchParams();
    const search = typeof params.get('search') === 'string' ? params.get('search') : undefined;

    const [_size, setSize] = useState('');
    const [_color, setColor] = useState('');
    const [_search, setSearch] = useState('');
    const [_quantity, setQuantity] = useState(0);

    const handleChangeSize = (newSize) => {
        setSize(newSize);
    };

    const handleChangeColor = (newColor) => {
        setColor(newColor);
    };

    const handleChangeQuantity = (newQuantity) => {
        if (newQuantity < 0) setQuantity(0);
        else {
            setQuantity(newQuantity);
        }
    };

    return (
        <div className={clsx(styles.product)}>
            <div className={clsx('container')}>
                <div className={clsx(styles.inner)}>
                    <BreadCrumb items={['Home', 'Products', 'Lorem Ipsum']} links={['/', '/products']} />
                    <div className={clsx('d-flex', 'align-items-start', 'pt-4')}>
                        <div className="col-12 col-lg-5">
                            <div className={clsx(styles.leftSite)}>
                                <div className={clsx(styles.mainImage)}>
                                    <img src="/images/clothes/2-2-4-1.jpg" className="img__fluid" alt="" />
                                    <div className={clsx(styles.bonus)}>Free Delivery</div>
                                </div>
                                <div className={clsx(styles.optionsImage)}>
                                    <div className={clsx('col-3')}>
                                        <div className={clsx(styles.option__image)}>
                                            <img src="/images/clothes/2-2-4-1.jpg" className="img__fluid" alt="" />
                                        </div>
                                    </div>
                                    <div className={clsx('col-3')}>
                                        <div className={clsx(styles.option__image)}>
                                            <img src="/images/clothes/2-2-4-2.jpg" className="img__fluid" alt="" />
                                        </div>
                                    </div>
                                    <div className={clsx('col-3')}>
                                        <div className={clsx(styles.option__image)}>
                                            <img src="/images/clothes/2-2-4-3.jpg" className="img__fluid" alt="" />
                                        </div>
                                    </div>
                                    <div className={clsx('col-3')}>
                                        <div className={clsx(styles.option__image)}>
                                            <img src="/images/sizes.png" className="img__fluid" alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <div className={clsx(styles.rightSite)}>
                                <div className={clsx(styles.preview__name)}>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry
                                </div>
                                <div className={clsx(styles.preview__reviews)}>
                                    <div className={clsx(styles.preview__reviews__icon)}>
                                        <FontAwesomeIcon icon={faStar} />
                                    </div>
                                    <div className={clsx(styles.preview_reviews__text)}>4.8 (511 Review)</div>
                                </div>
                                <div className={clsx(styles.preview__description)}>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                                    Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                                    unknown printer took a galley of type and scrambled it to make a type specimen book.
                                    It has survived not only five centuries, but also the leap into electronic
                                    typesetting, remaining essentially unchanged. It was popularised in the 1960s with
                                    the release of Letraset sheets containing Lorem Ipsum passages, and more recently
                                    with desktop publishing software like Aldus PageMaker including versions of Lorem
                                    Ipsum.
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
                                                                _color === color &&
                                                                styles.preview__colors__color__tick__active
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
                                <div className={clsx(styles.preview__quantity)}>
                                    <div className={clsx(styles.preview__quantity__label)}>Quantity: </div>
                                    <div className={clsx(styles.preview__quantity__adjust)}>
                                        <div
                                            className={clsx(
                                                styles.preview__quantity__btn,
                                                styles.preview__quantity__minus,
                                            )}
                                            onClick={() => handleChangeQuantity(parseInt(_quantity) - 1)}
                                        >
                                            <FontAwesomeIcon icon={faMinus} />
                                        </div>
                                        <input
                                            type="text"
                                            className={clsx(
                                                styles.preview__quantity__btn,
                                                styles.preview__quantity__num,
                                            )}
                                            value={_quantity}
                                            onChange={(event) => handleChangeQuantity(event.target.value)}
                                        />
                                        <div
                                            className={clsx(
                                                styles.preview__quantity__btn,
                                                styles.preview__quantity__plus,
                                            )}
                                            onClick={() => handleChangeQuantity(parseInt(_quantity) + 1)}
                                        >
                                            <FontAwesomeIcon icon={faPlus} />
                                        </div>
                                    </div>
                                    <div className={clsx(styles.preview__quantity__remain)}>20 pieces available</div>
                                </div>
                                <div className="d-flex align-items-center">
                                    <div className={clsx(styles.preview__btn, styles.preview__btnAdd)}>Add To Cart</div>
                                    <div className={clsx(styles.preview__btn, styles.preview__btnBuy)}>Buy Now</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={clsx(styles.reviews)}>
                        <div className="d-flex align-items-center justify-content-between">
                            <div className={clsx(styles.reviews__title)}>Reviews & Rating</div>
                            <a href="./" className={clsx(styles.reviews__link)}>
                                View All Reviews
                            </a>
                        </div>
                        {sizes.map(() => {
                            return (
                                <div className={clsx(styles.reviews__block)}>
                                    <div className={clsx(styles.header)}>
                                        <div className={clsx(styles.user)}>
                                            <div className={clsx(styles.user__image)}>
                                                <img src="/images/kim1.png" className="img__fluid" alt="" />
                                            </div>
                                            <div className={clsx(styles.user__nT)}>
                                                <div className={clsx(styles.user__name)}>Kim Ji-Won</div>
                                                <div className={clsx(styles.user__time)}>May 27, 2024</div>
                                            </div>
                                        </div>
                                        <div className={clsx(styles.rating)}>
                                            <span>
                                                <FontAwesomeIcon icon={faStar} />
                                            </span>
                                            4.9
                                        </div>
                                    </div>
                                    <div className={clsx(styles.body)}>
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                                        Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                                        unknown printer took a galley of type and scrambled it to make a type specimen
                                        book. It has survived not only five centuries, but also the leap into electronic
                                        typesetting, remaining essentially unchanged. It was popularised in the 1960s
                                        with the release of Letraset sheets containing Lorem Ipsum passages, and more
                                        recently with desktop publishing software like Aldus PageMaker including
                                        versions of Lorem Ipsum.
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Product;
