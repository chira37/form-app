import React from 'react'
import OrderDetailsDialogBox from './OrderDetailsDialogBox'
import OrderDetailsForm from './OrderDetailsForm'
import OrderDetailsAlert from './OrderDetailsAlert'



export default function OrderDetails() {
    return (
        <div>
            <OrderDetailsForm/>
            <OrderDetailsDialogBox/>
            <OrderDetailsAlert/>
        </div>
    )
}
