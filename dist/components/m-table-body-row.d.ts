import React from 'react';
export declare class MTableBodyRow extends React.Component<any, any> {
    renderColumns(): any;
    renderActions(): JSX.Element;
    renderSelectionColumn(): JSX.Element;
    rotateIconStyle: (isOpen: any) => {
        transform: string;
    };
    renderDetailPanelColumn(): JSX.Element;
    getStyle(index: any, level: any): any;
    getElementSize: () => "medium" | "small";
    render(): JSX.Element;
}
