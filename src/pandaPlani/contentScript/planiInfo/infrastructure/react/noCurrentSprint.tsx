import React, { FunctionComponent } from 'react';
import WarningIcon from '@mui/icons-material/Warning';

export const NoCurrentSprint: FunctionComponent = () =>
    <div className="no-current-sprint">
        <WarningIcon fontSize='large' color="warning" />
        <p><strong>No sprint selected.</strong></p>
        <p>Please, select one from your backlog.</p>
    </div>