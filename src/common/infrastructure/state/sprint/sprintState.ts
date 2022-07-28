import { Sprint, SprintId } from '../../../domain/sprint/sprint';

export interface SprintState {
    currentSprint: SprintId;
    sprints: Record<SprintId, Sprint>
}