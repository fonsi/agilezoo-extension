import { SprintId } from '../../../../../common/domain/sprint/sprint';

export const SPRINT_CONTAINER_SELECTOR = '.ghx-backlog-container';
const SPRINT_ID_DATA_ATTR = 'data-sprint-id';

export const getSprintContainer = (container: HTMLElement, sprintId: SprintId): HTMLElement => {
    const selector = `${SPRINT_CONTAINER_SELECTOR}[${SPRINT_ID_DATA_ATTR}="${sprintId}"]`;

    return container.querySelector(selector);
}

export const getSprintsContainers = (container: HTMLElement): HTMLElement[] =>
    Array.from(container.querySelectorAll(SPRINT_CONTAINER_SELECTOR));