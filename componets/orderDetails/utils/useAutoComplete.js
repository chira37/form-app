import { useState, useEffect } from "react";

export const useAutoComplete = () => {
    const [options, setOptions] = useState([]);
    const [laoding, setLaoding] = useState(false);
    const [searchText, setSearchText] = useState(null);

    useEffect(() => {
        if (searchText === null || searchText.length < 5) return;

        var requestOptions = {
            method: "GET",
        };

        fetch(
            `https://api.geoapify.com/v1/geocode/autocomplete?text=${searchText}&apiKey=bf0cfe45ea014b5ab6b22c3b84e2e515`,
            requestOptions
        )
            .then((response) => response.json())
            .then((result) => console.log(result))
            .catch((error) => console.log("error", error));
    }, [searchText]);

    return { options, laoding, setSearchText };
};
