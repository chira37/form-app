import * as yup from "yup";

export const orderDetailsSchema = yup.object({
    firstName: yup.string().required("First name is required"),
    lastName: yup.string().required("Last name is requireds"),
    email: yup.string().email().required("Email is requireds"),
    telephone: yup.number("must be a number").required("Telephone is requireds").test('len', 'Phone number needs to be excatly 10 digits', val => val.toString().length === 10),
    country: yup.string().required("Country is requireds").nullable(),
    adrressLine1: yup.string().required("Address Line 1 is requireds"),
    adrressLine2: yup.string(),
    city: yup.string().required("City is requireds"),
    state: yup.string(),
    postcode: yup.string().required("First name is requireds"),
});
