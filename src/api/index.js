import axios from 'axios';

const baseUrl = 'http://localhost:3001';

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
  sendSms: '/users/send-otp',
  verifyOtp: '/users/verify-otp',
  allModules: import.meta.env.VITE_MODULE_LIST_API,
  moduleChapterList: import.meta.env.VITE_MODULE_CHAPTER_LIST_API,
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

export async function sendSmsOtp(body) {
  return new Promise((resolve, reject) => {
    axios
      .post(`${baseUrl}${API_URL.sendSms}`, body, { headers: getHeaders() })
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

export async function verifyOtp(body) {
  return new Promise((resolve, reject) => {
    axios
      .post(`${baseUrl}${API_URL.verifyOtp}`, body, { headers: getHeaders() })
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

export async function getAllModules() {
  return new Promise((resolve, reject) => {
    axios
      .get(API_URL.allModules)
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

export async function getModuleChapterList(url) {
  return new Promise((resolve, reject) => {
    axios
      .get(`${API_URL.moduleChapterList}/${url}`)
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
