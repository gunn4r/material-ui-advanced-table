import React from 'react';
export declare class MTableToolbar extends React.Component<any, any> {
    constructor(props: any);
    defaultExportCsv: () => void;
    exportCsv: () => void;
    renderSearch(): JSX.Element | null;
    renderDefaultActions(): JSX.Element;
    renderSelectedActions(): JSX.Element;
    renderActions(): JSX.Element;
    render(): JSX.Element;
}
export declare const styles: (theme: any) => {
    root: {
        paddingRight: any;
    };
    highlight: {
        color: any;
        backgroundColor: any;
    };
    spacer: {
        flex: string;
    };
    actions: {
        color: any;
    };
    title: {
        flex: string;
    };
    searchField: {
        paddingLeft: any;
    };
};
declare const _default: React.ComponentType<Pick<any, string | number | symbol> & import("@material-ui/core").StyledComponentProps<"root" | "highlight" | "spacer" | "actions" | "title" | "searchField">>;
export default _default;
