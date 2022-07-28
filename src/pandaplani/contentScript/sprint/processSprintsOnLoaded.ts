import { sprintsLoaded } from './infrastructure/dom/sprintsLoaded';
import { getSprintsContainers } from './infrastructure/dom/getSprintContainers';
import { DEFAULT_SPRINT_CONFIG, Sprint, SprintId } from '../../../common/domain/sprint/sprint';
import { dispatch } from '../../../common/infrastructure/state/state';
import { addSprints } from '../../../common/infrastructure/state/sprint/actions';
import { addSprintSelectionButton } from './infrastructure/dom/addSprintSelectionButton';

const SPRINT_ID_ATTR_NAME = 'data-sprint-id';
const SPRINT_NAME_SELECTOR = '.ghx-name';

const getSprintId = (sprintContainer: HTMLElement): SprintId => parseInt(sprintContainer.getAttribute(SPRINT_ID_ATTR_NAME));
const getSprintName = (sprintContainer: HTMLElement): string => sprintContainer.querySelector(SPRINT_NAME_SELECTOR).textContent;

const processSprintContainer = (sprintContainer: HTMLElement): Sprint => {
    const sprintId = getSprintId(sprintContainer);
    const sprint: Sprint = {
        id: sprintId,
        name: getSprintName(sprintContainer),
        config: DEFAULT_SPRINT_CONFIG,
    };

    addSprintSelectionButton(sprintContainer, sprintId);

    return sprint;
}

export const processSprintsOnLoaded = (container: HTMLElement): Promise<void> => {
    return new Promise<void>((resolve, reject) => {
        sprintsLoaded(container).subscribe(() => {
            const sprintContainers = getSprintsContainers(container);
            const sprints: Record<SprintId, Sprint> = sprintContainers.reduce((acc, sprintContainer) => {
                const sprint = processSprintContainer(sprintContainer);

                return {
                    ...acc,
                    [sprint.id]: sprint,
                }
            }, {});

            dispatch(addSprints(sprints));
            resolve();
        },
        reject);
    });
}
