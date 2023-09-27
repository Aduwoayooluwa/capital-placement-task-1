interface personalInfoDetailsProps {
    internalUse?: boolean;
    show?: boolean;
}

interface profileDetailsProps {
    mandatory?: boolean;
    show?: boolean;
}

interface questionProps {
    id?: string
    type?: string
    question?: string
    choices?: string[]
    maxChoice?: number
    disqualify?: boolean
    other?: boolean

}


interface personalInfoProps {
    firstName: personalInfoDetailsProps
    lastName: personalInfoDetailsProps
    emailId: personalInfoDetailsProps
    phoneNumber: personalInfoDetailsProps
    nationality: personalInfoDetailsProps
    idNumber: personalInfoDetailsProps
    currentResidence: personalInfoDetailsProps
    dateOfBirth: personalInfoDetailsProps
    gender: personalInfoDetailsProps
    personalQuestions: questionProps[]
}

interface profileProps {
    education?: profileDetailsProps
    experience?: profileDetailsProps
    resume?: profileDetailsProps
    profileQuestions?: questionProps[]
}

interface retrievedFormAttributes {
    coverImage: string
    personalInformation: personalInfoProps
    profile: profileProps
    customisedQuestions: questionProps[]
}

export interface RetrieveFormData {
    id: string
    type: string
    attributes: retrievedFormAttributes
}

