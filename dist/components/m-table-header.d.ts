import React from 'react';
export declare class MTableHeaderInner extends React.Component<any, any> {
    renderHeader(): any;
    renderActionsHeader(): JSX.Element;
    renderSelectionHeader(): JSX.Element;
    renderDetailPanelColumnCell(): JSX.Element;
    render(): JSX.Element;
}
export declare const styles: (theme: any) => Record<"header", import("@material-ui/styles").CSSProperties | (() => import("@material-ui/styles").CSSProperties)>;
export declare const MTableHeader: React.ComponentType<Pick<any, string | number | symbol> & import("@material-ui/core").StyledComponentProps<"header">>;
