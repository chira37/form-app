let responce1 

export const sendUserDetails = (userDetials) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            responce1 = userDetials;
            resolve("Error in the user details");
        }, 1000);
    });
};


export const sendAddressDetails = (addressDetails) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({...responce1, ...addressDetails});
        }, 1000);
    });
};

export default {
    sendUserDetails,
    sendAddressDetails
};
