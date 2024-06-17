import clsx from 'clsx';
import styles from './update.module.scss';
import { useEffect, useState } from 'react';
import { checkAuth, updateEmail } from '~/api/users';

const { default: SettingComponent } = require('~/components/Setting');

const MainChild = () => {
    const [text, setText] = useState('');
    const [userID, setUserID] = useState('');

    const handleSubmit = async () => {
        const res = await updateEmail({ id: userID, email: text });

        if (res.code === 200) {
            var session = localStorage.getItem('session');
            if (session) {
                session = JSON.parse(session);
                session['user']['email'] = text;
                localStorage.setItem('session', JSON.stringify(session));
            }
            window.location.href = '/users/edit';
        }
    };

    useEffect(() => {
        (async () => {
            var session = localStorage.getItem('session');
            if (session) {
                session = JSON.parse(session);
                const authen = await checkAuth(session.accessToken);
                if (authen.login === true) {
                    setText(session.user.email);
                    setUserID(session.user.id);
                }
            }
        })();
    }, []);

    return (
        <div className={clsx(styles.update)}>
            <div className={clsx(styles.update__title)}>Update Email</div>
            <div className={clsx(styles.update__body)}>
                <div className="mb-4">
                    <label for="exampleFormControlInput1" className={clsx('form-label', styles.formLabel)}>
                        Email
                    </label>
                    <input
                        type="email"
                        className={clsx('form-control', styles.formControl)}
                        id="exampleFormControlInput1"
                        placeholder="nguyenvana@gmail.com"
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                    />
                </div>
                <a href="/users/edit">
                    <div className={clsx(styles.update__btn__back)}>Back</div>
                </a>
                <div className="mt-2 mb-3">
                    <div className={clsx(styles.update__btn)} onClick={handleSubmit}>
                        Save changes
                    </div>
                </div>
            </div>
        </div>
    );
};

function EditEmail() {
    return <SettingComponent state="edit_profile" mainChild={<MainChild />} />;
}

export default EditEmail;
