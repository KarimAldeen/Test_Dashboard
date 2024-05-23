import { Formik, Form } from 'formik';
import React, { ReactNode } from 'react';
import { Button } from "reactstrap";
import * as Yup from 'yup';

interface FormValues {
    [key: string]: any;
}

interface FormPageProps {
    handleSubmit: (values: any) => void
    initialValues: FormValues;
    validationSchema: any;
    title?: string;
    children: ReactNode;
}

const FormPage: React.FC<FormPageProps> = ({ children, handleSubmit, initialValues, validationSchema, title = "Edit Item" }) => {
    return (
        <>
            <h4 className='text-bold'>{title}</h4>
            <div className="Card">
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                    >
                    {formik => (
                        <Form>
                            {children}
                            <div className='w-100 d-flex justify-content-center'>
                                <Button type='submit' color="primary" className='mt-4 w-25 text-center'>Submit</Button>
                            </div>
                        </Form>
                    )}
                </Formik>
            </div>
        </>
    );
};

export default FormPage;
