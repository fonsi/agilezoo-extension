import React, { useEffect, useState } from 'react';
import { FunctionComponent } from 'react';
import { SprintId } from '../../../../../common/domain/sprint/sprint';
import IconButton from '@mui/material/IconButton';
import PetsIcon from '@mui/icons-material/Pets';
import { useSelector } from 'react-redux';
import { getCurrentSprint } from '../../../../../common/infrastructure/state/sprint/selectors';
import { selectCurrentSprint } from '../../selectCurrentSprint';

interface SprintSelectionButtonProps {
    sprintId: SprintId;
}

type ButtonColor = 'primary' | 'success';

export const SprintSelectionButton: FunctionComponent<SprintSelectionButtonProps> = ({ sprintId}) => {
    const currentSprint = useSelector(getCurrentSprint);
    const [color, setColor] = useState<ButtonColor>('primary');

    useEffect(() => {
        const color: ButtonColor = currentSprint?.id === sprintId ? 'success' : 'primary';

        setColor(color);
    }, [currentSprint]);

    return (
        <IconButton
            size="small"
            color={color}
            onClick={() => selectCurrentSprint(sprintId)}
        >
            <PetsIcon />
        </IconButton>
    );
}
