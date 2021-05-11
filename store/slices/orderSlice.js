import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import orderAPI from "@helper/orderAPI";

export const sendOrderDetails = createAsyncThunk("order/sendOrderDetails", async ({userDetails, addressDetails}) => {
    const responce1 = await orderAPI.sendUserDetails(userDetails);
    const responce2 = await orderAPI.sendAddressDetails(addressDetails);

    return responce2;

});

export const orderSlice = createSlice({
    name: "order",
    initialState: {
        loading: false,
        orderDetails: null,
        error: null,
        dialogBox: false,
        alert: {
            type: "fail",
            open: false,
            message: "Somthing went wrong",
        },
    },
    reducers: {
        closeDialogBox(state) {
            state.dialogBox = false;
        },

        closeAlert(state) {
            state.alert.open = false;
        },
    },

    extraReducers: (builder) => {
        builder
            .addCase(sendOrderDetails.fulfilled, (state, action) => {
                state.loading = false;
                state.error = null;
                state.dialogBox = true;
                state.orderDetails = action.payload
                state.alert = {
                    type: "success",
                    open: true,
                    message: "Order Details are submitted",
                };
            })
            .addCase(sendOrderDetails.rejected, (state, action) => {
                state.loading = false;
                state.error = "error";

                state.alert = {
                    type: "error",
                    open: true,
                    message: action.error.message,
                };
                //console.log(action);
            })
            .addCase(sendOrderDetails.pending, (state, action) => {
                state.loading = true;
                state.error = null;

                //console.log(state);
            });
    },
});

export const { openDialogBox, closeDialogBox, openAlert, closeAlert } = orderSlice.actions;

export default orderSlice.reducer;
