import React from 'react';
export declare class MTableFilterRow extends React.Component<any, any> {
    renderLookupFilter: (columnDef: any) => JSX.Element;
    renderBooleanFilter: (columnDef: any) => JSX.Element;
    renderDefaultFilter: (columnDef: any) => JSX.Element;
    renderDateTypeFilter: (columnDef: any) => JSX.Element;
    getComponentForColumn(columnDef: any): JSX.Element | null | undefined;
    render(): JSX.Element;
}
