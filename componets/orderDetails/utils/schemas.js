import * as yup from "yup";

export const orderDetailsSchema = yup.object({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    email: yup.string().email().required(),
    telephone: yup.string().required(),
    adrressLine1: yup.string().required(),
    adrressLine2: yup.string(),
    city: yup.string().required(),
    state: yup.string(),
    postcode: yup.string().required(),
});
