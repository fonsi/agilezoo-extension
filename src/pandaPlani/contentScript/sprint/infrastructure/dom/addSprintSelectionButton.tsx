import React from 'react';
import { render } from 'react-dom';
import { SprintSelectionButton } from '../react/sprintSelectionButton';
import { Provider } from 'react-redux';
import { store } from '../../../../../common/infrastructure/state/state';
import { SprintId } from '../../../../../common/domain/sprint/sprint';

const SPRINT_HEADER_LEFT_SELECTOR = '.ghx-backlog-header .header-left';
const SPRINT_SELECTION_PLACEHOLDER_CLASS = 'sprint-selection-placeholder';

export const addSprintSelectionButton = (sprintContainer: HTMLElement, sprintId: SprintId): void => {
    const headerLeft = sprintContainer.querySelector(SPRINT_HEADER_LEFT_SELECTOR);
    const buttonPlaceholder = document.createElement('div');
    buttonPlaceholder.classList.add(SPRINT_SELECTION_PLACEHOLDER_CLASS);

    headerLeft.appendChild(buttonPlaceholder);

    render(
        <Provider store={store}>
            <SprintSelectionButton sprintId={sprintId} />
        </Provider>,
        buttonPlaceholder,
    );
}