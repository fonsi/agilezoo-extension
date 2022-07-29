import React, { FunctionComponent, useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Chip from '@mui/material/Chip';
import { useSelector } from 'react-redux';
import { getCurrentSprint } from '../../../../../common/infrastructure/state/sprint/selectors';
import { NoCurrentSprint } from './noCurrentSprint';
import { PlaniInfoStory } from './planiInfoStory';
import { StoryComponentsList } from '../../../../../common/domain/story/story';
import { getComponentsListFromSprint } from '../../../../../common/domain/sprint/getComponentsListFromSprint';
import { PlaniInfoConfig } from './planiInfoConfig';
import { PlaniInfoStatus } from './planiInfoStatus';

export const PlaniInfoCard: FunctionComponent = () => {
    const currentSprint = useSelector(getCurrentSprint);
    const [components, setComponents] = useState<StoryComponentsList>([]);

    useEffect(() => {
        setComponents(getComponentsListFromSprint(currentSprint));
    }, [currentSprint]);

    return (
        <Card className="plani-info-card">
            {currentSprint ?
                <CardContent sx={{width: "100%"}}>
                    <div className="plani-info-card-content">
                        <Typography variant="h4" component="div">
                            {currentSprint.name}
                        </Typography>
                        <PlaniInfoConfig />
                        <PlaniInfoStatus />
                    </div>
                </CardContent> :
                <NoCurrentSprint />
            }
        </Card>
    )
}