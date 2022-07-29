import { Story } from '../../../common/domain/story/story';
import { SprintId } from '../../../common/domain/sprint/sprint';
import { getSprintContainer } from '../sprint/infrastructure/dom/getSprintContainers';
import { getStoriesFromSprintContainer } from './infrastructure/dom/getStoriesFromSprintContainer';
import { getStoryInfo } from './infrastructure/http/getStoryInfo';

export const getSprintStories = async (sprintId: SprintId): Promise<Story[]> => {
    const sprintContainer = getSprintContainer(document.body, sprintId);
    const stories = getStoriesFromSprintContainer(sprintContainer);

    const completeStories = stories.map(async (story) => {
        const storyInfo = await getStoryInfo(story.id);

        return {
            ...story,
            components: storyInfo.components.map(component => component.name),
        } as Story;
    });

    return Promise.all(completeStories);
}