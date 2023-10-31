import { createStore } from "redux";
import quizReducer from "./quizReducer";
import { loadState } from "../local_storage/localestorage";
import { saveState } from "../local_storage/localestorage";


const store = createStore(quizReducer, loadState());

store.subscribe(() => {
    saveState(store.getState())
});

export default store;