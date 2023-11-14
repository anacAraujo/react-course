import React, { useState, useEffect } from "react";
import UsersList from "./users_list";

function SearchAPI() {
    const [searchText, setSearchText] = useState("");
    const [searchResults, setSearchResults] = useState([]);

    const handleSearchChange = (event) => {
        setSearchText(event.target.value);
        console.log(`handleSearchChange: ${event.target.value}`)
    };

    const handleFetchData = async () => {
        try {
            const response = await fetch(`https://randomuser.me/api/?nat=${searchText}`);
            const result = await response.json();
            console.log(result);
            //formatar a info que vem de acordo com a database

            const resultUser = result.results[0];

            const user = [{
                id: resultUser.id.value,
                nome: resultUser.name.first + " " + resultUser.name.last,
                username: resultUser.login.username,
                gn: resultUser.gender,
                tlf: resultUser.phone
            }];

            setSearchResults(user);
        } catch (error) {
            console.error("Error fetching data. " + error)
        }
    }

    useEffect(() => {
        handleFetchData();
    }, [searchText])

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

export default SearchAPI;