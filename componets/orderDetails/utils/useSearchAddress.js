import axios from "axios";
import { useState, useEffect } from "react";

import { search } from "./search";

export const useSearchAddress = () => {
    const [options, setOptions] = useState([]);
    const [countryList, setContryList] = useState([]);
    const [loading, setLoading] = useState(false);
    const [searchText, setSearchText] = useState(null);
    const [countryCode, setCountryCode] = useState("auto");

    useEffect(() => {
        axios
            .get("https://restcountries.eu/rest/v2/all")
            .then((res) => {
                const list = res.data.map((value) => ({
                    name: value.name,
                    countryCode: value.alpha2Code.toLowerCase(),
                }));
                setContryList(list);
            })
            .catch(() => setContryList([]));
    }, []);

    useEffect(() => {
        if (searchText === null || searchText.length < 5) return;

        setLoading(true);

        search("https://api.geoapify.com/v1/geocode/autocomplete", searchText, countryCode)
            .then((res) => {
                setLoading(false);
                setOptions(res.data.features);
            })
            .catch(() => {
                setLoading(false);
                setOptions([]);
            });
    }, [searchText]);

    return { options, countryList, loading, setSearchText, setCountryCode };
};
