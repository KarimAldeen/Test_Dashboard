import React, { useEffect } from 'react'
import { getInitialValues, getDataToSend } from '../formUtil'
import { Tab, TabList, TabPanel as TabBody, Tabs } from 'react-tabs'
import 'react-tabs/style/react-tabs.css';
import { MdLanguage } from 'react-icons/md'
import ViewPage from '../../../Layout/Dashboard/ViewPage';
import {  Spin } from 'antd';
import { usePageState } from '../../../zustand/LayoutPagestate';
import LoadingPage from '../../../Layout/app/LoadingPage';
import { useTranslation } from 'react-i18next';
import {  useGetService, useUpdateService } from '../../../api/Service';
import useNavigateOnSuccess from '../../../Hooks/useNavigateOnSuccess';
import Form from './EditForm';
import { useParams } from 'react-router-dom';

const EditPage = () => {
  const { setObjectToEdit, objectToEdit } = usePageState()
  const { t } = useTranslation();
  const {id} = useParams()
  const { data,isLoading:IsloadingButton,isRefetching } = useGetService({
    show:id
  })
  const { mutate, isSuccess } = useUpdateService()
  const handleSubmit = (values: any) => {
    mutate(values);
}


  useNavigateOnSuccess(isSuccess, '/service')


  useEffect(() => {

    setObjectToEdit(data?.data);

  }, [data?.data, setObjectToEdit]);


  const getValidationSchema = () => {
    return null
  };
  if (  IsloadingButton || !objectToEdit || isRefetching) {
    return <Spin />
  }



  const ViewProps = { getInitialValues, getValidationSchema, getDataToSend, handleSubmit,IsloadingButton };


  return (
    <div className='ViewPage'>
      {objectToEdit && data ?
        <ViewPage {...ViewProps}>
          <Tabs>
            <TabList>
              <Tab><div className='SignleDriverContainer'><span className='SignleDriverInfoIcon'><MdLanguage size={20} /></span> <h6 className='SingleDriverInfo'>{t("BasicInfo")}</h6></div></Tab>

            </TabList>
            <TabBody >
              <div className=" mt-4"><Form /></div>
            </TabBody>


          </Tabs>
        </ViewPage>
        : <LoadingPage />}


    </div>
  )

}

export default EditPage