import axios from 'axios';
import { getAccessToken } from '~/utils';

export const getRole = async () => {
    return await axios
        .get(`${process.env.REACT_APP_LOCAL_API_URL}/auth/checkRole`, {
            headers: getAccessToken(),
        })
        .then((res) => res.data)
        .catch((err) => {
            return err;
        });
};

export const getUserGoogle = async () => {
    return await axios
        .get(`${process.env.REACT_APP_LOCAL_API_URL}/auth/login/success`, { withCredentials: true })
        .then(function (response) {
            // console.log({
            //     code: 200,
            //     body: response.data,
            // });
            // var newSession = {
            //     accessToken: response.data.body.accessToken,
            //     user: response.data.body.user,
            // };
            // localStorage.setItem('session', JSON.stringify(newSession));
            return {
                code: 200,
                body: response.data,
            };
        })
        .catch(function (err) {
            return {
                code: 403,
                body: err,
            };
        });
};

export const logoutGoogle = async () => {
    return await axios
        .get(`${process.env.REACT_APP_LOCAL_API_URL}/auth/logout`, { withCredentials: true })
        .then(function (response) {})
        .catch(function (err) {});
};
