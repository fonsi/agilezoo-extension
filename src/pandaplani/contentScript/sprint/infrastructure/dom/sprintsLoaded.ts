import { Observable } from 'rxjs';
import { mutationObservable } from '../../../../../common/infrastructure/dom/mutationObservable';
import { filter, take } from 'rxjs/operators';
import { SPRINT_CONTAINER_SELECTOR } from './getSprintContainers';

const containerHasSprints = (container: HTMLElement): boolean =>
    container.querySelector(SPRINT_CONTAINER_SELECTOR) !== null;

export const sprintsLoaded = (container: HTMLElement): Observable<MutationRecord[]> =>
    mutationObservable(container).pipe(
        filter(() => containerHasSprints(container)),
        take(1),
    );