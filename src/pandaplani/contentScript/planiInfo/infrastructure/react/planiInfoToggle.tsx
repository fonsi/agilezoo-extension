import React from 'react';
import { FunctionComponent } from 'react';
import Fab from '@mui/material/Fab';
import CloseIcon from '@mui/icons-material/Close';
import PetsIcon from '@mui/icons-material/Pets';

interface PlaniInfoToggleProps {
    onClick: () => void;
    isOpened: boolean;
}

export const PlaniInfoToggle: FunctionComponent<PlaniInfoToggleProps> = ({onClick, isOpened}) =>
    <Fab className="plani-info-toggle" size="small" onClick={onClick}>{isOpened ? <CloseIcon /> : <PetsIcon />}</Fab>