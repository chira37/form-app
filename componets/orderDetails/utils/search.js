import axios from "axios";
let source;

export const search = (query) => {
    if (source) {
        source.cancel(); // mnimize server calling

    }

    source = axios.CancelToken.source();
    return axios(query, { cancelToken: source.token });
};
