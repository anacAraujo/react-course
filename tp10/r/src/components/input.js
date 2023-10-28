import React, { useState } from "react";

function UserInput() {
    const [textareaValue, setTextareaValue] = useState("");

    // Função para atualizar o valor do <p> à medida que o user digita no <textarea>
    const handleTextareaChange = (event) => {
        setTextareaValue(event.target.value);
    };

    return (
        <div>
            <textarea
                id="userInput"
                onChange={handleTextareaChange}
                value={textareaValue}
            ></textarea>
            <p>{textareaValue}</p>
        </div>
    );
}

export { UserInput };
