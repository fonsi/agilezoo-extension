import React, { ReactElement } from 'react';
import { SprintStatusComponent } from '../../../../../common/domain/sprint/sprint';
import { PlaniInfoStory } from './planiInfoStory';
import { ComponentProgress } from './componentProgress';

interface PlaniInfoStatusComponentProps {
    statusComponent: SprintStatusComponent;
}

export const PlaniInfoStatusComponent: (props: PlaniInfoStatusComponentProps) => ReactElement = ({ statusComponent }) => {
    return (
        <div className="plani-info-status-component">
            <div className="plani-info-status-component-header">
                <div>
                    <div className="plani-info-status-component-title">{statusComponent.name}</div>
                    <div className="plani-info-status-component-subtitle">{statusComponent.stories.length} stories</div>
                </div>
                <ComponentProgress currentPoints={statusComponent.points} maxPoints={50} />
            </div>
            <ul className="plani-info-stories-list">
                {
                    statusComponent.stories.map((story) =>
                        <li>
                            <PlaniInfoStory story={story} />
                        </li>
                    )
                }
            </ul>
        </div>
    )
}