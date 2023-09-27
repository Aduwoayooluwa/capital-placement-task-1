import './App.css'
import { Box } from "@chakra-ui/react"
import Sidebar from './Layout/Sidebar'

//import Question from './components/composite/Question'
import NavStepper from './Layout/NavStepper'
import PersonalInformation from './view/PersonalInformation'
import Profile from './view/Profile'
import AdditionalQuestions from './view/AdditionalQuestions'
import ElementLayer from './Layout/ElementLayer'
import FileUpload from './components/ui/input/FileUpload'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"



function App() {

  const queryClient = new QueryClient

  return (
    <QueryClientProvider client={queryClient}>
    <Sidebar>   
      <Box>
        <NavStepper />
        <Box as="span" my={20}></Box>
        
        <Box w={"595px"}>
          <ElementLayer title='Upload Image'>
            <FileUpload text="Upload cover image" otherMessage='16:9 ratio is recommended. Max image size 1mb'/>
          </ElementLayer>
          <PersonalInformation />
          
          <Box my={20}></Box>

          <Profile />

          <Box my={20}></Box>

          <AdditionalQuestions />

        </Box>
        
      </Box>
    </Sidebar>
    </QueryClientProvider>
  )
}

export default App
