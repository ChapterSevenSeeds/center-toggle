declare module 'react-center-toggle' {
    import React from 'react';

    interface CenterToggleContainerProps {
        toggled: Boolean
    }

    export const CenterToggleContainer: React.FC<CenterToggleContainerProps>;
    export const CenterToggleItem: React.FC<{}>;
    export const CenterToggleChild: React.FC<{}>;
}