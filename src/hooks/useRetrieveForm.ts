import { useQuery } from "@tanstack/react-query"
import { api, apiVerson, baseURL } from "../api/api"


// custom hook to retrieve application form'
const programId = Math.floor(Math.random() * 1000000000000)

const retriveFormUrl = `${baseURL}/${apiVerson}/programs/${programId}/application-form`


const fetchApplicationForm = () => api.get(retriveFormUrl).then((response) => response.data)

const useRetreiveForm = () => {

    const { data: retrievedFormData, error, isLoading, refetch } = useQuery({
        queryKey: ["retrive application"],
        queryFn: fetchApplicationForm
    })

    return { retrievedFormData, isLoading, refetch, error }
}

export default useRetreiveForm