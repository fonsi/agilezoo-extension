import { ADD_SPRINTS, SET_CURRENT_SPRINT } from './actionTypes';
import { Sprint, SprintId } from '../../../domain/sprint/sprint';

export const setCurrentSprint = (sprintId: SprintId) => ({
    type: SET_CURRENT_SPRINT,
    payload: sprintId,
});

export const addSprints = (sprints: Record<SprintId, Sprint>) => ({
    type: ADD_SPRINTS,
    payload: sprints,
});

