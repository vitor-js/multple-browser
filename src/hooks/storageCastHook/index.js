import { useContext } from 'react'
import { StorageCastContext } from '../../context/storageCast'

function useStorageCast() {
    const context = useContext(StorageCastContext)
    return context
}
export default useStorageCast
