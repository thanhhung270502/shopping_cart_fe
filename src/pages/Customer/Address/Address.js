import clsx from 'clsx';
import styles from './address.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { faCircleCheck } from '@fortawesome/free-regular-svg-icons';
import { useEffect, useState } from 'react';
import { checkAuth } from '~/api/users';
import {
    deleteAddress,
    getAddressDefaultByUserID,
    getAllAddressByUserID,
    updateAddressDefault,
} from '~/api/addresses';

const { default: SettingComponent } = require('~/components/Setting');

const MainChild = () => {
    const [addresses, setAddresses] = useState([]);
    const [address, setAddress] = useState({ address_id: '' });

    const convertAddress = (_address) => {
        return (
            _address.address_detail +
            ', ' +
            _address.ward_name +
            ', ' +
            _address.district_name +
            ', ' +
            _address.province_name
        );
    };

    const handleSetDefault = async (address_id) => {
        const response = await updateAddressDefault({ address_id });
        if (response.code === 200) {
            window.location.href = '/customer/address';
        }
    };

    const handleDeleteAddress = async (address_id) => {
        const response = await deleteAddress(address_id);
        if (response.code === 200) {
            window.location.href = '/customer/address';
        }
    };

    useEffect(() => {
        (async () => {
            const response = await getAllAddressByUserID();
            if (response.code === 200) {
                setAddresses(response.body);
            }

            const fetchAddress = await getAddressDefaultByUserID();
            if (fetchAddress.code === 200) {
                if (fetchAddress.body.length > 0) {
                    setAddress(fetchAddress.body[0]);
                }
            }
        })();
    }, []);

    return (
        <div className={clsx(styles.address)}>
            <div className={clsx(styles.address__title)}>Addresses</div>
            <div className={clsx(styles.address__body)}>
                <Link className={clsx(styles.address__block__header)} to="/customer/address/create">
                    <div className={clsx(styles.address__block__icon)}>
                        <FontAwesomeIcon icon={faPlus} />
                    </div>
                    <div className={clsx(styles.address__block__text)}>Add a new address</div>
                </Link>
                {addresses.map((_address, index) => {
                    return (
                        <div className={clsx(styles.address__block)}>
                            <div className={clsx(styles.address__block__info)}>
                                <div className={clsx('d-flex align-items-center pb-2')}>
                                    <div className={styles.info__name}>{_address.user_name}</div>
                                    {_address.id === address.address_id && (
                                        <div className={clsx(styles.info__default)}>
                                            <span>
                                                <FontAwesomeIcon icon={faCircleCheck} />
                                            </span>
                                            Address Default
                                        </div>
                                    )}
                                </div>
                                <div className={clsx(styles.info__address)}>
                                    <span>Address: </span>
                                    {convertAddress(_address)}
                                </div>
                                <div className={clsx(styles.info__phone)}>
                                    <span>Phone: </span>
                                    {_address.phone_number}
                                </div>
                            </div>
                            <div className={clsx(styles.address__block__settings)}>
                                {_address.id !== address.address_id && (
                                    <div
                                        className={clsx(
                                            styles.setting__item,
                                            styles.setting__default,
                                        )}
                                        onClick={() => handleSetDefault(_address.id)}
                                    >
                                        Set Default
                                    </div>
                                )}
                                <Link
                                    className={clsx(styles.setting__item, styles.setting__edit)}
                                    to={`/customer/address/edit/${_address.id}`}
                                >
                                    Edit
                                </Link>
                                <div
                                    className={clsx(styles.setting__item, styles.setting__delete)}
                                    onClick={() => handleDeleteAddress(_address.id)}
                                >
                                    Delete
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

function Address() {
    return <SettingComponent state="address" mainChild={<MainChild />} />;
}

export default Address;
