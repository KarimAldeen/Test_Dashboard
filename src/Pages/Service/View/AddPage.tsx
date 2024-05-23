import { getInitialValuesForAdd as getInitialValues, getValidationSchema, getDataToSend } from '../formUtil'
import { Tab, TabList, TabPanel as TabBody, Tabs } from 'react-tabs'
import 'react-tabs/style/react-tabs.css';
import { MdLanguage } from 'react-icons/md'
import ViewPage from '../../../Layout/Dashboard/ViewPage';
import { useTranslation } from 'react-i18next';
import useNavigateOnSuccess from '../../../Hooks/useNavigateOnSuccess';
import { useAddService } from '../../../api/Service';
import Form from './AddForm';

const AddServicePage = () => {


  const { mutate, isLoading:IsloadingButton, isSuccess } = useAddService()
  const handleSubmit = (values: any) => {
    const transformedValues = { ...values }; // Create a new object
  
    mutate(transformedValues);
  };
  

  const { t } = useTranslation();

  useNavigateOnSuccess(isSuccess, '/service')



  const ViewProps = { getInitialValues, getValidationSchema, getDataToSend, handleSubmit,IsloadingButton };


  return (
    <div className='ViewPage'>

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



    </div>
  )

}

export default AddServicePage