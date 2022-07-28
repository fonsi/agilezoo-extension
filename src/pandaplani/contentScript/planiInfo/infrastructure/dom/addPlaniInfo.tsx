import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { store } from '../../../../../common/infrastructure/state/state';
import { PlaniInfo } from '../react/planiInfo';

const PlaniInfoContainerClass = 'plani-info-container';
const PlaniInfoContainerIsOpenedClass = 'is-opened';

export const addPlaniInfo = (placeholder: HTMLElement): void => {
    const planiInfoContainer = document.createElement('div');
    planiInfoContainer.classList.add(PlaniInfoContainerClass);

    placeholder.appendChild(planiInfoContainer);

    const handleOnOpened = (isOpened: boolean): void => {
        if (isOpened) {
            planiInfoContainer.classList.add(PlaniInfoContainerIsOpenedClass);
        } else {
            setTimeout(() => {
                planiInfoContainer.classList.remove(PlaniInfoContainerIsOpenedClass);
            }, 100);
        }
    }

    render(
        <Provider store={store}>
            <PlaniInfo onOpened={handleOnOpened} />
        </Provider>,
        planiInfoContainer,
    );
}