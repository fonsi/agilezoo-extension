import React, { ReactElement, useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import { max } from 'rxjs';

interface ComponentProgressProps {
    currentPoints: number;
    maxPoints: number;
}

export const ComponentProgress = ({ currentPoints, maxPoints }: ComponentProgressProps): ReactElement => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const progress = currentPoints / maxPoints * 100;

        setProgress(progress > 100 ? 100 : progress);
    }, [currentPoints, maxPoints]);

    return (
        <Box sx={{ position: 'relative', display: 'inline-flex' }}>
            <CircularProgress variant="determinate" value={progress} />
            <Box
                sx={{
                    top: 0,
                    left: 0,
                    bottom: 0,
                    right: 0,
                    position: 'absolute',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <Typography variant="caption" component="div" color="text.secondary">
                    { currentPoints }
                </Typography>
            </Box>
        </Box>
    );
}