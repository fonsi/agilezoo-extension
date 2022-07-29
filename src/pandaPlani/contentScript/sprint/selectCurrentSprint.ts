import { SprintId } from '../../../common/domain/sprint/sprint';
import { dispatch, getState } from '../../../common/infrastructure/state/state';
import { addSprints, setCurrentSprint } from '../../../common/infrastructure/state/sprint/actions';
import { getSprintById } from '../../../common/infrastructure/state/sprint/selectors';
import { getSprintStories } from '../story/getSprintStories';

export const selectCurrentSprint = async (sprintId: SprintId): Promise<void> => {
    const stories = await getSprintStories(sprintId);
    const sprint = getSprintById(getState(), sprintId);
    sprint.stories = stories;

    dispatch(addSprints({
        [sprintId]: sprint,
    }));
    dispatch(setCurrentSprint(sprintId));
}