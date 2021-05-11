import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import { useSelector, useDispatch } from "react-redux";
import { closeDialogBox } from "@store/slices/orderSlice";
import { List, ListItem, Typography, Box } from "@material-ui/core";

function Item({ title, value }) {
    return (
        <ListItem>
            <Typography>{value || "-"}</Typography>
        </ListItem>
    );
}

export default function OrderDetailsDialo() {
    const dispatch = useDispatch();

    const { dialogBox } = useSelector((state) => state.order);
    const { orderDetails } = useSelector((state) => state.order);

    const handleClose = () => {
        dispatch(closeDialogBox());
    };

    return (
        <Dialog open={dialogBox} fullWidth>
            <Box p={5}>
                <DialogTitle disableTypography id="alert-dialog-title">
                    <Typography component="div">
                        <Box fontSize="h5.fontSize" fontWeight="bold">
                            Order Details
                        </Box>
                    </Typography>
                </DialogTitle>
                <DialogContent style={{ minWidth: 400 }}>
                    <List dense={true}>
                        <Typography>
                            <Box fontWeight="bold">USER DETAILS</Box>
                        </Typography>
                        <Item value={orderDetails?.firstName} />
                        <Item value={orderDetails?.lastName} />
                        <Item value={orderDetails?.email} />
                        <Item value={orderDetails?.telephone} />

                        <Typography>
                            <Box fontWeight="bold" pt={3}>
                                USER ADDRESS
                            </Box>
                        </Typography>
                        <Item value={orderDetails?.country} />
                        <Item value={orderDetails?.adrressLine1} />
                        <Item value={orderDetails?.adrressLine2} />
                        <Item value={orderDetails?.city} />
                        <Item value={orderDetails?.state} />
                        <Item value={orderDetails?.postcode} />

                        <Typography>
                            <Box fontWeight="bold" pt={3}>
                                USER INTEREST
                            </Box>
                        </Typography>

                        {Boolean(orderDetails?.interest) &&
                            Object.entries(orderDetails.interest).map((item) => {
                                if (item[1]) return <ListItem>{item[0]}</ListItem>;
                            })}
                    </List>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary" autoFocus>
                        OK
                    </Button>
                </DialogActions>
            </Box>
        </Dialog>
    );
}
