import { useEffect, useState } from 'react';

export default function ShowPosition() {
    const [position, setPosition] = useState('null');

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(
            function (position) {
                const latitude = position.coords.latitude;
                const longitude = position.coords.longitude;
                setPosition(latitude, longitude);
            }
        )
    });

    return (
        <p>Current position: {position}</p>
    );
}