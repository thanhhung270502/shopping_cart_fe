import axios from 'axios';
import { getAccessToken } from '~/utils';

const REACT_APP_LOCAL_API_URL = 'http://localhost:3000';

export const getAllProvinces = async () => {
    return await axios
        .get(`${REACT_APP_LOCAL_API_URL}/addresses/provinces`)
        .then(function (response) {
            return response.data;
        })
        .catch(function (error) {
            console.log(error);
            return error.response;
        });
};

export const getAllDistrictsByProvinceCode = async (province_code) => {
    console.log(province_code);
    return await axios
        .get(`${REACT_APP_LOCAL_API_URL}/addresses/districts/${province_code}`)
        .then(function (response) {
            return response.data;
        })
        .catch(function (error) {
            console.log(error);
            return error.response;
        });
};

export const getAllWardsByDistrictCode = async (district_code) => {
    return await axios
        .get(`${REACT_APP_LOCAL_API_URL}/addresses/wards/${district_code}`)
        .then(function (response) {
            return response.data;
        })
        .catch(function (error) {
            console.log(error);
            return error.response;
        });
};

export const createAddress = async (info) => {
    return await axios
        .post(`${REACT_APP_LOCAL_API_URL}/addresses/create`, info, {
            headers: getAccessToken(),
        })
        .then(function (response) {
            return response.data;
        })
        .catch(function (error) {
            console.log(error);
            return error.response;
        });
};

export const getAllAddressByUserID = async () => {
    return await axios
        .get(`${process.env.REACT_APP_LOCAL_API_URL}/addresses/user/all`, {
            headers: getAccessToken(),
        })
        .then((res) => res.data)
        .catch((err) => {
            return err;
        });
};

export const getAddressDefaultByUserID = async () => {
    return await axios
        .get(`${process.env.REACT_APP_LOCAL_API_URL}/addresses/user/default`, {
            headers: getAccessToken(),
        })
        .then((res) => res.data)
        .catch((err) => {
            return err;
        });
};

export const updateAddressDefault = async (info) => {
    return await axios
        .put(`${process.env.REACT_APP_LOCAL_API_URL}/addresses/user/default/update`, info, {
            headers: getAccessToken(),
        })
        .then((res) => res.data)
        .catch((err) => {
            return err;
        });
};

export const getAddressByID = async (info) => {
    return await axios
        .post(`${process.env.REACT_APP_LOCAL_API_URL}/addresses/user/get`, info, {
            headers: getAccessToken(),
        })
        .then((res) => res.data)
        .catch((err) => {
            return err;
        });
};

export const updateAddress = async (info) => {
    return await axios
        .put(`${process.env.REACT_APP_LOCAL_API_URL}/addresses/user/update`, info, {
            headers: getAccessToken(),
        })
        .then((res) => res.data)
        .catch((err) => {
            return err;
        });
};

export const deleteAddress = async (address_id) => {
    return await axios
        .delete(`${process.env.REACT_APP_LOCAL_API_URL}/addresses/user/${address_id}`, {
            headers: getAccessToken(),
        })
        .then((res) => res.data)
        .catch((err) => {
            return err;
        });
};
