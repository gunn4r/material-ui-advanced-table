import React from 'react';
import DataManager from './utils/data-manager';
export default class MaterialTable extends React.Component<any, any> {
    dataManager: DataManager;
    constructor(props: any);
    componentDidMount(): void;
    setDataManagerFields(props?: any, isInit?: any): void;
    UNSAFE_componentWillReceiveProps(nextProps: any): void;
    componentDidUpdate(): void;
    getProps(props?: any): any;
    isRemoteData: (props?: any) => boolean;
    onAllSelected: (checked: any) => void;
    onChangeColumnHidden: (columnId: any, hidden: any) => void;
    onChangeGroupOrder: (groupedColumn: any) => void;
    onChangeOrder: (orderBy: any, orderDirection: any) => void;
    onChangePage: (event: any, page: any) => void;
    onChangeRowsPerPage: (event: any) => void;
    onDragEnd: (result: any) => void;
    onGroupExpandChanged: (path: any) => void;
    onGroupRemoved: (groupedColumn: any, index: any) => void;
    onEditingApproved: (mode: any, newData: any, oldData: any) => void;
    onEditingCanceled: (mode: any, rowData: any) => void;
    onQueryChange: (query?: any, callback?: any) => void;
    onRowSelected: (event: any, path: any, dataClicked: any) => void;
    onSelectionChange: (dataClicked?: any) => void;
    onSearchChange: (searchText: any) => void;
    onSearchChangeDebounce: any;
    onFilterChange: (columnId: any, value: any) => void;
    onFilterChangeDebounce: any;
    onTreeExpandChanged: (path: any, data: any) => void;
    onToggleDetailPanel: (path: any, render: any) => void;
    renderFooter(): JSX.Element | undefined;
    render(): JSX.Element;
}
