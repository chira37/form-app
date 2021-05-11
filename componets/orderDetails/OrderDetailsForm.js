import React from "react";
import { Container, Box, Grid, Button, CircularProgress, Typography, Paper } from "@material-ui/core";

import { TextField } from "@material-ui/core";
import { Controller } from "react-hook-form";
import OrderDetailsInput from "./OrderDetailsInput";
import OrderDetailsAutoComplete from "./OrderDetailsAutoComplete";
import { useSearchAddress } from "./utils/useSearchAddress";
import { useOrderDetails } from "./utils/useOrderDetails";
import Autocomplete from "@material-ui/lab/Autocomplete";
import OrderDetailsCheckbox from "./OrderDetailsCheckbox";

export default function OrderDetails() {
    const { handleSubmit, control, setAddressValues, send, formErrors, loading: sending } = useOrderDetails();
    const { options, countryList, loading, setSearchText, setCountryCode } = useSearchAddress();

    return (
        <div>
            <Container maxWidth="sm">
                <Paper elevation={1}>
                    <Box my={6} p={5}>
                        <form>
                            <Grid container spacing={3}>
                                <Grid item xs={12}>
                                    <Typography component="div">
                                        <Box fontSize="h4.fontSize" fontWeight="bold">
                                            Order Details
                                        </Box>
                                    </Typography>
                                </Grid>

                                <Grid item xs={12}>
                                    <Typography component="div">
                                        <Box fontWeight="bold">YOUR DETAILS</Box>
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <OrderDetailsInput name="firstName" label="First name" control={control} errors={formErrors} />
                                </Grid>

                                <Grid item xs={12} sm={6}>
                                    <OrderDetailsInput name="lastName"  label="Last name"  control={control} errors={formErrors} />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <OrderDetailsInput name="email"  label="Email"  control={control} errors={formErrors} />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <OrderDetailsInput name="telephone" label="Telephone"  control={control} errors={formErrors} />
                                </Grid>

                                <Grid item xs={12}>
                                    <Typography component="div">
                                        <Box fontWeight="bold">YOUR ADDRESS</Box>
                                    </Typography>
                                </Grid>

                                <Grid item xs={12} sm={6}>
                                    <Controller
                                        name="country"
                                        control={control}
                                        defaultValue=""
                                        render={({ field: props }) => (
                                            <Autocomplete
                                                id="country"
                                                options={countryList}
                                                defaultValue=""
                                                getOptionLabel={(country) => country.name}
                                                onChange={(_, value) => {
                                                    props.onChange(value?.name || ""); // to send to the sever
                                                    setCountryCode(value?.countryCode); // to use in the location api
                                                }}
                                                //style={{ width: 300 }}
                                                renderInput={(params) => (
                                                    <TextField
                                                        {...params}
                                                        fullWidth
                                                        error={Boolean(formErrors.country)}
                                                        helperText={formErrors.country?.message}
                                                        placeholder="Contry"
                                                        size="small"
                                                        variant="outlined"
                                                    />
                                                )}
                                            />
                                        )}
                                    />
                                </Grid>

                                <Grid item xs={12}>
                                    <OrderDetailsAutoComplete
                                        options={options}
                                        loading={loading}
                                        onSearch={(value) => setSearchText(value)}
                                        onSelect={(value) => setAddressValues(value)}
                                    />
                                </Grid>

                                <Grid item xs={12} sm={6}>
                                    <OrderDetailsInput name="adrressLine1" label="Address Line 1"  control={control} errors={formErrors} />
                                </Grid>

                                <Grid item xs={12} sm={6}>
                                    <OrderDetailsInput name="adrressLine2" label="Address Line 2" control={control} errors={formErrors} />
                                </Grid>

                                <Grid item xs={12} sm={6}>
                                    <OrderDetailsInput name="city" label="Town/City" control={control} errors={formErrors} />
                                </Grid>

                                <Grid item xs={12} sm={6}>
                                    <OrderDetailsInput name="state" label="Province/State" control={control} errors={formErrors} />
                                </Grid>

                                <Grid item xs={12} sm={6}>
                                    <OrderDetailsInput name="postcode" label="Postcode" control={control} errors={formErrors} />
                                </Grid>

                                <Grid item xs={12}>
                                    <Typography component="div">
                                        <Box fontWeight="bold">INTEREST</Box>
                                    </Typography>
                                </Grid>

                                <Grid item xs={12}>
                                    <Grid container direction="row">
                                        <OrderDetailsCheckbox name="interest" label="Car" control={control} />
                                        <OrderDetailsCheckbox name="interest" label="Books" control={control} />
                                        <OrderDetailsCheckbox name="interest" label="Watches" control={control} />
                                        <OrderDetailsCheckbox name="interest" label="Laptops" control={control} />
                                    </Grid>
                                </Grid>

                                <Grid item xs={12}>
                                    <Button onClick={handleSubmit(send)} disabled={sending} variant="contained" color="primary" disableElevation>
                                        Submit {sending && <CircularProgress size={24} style={{ position: "absolute" }} />}
                                    </Button>
                                </Grid>
                            </Grid>
                            {/* <input type="submit" /> */}
                        </form>
                    </Box>
                </Paper>
            </Container>
        </div>
    );
}
