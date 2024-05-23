import { Formik, Form } from 'formik';
import React, { ReactNode } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from "reactstrap";
import * as Yup from 'yup';

interface FormValues {
    [key: string]: any;
}

interface FormikFormProps {
    handleSubmit: (values: any) => void
    initialValues: FormValues;
    validationSchema: any;
    title?: string;
    children: ReactNode;
    ButtonName?:string
}
const FormikForm: React.FC<FormikFormProps> = ({ children, handleSubmit, initialValues, validationSchema, title = "Add New Item" ,ButtonName="إضافة"}) => {
    const [t]= useTranslation()

    return (
        <>
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                    >
                    {formik => (
                        <Form >
                            <div className="Card">
                            {children}
                           
                            </div>

                        </Form>
                    )}
                </Formik>
        </>
    );
};

export default FormikForm;



{/* <FormikForm
handleSubmit={() => {

}}
initialValues={() => {
    return {
        id: null,
        name: "",

    }
}}
validationSchema={() => {
    return Yup.object().shape({
        name: Yup.string().required('required'),

    });
}}

>

</FormikForm> */}