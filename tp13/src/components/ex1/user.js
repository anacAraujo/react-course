import React from "react";
import ShoppingList from "./shoppingList";

function User({ name, initialItems }) {
    return (
        <div>
            <h2>{name}'s Shopping List</h2>
            <ShoppingList initialItems={initialItems} />
        </div>
    );
}

export default User;