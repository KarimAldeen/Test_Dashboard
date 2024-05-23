
import useGetQuery from "./helper/useGetQuery";

import useAddMutation from "./helper/useAddMutation"
import useDeleteMutation from "./helper/useDeleteMutation"
import useUpdateMutation from "./helper/useUpdateMutation";
  
const API = {
  ADD: `service`,
  GET_ALL: `service`,
  DELETE: `service`,
  UPDATE: `service`,

};
const KEY = "service"


export const useGetService = (params?:any) => useGetQuery(KEY, API.GET_ALL,params);

export const useAddService = () => useAddMutation(KEY, API.ADD);
export const useUpdateService = () => useUpdateMutation(KEY, API.UPDATE);

export const useDeleteService = () =>useDeleteMutation(KEY, API.DELETE);
