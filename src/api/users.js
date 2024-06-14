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
                console.log(res);
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
