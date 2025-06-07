import { login, resendEmailOtp, signup, verifyEmailOtp } from '../api';

export const signupReq = async (body) => {
  const response = await signup(body);
  return response;
};

export const loginReq = async (body) => {
  const response = await login(body);
  return response;
};

export const resendEmailOtpReq = async (email) => {
  const response = await resendEmailOtp(email);
  return response;
};

export const verifyEmailOtpReq = async (body) => {
  const response = await verifyEmailOtp(body);
  return response;
};
