import * as Yup from "yup";
import { pincodeValidation } from "../commonValidation";


export const rateCalInitialValues = {
    orderType: "",
    pickupPincode: "",
    deliveryPincode: "",
    weight: "",
    length: "",
    breadth: "",
    height: "",
    volumetricWeight: "",
    dangerousGoods: "",
    orderValue: "",
    paymentType: ""
}


export const rateCalSchema = Yup.object().shape({
    orderType: Yup.string().required("Order type is required"),
    pickupPincode: pincodeValidation,
    deliveryPincode: pincodeValidation,
    weight: Yup.number().required("Weight is required"),
    length: Yup.number().required("Length is required"),
    breadth: Yup.number().required("Breadth is required"),
    height: Yup.number().required("Height is required"),
    volumetricWeight: Yup.number().required("Volumetric weight is required"),
    dangerousGoods: Yup.boolean().required("Please specify if there are dangerous goods"),
    orderValue: Yup.number().required("Order value is required"),
    paymentType: Yup.string().required("Payment type is required")
});
