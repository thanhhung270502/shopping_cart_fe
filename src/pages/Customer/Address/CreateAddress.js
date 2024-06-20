import clsx from 'clsx';
import styles from './address.module.scss';
import { useEffect, useState } from 'react';
import { checkAuth } from '~/api/users';
import {
    createAddress,
    getAllDistrictsByProvinceCode,
    getAllProvinces,
    getAllWardsByDistrictCode,
} from '~/api/addresses';

const { default: SettingComponent } = require('~/components/Setting');

const MainChild = () => {
    const [user_id, setUserID] = useState('');
    const [name, setName] = useState('');
    const [phone_number, setPhoneNumber] = useState('');
    const [provinces, setProvinces] = useState([]);
    const [province, setProvince] = useState('');
    const [districts, setDistricts] = useState([]);
    const [district, setDistrict] = useState('');
    const [wards, setWards] = useState([]);
    const [ward, setWard] = useState('');
    const [address_detail, setAddressDetail] = useState('');
    const [isDefault, setIsDefault] = useState(false);

    const handleSubmit = async () => {
        if (!name || !phone_number || !province || !district || !ward || !address_detail) {
            return;
        }

        console.log('Here');

        const response = await createAddress({
            user_id,
            name,
            phone_number,
            province_code: province,
            district_code: district,
            ward_code: ward,
            address_detail,
            isDefault,
        });

        if (response.code === 201) {
            window.location.href = '/customer/address';
        }
    };

    useEffect(() => {
        (async () => {
            var session = localStorage.getItem('session');
            if (session) {
                session = JSON.parse(session);
                const authen = await checkAuth(session.accessToken);
                if (authen.login === true) {
                    setUserID(session.user.id);
                    setName(session.user.name);
                    setPhoneNumber(session.user.phone_number);
                }
            }

            const fetchProvinces = await getAllProvinces();
            if (fetchProvinces.code === 200) {
                setProvinces(fetchProvinces.provinces);
            }
        })();
    }, []);

    useEffect(() => {
        (async () => {
            const fetchDistrict = await getAllDistrictsByProvinceCode(province);
            if (fetchDistrict.code === 200) {
                console.log(fetchDistrict);
                setDistricts(fetchDistrict.districts);
            }
        })();
    }, [province]);

    useEffect(() => {
        (async () => {
            const fetchWards = await getAllWardsByDistrictCode(district);
            if (fetchWards.code === 200) {
                setWards(fetchWards.wards);
            }
        })();
    }, [district]);

    return (
        <div className={clsx(styles.createAddress)}>
            <div className={clsx(styles.createAddress__title)}>Create A New Address</div>
            <div className={clsx(styles.createAddress__body)}>
                <div className={clsx('d-flex align-items-center')}>
                    <div className="col-6 pe-3">
                        <div className="mb-3">
                            <label for="exampleFormControlInput1" className="form-label">
                                Full Name
                            </label>
                            <input
                                type="text"
                                className={clsx('form-control', styles.formControl)}
                                id="exampleFormControlInput1"
                                placeholder="Nguyen Van A"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="col-6 ps-3">
                        <div className="mb-3">
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
                <div className="mb-3">
                    <label
                        for="exampleFormControlInput1"
                        className={clsx('form-label', styles.formLabel)}
                    >
                        Province
                    </label>
                    <select
                        className={clsx('form-select', styles.formControl)}
                        aria-label="Default select example"
                        value={province}
                        onChange={(e) => {
                            setProvince(e.target.value);
                            setWards([]);
                            setWard('');
                        }}
                    >
                        <option value="">Choose province...</option>
                        {provinces.map((_province, i) => {
                            return <option value={_province.code}>{_province.full_name}</option>;
                        })}
                    </select>
                </div>
                <div className="mb-3">
                    <label
                        for="exampleFormControlInput1"
                        className={clsx('form-label', styles.formLabel)}
                    >
                        District
                    </label>
                    <select
                        className={clsx('form-select', styles.formControl)}
                        aria-label="Default select example"
                        value={district}
                        onChange={(e) => setDistrict(e.target.value)}
                    >
                        <option value="">Choose distrcit...</option>
                        {districts.map((_district, i) => {
                            return <option value={_district.code}>{_district.full_name}</option>;
                        })}
                    </select>
                </div>
                <div className="mb-3">
                    <label
                        for="exampleFormControlInput1"
                        className={clsx('form-label', styles.formLabel)}
                    >
                        Wards
                    </label>
                    <select
                        className={clsx('form-select', styles.formControl)}
                        aria-label="Default select example"
                        value={ward}
                        onChange={(e) => setWard(e.target.value)}
                    >
                        <option value="">Choose ward...</option>
                        {wards.map((_ward, i) => {
                            return <option value={_ward.code}>{_ward.full_name}</option>;
                        })}
                    </select>
                </div>
                <div className="mb-3">
                    <label for="exampleFormControlTextarea1" className="form-label">
                        Address Detail
                    </label>
                    <textarea
                        className={clsx('form-control', styles.formControl)}
                        id="exampleFormControlTextarea1"
                        rows="3"
                        value={address_detail}
                        onChange={(e) => setAddressDetail(e.target.value)}
                    ></textarea>
                </div>
                <div className="form-check mb-3">
                    <input
                        className={clsx('form-check-input', styles.formCheckInput)}
                        type="checkbox"
                        checked={isDefault}
                        onChange={() => setIsDefault(!isDefault)}
                    />
                    <label className="form-check-label" for="flexCheckDefault">
                        Set Default?
                    </label>
                </div>
                <div className={clsx(styles.createAddress__btn)} onClick={handleSubmit}>
                    Create
                </div>
            </div>
        </div>
    );
};

function CreateAddress() {
    return <SettingComponent state="address" mainChild={<MainChild />} />;
}

export default CreateAddress;
