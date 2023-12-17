import StorageProvider from './storageCast'

export default function Index({ children }) {
    return (
        <StorageProvider>
            {children}
        </StorageProvider>
    )
}
