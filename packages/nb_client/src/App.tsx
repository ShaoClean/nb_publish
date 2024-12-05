import { useEffect, useState } from 'react';
import './App.css';
import connect from 'apis/Connect.ts';
import { SendConnectRequestDTO } from 'apis/data-contracts';

function App() {
    const [localInfo, setLocalInfo] = useState<SendConnectRequestDTO>({
        hostname: 'localhost',
        port: 4000,
        username: 'clean',
    });
    const baseURL = 'http://' + localInfo.hostname + ':' + localInfo.port;
    const [targetConnectInfo, setTargetConnectInfo] = useState<SendConnectRequestDTO>({ hostname: '', port: 0, username: '' });

    const sendConnectRequest = async () => {
        const res = await connect.receiveConnectRequest(
            {
                hostname: 'localhost',
                port: 4000,
                username: 'clean',
            },
            {
                baseURL,
            },
        );
        console.log(res);
        if (res.success) {
            setTargetConnectInfo(res.data);
        }
    };

    return (
        <>
            <div className="card">
                <h1 className="read-the-docs">{localInfo.username}</h1>
                <p className="read-the-docs">
                    {localInfo.hostname}:{localInfo.port}
                </p>
            </div>
            {targetConnectInfo.hostname ? (
                <>
                    <h2>连接信息</h2>
                    <h1 className="read-the-docs">{targetConnectInfo.username}</h1>
                    <p className="read-the-docs">
                        {targetConnectInfo.hostname}:{targetConnectInfo.port}
                    </p>
                </>
            ) : null}

            <div className="card">
                <button onClick={sendConnectRequest}>Connect</button>
            </div>
        </>
    );
}

export default App;
