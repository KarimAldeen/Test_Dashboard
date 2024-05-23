import { useQuery } from "react-query";
import useAxios from "./useAxios";
import useAuthState from "../../zustand/AuthState";
import { useLocation, useNavigate } from "react-router-dom";
import React from "react";

function useGetQuery(
  KEY: string | string[],
  url: string,
  params: any = {},
  options: any = {},
) {
  const axios = useAxios();
  const [per_page, set_per_page] = React.useState<string>("");
  const [page, set_page] = React.useState<string>("");
  const [searchParams, setSearchParams] = React.useState<string[]>([]); // State to hold search_params

  const { show, pagination, search_params, ...remainingParams } = params;
    
  const { logout } = useAuthState();
  const navigate = useNavigate();

  const location = useLocation();
  // console.log(searchParams,"searchParams");

  React.useEffect(() => {
    const searchParams = new URLSearchParams(location?.search);
    set_page(searchParams?.get("page") || "");
    set_per_page(searchParams?.get("per_page") || "");
  }, [location]);
  // React.useEffect(() => {
  //   const searchParams = new URLSearchParams(location?.search);
  //   if (search_params && search_params.length > 0) {
  //     const newSearchParams = search_params.map((item:any) => {
  //       const param = searchParams?.get(item);
  //       return param;
  //     });
  //     setSearchParams(newSearchParams);
  //     console.log(newSearchParams,"newSearchParams");
  //   }
  // }, [location]);

  const param_to_send = pagination
    ? { ...remainingParams, page: page, per_page: per_page }
    : { ...remainingParams };
  // console.log(param_to_send);

  const filteredParams = Object.fromEntries(
    Object.entries(param_to_send ?? {}).filter(([_, value]) => value !== ""),
  );

  return useQuery(
    [KEY, filteredParams],
    async () => {
      const response = await axios.get(url + (show ? `/${show}` : ""), {
        params: filteredParams,
        headers:{'X-Custom-Query-Key': KEY}
      });
      return response?.data?.data ?? [];
    },
    {
      onError: (error: any) => {
        if (error?.response?.status === 401) {
          logout();
          navigate("/auth");
          console.error("An error occurred:", error);
        }

        console.error("An error occurred:", error);
      },
      refetchOnWindowFocus: false,
      ...options,
    },
  );
}

export default useGetQuery;
