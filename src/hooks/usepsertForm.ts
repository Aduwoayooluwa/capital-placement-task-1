import { useMutation } from "@tanstack/react-query"
import { api, apiVerson, baseURL } from "../api/api"

const programId = Math.floor(Math.random() * 1000000000000)
const upsertFormUrl = `${baseURL}/${apiVerson}/programs/${programId}/application-form`



// eslint-disable-next-line @typescript-eslint/no-explicit-any
const useUpsertForm = (payload: any) => {

    const { mutate, isLoading, error, isError } = useMutation({
        mutationKey: ["upsert app form"],
        mutationFn: async () => await api.put(upsertFormUrl, {
            payload
        }).then((response) => response.data)
    })

    return { mutate, isLoading, error, isError }
}


export default useUpsertForm