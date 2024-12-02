import { useEffect, useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/electron-vite.animate.svg';
import './App.css';
import connect from 'apis/Connect.ts';

function App() {
    const [count, setCount] = useState(0);

    const sendConnectRequest = async () => {
        const res = await connect.connectControllerSendConnectRequest({
            hostname: 'localhost',
            port: 4000,
        });
        console.log(res);
    };

    useEffect(() => {
        sendConnectRequest();
    }, []);

    return (
        <>
            <div>
                <a href="https://electron-vite.github.io" target="_blank">
                    <img src={viteLogo} className="logo" alt="Vite logo" />
                </a>
                <a href="https://react.dev" target="_blank">
                    <img src={reactLogo} className="logo react" alt="React logo" />
                </a>
            </div>
            <h1>Vite + React</h1>
            <div className="card">
                <button onClick={() => setCount(count => count + 1)}>count is {count}</button>
                <p>
                    Edit <code>src/App.tsx</code> and save to test HMR
                </p>
            </div>
            <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
        </>
    );
}

export default App;
