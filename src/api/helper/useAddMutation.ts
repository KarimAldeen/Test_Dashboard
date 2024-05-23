import { useMutation, useQueryClient, UseMutationResult } from "react-query";
import { toast } from "react-toastify";
import useAxios from "./useAxios";
import { useTranslation } from "react-i18next";

type AxiosResponse = {
  message?: string;
};

function useAddMutation(
  key: string,
  url: string,
  message?: string,
): UseMutationResult<AxiosResponse, unknown, any, unknown> {
  const axios = useAxios();
  const [t] = useTranslation();
  return useMutation<AxiosResponse, unknown, any, unknown>(
    async (dataToSend) => {
      const filterDataToSend = filterData(dataToSend);

      const { data } = await axios.post(url, filterDataToSend, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      return data;
    }
  );
}

export default useAddMutation;

export const filterData = (data: any) => {
  return Object.entries(data)
    .filter(([_, value]) => value !== null && value !== "")
    .reduce(
      (acc, [key, value]) => {
        acc[key] = value;
        return acc;
      },
      {} as { [key: string]: any },
    ); // Adding type assertion here
};
