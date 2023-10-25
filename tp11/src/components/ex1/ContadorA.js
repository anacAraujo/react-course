import React, { useState } from 'react';

function ContadorA() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <p>Clicou {count} vezes</p>
            <button onClick={() => setCount(count + 1)}> Click Me </button>
        </div>
    );
}

export { ContadorA };