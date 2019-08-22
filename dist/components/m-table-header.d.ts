import React from 'react';
export declare class MTableHeader extends React.Component<any, any> {
    renderHeader(): any;
    renderActionsHeader(): JSX.Element;
    renderSelectionHeader(): JSX.Element;
    renderDetailPanelColumnCell(): JSX.Element;
    render(): JSX.Element;
}
export declare const styles: (theme: any) => Record<"header", import("@material-ui/styles/withStyles").CreateCSSProperties<{}> | ((props: {}) => import("@material-ui/styles/withStyles").CreateCSSProperties<{}>)>;
declare const _default: React.ComponentType<Pick<any, string | number | symbol> & import("@material-ui/core").StyledComponentProps<"header">>;
export default _default;
