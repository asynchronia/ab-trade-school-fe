import {
    forgetPassword,
    login,
    resetPassword,
    sendSmsOtp,
    signup,
    verifyOtp,
} from '../api';

export const signupReq = async (body) => {
  const response = await signup(body);
  return response;
};

export const loginReq = async (body) => {
  const response = await login(body);
  return response;
};

export const sendOtpReq = async (body) => {
  const response = await sendSmsOtp(body);
  return response;
};

export const verifyOtpReq = async (body) => {
  const response = await verifyOtp(body);
  return response;
};

export const forgetPasswordReq = async (body) => {
  const response = await forgetPassword(body);
  return response;
};

export const resetPasswordReq = async (body) => {
  const response = await resetPassword(body);
  return response;
};
