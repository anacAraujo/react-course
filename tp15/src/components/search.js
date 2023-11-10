import React, { useState, useEffect} from "react";
import UsersList from "./users_list";
import {Database} from "./database.js";

function SearchForm() {
    const [searchText, setSearchText] = useState("");
    const [searchResults, setSearchResults] = useState([]);

    const handleSearchChange = (event) => {
        setSearchText(event.target.value);
    };

    const usersData =  new Database();

    useEffect(() => {
        const searchObj = { nome: searchText };

        usersData
            .findUser(searchObj)
            .then((user) => {
                setSearchResults([user]); 
            })
            .catch((error) => {
                setSearchResults([]); 
            });
    }, [searchText, usersData]);

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
