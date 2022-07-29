import React, { ReactElement } from 'react';
import { useSelector } from 'react-redux';
import { calculateSprintStatus, getCurrentSprint } from '../../../../../common/infrastructure/state/sprint/selectors';
import Stack from '@mui/material/Stack';
import { PlaniInfoStatusComponent } from './planiInfoStatusComponent';

export const PlaniInfoStatus: () => ReactElement = () => {
    const currentSprint = useSelector(getCurrentSprint);
    const sprintStatus = useSelector((state) => {
         return calculateSprintStatus(state, currentSprint.id);
    });

    return (
        <div className="plani-info-status">
            {
                sprintStatus.components.length ?
                    <Stack
                        direction="row"
                        justifyContent="space-between"
                        spacing={1}
                        alignItems="stretch"
                    >
                        {
                            sprintStatus.components.map(component =>
                                <PlaniInfoStatusComponent key={component.name} statusComponent={component} />
                            )
                        }
                    </Stack> : null
            }
        </div>
    )
}