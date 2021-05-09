import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, Controller } from "react-hook-form";
import { orderDetailsSchema } from "./../utils/schemas";

import _ from "lodash";

export const useOrderDetails = () => {
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
        _.map(values, (value, key) => setValue(key, value));
    };

    return { handleSubmit, control, setAddressValues, errors };
};
