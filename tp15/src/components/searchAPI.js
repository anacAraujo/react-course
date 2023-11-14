import React, { useState, useEffect } from "react";
import UsersList from "./users_list";

function SearchAPI() {
    const [searchText, setSearchText] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    
    const handleFetchData = async () => {
        try {
            const response = await fetch(`https://randomuser.me/api/`);
            const user = await response.json();
            console.log(user);
            //formatar a info que vem de acordo com a database
            setSearchResults(user);
        } catch (error) {
            console.error("Error fetching data. " + error)
        } 
    }
    
    useEffect(() => {
        handleFetchData();
    },[])

    return(
        <UsersList usersData={searchResults}></UsersList>
    );

}

export default SearchAPI;