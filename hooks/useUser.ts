import userAtom from '@jotai/authdata'
import { useAtomValue } from 'jotai'

const useUser = () => {
    const user: any = useAtomValue(userAtom)
    return user
}

export default useUser