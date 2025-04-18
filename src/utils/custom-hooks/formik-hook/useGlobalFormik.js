import { useFormik } from "formik";


export const useGlobalFormik = (initialValues, validationSchema, onSubmit)=>{

    return useFormik({
        initialValues: initialValues,
        validationSchema: validationSchema,
        onSubmit: onSubmit,
      });

}