import React, { useState } from "react";
import { Container, Box, FormControl, InputLabel, Input, FormHelperText, Grid, Button } from "@material-ui/core";

import { TextField, Checkbox } from "@material-ui/core";
import { useForm, Controller } from "react-hook-form";
import { orderDetailsSchema } from "./utils/schemas";

import { yupResolver } from "@hookform/resolvers/yup";
import OrderDetailsInput from "./OrderDetailsInput";
import OrderDetailsAutoComplete from "./OrderDetailsAutoComplete";

import { useSearchAddress } from "./utils/useSearchAddress";
import { useOrderDetails } from "./utils/useOrderDetails";


export default function OrderDetails() {
   

    const handleSave = (data) => {
        console.log(data);
    };

    const { handleSubmit, control, setAddressValues, errors} = useOrderDetails();
    const { options, loading, setSearchText } = useSearchAddress();
    

    return (
        <div>
            <Container maxWidth="sm">
                <Box my={4}>
                    <form onSubmit={handleSubmit(handleSave)}>
                        <Grid container spacing={3}>
                            <Grid item xs={12} sm={6}>
                                <OrderDetailsInput name="firstName" control={control} errors={errors} />
                            </Grid>

                            <Grid item xs={12} sm={6}>
                                <OrderDetailsInput name="lastName" control={control} errors={errors} />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <OrderDetailsInput name="email" control={control} errors={errors} />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <OrderDetailsInput name="telephone" control={control} errors={errors} />
                            </Grid>

                            <Grid item>
                                <OrderDetailsAutoComplete
                                    options={options}
                                    loading={loading}
                                    onSearch={(value) => setSearchText(value)}
                                    onSelect={(value) => setAddressValues(value)}
                                />
                            </Grid>

                            <Grid item xs={12} sm={6}>
                                <OrderDetailsInput name="adrressLine1" control={control} errors={errors} />
                            </Grid>

                            <Grid item xs={12} sm={6}>
                                <OrderDetailsInput name="adrressLine2" control={control} errors={errors} />
                            </Grid>

                            <Grid item xs={12} sm={6}>
                                <OrderDetailsInput name="city" control={control} errors={errors} />
                            </Grid>

                            <Grid item xs={12} sm={6}>
                                <OrderDetailsInput name="state" control={control} errors={errors} />
                            </Grid>

                            <Grid item xs={12} sm={6}>
                                <OrderDetailsInput name="postcode" control={control} errors={errors} />
                            </Grid>
                        </Grid>
                        <input type="submit" />
                    </form>
                </Box>
            </Container>
        </div>
    );
}
