import clsx from 'clsx';
import styles from './update.module.scss';
import { useEffect, useState } from 'react';
import { checkAuth, updatePassword } from '~/api/users';

const { default: SettingComponent } = require('~/components/Setting');

const MainChild = () => {
    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmNewPassword, setConfirmNewPassword] = useState('');
    const [userID, setUserID] = useState('');

    const handleSubmit = async () => {
        if (newPassword !== confirmNewPassword) {
            // handle Errors
            return;
        }
        const res = await updatePassword({ id: userID, oldPassword, newPassword });

        if (res.code === 200) {
            window.location.href = '/customer/edit';
        }
    };

    return (
        <div className={clsx(styles.update)}>
            <div className={clsx(styles.update__title)}>Update Password</div>
            <div className={clsx(styles.update__body)}>
                <div className="mb-2">
                    <label for="exampleFormControlInput1" className={clsx('form-label', styles.formLabel)}>
                        Old Password
                    </label>
                    <input
                        type="password"
                        className={clsx('form-control', styles.formControl)}
                        id="exampleFormControlInput1"
                        value={oldPassword}
                        onChange={(e) => setOldPassword(e.target.value)}
                    />
                </div>
                <div className="mb-2">
                    <label for="exampleFormControlInput1" className={clsx('form-label', styles.formLabel)}>
                        New Password
                    </label>
                    <input
                        type="password"
                        className={clsx('form-control', styles.formControl)}
                        id="exampleFormControlInput1"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                    />
                </div>
                <div className="mb-4">
                    <label for="exampleFormControlInput1" className={clsx('form-label', styles.formLabel)}>
                        Confirm New Password
                    </label>
                    <input
                        type="password"
                        className={clsx('form-control', styles.formControl)}
                        id="exampleFormControlInput1"
                        value={confirmNewPassword}
                        onChange={(e) => setConfirmNewPassword(e.target.value)}
                    />
                </div>
                <a href="/customer/edit">
                    <div className={clsx(styles.update__btn__back)}>Back</div>
                </a>
                <div className="mt-2 mb-3">
                    <div className={clsx(styles.update__btn)}>Save changes</div>
                </div>
            </div>
        </div>
    );
};

function UpdatePassword() {
    return <SettingComponent state="edit_profile" mainChild={<MainChild />} />;
}

export default UpdatePassword;
