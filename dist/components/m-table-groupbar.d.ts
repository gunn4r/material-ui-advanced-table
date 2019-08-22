import React from 'react';
declare class MTableGroupbar extends React.Component<any, any> {
    constructor(props: any);
    getItemStyle: (isDragging: any, draggableStyle: any) => any;
    getListStyle: (isDraggingOver: any) => {
        background: string;
        display: string;
        width: string;
        padding: number;
        overflow: string;
        border: string;
        borderStyle: string;
    };
    render(): JSX.Element;
}
export default MTableGroupbar;
