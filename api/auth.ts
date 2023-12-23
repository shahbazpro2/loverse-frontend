import { responseApi } from "use-hook-api"

export const createUserApi = (payload: any) => {
    return responseApi('/users/', 'post', payload)
}