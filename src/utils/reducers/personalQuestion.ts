type Action =
    | { type: 'TOGGLE_CHECKBOX'; field: string }
    | { type: 'TOGGLE_TOGGLE'; field: string };

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const initialState: any = {
    phone: false,
    nationality: false,
    currentResidence: false,
    idNumber: false,
    dob: false,
    gender: false,
};


export function formReducer(state: typeof initialState, action: Action) {
    switch (action.type) {
        case 'TOGGLE_CHECKBOX':
            return { ...state, [action.field]: !state[action.field] };
        case 'TOGGLE_TOGGLE':
            return { ...state, [action.field]: !state[action.field] };
        default:
            return state;
    }
}
