import React from "react";
import { Controller } from "react-hook-form";
import { TextField } from "@material-ui/core";

export default function OrderDetailsInput(props) {
    const { name, label, control, errors } = props;
    return (
        <Controller
            name={name}
            control={control}
            defaultValue=""
            render={({ field }) => (
                <TextField {...field} placeholder={label} fullWidth variant="outlined" size="small" error={Boolean(errors[name])} helperText={errors[name]?.message} />
            )}
        />
    );
}

