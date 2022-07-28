import { Reducer } from 'redux';
import { SprintState } from './sprintState';
import { ADD_SPRINTS, SET_CURRENT_SPRINT } from './actionTypes';
import CustomAction from '../customAction';
import { Sprint, SprintId } from '../../../domain/sprint/sprint';

const initialState: SprintState = {
    currentSprint: null,
    sprints: {},
}

export const sprint: Reducer<SprintState> = (state = initialState, { type, payload }: CustomAction) => {
    switch (type) {
        case SET_CURRENT_SPRINT:
            return setCurrentSprint(state, payload);

        case ADD_SPRINTS:
            return addSprints(state, payload);

        default:
            return state;
    }
};


const setCurrentSprint = (state: SprintState, sprintId: SprintId): SprintState => {
    return {
        ...state,
        currentSprint: sprintId || null,
    }
}

const addSprints = (state: SprintState, sprints: Record<SprintId, Sprint>): SprintState => {
    return {
        ...state,
        sprints: {
            ...state.sprints,
            ...sprints,
        }
    }
}
