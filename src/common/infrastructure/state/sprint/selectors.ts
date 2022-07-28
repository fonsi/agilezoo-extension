import { ApplicationState } from '../state';
import { Sprint, SprintId, SprintStatus, SprintStatusComponent } from '../../../domain/sprint/sprint';
import find from 'lodash/find';

const TECH_POINTS_PERCENTAGE = 0.2;

export const getSprintById = (state: ApplicationState, sprintId: SprintId): Sprint => {
    return state.sprint.sprints?.[sprintId] || null;
}

export const getCurrentSprint = (state: ApplicationState): Sprint => {
    if (!state.sprint?.currentSprint) {
        return null;
    }

    return getSprintById(state, state.sprint.currentSprint);
};

export const calculateSprintPoints = (state: ApplicationState, sprintId: SprintId): number => {
    const sprint = getSprintById(state, sprintId);

    if (!sprint) {
        return 0;
    }

    const workDaysMultiplier = sprint.config.workingDays / sprint.config.baseWorkingDays;
    const totalMembers = sprint.config.members.backend + sprint.config.members.frontend;

    return sprint.config.velocity * workDaysMultiplier * totalMembers;
};

export const calculateSprintTechPoints = (state: ApplicationState, sprintId: SprintId): number => {
    const sprintPoints = calculateSprintPoints(state, sprintId);

    return sprintPoints * TECH_POINTS_PERCENTAGE;
};

export const calculateSprintStatus = (state: ApplicationState, sprintId: SprintId): SprintStatus => {
    const sprint = getSprintById(state, sprintId);

    if (!sprint) {
        return {
            components: []
        }
    }

    const components = sprint.stories.reduce((acc, story) => {
        story.components.forEach((component: string) => {
            const componentStatus: SprintStatusComponent = find<SprintStatusComponent>(acc, { name: component });

            if (!componentStatus) {
                acc.push({
                    name: component,
                    points: story.points,
                    stories: [ story ],
                });

                return;
            }

            componentStatus.points += story.points;
            componentStatus.stories.push(story);
        });

        return acc;
    }, [] as SprintStatusComponent[]);

    return {
        components,
    }
}
