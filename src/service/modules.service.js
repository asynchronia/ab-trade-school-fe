import {
    getAllModules,
    getModuleChapterData,
    getModuleChapterList,
} from '../api';

export const getAllModulesReq = async () => {
  const response = await getAllModules();
  return response;
};

export const getModuleChapterListReq = async (url) => {
  const response = await getModuleChapterList(url);
  return response;
};

export const getModuleChapterDataReq = async (url) => {
  const response = await getModuleChapterData(url);
  return response;
};
