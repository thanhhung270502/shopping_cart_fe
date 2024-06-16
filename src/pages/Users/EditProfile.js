import { clsx } from 'clsx';
import styles from './edit_profile.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faClipboard,
    faCloudArrowUp,
    faEnvelope,
    faImage,
    faLock,
    faPhone,
    faShield,
    faTrash,
    faUser,
} from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import { checkAuth } from '~/api/users';
import DateTimePicker from 'react-datetime-picker';
import 'react-datetime-picker/dist/DateTimePicker.css';
import 'react-calendar/dist/Calendar.css';
import 'react-clock/dist/Clock.css';

const { default: SettingComponent } = require('~/components/Setting');

const MainChild = () => {
    const [currentUser, setCurrentUser] = useState();
    const [imgSrc, setImgSrc] = useState('/images/kim.png');
    const [name, setName] = useState('');
    const [gender, setGender] = useState('male');
    const [birth, setBirth] = useState();

    const handleChangeImageByUpload = (event) => {
        let file = event.target.files[0];
        setImgSrc(URL.createObjectURL(file));
        let reader = new FileReader();

        reader.onload = () => {
            let base64String = reader.result.replace('data:', '').replace(/^.+,/, '');
            console.log(base64String);
        };

        reader.readAsDataURL(file);
    };

    useEffect(() => {
        (async () => {
            var session = localStorage.getItem('session');
            if (session) {
                session = JSON.parse(session);
                const authen = await checkAuth(session.accessToken);
                if (authen.login === true) {
                    setCurrentUser(session.user);
                    setName(session.user.name);
                }
            } else {
                // const userGoogle = await getUserGoogle();
                // console.log(userGoogle);
                // if (userGoogle.code === 200) {
                //     session = {
                //         accessToken: userGoogle.body.body.accessToken,
                //         user: userGoogle.body.body.user,
                //     };
                //     localStorage.setItem('session', JSON.stringify(session));
                //     await logoutGoogle();
                //     window.location.href = '../';
                // }
            }
        })();
    }, []);

    return (
        <div className={clsx(styles.editProfile)}>
            <div className={clsx(styles.editProfile__header)}>
                <div>
                    <div className={clsx(styles.editProfile__header__title)}>My Profile</div>
                    <div className={clsx(styles.editProfile__header__time)}>
                        <span>Last edit on </span>
                        12 Febuary 2024
                    </div>
                </div>
                <div className="d-flex align-items-center">
                    <div className={clsx(styles.editProfile__header__btn, styles.editProfile__header__btn_outline)}>
                        Discard
                    </div>
                    <div
                        className={clsx(styles.editProfile__header__btn, styles.editProfile__header__btn_full, 'ms-2')}
                    >
                        Save
                    </div>
                </div>
            </div>
            <div className={clsx(styles.editProfile__body)}>
                <div className="col-7 pe-3">
                    <div className={clsx(styles.block)}>
                        <div className={clsx(styles.block__title)}>
                            <div className={clsx(styles.block__title__icon)}>
                                <FontAwesomeIcon icon={faImage} />
                            </div>
                            Profile Picture
                        </div>
                        <div className={clsx('d-flex align-items-center')}>
                            <div className={clsx(styles.user__avatar)}>
                                <img src={imgSrc} alt="avatar" className="img__fluid" />
                            </div>
                            <div className={clsx(styles.optionsImage)}>
                                <div className="mb-3">
                                    <input
                                        type="file"
                                        className="form-control"
                                        id="inputGroupFile01"
                                        onChange={handleChangeImageByUpload}
                                    />
                                </div>
                                <div className="input-group mb-3">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Image URL"
                                        aria-label="Recipient's username"
                                        aria-describedby="button-addon2"
                                    />
                                    <button className="btn btn-outline-danger" type="button" id="button-addon2">
                                        Preview
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={clsx(styles.block)}>
                        <div className={clsx(styles.block__title)}>
                            <div className={clsx(styles.block__title__icon)}>
                                <FontAwesomeIcon icon={faUser} />
                            </div>
                            Personal Information
                        </div>
                        <div className={clsx(styles.block__body)}>
                            <div className="mb-4">
                                <label for="exampleFormControlInput1" className={clsx('form-label', styles.formLabel)}>
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
                            <div className="mb-4">
                                <label for="exampleFormControlInput1" className={clsx('form-label', styles.formLabel)}>
                                    Gender
                                </label>
                                <select
                                    class={clsx('form-select', styles.formControl)}
                                    aria-label="Default select example"
                                    value={gender}
                                    onChange={(e) => setGender(e.target.value)}
                                >
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>
                            <div className="mb-4">
                                <label for="exampleFormControlInput1" className={clsx('form-label', styles.formLabel)}>
                                    Birth
                                </label>
                                <DateTimePicker onChange={setBirth} value={birth} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className={clsx('col-5', 'ps-4', styles.editProfile__border__left)}>
                    <div className={clsx(styles.block)}>
                        <div className={clsx(styles.block__title)}>
                            <div className={clsx(styles.block__title__icon)}>
                                <FontAwesomeIcon icon={faClipboard} />
                            </div>
                            Contact Information
                        </div>
                        <div className={clsx(styles.block__body)}>
                            <div className="d-flex align-items-center mb-4">
                                <div className={clsx(styles.block__body__icon)}>
                                    <FontAwesomeIcon icon={faPhone} />
                                </div>
                                <div className={clsx(styles.block__body__text)}>
                                    <div>Phone Number:</div>
                                    <div>{currentUser && currentUser.phone_number}</div>
                                </div>
                                <div className={clsx(styles.block__body__btn)}>Update</div>
                            </div>
                            <div className="d-flex align-items-center">
                                <div className={clsx(styles.block__body__icon)}>
                                    <FontAwesomeIcon icon={faEnvelope} />
                                </div>
                                <div className={clsx(styles.block__body__text)}>
                                    <div>Email:</div>
                                    <div>{currentUser ? currentUser.email : '...'}</div>
                                </div>
                                <div className={clsx(styles.block__body__btn)}>Update</div>
                            </div>
                        </div>
                    </div>
                    <div className={clsx(styles.block)}>
                        <div className={clsx(styles.block__title)}>
                            <div className={clsx(styles.block__title__icon)}>
                                <FontAwesomeIcon icon={faShield} />
                            </div>
                            Security
                        </div>
                        <div className={clsx(styles.block__body)}>
                            <div className="d-flex align-items-center mb-4">
                                <div className={clsx(styles.block__body__icon)}>
                                    <FontAwesomeIcon icon={faLock} />
                                </div>
                                <div className={clsx(styles.block__body__text)}>
                                    <div>Change password</div>
                                </div>
                                <div className={clsx(styles.block__body__btn)}>Update</div>
                            </div>
                            <div className="d-flex align-items-center mb-4">
                                <div className={clsx(styles.block__body__icon)}>
                                    <FontAwesomeIcon icon={faTrash} />
                                </div>
                                <div className={clsx(styles.block__body__text)}>
                                    <div>Delete this account?</div>
                                </div>
                                <div className={clsx(styles.block__body__btn)}>Require</div>
                            </div>
                        </div>
                    </div>
                    <div className={clsx(styles.block)}>
                        <div className={clsx(styles.block__title)}>
                            <div className={clsx(styles.block__title__icon)}>
                                <FontAwesomeIcon icon={faCloudArrowUp} />
                            </div>
                            Connecting
                        </div>
                        <div className={clsx(styles.block__body)}>
                            <div className="d-flex align-items-center mb-4">
                                <div className={clsx(styles.block__body__icon_img)}>
                                    <img
                                        src="/images/logo/google_logo.png"
                                        alt="google_logo"
                                        className={clsx('img__fluid')}
                                    />
                                </div>
                                <div className={clsx(styles.block__body__text)}>
                                    <div>Connect to Google</div>
                                </div>
                                <div className={clsx(styles.block__body__btn)}>Update</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

function EditProfile() {
    return <SettingComponent state="edit_profile" mainChild={<MainChild />} />;
}

export default EditProfile;
