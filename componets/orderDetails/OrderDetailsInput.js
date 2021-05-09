import React from "react";
import { useForm, Controller } from "react-hook-form";
import { TextField } from "@material-ui/core";

export default function OrderDetailsInput(props) {
    const { name, control, errors } = props;
    return (
        <Controller
            name={name}
            control={control}
            defaultValue=""
            render={({ field }) => (
                <TextField {...field}  error={Boolean(errors[name])} helperText={errors[name]?.message} />
            )}
        />
    );
}
