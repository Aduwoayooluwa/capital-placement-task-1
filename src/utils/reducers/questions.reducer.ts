type QuestionState = {
    questionType: string;
    questionText: string;
    choiceFieldText: string;
    maxChoices?: number;
    disqualify: boolean;
    otherOption: boolean;
};

//  action types
type QuestionAction =
    | { type: 'SET_QUESTION_TYPE'; payload: string }
    | { type: 'SET_QUESTION_TEXT'; payload: string }
    | { type: 'SET_CHOICE_FIELD_TEXT'; payload: string }
    | { type: 'SET_MAX_CHOICES'; payload: number }
    | { type: 'TOGGLE_DISQUALIFY' }
    | { type: 'TOGGLE_OTHER_OPTION' };

// Reducer function
export const questionReducer = (state: QuestionState, action: QuestionAction): QuestionState => {
    switch (action.type) {
        case 'SET_QUESTION_TYPE':
            return { ...state, questionType: action.payload };
        case 'SET_QUESTION_TEXT':
            return { ...state, questionText: action.payload };
        case 'SET_CHOICE_FIELD_TEXT':
            return { ...state, choiceFieldText: action.payload };
        case 'SET_MAX_CHOICES':
            return { ...state, maxChoices: action.payload };
        case 'TOGGLE_DISQUALIFY':
            return { ...state, disqualify: !state.disqualify };
        case 'TOGGLE_OTHER_OPTION':
            return { ...state, otherOption: !state.otherOption };
        default:
            return state;
    }
};

export const initialState: QuestionState = {
    questionType: 'Paragraph',
    questionText: '',
    choiceFieldText: '',
    maxChoices: undefined,
    disqualify: false,
    otherOption: false,
};
