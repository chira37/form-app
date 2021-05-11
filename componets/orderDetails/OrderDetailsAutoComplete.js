import React, { useState } from "react";
import Autocomplete from "@material-ui/lab/Autocomplete";
import CircularProgress from "@material-ui/core/CircularProgress";
import { TextField } from "@material-ui/core";


export default function OrderDetailsForm(props) {
    const { options, onSearch, onSelect, loading } = props;

    const [open, setOpen] = useState(false);
    const _loading = loading && open && options.length === 0;

    return (
        <Autocomplete
            id="Address"
            open={open}
            blurOnSelect="touch"
            onOpen={() => {
                setOpen(true);
            }}
            onClose={() => {
                setOpen(false);
            }}
            //getOptionSelected={(option, value) => option.properties.place_id === value.properties.place_id}
            getOptionLabel={(option) => option.properties.formatted}
            options={options}
            loading={_loading}
            onChange={(event, value) => {
                if (value === null) return;
                onSelect({
                    // create address object to pass to the update in the input fileds
                    // some properties of aderess are not avaliable for some address. ex: city, postcode
                    adrressLine1: value.properties.address_line1 || "",
                    adrressLine2: value.properties.address_line2 || "",
                    city: value.properties.city || "",
                    state: value.properties.state || "",
                    postcode: value.properties.postcode || "",
                });
            }}
            onInputChange={(event) => onSearch(event.target.value)}
            renderInput={(params) => (
                <TextField
                    {...params}
                    fullWidth
                    //label="Address"
                    placeholder="Type part of the address"
                    variant="outlined"
                    size="small"
                    InputProps={{
                        ...params.InputProps,
                        endAdornment: (
                            <React.Fragment>
                                {_loading ? <CircularProgress color="inherit" size={20} /> : null}
                            </React.Fragment>
                        ),
                    }}
                />
            )}
        />
    );
}
