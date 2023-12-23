/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/display-name */
'use client'

import { createUserApi } from "@api/auth"
import useMe from "@hooks/useMe"
import userAtom from "@jotai/authdata"
import { useSetAtom } from "jotai"
import { useSession } from "next-auth/react"
import { usePathname, useRouter } from 'next/navigation'
import { useEffect } from "react"
import { useApi } from "use-hook-api"

const isPrivateRoute = (pathname: string) => {
    const authRoutes = ['/profile']
    return authRoutes.includes(pathname)
}

const WithAuth = ({ children }) => {
    const pathname = usePathname()
    const router = useRouter()
    const [createUser] = useApi({ both: false })
    const { data, error } = useMe()
    const setUser = useSetAtom(userAtom)
    const session = useSession()

    useEffect(() => {
        if (data && !error) {
            setUser(data)
        } else if (error) {
            if (session?.data?.user?.email) {
                const { email, name, image } = session?.data?.user
                createUser(createUserApi({
                    email: email,
                    name: name,
                    image: image,
                }), ({ data }) => {
                    localStorage.setItem('token', data.access_token)
                    window.location.reload()
                    console.log(data)
                })
            }
        }
    }, [data, error, session?.data])
    if ((!data && !error)) {
        if (isPrivateRoute(pathname)) {
            router.push('/')
        }
        return <div>Loading...</div>
    } else if (error && isPrivateRoute(pathname)) {
        router.push('/')
        return null
    }

    console.log('data', data, error)

    return children
}

export default WithAuth
