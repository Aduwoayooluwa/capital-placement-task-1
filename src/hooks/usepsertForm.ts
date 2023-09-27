import { useMutation } from "@tanstack/react-query"
import { api, baseURL } from "../api/api"

const upsertFormUrl = `${baseURL}/api/upsert`

const upsertApplicationForm = () => api.put(upsertFormUrl).then((response) => response.data)
const useUpsertForm = () => {

    const { data: handleUpsertForm, isLoading, error } = useMutation({
        mutationKey: ["upsert app form"],
        mutationFn: upsertApplicationForm
    })

    return { handleUpsertForm, isLoading, error }
}


export default useUpsertForm