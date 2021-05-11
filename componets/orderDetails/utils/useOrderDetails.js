import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { orderDetailsSchema } from "./../utils/schemas";
import { useSelector, useDispatch } from "react-redux";
import { sendOrderDetails } from "@store/slices/orderSlice";

import _ from "lodash";

export const useOrderDetails = () => {
    const dispatch = useDispatch();

    const { loading } = useSelector((state) => state.order);

    const {
        handleSubmit,
        control,
        setValue,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(orderDetailsSchema),
    });

    // auto complete the address values
    const setAddressValues = (values) => {
        _.map(values, (value, key) => setValue(key, value, { shouldValidate: true, shouldDirty: false }));
    };

    const send = (data) => {
        const userDetails = _.pick(data, ["firstName", "lastName", "email", "telephone"]);
        const addressDetails = _.pick(data, ["country", "adrressLine1", "adrressLine2", "city", "state", "postcode", "interest"]);

        dispatch(sendOrderDetails({ userDetails, addressDetails }));
    };

    return { handleSubmit, control, setAddressValues, send, formErrors: errors, loading };
};
