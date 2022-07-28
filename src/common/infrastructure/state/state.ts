import { combineReducers, createStore, Store } from 'redux';
import { sprint } from './sprint/reducer';
import CustomAction from './customAction';
import { SprintState } from './sprint/sprintState';

export interface ApplicationState {
    sprint?: SprintState;
}

let storeInstance: Store<ApplicationState>;

const getStore = (): Store<ApplicationState> => storeInstance || createCustomStore();

const createCustomStore = (initialState: ApplicationState = {}) => {
    const customStore = createStore(
        combineReducers({
            sprint,
        }),
        // @ts-ignore
        initialState,
        // @ts-ignore
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );

    storeInstance = customStore;

    return customStore;
}

export const store = getStore();
export const { getState, subscribe } = storeInstance;
export const dispatch = (action: CustomAction) => {
    if (storeInstance) {
        storeInstance.dispatch(action);
    }
};
