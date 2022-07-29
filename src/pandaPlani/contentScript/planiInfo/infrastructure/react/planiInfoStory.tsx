import React, { ReactElement } from 'react';
import { Story } from '../../../../../common/domain/story/story';

const NO_STORY_POINTS = '-';

interface PlaniInfoStoryProps {
    story: Story;
}

export const PlaniInfoStory: (props: PlaniInfoStoryProps) => ReactElement = ({ story }) =>
    <div className="plani-info-story">
        <div className="plani-info-story-name">{ story.name }</div>
        <div className="plani-info-story-points-container">
            <div className="plani-info-story-points">{ story.points || NO_STORY_POINTS }</div>
        </div>
    </div>