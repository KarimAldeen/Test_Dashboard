import { useMutation, UseMutationResult } from "react-query";
import useAxios from "./useAxios";

type AxiosResponse = { message: string;};
type DataToSend = { id: number;};

function useDeleteMutation(
  key: any,
  url: string,
): UseMutationResult<AxiosResponse, unknown, DataToSend, unknown> {
  const axios = useAxios();
  return useMutation<AxiosResponse, unknown, DataToSend, unknown>(
    async (dataToSend) => {
      const { data } = await axios.delete(url + `/` + dataToSend?.id);
      return data;
    }
  );
}

export default useDeleteMutation;
