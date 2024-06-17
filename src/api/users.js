import axios from 'axios';

const REACT_APP_LOCAL_API_URL = 'http://localhost:3000';

export const login = async (info) => {
    const res = await axios
        .post(`${REACT_APP_LOCAL_API_URL}/sessions/login`, info)
        .then(function (response) {
            return response.data;
        })
        .catch(function (error) {
            console.log(error);
            return error.response;
        });
    return res;
};

export const checkAuth = async (accessToken) => {
    const res = await axios
        .get(`${REACT_APP_LOCAL_API_URL}/auth/checkAuthentication`, {
            headers: {
                'access-token': accessToken,
            },
        })
        .then((res) => {
            var session = JSON.parse(localStorage.getItem('session'));
            if (res.data.login === false) {
                localStorage.setItem('session', '');
            } else {
                session['login'] = res.data.login;
                session['message'] = res.data.message;
                localStorage.setItem('session', JSON.stringify(session));
            }
            return res.data;
        })
        .catch((error) => console.log(error));
    return res;
};

export const signup = async (info) => {
    return await axios
        .post(`${REACT_APP_LOCAL_API_URL}/users`, info)
        .then(function (response) {
            return response.data;
        })
        .catch(function (error) {
            console.log(error);
            return error.response;
        });
};

export const updateProfile = async (info) => {
    return await axios
        .put(`${REACT_APP_LOCAL_API_URL}/users/update/profile`, info)
        .then(function (response) {
            return response.data;
        })
        .catch(function (error) {
            console.log(error);
            return error.response;
        });
};

export const updatePhone = async (info) => {
    return await axios
        .put(`${REACT_APP_LOCAL_API_URL}/users/update/phone`, info)
        .then(function (response) {
            return response.data;
        })
        .catch(function (error) {
            console.log(error);
            return error.response;
        });
};

export const updateEmail = async (info) => {
    return await axios
        .put(`${REACT_APP_LOCAL_API_URL}/users/update/email`, info)
        .then(function (response) {
            return response.data;
        })
        .catch(function (error) {
            console.log(error);
            return error.response;
        });
};

export const updatePassword = async (info) => {
    return await axios
        .put(`${REACT_APP_LOCAL_API_URL}/users/update/password`, info)
        .then(function (response) {
            return response.data;
        })
        .catch(function (error) {
            console.log(error);
            return error.response;
        });
};

export const getAvatar = async (info) => {
    return await axios
        .post(`${REACT_APP_LOCAL_API_URL}/users/avatar`, info)
        .then(function (response) {
            return response.data;
        })
        .catch(function (error) {
            console.log(error);
            return error.response;
        });
};
