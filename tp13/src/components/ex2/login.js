import React, { useState } from "react";

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");

    const users = [
        { username: "user1", password: "senha1" },
        { username: "user2", password: "senha2" },
        { username: "user3", password: "senha3" },
    ];

    const handleLogin = () => {
        const user = users.find(
            (u) => u.username === username && u.password === password
        );

        if (user) {
            setMessage(`Bem-vindo ${user.username}`);
        } else {
            setMessage("Credenciais inválidas. Tente novamente.");
        }
    };

    return (
        <div>
            <h1>Login App</h1>
            <div>
                <input
                    type="text"
                    placeholder="Nome de utilizador"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
            </div>
            <div>
                <input
                    type="password"
                    placeholder="Senha"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <div>
                <button onClick={handleLogin}>Login</button>
            </div>
            <div>
                <p>{message}</p>
            </div>
        </div>
    );

}

export default Login;