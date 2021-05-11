import React from "react";
import Snackbar from "@material-ui/core/Snackbar";
import { useSelector, useDispatch } from "react-redux";
import Alert from "@material-ui/lab/Alert";

import { closeAlert } from "@store/slices/orderSlice";

export default function OrderDetailsAlert() {
    const dispatch = useDispatch();
    const { alert } = useSelector((state) => state.order);

    const { type, open, message } = alert;

    const handleClose = (event, reason) => {
        if (reason === "clickaway") {
            return;
        }

        dispatch(closeAlert());
    };

    return (
        <div>
            <Snackbar
                open={open}
                anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "right",
                }}
                autoHideDuration={2000}
                onClose={handleClose}
            >
                <Alert onClose={handleClose} severity={type} elevation={6} variant="filled">
                    {message}
                </Alert>
            </Snackbar>
        </div>
    );
}
