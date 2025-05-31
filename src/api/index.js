import axios from 'axios';

const baseUrl = 'https://tsapi.aliceblueonline.com';

const getAccessToken = () => localStorage.getItem('accessToken');

const getHeaders = () => {
  const accessToken = getAccessToken();

  if (accessToken) {
    return {
      Authorization: `Bearer ${accessToken}`,
    };
  }
};

const API_URL = {
  signup: '/users/signup',
  login: '/users/login',
};

export async function signup(body) {
  return new Promise((resolve, reject) => {
    axios
      .post(`${baseUrl}${API_URL.signup}`, body, { headers: getHeaders() })
      .then((res) => {
        resolve(res.data);
        return res.data;
      })
      .catch((error) => {
        reject(error);
      });
  }).catch((error) => {
    console.log(error);
    return error.response.data;
  });
}

export async function login(body) {
  return new Promise((resolve, reject) => {
    axios
      .post(`${baseUrl}${API_URL.login}`, body, { headers: getHeaders() })
      .then((res) => {
        resolve(res.data);
        return res.data;
      })
      .catch((error) => {
        reject(error);
      });
  }).catch((error) => {
    console.log(error);
    return error.response.data;
  });
}
