import React, { FunctionComponent, MouseEventHandler, useState } from 'react';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import { useSelector } from 'react-redux';
import {
    calculateSprintPoints,
    calculateSprintTechPoints,
    getCurrentSprint
} from '../../../../../common/infrastructure/state/sprint/selectors';
import { PlaniInfoConfigEdit } from './planiInfoConfigEdit';

const formatDecimalNumber = (n: number, decimals = 2): number =>
    +n.toFixed(decimals);

export const PlaniInfoConfig: FunctionComponent = () => {
    const currentSprint = useSelector(getCurrentSprint);
    const sprintPoints = useSelector((state) => {
        return formatDecimalNumber(calculateSprintPoints(state, currentSprint.id));
    });
    const sprintTechPoints = useSelector((state) => {
        return formatDecimalNumber(calculateSprintTechPoints(state, currentSprint.id));
    });
    const [isEditing, setIsEditing] = useState<boolean>(false);

    const onSaveCallback = () => {
        setIsEditing(false);
    }

    const onEdit: MouseEventHandler<HTMLButtonElement> = () => {
        setIsEditing(true);
    }

    return (
        <div className="plani-info-config">
            {isEditing ?
                <PlaniInfoConfigEdit onSaveCallback={onSaveCallback}/> :
                <div className="plani-info-config-detail">
                    <div className="plani-info-config-summary">
                        {sprintPoints} points ({sprintTechPoints} tech)
                    </div>
                    <div className="plani-info-config-hint">
                        (Work days: <strong>{currentSprint.config.workingDays}</strong>, velocity: <strong>{currentSprint.config.velocity}</strong>,
                        people: <strong>{currentSprint.config.members.backend + currentSprint.config.members.frontend}</strong>)
                    </div>
                    <IconButton className="plani-info-config-edit-btn" size="small" aria-label="delete"
                                onClick={onEdit}>
                        <EditIcon fontSize="small"/>
                    </IconButton>
                </div>
            }
        </div>
    )
}