import { Sprint } from './sprint';
import { StoryComponentsList } from '../story/story';

export const getComponentsListFromSprint = (sprint: Sprint): StoryComponentsList => {
    if (!sprint?.stories?.length) {
        return [];
    }

    return sprint.stories.reduce((acc, story) => {
        const storyComponents = story.components || [];

        storyComponents.forEach(component => {
            let componentFound = false;
            acc.forEach((storyComponent) => {
                if (storyComponent.component === component) {
                    storyComponent.qty += 1;
                    componentFound = true;
                    return;
                }
            });

            if (!componentFound) {
                acc.push({
                    component,
                    qty: 1,
                });
            }
        });

        return acc;
    }, [] as StoryComponentsList);
}