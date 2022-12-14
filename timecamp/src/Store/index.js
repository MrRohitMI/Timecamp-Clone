import { legacy_createStore, combineReducers,compose, applyMiddleware} from "redux"

import thunk from "redux-thunk";
import { authReducer } from "./auth/auth.reducer";
import { projectReducer } from "./Projects/projects.reducer";
import { tasksReducer } from "./tasks/tasks.reducer";
const rootReducer = combineReducers( {
    auth : authReducer,
    projects: projectReducer,
    tasks : tasksReducer,
})

const createComposer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const store = legacy_createStore(
    rootReducer,
    createComposer(applyMiddleware(thunk))
);