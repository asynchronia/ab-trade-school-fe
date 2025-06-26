import { getAllModules } from '../api';

export const getAllModulesReq = async () => {
  const response = await getAllModules();
  return response;
};
