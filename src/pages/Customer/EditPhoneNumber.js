import clsx from 'clsx';
import styles from './update.module.scss';
import { useEffect, useState } from 'react';
import { checkAuth, updatePhone } from '~/api/users';

const { default: SettingComponent } = require('~/components/Setting');

const MainChild = () => {
    const [phone_number, setPhoneNumber] = useState('');
    const [userID, setUserID] = useState('');

    const handleSubmit = async () => {
        const res = await updatePhone({ id: userID, phone_number });

        if (res.code === 200) {
            var session = localStorage.getItem('session');
            if (session) {
                session = JSON.parse(session);
                session['user']['phone_number'] = phone_number;
                localStorage.setItem('session', JSON.stringify(session));
            }
            window.location.href = '/customer/edit';
        }
    };

    useEffect(() => {
        (async () => {
            var session = localStorage.getItem('session');
            if (session) {
                session = JSON.parse(session);
                const authen = await checkAuth(session.accessToken);
                if (authen.login === true) {
                    setPhoneNumber(session.user.phone_number);
                    setUserID(session.user.id);
                }
            }
        })();
    }, []);

    return (
        <div className={clsx(styles.update)}>
            <div className={clsx(styles.update__title)}>Update Phone Number</div>
            <div className={clsx(styles.update__body)}>
                <div className="mb-4">
                    <label for="exampleFormControlInput1" className={clsx('form-label', styles.formLabel)}>
                        Phone Number
                    </label>
                    <input
                        type="text"
                        className={clsx('form-control', styles.formControl)}
                        id="exampleFormControlInput1"
                        placeholder="Nguyen Van A"
                        value={phone_number}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                    />
                </div>
                <a href="/customer/edit">
                    <div className={clsx(styles.update__btn__back)}>Back</div>
                </a>
                <div className="mt-2 mb-3" onClick={handleSubmit}>
                    <div className={clsx(styles.update__btn)}>Save changes</div>
                </div>
            </div>
        </div>
    );
};

function EditPhoneNumber() {
    return <SettingComponent state="edit_profile" mainChild={<MainChild />} />;
}

export default EditPhoneNumber;
