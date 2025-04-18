import React, { useContext } from 'react'
import CustomInputField from '../components/input-field/CustomInput'
import { useGlobalFormik } from '../utils/custom-hooks/formik-hook/useGlobalFormik'
import { changePasswordSchema } from '../utils/validation-schema/auth-schema/authSchema';
import request from '../utils/request';
import Button from '../components/button/Button';
import toast from 'react-hot-toast';
import CHANGE_PASSWORD from '../images/changePassword.png'
import Breadcrub from '../components/button/Breadcrub';

const ChangePassword = () => {

    const initialValues = {
        currentPassword: '',
        newPassword: "",
        reEnterNewPassword: ""
    }

    const formik = useGlobalFormik(initialValues, changePasswordSchema, (values) => {
        request({
            url: `V1/customer/change-password`,
            method: "PUT",
            data: {
                currentPassword: values?.currentPassword,
                newPassword: values?.newPassword
            }
        }).then((response) => {
            toast.dismiss();
            toast.success(response?.message)
            formik.resetForm();
        }).catch((err) => {
            if (err.response.status == 500) {
                toast.dismiss();
                toast.error(err.response.data.message);
            }
        })
    })

    return (
        <div>
            <div className="relative">
                <Breadcrub pageTitle="Change password" />
            </div>
            <div className=' pt-2 mb-4'>
                <div className='py-3 grid grid-cols-1 md:grid-cols-2'>
                    <div>
                        <form action="" className='px-8 md:p-2 md:ps-4 ' onSubmit={formik.handleSubmit}>
                            <CustomInputField
                                type="password"
                                name="currentPassword"
                                placeholder="Enter your Password"
                                title="Current Password"
                                value={formik.values.currentPassword}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                error={formik.errors.currentPassword}
                                touched={formik.touched.currentPassword}
                                className='md:max-w-[400px]'
                            />
                            <CustomInputField
                                type="password"
                                name="newPassword"
                                placeholder="Enter new password"
                                title="New Password"
                                value={formik.values.newPassword}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                error={formik.errors.newPassword}
                                touched={formik.touched.newPassword}
                                className='md:max-w-[400px]'
                            />
                            <CustomInputField
                                type="password"
                                name="reEnterNewPassword"
                                placeholder="Re-Enter new password"
                                title="Re-Enter New Password"
                                value={formik.values.reEnterNewPassword}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                error={formik.errors.reEnterNewPassword}
                                touched={formik.touched.reEnterNewPassword}
                                className='md:max-w-[400px]'
                            />
                            <div className='flex justify-center md:justify-start'><Button buttonText={"Submit"} type='submit' className="mt-3 px-4" /></div>
                        </form>
                    </div>
                    <div className='p-3 pb-4 hidden md:block'>
                        <img src={CHANGE_PASSWORD} alt="" className='w-full h-full' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ChangePassword;