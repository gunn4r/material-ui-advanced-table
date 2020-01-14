import PropTypes from 'prop-types';
export declare const propTypes: {
    actions: PropTypes.Requireable<(((...args: any[]) => any) | PropTypes.InferProps<{
        icon: PropTypes.Validator<string | PropTypes.ReactElementLike | ((...args: any[]) => any)>;
        isFreeAction: PropTypes.Requireable<boolean>;
        tooltip: PropTypes.Requireable<string>;
        onClick: PropTypes.Validator<(...args: any[]) => any>;
        iconProps: PropTypes.Requireable<object>;
        disabled: PropTypes.Requireable<boolean>;
        hidden: PropTypes.Requireable<boolean>;
    }> | null | undefined)[]>;
    columns: PropTypes.Validator<(PropTypes.InferProps<{
        cellStyle: PropTypes.Requireable<object>;
        currencySetting: PropTypes.Requireable<PropTypes.InferProps<{
            locale: PropTypes.Requireable<string>;
            currencyCode: PropTypes.Requireable<string>;
            minimumFractionDigits: PropTypes.Requireable<number>;
            maximumFractionDigits: PropTypes.Requireable<number>;
        }>>;
        customFilterAndSearch: PropTypes.Requireable<(...args: any[]) => any>;
        customSort: PropTypes.Requireable<(...args: any[]) => any>;
        defaultFilter: PropTypes.Requireable<any>;
        defaultSort: PropTypes.Requireable<string>;
        editComponent: PropTypes.Requireable<PropTypes.ReactElementLike | ((...args: any[]) => any)>;
        emptyValue: PropTypes.Requireable<string | number | boolean | {} | PropTypes.ReactElementLike | PropTypes.ReactNodeArray>;
        export: PropTypes.Requireable<boolean>;
        field: PropTypes.Requireable<string>;
        filtering: PropTypes.Requireable<boolean>;
        filterCellStyle: PropTypes.Requireable<object>;
        filterPlaceholder: PropTypes.Requireable<string>;
        grouping: PropTypes.Requireable<boolean>;
        headerStyle: PropTypes.Requireable<object>;
        hidden: PropTypes.Requireable<boolean>;
        initialEditValue: PropTypes.Requireable<any>;
        lookup: PropTypes.Requireable<object>;
        editable: PropTypes.Requireable<string | PropTypes.Requireable<(...args: any[]) => any>>;
        removable: PropTypes.Requireable<boolean>;
        render: PropTypes.Requireable<(...args: any[]) => any>;
        searchable: PropTypes.Requireable<boolean>;
        sorting: PropTypes.Requireable<boolean>;
        title: PropTypes.Requireable<string | PropTypes.ReactElementLike>;
        type: PropTypes.Requireable<string>;
    }> | null | undefined)[]>;
    components: PropTypes.Requireable<PropTypes.InferProps<{
        Action: PropTypes.Requireable<PropTypes.ReactElementLike | PropTypes.InferProps<{
            classes: PropTypes.Requireable<object>;
            innerRef: PropTypes.Requireable<PropTypes.InferProps<{
                current: PropTypes.Requireable<PropTypes.ReactElementLike>;
            }>>;
        }> | ((...args: any[]) => any)>;
        Actions: PropTypes.Requireable<PropTypes.ReactElementLike | PropTypes.InferProps<{
            classes: PropTypes.Requireable<object>;
            innerRef: PropTypes.Requireable<PropTypes.InferProps<{
                current: PropTypes.Requireable<PropTypes.ReactElementLike>;
            }>>;
        }> | ((...args: any[]) => any)>;
        Body: PropTypes.Requireable<PropTypes.ReactElementLike | PropTypes.InferProps<{
            classes: PropTypes.Requireable<object>;
            innerRef: PropTypes.Requireable<PropTypes.InferProps<{
                current: PropTypes.Requireable<PropTypes.ReactElementLike>;
            }>>;
        }> | ((...args: any[]) => any)>;
        Cell: PropTypes.Requireable<PropTypes.ReactElementLike | PropTypes.InferProps<{
            classes: PropTypes.Requireable<object>;
            innerRef: PropTypes.Requireable<PropTypes.InferProps<{
                current: PropTypes.Requireable<PropTypes.ReactElementLike>;
            }>>;
        }> | ((...args: any[]) => any)>;
        Container: PropTypes.Requireable<PropTypes.ReactElementLike | PropTypes.InferProps<{
            classes: PropTypes.Requireable<object>;
            innerRef: PropTypes.Requireable<PropTypes.InferProps<{
                current: PropTypes.Requireable<PropTypes.ReactElementLike>;
            }>>;
        }> | ((...args: any[]) => any)>;
        EditField: PropTypes.Requireable<PropTypes.ReactElementLike | PropTypes.InferProps<{
            classes: PropTypes.Requireable<object>;
            innerRef: PropTypes.Requireable<PropTypes.InferProps<{
                current: PropTypes.Requireable<PropTypes.ReactElementLike>;
            }>>;
        }> | ((...args: any[]) => any)>;
        EditRow: PropTypes.Requireable<PropTypes.ReactElementLike | PropTypes.InferProps<{
            classes: PropTypes.Requireable<object>;
            innerRef: PropTypes.Requireable<PropTypes.InferProps<{
                current: PropTypes.Requireable<PropTypes.ReactElementLike>;
            }>>;
        }> | ((...args: any[]) => any)>;
        FilterRow: PropTypes.Requireable<PropTypes.ReactElementLike | PropTypes.InferProps<{
            classes: PropTypes.Requireable<object>;
            innerRef: PropTypes.Requireable<PropTypes.InferProps<{
                current: PropTypes.Requireable<PropTypes.ReactElementLike>;
            }>>;
        }> | ((...args: any[]) => any)>;
        Groupbar: PropTypes.Requireable<PropTypes.ReactElementLike | PropTypes.InferProps<{
            classes: PropTypes.Requireable<object>;
            innerRef: PropTypes.Requireable<PropTypes.InferProps<{
                current: PropTypes.Requireable<PropTypes.ReactElementLike>;
            }>>;
        }> | ((...args: any[]) => any)>;
        GroupRow: PropTypes.Requireable<PropTypes.ReactElementLike | PropTypes.InferProps<{
            classes: PropTypes.Requireable<object>;
            innerRef: PropTypes.Requireable<PropTypes.InferProps<{
                current: PropTypes.Requireable<PropTypes.ReactElementLike>;
            }>>;
        }> | ((...args: any[]) => any)>;
        Header: PropTypes.Requireable<PropTypes.ReactElementLike | PropTypes.InferProps<{
            classes: PropTypes.Requireable<object>;
            innerRef: PropTypes.Requireable<PropTypes.InferProps<{
                current: PropTypes.Requireable<PropTypes.ReactElementLike>;
            }>>;
        }> | ((...args: any[]) => any)>;
        OverlayLoading: PropTypes.Requireable<PropTypes.ReactElementLike | PropTypes.InferProps<{
            classes: PropTypes.Requireable<object>;
            innerRef: PropTypes.Requireable<PropTypes.InferProps<{
                current: PropTypes.Requireable<PropTypes.ReactElementLike>;
            }>>;
        }> | ((...args: any[]) => any)>;
        Pagination: PropTypes.Requireable<PropTypes.ReactElementLike | PropTypes.InferProps<{
            classes: PropTypes.Requireable<object>;
            innerRef: PropTypes.Requireable<PropTypes.InferProps<{
                current: PropTypes.Requireable<PropTypes.ReactElementLike>;
            }>>;
        }> | ((...args: any[]) => any)>;
        Row: PropTypes.Requireable<PropTypes.ReactElementLike | PropTypes.InferProps<{
            classes: PropTypes.Requireable<object>;
            innerRef: PropTypes.Requireable<PropTypes.InferProps<{
                current: PropTypes.Requireable<PropTypes.ReactElementLike>;
            }>>;
        }> | ((...args: any[]) => any)>;
        Toolbar: PropTypes.Requireable<PropTypes.ReactElementLike | PropTypes.InferProps<{
            classes: PropTypes.Requireable<object>;
            innerRef: PropTypes.Requireable<PropTypes.InferProps<{
                current: PropTypes.Requireable<PropTypes.ReactElementLike>;
            }>>;
        }> | ((...args: any[]) => any)>;
    }>>;
    data: PropTypes.Validator<((...args: any[]) => any) | (object | null | undefined)[]>;
    editable: PropTypes.Requireable<PropTypes.InferProps<{
        onRowAdd: PropTypes.Requireable<(...args: any[]) => any>;
        onRowUpdate: PropTypes.Requireable<(...args: any[]) => any>;
        onRowDelete: PropTypes.Requireable<(...args: any[]) => any>;
    }>>;
    detailPanel: PropTypes.Requireable<((...args: any[]) => any) | (((...args: any[]) => any) | PropTypes.InferProps<{
        disabled: PropTypes.Requireable<boolean>;
        icon: PropTypes.Requireable<string | PropTypes.ReactElementLike | ((...args: any[]) => any)>;
        openIcon: PropTypes.Requireable<string | PropTypes.ReactElementLike | ((...args: any[]) => any)>;
        tooltip: PropTypes.Requireable<string>;
        render: PropTypes.Validator<(...args: any[]) => any>;
    }> | null | undefined)[]>;
    icons: PropTypes.Requireable<PropTypes.InferProps<{
        Add: PropTypes.Requireable<PropTypes.ReactElementLike | PropTypes.InferProps<{
            current: PropTypes.Requireable<PropTypes.ReactElementLike>;
        }> | ((...args: any[]) => any)>;
        Check: PropTypes.Requireable<PropTypes.ReactElementLike | PropTypes.InferProps<{
            current: PropTypes.Requireable<PropTypes.ReactElementLike>;
        }> | ((...args: any[]) => any)>;
        Clear: PropTypes.Requireable<PropTypes.ReactElementLike | PropTypes.InferProps<{
            current: PropTypes.Requireable<PropTypes.ReactElementLike>;
        }> | ((...args: any[]) => any)>;
        Delete: PropTypes.Requireable<PropTypes.ReactElementLike | PropTypes.InferProps<{
            current: PropTypes.Requireable<PropTypes.ReactElementLike>;
        }> | ((...args: any[]) => any)>;
        DetailPanel: PropTypes.Requireable<PropTypes.ReactElementLike | PropTypes.InferProps<{
            current: PropTypes.Requireable<PropTypes.ReactElementLike>;
        }> | ((...args: any[]) => any)>;
        Edit: PropTypes.Requireable<PropTypes.ReactElementLike | PropTypes.InferProps<{
            current: PropTypes.Requireable<PropTypes.ReactElementLike>;
        }> | ((...args: any[]) => any)>;
        Export: PropTypes.Requireable<PropTypes.ReactElementLike | PropTypes.InferProps<{
            current: PropTypes.Requireable<PropTypes.ReactElementLike>;
        }> | ((...args: any[]) => any)>;
        Filter: PropTypes.Requireable<PropTypes.ReactElementLike | PropTypes.InferProps<{
            current: PropTypes.Requireable<PropTypes.ReactElementLike>;
        }> | ((...args: any[]) => any)>;
        FirstPage: PropTypes.Requireable<PropTypes.ReactElementLike | PropTypes.InferProps<{
            current: PropTypes.Requireable<PropTypes.ReactElementLike>;
        }> | ((...args: any[]) => any)>;
        LastPage: PropTypes.Requireable<PropTypes.ReactElementLike | PropTypes.InferProps<{
            current: PropTypes.Requireable<PropTypes.ReactElementLike>;
        }> | ((...args: any[]) => any)>;
        NextPage: PropTypes.Requireable<PropTypes.ReactElementLike | PropTypes.InferProps<{
            current: PropTypes.Requireable<PropTypes.ReactElementLike>;
        }> | ((...args: any[]) => any)>;
        PreviousPage: PropTypes.Requireable<PropTypes.ReactElementLike | PropTypes.InferProps<{
            current: PropTypes.Requireable<PropTypes.ReactElementLike>;
        }> | ((...args: any[]) => any)>;
        ResetSearch: PropTypes.Requireable<PropTypes.ReactElementLike | PropTypes.InferProps<{
            current: PropTypes.Requireable<PropTypes.ReactElementLike>;
        }> | ((...args: any[]) => any)>;
        Search: PropTypes.Requireable<PropTypes.ReactElementLike | PropTypes.InferProps<{
            current: PropTypes.Requireable<PropTypes.ReactElementLike>;
        }> | ((...args: any[]) => any)>;
        SortArrow: PropTypes.Requireable<PropTypes.ReactElementLike | PropTypes.InferProps<{
            current: PropTypes.Requireable<PropTypes.ReactElementLike>;
        }> | ((...args: any[]) => any)>;
        ThirdStateCheck: PropTypes.Requireable<PropTypes.ReactElementLike | PropTypes.InferProps<{
            current: PropTypes.Requireable<PropTypes.ReactElementLike>;
        }> | ((...args: any[]) => any)>;
        ViewColumn: PropTypes.Requireable<PropTypes.ReactElementLike | PropTypes.InferProps<{
            current: PropTypes.Requireable<PropTypes.ReactElementLike>;
        }> | ((...args: any[]) => any)>;
    }>>;
    isLoading: PropTypes.Requireable<boolean>;
    title: PropTypes.Requireable<string | PropTypes.ReactElementLike>;
    options: PropTypes.Requireable<PropTypes.InferProps<{
        actionsCellStyle: PropTypes.Requireable<object>;
        actionsColumnIndex: PropTypes.Requireable<number>;
        addRowPosition: PropTypes.Requireable<string>;
        columnsButton: PropTypes.Requireable<boolean>;
        defaultExpanded: PropTypes.Requireable<boolean>;
        debounceInterval: PropTypes.Requireable<number>;
        detailPanelType: PropTypes.Requireable<string>;
        doubleHorizontalScroll: PropTypes.Requireable<boolean>;
        emptyRowsWhenPaging: PropTypes.Requireable<boolean>;
        exportAllData: PropTypes.Requireable<boolean>;
        exportButton: PropTypes.Requireable<boolean>;
        exportDelimiter: PropTypes.Requireable<string>;
        exportFileName: PropTypes.Requireable<string>;
        exportCsv: PropTypes.Requireable<(...args: any[]) => any>;
        filtering: PropTypes.Requireable<boolean>;
        filterCellStyle: PropTypes.Requireable<object>;
        header: PropTypes.Requireable<boolean>;
        headerStyle: PropTypes.Requireable<object>;
        initialPage: PropTypes.Requireable<number>;
        maxBodyHeight: PropTypes.Requireable<string | number>;
        loadingType: PropTypes.Requireable<string>;
        padding: PropTypes.Requireable<string>;
        paging: PropTypes.Requireable<boolean>;
        pageSize: PropTypes.Requireable<number>;
        pageSizeOptions: PropTypes.Requireable<(number | null | undefined)[]>;
        paginationType: PropTypes.Requireable<string>;
        rowStyle: PropTypes.Requireable<object>;
        search: PropTypes.Requireable<boolean>;
        toolbarButtonAlignment: PropTypes.Requireable<string>;
        searchFieldAlignment: PropTypes.Requireable<string>;
        searchFieldStyle: PropTypes.Requireable<object>;
        selection: PropTypes.Requireable<boolean>;
        selectionProps: PropTypes.Requireable<object>;
        showEmptyDataSourceMessage: PropTypes.Requireable<boolean>;
        showFirstLastPageButtons: PropTypes.Requireable<boolean>;
        showSelectAllCheckbox: PropTypes.Requireable<boolean>;
        showTitle: PropTypes.Requireable<boolean>;
        showTextRowsSelected: PropTypes.Requireable<boolean>;
        sorting: PropTypes.Requireable<boolean>;
        toolbar: PropTypes.Requireable<boolean>;
    }>>;
    localization: PropTypes.Requireable<PropTypes.InferProps<{
        grouping: PropTypes.Requireable<PropTypes.InferProps<{
            groupedBy: PropTypes.Requireable<string>;
            placeholder: PropTypes.Requireable<string>;
        }>>;
        pagination: PropTypes.Requireable<object>;
        toolbar: PropTypes.Requireable<object>;
        header: PropTypes.Requireable<object>;
        body: PropTypes.Requireable<object>;
    }>>;
    initialFormData: PropTypes.Requireable<object>;
    onSearchChange: PropTypes.Requireable<(...args: any[]) => any>;
    onColumnDragged: PropTypes.Requireable<(...args: any[]) => any>;
    onGroupRemoved: PropTypes.Requireable<(...args: any[]) => any>;
    onSelectionChange: PropTypes.Requireable<(...args: any[]) => any>;
    onChangeRowsPerPage: PropTypes.Requireable<(...args: any[]) => any>;
    onChangePage: PropTypes.Requireable<(...args: any[]) => any>;
    onChangeColumnHidden: PropTypes.Requireable<(...args: any[]) => any>;
    onOrderChange: PropTypes.Requireable<(...args: any[]) => any>;
    onRowClick: PropTypes.Requireable<(...args: any[]) => any>;
    onTreeExpandChange: PropTypes.Requireable<(...args: any[]) => any>;
    tableRef: PropTypes.Requireable<any>;
    style: PropTypes.Requireable<object>;
    searchText: PropTypes.Requireable<string>;
};
