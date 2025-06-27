import { getAllModules, getModuleChapterList } from '../api';

export const getAllModulesReq = async () => {
  const response = await getAllModules();
  return response;
};

export const getModuleChapterListReq = async (url) => {
  const response = await getModuleChapterList(url);
  return response;
};
