import { useEffect, useState } from 'react';

export default function Relogio() {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        setTimeout(() => {
            setTime(new Date());
        }, 1000);

    }, [time]);

    return (
        <p>Current time: {time.toLocaleTimeString()}</p>
    );
}
