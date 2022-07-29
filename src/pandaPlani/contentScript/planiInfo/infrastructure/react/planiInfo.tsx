import React, { ReactElement, useCallback } from 'react';
import { FunctionComponent, useState } from 'react';
import { PlaniInfoToggle } from './planiInfoToggle';
import { PlaniInfoCard } from './planiInfoCard';
import Box from '@mui/material/Box';
import Fade from '@mui/material/Fade';
import ClickAwayListener from '@mui/material/ClickAwayListener';

interface PlaniInfoProps {
    onOpened: (isOpened: boolean) => void;
}

export const PlaniInfo: (props: PlaniInfoProps) => ReactElement = ({ onOpened }) => {
    const [isOpened, setIsOpened] = useState(false);

    const changeOpenedStatus = (openedStatus: boolean): void => {
        setIsOpened(openedStatus);
        onOpened(openedStatus);
    }

    const toggleIsOpened = () => {
        changeOpenedStatus(!isOpened);
    }

    const handleClickAway = useCallback(() => {
        changeOpenedStatus(false);
    }, [isOpened]);

    return (
        <ClickAwayListener onClickAway={handleClickAway}>
            <div>
                <Box>
                    <Fade in={isOpened}>
                        <div className="plani-info-card-container">
                            <PlaniInfoCard />
                        </div>
                    </Fade>
                </Box>
                <PlaniInfoToggle onClick={toggleIsOpened} isOpened={isOpened} />
            </div>
        </ClickAwayListener>
    )
}