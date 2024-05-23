import { AxiosResponse } from "axios";
import useAuthState from "../../zustand/AuthState";
import { BaseURL, HEADER_KEY } from "../config";
import AxiosBuilder from "./AxiosBuilder";
import { useTranslation } from "react-i18next";
import { toast } from "react-toastify";
import { useFormikContext } from "formik";
import { useValidationState } from "../../Components/ValidationField/utils/ValidationState";
import { useQueryClient } from "react-query";

function useAxios() {
  const { isAuthenticated, token } = useAuthState();
  const [t] = useTranslation()
  const {setValidation} = useValidationState(state=>state)
  const queryClient = useQueryClient();


  const buildAxios = new AxiosBuilder()
    .withBaseURL(BaseURL)
    .withResponseType("json")
    .withTimeout(120000);
  // .withHeaders({ "Content-Type": "application/json" });

  if (isAuthenticated) {
    buildAxios.withHeaders({
      Authorization: "Bearer " + token,
    });
  }

  const build_Axios =  buildAxios.build()
  
build_Axios.interceptors.response.use(function (response:any) {

  const responseMsg = response?.data?.message
  const method = response.config.method;

  const key = response.config.headers[HEADER_KEY];
    const ResponseMessage =  responseMsg || t("message.the_possess_done_successful");
    if(method !== "get"){
      queryClient.invalidateQueries(key);
      toast.success(ResponseMessage);
    }
  setValidation([{}])
  return response;
}, function (error) {
  
  const status = error?.request?.status;
  const errorMsg = error?.response?.data?.message
  
  if(status === 422){
    setValidation(errorMsg)
  }
    
  const errorMessage =  errorMsg || t("message.some_thing_went_wrong");
   toast.error(errorMessage);
  return Promise.reject(error);
});
  return build_Axios

}

export default useAxios;
