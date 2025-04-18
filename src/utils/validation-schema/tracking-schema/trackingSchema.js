import * as Yup from "yup";
import { orderidTrackingidValidation } from "../commonValidation"


export const awbIdInitialValue = {
    orderId: ""
};

export const awbIdSchema = Yup.object().shape({
    orderId: orderidTrackingidValidation

});


export const trackingIdInitialValue = {
    trackingId: ""
};

export const trackingIdSchema = Yup.object().shape({
    trackingId: orderidTrackingidValidation

});



