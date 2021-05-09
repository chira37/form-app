import { useState, useEffect } from "react";

import { search } from "./search";

export const useSearchAddress = () => {
    const [options, setOptions] = useState([]);
    const [laoding, setLaoding] = useState(false);
    const [searchText, setSearchText] = useState(null);

    useEffect(() => {
        if (searchText === null || searchText.length < 5) return;

        setLaoding(true);

        search(
            `https://api.geoapify.com/v1/geocode/autocomplete?text=${searchText}&apiKey=bf0cfe45ea014b5ab6b22c3b84e2e515`
        )
            .then((res) => {
                setLaoding(false);
                setOptions(res.data.features);
            })
            .catch(() => {
                setLaoding(false);
                setOptions([]);
            });
    }, [searchText]);

    return { options, laoding, setSearchText };
};
