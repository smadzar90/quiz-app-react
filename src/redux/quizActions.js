import { CHANGE_CATEGORY, CHANGE_DIFFICULTY, CHANGE_AMOUNT, CHANGE_TYPE, CHANGE_SCORE, SCORE_TO_ZERO } from "./quizTypes";


export const change_category = (category) => {
    return {
        type: CHANGE_CATEGORY,
        payload: { category }
    };
};

export const change_amount = (amount) => {
    return {
        type: CHANGE_AMOUNT,
        payload: { amount }
    };
};

export const change_type = (type) => {
    return {
        type: CHANGE_TYPE,
        payload: { type }
    };
};

export const change_difficulty = (difficulty) => {
    return {
        type: CHANGE_DIFFICULTY,
        payload: { difficulty }
    };
};

export const change_score = () => {
    return {
        type: CHANGE_SCORE
    };
}

export const score_to_zero = () => {
    return {
        type: SCORE_TO_ZERO
    };
}






