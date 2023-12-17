import { createContext, useContext, useState, useMemo, useEffect } from 'react';

const BROADCAST_TRANSFER_KEY = 'broadcast-message';
export const StorageCastContext = createContext(null);


export default function Index({ children }) {
    const [storageCastData, setStorageCastData] = useState();

    useEffect(() => {
        window.addEventListener('storage', (e) => {
            if (e.key !== BROADCAST_TRANSFER_KEY) {
                return false;
            }
            const message = JSON.parse(e.newValue);

            if (message && message.broadcast) {
                setStorageCastData(message.payload)
            }
        });
    }, [])

    function send(payload) {
        localStorage.setItem(BROADCAST_TRANSFER_KEY, JSON.stringify({
            payload,
            broadcast: true
        }));

    }


    const staregeProviderValue = useMemo(
        () => ({
            storageCastData,
            send,
        }),
        [storageCastData]
    )

    return (
        <StorageCastContext.Provider value={staregeProviderValue}>
            {children}
        </StorageCastContext.Provider>
    )
}
