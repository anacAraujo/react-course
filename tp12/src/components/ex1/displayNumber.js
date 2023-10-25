import { useState } from "react";
import Somar from "./somar";
import Subtrair from "./subtrair";

function DisplayNumber() {
    const [num, setNum] = useState(0);

    const increment = () => {
        setNum(num + 1);
    };

    const decrement = () => {
        setNum(num - 1);
    };

    const numberStyle = {
        backgroundColor: 'blue',
        color: 'white',
        fontSize: '2rem',
        textAlign: 'center',
        padding: '20px',
    }

    return (
        <div>
            <div style={numberStyle}>Número</div>
            <div>
                <Somar increment={increment}></Somar>
                <div>{num}</div>
                <Subtrair decrement={decrement}></Subtrair>
            </div>

        </div>
    );
}

export { DisplayNumber };