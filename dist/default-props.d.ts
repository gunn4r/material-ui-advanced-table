import React from 'react';
import * as MComponents from './components';
import PropTypes from 'prop-types';
export declare const defaultProps: {
    actions: never[];
    classes: {};
    columns: never[];
    components: {
        Action: typeof MComponents.MTableAction;
        Actions: typeof MComponents.MTableActions;
        Body: typeof MComponents.MTableBody;
        Cell: typeof MComponents.MTableCell;
        Container: (props: any) => JSX.Element;
        EditField: typeof MComponents.MTableEditField;
        EditRow: typeof MComponents.MTableEditRow;
        FilterRow: typeof MComponents.MTableFilterRow;
        Groupbar: typeof MComponents.MTableGroupbar;
        GroupRow: typeof MComponents.MTableGroupRow;
        Header: React.ComponentType<Pick<any, string | number | symbol> & import("@material-ui/core").StyledComponentProps<"header">>;
        OverlayLoading: {
            (props: any): JSX.Element;
            propTypes: {
                theme: PropTypes.Requireable<any>;
            };
        };
        Pagination: import("@material-ui/core/OverridableComponent").OverridableComponent<import("@material-ui/core").TablePaginationTypeMap<{}, React.ComponentType<Pick<import("@material-ui/core").TableCellProps, "color" | "translate" | "padding" | "hidden" | "size" | "style" | "abbr" | "title" | "children" | "ref" | "align" | "colSpan" | "headers" | "rowSpan" | "scope" | "defaultChecked" | "defaultValue" | "suppressContentEditableWarning" | "suppressHydrationWarning" | "accessKey" | "className" | "contentEditable" | "contextMenu" | "dir" | "draggable" | "id" | "lang" | "placeholder" | "slot" | "spellCheck" | "tabIndex" | "radioGroup" | "role" | "about" | "datatype" | "inlist" | "prefix" | "property" | "resource" | "typeof" | "vocab" | "autoCapitalize" | "autoCorrect" | "autoSave" | "itemProp" | "itemScope" | "itemType" | "itemID" | "itemRef" | "results" | "security" | "unselectable" | "inputMode" | "is" | "aria-activedescendant" | "aria-atomic" | "aria-autocomplete" | "aria-busy" | "aria-checked" | "aria-colcount" | "aria-colindex" | "aria-colspan" | "aria-controls" | "aria-current" | "aria-describedby" | "aria-details" | "aria-disabled" | "aria-dropeffect" | "aria-errormessage" | "aria-expanded" | "aria-flowto" | "aria-grabbed" | "aria-haspopup" | "aria-hidden" | "aria-invalid" | "aria-keyshortcuts" | "aria-label" | "aria-labelledby" | "aria-level" | "aria-live" | "aria-modal" | "aria-multiline" | "aria-multiselectable" | "aria-orientation" | "aria-owns" | "aria-placeholder" | "aria-posinset" | "aria-pressed" | "aria-readonly" | "aria-relevant" | "aria-required" | "aria-roledescription" | "aria-rowcount" | "aria-rowindex" | "aria-rowspan" | "aria-selected" | "aria-setsize" | "aria-sort" | "aria-valuemax" | "aria-valuemin" | "aria-valuenow" | "aria-valuetext" | "dangerouslySetInnerHTML" | "onCopy" | "onCopyCapture" | "onCut" | "onCutCapture" | "onPaste" | "onPasteCapture" | "onCompositionEnd" | "onCompositionEndCapture" | "onCompositionStart" | "onCompositionStartCapture" | "onCompositionUpdate" | "onCompositionUpdateCapture" | "onFocus" | "onFocusCapture" | "onBlur" | "onBlurCapture" | "onChange" | "onChangeCapture" | "onBeforeInput" | "onBeforeInputCapture" | "onInput" | "onInputCapture" | "onReset" | "onResetCapture" | "onSubmit" | "onSubmitCapture" | "onInvalid" | "onInvalidCapture" | "onLoad" | "onLoadCapture" | "onError" | "onErrorCapture" | "onKeyDown" | "onKeyDownCapture" | "onKeyPress" | "onKeyPressCapture" | "onKeyUp" | "onKeyUpCapture" | "onAbort" | "onAbortCapture" | "onCanPlay" | "onCanPlayCapture" | "onCanPlayThrough" | "onCanPlayThroughCapture" | "onDurationChange" | "onDurationChangeCapture" | "onEmptied" | "onEmptiedCapture" | "onEncrypted" | "onEncryptedCapture" | "onEnded" | "onEndedCapture" | "onLoadedData" | "onLoadedDataCapture" | "onLoadedMetadata" | "onLoadedMetadataCapture" | "onLoadStart" | "onLoadStartCapture" | "onPause" | "onPauseCapture" | "onPlay" | "onPlayCapture" | "onPlaying" | "onPlayingCapture" | "onProgress" | "onProgressCapture" | "onRateChange" | "onRateChangeCapture" | "onSeeked" | "onSeekedCapture" | "onSeeking" | "onSeekingCapture" | "onStalled" | "onStalledCapture" | "onSuspend" | "onSuspendCapture" | "onTimeUpdate" | "onTimeUpdateCapture" | "onVolumeChange" | "onVolumeChangeCapture" | "onWaiting" | "onWaitingCapture" | "onAuxClick" | "onAuxClickCapture" | "onClick" | "onClickCapture" | "onContextMenu" | "onContextMenuCapture" | "onDoubleClick" | "onDoubleClickCapture" | "onDrag" | "onDragCapture" | "onDragEnd" | "onDragEndCapture" | "onDragEnter" | "onDragEnterCapture" | "onDragExit" | "onDragExitCapture" | "onDragLeave" | "onDragLeaveCapture" | "onDragOver" | "onDragOverCapture" | "onDragStart" | "onDragStartCapture" | "onDrop" | "onDropCapture" | "onMouseDown" | "onMouseDownCapture" | "onMouseEnter" | "onMouseLeave" | "onMouseMove" | "onMouseMoveCapture" | "onMouseOut" | "onMouseOutCapture" | "onMouseOver" | "onMouseOverCapture" | "onMouseUp" | "onMouseUpCapture" | "onSelect" | "onSelectCapture" | "onTouchCancel" | "onTouchCancelCapture" | "onTouchEnd" | "onTouchEndCapture" | "onTouchMove" | "onTouchMoveCapture" | "onTouchStart" | "onTouchStartCapture" | "onPointerDown" | "onPointerDownCapture" | "onPointerMove" | "onPointerMoveCapture" | "onPointerUp" | "onPointerUpCapture" | "onPointerCancel" | "onPointerCancelCapture" | "onPointerEnter" | "onPointerEnterCapture" | "onPointerLeave" | "onPointerLeaveCapture" | "onPointerOver" | "onPointerOverCapture" | "onPointerOut" | "onPointerOutCapture" | "onGotPointerCapture" | "onGotPointerCaptureCapture" | "onLostPointerCapture" | "onLostPointerCaptureCapture" | "onScroll" | "onScrollCapture" | "onWheel" | "onWheelCapture" | "onAnimationStart" | "onAnimationStartCapture" | "onAnimationEnd" | "onAnimationEndCapture" | "onAnimationIteration" | "onAnimationIterationCapture" | "onTransitionEnd" | "onTransitionEndCapture" | "valign" | "sortDirection" | "variant" | "innerRef">>>>;
        Row: typeof MComponents.MTableBodyRow;
        Toolbar: React.ComponentType<Pick<any, string | number | symbol> & import("@material-ui/core").StyledComponentProps<"title" | "root" | "highlight" | "spacer" | "actions" | "searchField">>;
    };
    data: never[];
    icons: {
        Add: React.ForwardRefExoticComponent<React.RefAttributes<unknown>>;
        Check: React.ForwardRefExoticComponent<React.RefAttributes<unknown>>;
        Clear: React.ForwardRefExoticComponent<React.RefAttributes<unknown>>;
        Delete: React.ForwardRefExoticComponent<React.RefAttributes<unknown>>;
        DetailPanel: React.ForwardRefExoticComponent<React.RefAttributes<unknown>>;
        Edit: React.ForwardRefExoticComponent<React.RefAttributes<unknown>>;
        Export: React.ForwardRefExoticComponent<React.RefAttributes<unknown>>;
        Filter: React.ForwardRefExoticComponent<React.RefAttributes<unknown>>;
        FirstPage: React.ForwardRefExoticComponent<React.RefAttributes<unknown>>;
        LastPage: React.ForwardRefExoticComponent<React.RefAttributes<unknown>>;
        NextPage: React.ForwardRefExoticComponent<React.RefAttributes<unknown>>;
        PreviousPage: React.ForwardRefExoticComponent<React.RefAttributes<unknown>>;
        ResetSearch: React.ForwardRefExoticComponent<React.RefAttributes<unknown>>;
        Search: React.ForwardRefExoticComponent<React.RefAttributes<unknown>>;
        SortArrow: React.ForwardRefExoticComponent<React.RefAttributes<unknown>>;
        ThirdStateCheck: React.ForwardRefExoticComponent<React.RefAttributes<unknown>>;
        ViewColumn: React.ForwardRefExoticComponent<React.RefAttributes<unknown>>;
    };
    isLoading: boolean;
    title: string;
    options: {
        actionsColumnIndex: number;
        addRowPosition: string;
        columnsButton: boolean;
        detailPanelType: string;
        debounceInterval: number;
        doubleHorizontalScroll: boolean;
        emptyRowsWhenPaging: boolean;
        exportAllData: boolean;
        exportButton: boolean;
        exportDelimiter: string;
        filtering: boolean;
        header: boolean;
        loadingType: string;
        padding: string;
        paging: boolean;
        pageSize: number;
        pageSizeOptions: number[];
        paginationType: string;
        showEmptyDataSourceMessage: boolean;
        showFirstLastPageButtons: boolean;
        showSelectAllCheckbox: boolean;
        search: boolean;
        showTitle: boolean;
        showTextRowsSelected: boolean;
        toolbarButtonAlignment: string;
        searchFieldAlignment: string;
        searchFieldStyle: {};
        selection: boolean;
        selectionProps: {};
        sorting: boolean;
        toolbar: boolean;
        defaultExpanded: boolean;
        detailPanelColumnAlignment: string;
        flexTable: boolean;
    };
    localization: {
        grouping: {
            groupedBy: string;
            placeholder: string;
        };
        pagination: {
            labelDisplayedRows: string;
            labelRowsPerPage: string;
            labelRowsSelect: string;
        };
        toolbar: {};
        header: {};
        body: {
            filterRow: {};
            editRow: {
                saveTooltip: string;
                cancelTooltip: string;
                deleteText: string;
            };
            addTooltip: string;
            deleteTooltip: string;
            editTooltip: string;
        };
    };
    style: {};
    searchText: string;
};
