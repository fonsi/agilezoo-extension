import React, { ReactElement, ChangeEventHandler, MouseEventHandler, useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useSelector } from 'react-redux';
import { getCurrentSprint } from '../../../../../common/infrastructure/state/sprint/selectors';
import { Sprint } from '../../../../../common/domain/sprint/sprint';
import { dispatch } from '../../../../../common/infrastructure/state/state';
import { addSprints } from '../../../../../common/infrastructure/state/sprint/actions';

interface PlaniInfoConfigEditProps {
    onSaveCallback: () => void;
}

const NUMBER_INPUT_PATTERN = '[0-9]*\.[0-9]*';

export const PlaniInfoConfigEdit: (props: PlaniInfoConfigEditProps) => ReactElement = ({ onSaveCallback }) => {
    const currentSprint = useSelector(getCurrentSprint);
    const [velocity, setVelocity] = useState<number>(0);
    const [workingDays, setWorkingDays] = useState<string>('0');
    const [baseWorkingDays, setBaseWorkingDays] = useState<string>('0');
    const [backendMembers, setBackendMembers] = useState<string>('0');
    const [frontendMembers, setFrontendMembers] = useState<string>('0');

    useEffect(() => {
        if (!currentSprint) {
            return;
        }

        setVelocity(currentSprint.config.velocity);
        setBaseWorkingDays(currentSprint.config.baseWorkingDays.toString());
        setWorkingDays(currentSprint.config.workingDays.toString());
        setBackendMembers(currentSprint.config.members.backend.toString());
        setFrontendMembers(currentSprint.config.members.frontend.toString());
    }, [currentSprint]);

    const parseNumber = (value: string): number => {
        const num = parseFloat(value);

        if (!value || isNaN(num)) {
            return 0;
        }

        return num;
    }

    const onVelocityChanges: ChangeEventHandler<HTMLInputElement> = (event) => {
        setVelocity(parseNumber(event.target.value));
    }

    const onBaseWorkingDaysChanges: ChangeEventHandler<HTMLInputElement> = (event) => {
        setBaseWorkingDays(event.target.value);
    }

    const onWorkingDaysChanges: ChangeEventHandler<HTMLInputElement> = (event) => {
        setWorkingDays(event.target.value);
    }

    const onBackendMembersChanges: ChangeEventHandler<HTMLInputElement> = (event) => {
        setBackendMembers(event.target.value);
    }

    const onFrontendMembersChanges: ChangeEventHandler<HTMLInputElement> = (event) => {
        setFrontendMembers(event.target.value);
    }

    const onSave: MouseEventHandler<HTMLButtonElement> = () => {
        const sprint: Sprint = {
            ...currentSprint,
            config: {
                ...currentSprint.config,
                velocity,
                baseWorkingDays: parseFloat(baseWorkingDays),
                workingDays: parseFloat(workingDays),
                members: {
                    backend: parseFloat(backendMembers),
                    frontend: parseFloat(frontendMembers),
                }
            }
        }

        dispatch(addSprints({
            [currentSprint.id]: sprint,
        }));

        onSaveCallback();
    }

    return (
        <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
            <div>
                <TextField
                    label="Base working days"
                    id="outlined-base-working-days"
                    name="baseWorkingDays"
                    value={baseWorkingDays}
                    sx={{ m: 1, width: '15ch' }}
                    variant="standard"
                    size="small"
                    inputProps={{ inputMode: 'decimal', pattern: NUMBER_INPUT_PATTERN }}
                    onChange={onBaseWorkingDaysChanges}
                />
                <TextField
                    label="Working days"
                    id="outlined-working-days"
                    name="workingDays"
                    value={workingDays}
                    sx={{ m: 1, width: '15ch' }}
                    variant="standard"
                    size="small"
                    inputProps={{ inputMode: 'decimal', pattern: NUMBER_INPUT_PATTERN }}
                    onChange={onWorkingDaysChanges}
                />
                <TextField
                    label="Team velocity"
                    id="outlined-team-velocity"
                    name="velocity"
                    value={velocity}
                    sx={{ m: 1, width: '15ch' }}
                    variant="standard"
                    size="small"
                    inputProps={{ inputMode: 'decimal', pattern: NUMBER_INPUT_PATTERN }}
                    onChange={onVelocityChanges}
                />
                <TextField
                    label="Backend members"
                    id="outlined-backend-members"
                    name="backendMembers"
                    value={backendMembers}
                    sx={{ m: 1, width: '15ch' }}
                    variant="standard"
                    size="small"
                    inputProps={{ inputMode: 'decimal', pattern: NUMBER_INPUT_PATTERN }}
                    onChange={onBackendMembersChanges}
                />
                <TextField
                    label="Frontend members"
                    id="outlined-frontend-members"
                    name="frontendMembers"
                    value={frontendMembers}
                    sx={{ m: 1, width: '15ch' }}
                    variant="standard"
                    size="small"
                    inputProps={{ inputMode: 'decimal', pattern: NUMBER_INPUT_PATTERN }}
                    onChange={onFrontendMembersChanges}
                />
                <Button
                    variant="contained"
                    size="small"
                    sx={{ m: 1, width: '15ch' }}
                    onClick={onSave}
                >
                    Save
                </Button>
            </div>
        </Box>

    )
}