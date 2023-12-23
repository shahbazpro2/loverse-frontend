import { signIn } from "next-auth/react"
import { FcGoogle } from "react-icons/fc"


export const GoogleButton = () => {
    return (
        <button
            onClick={() => {
                signIn("google")
            }}
            className='flex gap-2 bg-white rounded-xl px-3 py-3 items-center justify-center w-full text-gray-900'
        >
            <FcGoogle className='h-7 w-7' />
            Continue with Google
        </button>
    )
}