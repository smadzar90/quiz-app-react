import { CHANGE_CATEGORY, CHANGE_AMOUNT, CHANGE_DIFFICULTY, CHANGE_TYPE, CHANGE_SCORE, SCORE_TO_ZERO } from "./quizTypes";


const initial_state = {
    quiz_category: '',
    quiz_amount: 10,
    quiz_type: '',
    quiz_difficulty: '',
    score: 0
}

const quizReducer = (state = initial_state, action) => {
    
    switch(action.type) {
        case CHANGE_AMOUNT:
            return {
                ...state,
                quiz_amount: action.payload.amount
            };
        case CHANGE_CATEGORY:
            return {
                ...state,
                quiz_category: action.payload.category
            };
        case CHANGE_DIFFICULTY:
            return {
                ...state,
                quiz_difficulty: action.payload.difficulty
            };
        case CHANGE_TYPE:
            return {
                ...state,
                quiz_type: action.payload.type
            };
        case CHANGE_SCORE:
            return {
                ...state,
                score: state.score + 1
            };
        case SCORE_TO_ZERO:
            return {
                ...state,
                score: 0
            };
        default:
            return state;
    }
};

export default quizReducer;