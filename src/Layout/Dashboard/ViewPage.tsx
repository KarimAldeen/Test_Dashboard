import React from "react";
import { Card, CardHeader, CardTitle, CardBody, Button } from "reactstrap";
import { Formik, Form } from "formik";
import { LoadingButton } from "../../Components/Ui/LoadingButton";
import ProgressBar from "../../Components/Ui/ProgressBar";
import { useLocation, useNavigate } from "react-router-dom";
import { usePageState } from "../../zustand/LayoutPagestate";
import { useTranslation } from "react-i18next";

type TViewPage ={
  children: React.ReactNode,
  getInitialValues:any,
   getValidationSchema:any,
   getDataToSend:any,
   handleSubmit:any,
  //  BarStatus:any,
   IsloadingButton:boolean
}

const ViewPage: React.FC<TViewPage>=  ({children,getInitialValues, getValidationSchema,handleSubmit,IsloadingButton})=> {
    
    const {objectToEdit} = usePageState()
    const {t} = useTranslation();
    const navigate = useNavigate();
  // console.log(BarStatus);

  const location = useLocation();

  

  const navigateToParent = () => {
    // // Get the current path
    // const currentPath = window.location.pathname;
    // // Find the index of the second '/' in the current path
    // const secondSlashIndex = currentPath.indexOf('/', 1);
    // // Extract the parent path
    // const parentPath = secondSlashIndex !== -1 ? currentPath.substring(0, secondSlashIndex) : currentPath;
    // // Navigate to the parent path
    // navigate(parentPath);
    navigate(-1)
  };

  return (
    <Card className="ViewTapPage">
      <CardHeader  className="CardHeader" >
        <CardTitle className="View_information">
          {t("View_information")}
        </CardTitle>
       <Button onClick={() => { navigateToParent()}}>  {t("back")}  </Button>
      </CardHeader>
      <CardBody>
        {
           <Formik
           onSubmit={handleSubmit}
           initialValues={getInitialValues(objectToEdit)}
           validationSchema={getValidationSchema()}
        >
          {(formik) => (
            <Form>
              {/* <HeadTabs tabs={tabs} /> */}
                {children}
                { 
                  <>
               
                    <div className="d-flex mt-4 justify-content-center align-items-center">
                      <LoadingButton
                        type="submit"
                        color="primary"
                        isLoading={IsloadingButton}
                      >
                        {t("save")}  
                      </LoadingButton>
                      {/* <Button disabled={isLoading}  type="submit" color="primary">  {t("save")}  </Button> */}
                    </div>
                  </>
                }
            </Form>
          )}
        </Formik>
        }
       
      </CardBody>
    </Card>
  );
};


export default ViewPage;
