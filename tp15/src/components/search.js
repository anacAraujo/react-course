import React, { useState, useEffect } from "react";
import UsersList from "./users_list";

function SearchForm(props) {
    const [searchText, setSearchText] = useState("");
    const [searchResults, setSearchResults] = useState([]);

    const handleSearchChange = (event) => {
        setSearchText(event.target.value);
    };

    const { usersData } = props;

    useEffect(() => {
        const searchObj = { nome: searchText };
        usersData
            .findUser(searchObj)
            .then((user) => {
                setSearchResults([user]);
            })
            .catch((error) => {
                console.error("Error finding user. " + error);
                setSearchResults([]);
            });
    }, [searchText]);

    return (
        <div>
            <input
                type="text"
                placeholder="Search"
                value={searchText}
                onChange={handleSearchChange}
            />

            <UsersList usersData={searchResults}></UsersList>
        </div>
    );
}

export default SearchForm;
