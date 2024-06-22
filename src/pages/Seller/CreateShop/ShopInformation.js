import clsx from 'clsx';
import styles from './createShop.module.scss';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamation } from '@fortawesome/free-solid-svg-icons';

const { default: CreateShopComponent } = require('~/components/Shop/CreateShop');

const MainChild = () => {
    const [name, setName] = useState('');
    const [short_name, setShortName] = useState('');
    const [phone_number, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');

    return (
        <div className={clsx(styles.inner)}>
            <div className={clsx(styles.form)}>
                <div className="col col-12 col-lg-6 pe-3">
                    <div className="mb-4">
                        <label for="exampleFormControlInput1" className="form-label">
                            Full Name - Shop <span>*</span>
                        </label>
                        <input
                            type="text"
                            className={clsx('form-control', styles.formControl)}
                            id="exampleFormControlInput1"
                            placeholder="HoLuon Fashionality Official"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                </div>
                <div className="col col-12 col-lg-6 ps-3">
                    <div className="mb-4">
                        <label for="exampleFormControlInput1" className="form-label">
                            Short Name - Shop *
                        </label>
                        <input
                            type="text"
                            className={clsx('form-control', styles.formControl)}
                            id="exampleFormControlInput2"
                            placeholder="HoLuon"
                            value={short_name}
                            onChange={(e) => setShortName(e.target.value)}
                        />
                    </div>
                </div>
                <div className="col col-12 col-lg-6 pe-3">
                    <div className="mb-4">
                        <label for="exampleFormControlInput1" className="form-label">
                            Email
                        </label>
                        <input
                            type="text"
                            className={clsx('form-control', styles.formControl)}
                            id="exampleFormControlInput1"
                            placeholder="shop.holuon@gmail.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                </div>
                <div className="col col-12 col-lg-6 ps-3">
                    <div className="mb-4">
                        <label for="exampleFormControlInput1" className="form-label">
                            Phone Number
                        </label>
                        <input
                            type="text"
                            className={clsx('form-control', styles.formControl)}
                            id="exampleFormControlInput2"
                            placeholder="0923xxxxxx"
                            value={phone_number}
                            onChange={(e) => setPhoneNumber(e.target.value)}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

const ShopInformation = () => {
    return <CreateShopComponent state="information" mainChild={<MainChild />} />;
};

export default ShopInformation;
