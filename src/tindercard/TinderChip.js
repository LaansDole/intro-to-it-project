import React from 'react';
import { Chip } from '@material-ui/core';
import AppTheme from '../AppTheme';

export default function TinderCardChip({icon, label, color, size}) {
    return (
        <div>
            <AppTheme>
                <Chip 
                    size={size}
                    icon={icon}
                    label={label}
                    color={color}
                />
            </AppTheme>
        </div>
    )
}