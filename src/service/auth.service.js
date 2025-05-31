import { login, signup } from '../api';

export const signupReq = async (body) => {
  const response = await signup(body);
  return response;
};

export const loginReq = async (body) => {
  const response = await login(body);
  return response;
};
