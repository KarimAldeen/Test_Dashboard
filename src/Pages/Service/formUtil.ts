
import * as Yup from "yup";
import { buildFormData } from "../../api/helper/buildFormData";
import * as dayjs from 'dayjs'



export const getInitialValues = (objectToEdit: any | null = null): any => {
  //@ts-ignore
  return {
    id: objectToEdit?.id ?? null,
    title: objectToEdit?.title ,
    description: objectToEdit?.description ,


  };
};

export const getInitialValuesForAdd = (objectToEdit: any | null = null): any => {
  return {
    title: null ,
    description: null ,

    

  };
};

export const getValidationSchema = (editMode: boolean = false): Yup.Schema<any> => {
  // Validate input
  return Yup.object().shape({
    // title: Yup.string().required('Required'),
    // description: Yup.string().required('Required'),


  });
};



export const getDataToSend = (values: any): FormData => {
  const data = { ...values };


  const formData = new FormData();
  buildFormData(formData, data);
  return formData;
};

export const ChangeDataToPrint = (data: any) => {

  let new_array = data
  for (let i = 0; i < data.length; i++) {
    new_array[i]['status'] = !data[i]['deleted_at'] ? 'available' : 'unavailable'
    delete new_array[i]['deleted_at']
  }
  return new_array
}