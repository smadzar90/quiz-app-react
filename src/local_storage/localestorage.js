const initial_state = {
    quiz_category: '',
    quiz_amount: 10,
    quiz_type: '',
    quiz_difficulty: '',
    score: 0
}

export const loadState = () => {
    try {
      const serializedState = localStorage.getItem('state');

      if(serializedState == null) {
        return initial_state;
      }
      return JSON.parse(serializedState);
    } catch {
       console.log("Erorr occured!");
       return initial_state;
    }
};

export const saveState = (state) => {
    try {
      const serializedState = JSON.stringify(state);
      localStorage.setItem('state', serializedState);
    } catch {
      console.log("Erorr occured!");
    }
  };
  