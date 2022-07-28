import { Story } from '../story/story';

export const DEFAULT_SPRINT_VELOCITY = 9;
export const DEFAULT_SPRINT_WORKING_DAYS = 8;
export const DEFAULT_SPRINT_MEMBERS = {
    backend: 0,
    frontend: 0,
};
export const DEFAULT_SPRINT_CONFIG: SprintConfig = {
    velocity: DEFAULT_SPRINT_VELOCITY,
    workingDays: DEFAULT_SPRINT_WORKING_DAYS,
    baseWorkingDays: DEFAULT_SPRINT_WORKING_DAYS,
    members: DEFAULT_SPRINT_MEMBERS,
}

export type SprintId = number;
interface SprintMembers {
    backend: number;
    frontend: number;
}

export interface SprintStatusComponent {
    name: string;
    points: number;
    stories: Story[];
}

export interface SprintStatus {
    components: SprintStatusComponent[];
}

export interface SprintConfig {
    velocity: number;
    baseWorkingDays: number;
    workingDays: number;
    members: SprintMembers;
}

export interface Sprint {
    id: SprintId;
    name: string;
    config: SprintConfig;
    stories?: Story[];
}