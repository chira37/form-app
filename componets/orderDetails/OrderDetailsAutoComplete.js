import React, { useState } from "react";
import Autocomplete from "@material-ui/lab/Autocomplete";
import CircularProgress from "@material-ui/core/CircularProgress";
import { TextField, Checkbox } from "@material-ui/core";

import { useAutoComplete } from "./utils/useAutoComplete";


export default function OrderDetailsAutoComplete(props) {
    const { options, loading, setSearchText } = useAutoComplete();

    const [open, setOpen] = useState(false);
    const _loading = loading || (open && options.length === 0);

    return (
        <div>
            <Autocomplete
                id="asynchronous-demo"
                style={{ width: 300 }}
                open={open}
                onOpen={() => {
                    setOpen(true);
                }}
                onClose={() => {
                    setOpen(false);
                }}
                getOptionSelected={(option, value) => option.name === value.name}
                getOptionLabel={(option) => option.name}
                options={options}
                loading={_loading}
                onInputChange={(event) => setSearchText(event.target.value)}
                renderInput={(params) => (
                    <TextField
                        {...params}
                        label="Asynchronous"
                        variant="outlined"
                        InputProps={{
                            ...params.InputProps,
                            endAdornment: (
                                <React.Fragment>
                                    {loading ? <CircularProgress color="inherit" size={20} /> : null}
                                </React.Fragment>
                            ),
                        }}
                    />
                )}
            />
        </div>
    );
}
