import { useQuery } from "@tanstack/react-query"
import { api, baseURL } from "../api/api"

console.log(baseURL)
// custom hook to retrieve application form
//const retriveFormUrl = `${baseURL}/:version/programs/:programId/application-form`
const dummyUrl = `http://127.0.0.1:4010/api/663.5847423271675/programs/qui/application-form`

const fetchApplicationForm = () => api.get(dummyUrl).then((response) => response.data)

const useRetreiveForm = () => {

    const { data: retrievedFormData, error, isLoading, refetch } = useQuery({
        queryKey: ["retrive application"],
        queryFn: fetchApplicationForm
    })

    return { retrievedFormData, isLoading, refetch, error }
}

export default useRetreiveForm