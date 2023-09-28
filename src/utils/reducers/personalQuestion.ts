import { initialFormData } from '../../api/UpsertFormData';

// Define action types
type ActionType =
    | { type: 'UPDATE_FIRST_NAME'; payload: string }
    | { type: 'UPDATE_LAST_NAME'; payload: string }
    | { type: 'UPDATE_EMAIL'; payload: string }
    | { type: 'UPDATE_PHONE_NUMBER'; payload: string }
    | { type: 'UPDATE_NATIONALITY'; payload: string }
    | { type: 'UPDATE_CURRENT_RESIDENCE'; payload: string }
    | { type: 'UPDATE_ID_NUMBER'; payload: string }
    | { type: 'UPDATE_DATE_OF_BIRTH'; payload: string }
    | { type: 'UPDATE_GENDER'; payload: string };

// Define a reducer function
export const formReducer = (state: typeof initialFormData, action: ActionType) => {
    switch (action.type) {
        case 'UPDATE_FIRST_NAME':
            return {
                ...state,
                data: {
                    ...state.data,
                    attributes: {
                        ...state.data.attributes,
                        personalInformation: {
                            ...state.data.attributes.personalInformation,
                            firstName: {
                                ...state.data.attributes.personalInformation.firstName,
                                show: true,
                            },
                        },
                    },
                },
            };
        case 'UPDATE_LAST_NAME':
            return {
                ...state,
                data: {
                    ...state.data,
                    attributes: {
                        ...state.data.attributes,
                        personalInformation: {
                            ...state.data.attributes.personalInformation,
                            lastName: {
                                ...state.data.attributes.personalInformation.lastName,
                                show: true,
                            },
                        },
                    },
                },
            };
        case 'UPDATE_EMAIL':
            return {
                ...state,
                data: {
                    ...state.data,
                    attributes: {
                        ...state.data.attributes,
                        personalInformation: {
                            ...state.data.attributes.personalInformation,
                            emailId: {
                                ...state.data.attributes.personalInformation.emailId,
                                show: true,
                            },
                        },
                    },
                },
            };
        case 'UPDATE_PHONE_NUMBER':
            return {
                ...state,
                data: {
                    ...state.data,
                    attributes: {
                        ...state.data.attributes,
                        personalInformation: {
                            ...state.data.attributes.personalInformation,
                            phoneNumber: {
                                ...state.data.attributes.personalInformation.phoneNumber,
                                show: true,
                            },
                        },
                    },
                },
            };
        case 'UPDATE_NATIONALITY':
            return {
                ...state,
                data: {
                    ...state.data,
                    attributes: {
                        ...state.data.attributes,
                        personalInformation: {
                            ...state.data.attributes.personalInformation,
                            nationality: {
                                ...state.data.attributes.personalInformation.nationality,
                                show: true,
                            },
                        },
                    },
                },
            };
        case 'UPDATE_CURRENT_RESIDENCE':
            return {
                ...state,
                data: {
                    ...state.data,
                    attributes: {
                        ...state.data.attributes,
                        personalInformation: {
                            ...state.data.attributes.personalInformation.currentResidence,
                            show: true,
                        },
                    },
                },
            };
        case 'UPDATE_ID_NUMBER':
            return {
                ...state,
                data: {
                    ...state.data,
                    attributes: {
                        ...state.data.attributes,
                        personalInformation: {
                            ...state.data.attributes.personalInformation.idNumber,
                            show: true,
                        },
                    },
                },
            };
        case 'UPDATE_DATE_OF_BIRTH':
            return {
                ...state,
                data: {
                    ...state.data,
                    attributes: {
                        ...state.data.attributes,
                        personalInformation: {
                            ...state.data.attributes.personalInformation.dateOfBirth,
                            show: true,
                        },
                    },
                },
            };
        case 'UPDATE_GENDER':
            return {
                ...state,
                data: {
                    ...state.data,
                    attributes: {
                        ...state.data.attributes,
                        personalInformation: {
                            ...state.data.attributes.personalInformation.gender,
                            show: true,
                        },
                    },
                },
            };
        default:
            return state;
    }
};

