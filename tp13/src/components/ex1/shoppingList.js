import React, { useState } from "react";

function ShoppingList({ initialItems }) {
    const [items, setItems] = useState(initialItems || []);
    const [newItem, setNewItem] = useState("");

    const addItem = () => {
        if (newItem.trim() !== "") {
            setItems([...items, newItem]);
            setNewItem("");
        }
    };

    const removeItem = (index) => {
        const newItems = [...items];
        newItems.splice(index, 1);
        setItems(newItems);
    };

    return (
        <div>
            <ul>
                {items.map((item, index) => (
                    <li key={index}>
                        {item} <button onClick={() => removeItem(index)}>Remove</button>
                    </li>
                ))}
            </ul>
            <input
                type="text"
                value={newItem}
                onChange={(e) => setNewItem(e.target.value)}
            />
            <button onClick={addItem}>Add Item</button>
        </div>
    );
}

export default ShoppingList;