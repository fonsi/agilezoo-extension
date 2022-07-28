export type StoryId = string;
export type StoryComponent = string;
export type StoryComponentsList = Array<{
    component: StoryComponent;
    qty: number;
}>;
export type StoryType = 'Story' | 'Bug';
export const UNKNOWN_COMPONENT = 'unknown';

export interface Story {
    id: StoryId;
    name: string;
    type: StoryType;
    points?: number;
    components?: StoryComponent[];
}