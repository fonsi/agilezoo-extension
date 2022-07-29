import { Story, StoryId, StoryType, UNKNOWN_COMPONENT } from '../../../../../common/domain/story/story';

const STORY_CONTAINER_SELECTOR = '.js-issue';
const STORY_NAME_CONTAINER_SELECTOR = '.ghx-summary .ghx-inner';
const STORY_TYPE_CONTAINER_SELECTOR = '.ghx-type';
const STORY_POINTS_CONTAINER_SELECTOR = '.ghx-statistic-badge';
const ISSUE_ID_DATA_ATTR = 'issueId';

const getStoriesContainers = (sprintContainer: HTMLElement): HTMLElement[] =>
    Array.from(sprintContainer.querySelectorAll(STORY_CONTAINER_SELECTOR));

const getStoryId = (storyContainer: HTMLElement): StoryId =>
    storyContainer.dataset[ISSUE_ID_DATA_ATTR];

const getStoryName = (storyContainer: HTMLElement): string =>
    storyContainer.querySelector(STORY_NAME_CONTAINER_SELECTOR)?.textContent || '';

const getStoryType = (storyContainer: HTMLElement): StoryType =>
    (storyContainer
        .querySelector(STORY_TYPE_CONTAINER_SELECTOR)?.getAttribute('title') || '') as StoryType;

const getStoryPoints = (storyContainer: HTMLElement): number => {
    const storyPoints = parseInt(storyContainer.querySelector(STORY_POINTS_CONTAINER_SELECTOR)?.textContent);

    return isNaN(storyPoints) ? null : storyPoints;
}

const processStoryContainer = (storyContainer: HTMLElement): Story => {
    return {
        id: getStoryId(storyContainer),
        name: getStoryName(storyContainer),
        type: getStoryType(storyContainer),
        points: getStoryPoints(storyContainer),
        components: [UNKNOWN_COMPONENT],
    }
}

export const getStoriesFromSprintContainer = (sprintContainer: HTMLElement): Story[] => {
    const storiesContainers = getStoriesContainers(sprintContainer);

    return storiesContainers.map(processStoryContainer);
}