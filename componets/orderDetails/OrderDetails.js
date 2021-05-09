import React, { useState } from "react";
import { Container, Box, FormControl, InputLabel, Input, FormHelperText, Grid, Button } from "@material-ui/core";



import { TextField, Checkbox } from "@material-ui/core";
import { useForm, Controller } from "react-hook-form";
import { orderDetailsSchema } from "./utils/schemas";

import { yupResolver } from "@hookform/resolvers/yup";
import OrderDetailsInput from "./OrderDetailsInput";
import OrderDetailsAutoComplete from "./OrderDetailsAutoComplete";

export default function OrderDetails() {
    const {
        handleSubmit,
        register,
        control,
        setValue,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(orderDetailsSchema),
    });

    const handleSave = (data) => {
        console.log(data);
    };

    const [value, setValues] = useState("fdsfsdfdsf");

    const [open, setOpen] = React.useState(false);
    const [options, setOptions] = React.useState([]);
    const loading = open && options.length === 0;

    return (
        <div>
            <Container maxWidth="sm">
                <Box my={4}>
                    <form onSubmit={handleSubmit(handleSave)}>
                        <Grid container spacing={3}>
                            <Grid item xs={12} sm={6}>
                                <OrderDetailsInput name="firstName" control={control} errors={errors} />
                            </Grid>

                            <Grid item>
                                <OrderDetailsAutoComplete/>
                               
                            </Grid>
                        </Grid>
                        <input type="submit" />
                    </form>
                </Box>
            </Container>
        </div>
    );
}
