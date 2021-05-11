import React from "react";
import {  Controller } from "react-hook-form";
import { Checkbox, FormControlLabel } from "@material-ui/core";

export default function OrderDetailsCheckbox(_props) {
    const { name, label, control, errors } = _props;
    return (
        <Controller
            name={`${name}.${label}`}
            control={control}
            defaultValue={false}
            render={({ field: props }) => (
                <FormControlLabel control={<Checkbox {...props} color="primary" onChange={(e) => props.onChange(e.target.checked)} />} label={label} />
            )}
        />
    );
}
