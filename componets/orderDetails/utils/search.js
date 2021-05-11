import axios from "axios";
let source;

export const search = (url, serachText, countryCode) => {
    if (source) {
        source.cancel(); // minimize server calling
    }

    source = axios.CancelToken.source();
    return axios.get(url, {
        cancelToken: source.token,
        params: {
            text: serachText,
            filter: `countrycode:${countryCode}`,
            //type:"street",
            apiKey: "bf0cfe45ea014b5ab6b22c3b84e2e515",
        },
    });
};
