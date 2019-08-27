import 'material-icons/iconfont/material-icons.css';
import { Component } from 'react';
interface DemoProps {
    searchText?: string;
    noRemote?: boolean;
}
export declare class Demo extends Component<DemoProps, any> {
    inputBProps: any;
    tableRef: any;
    colRenderCount: number;
    state: {
        text: string;
        selecteds: number;
        data: ({
            id: number;
            name: string;
            surname: string;
            isMarried: boolean;
            birthDate: Date;
            birthCity: number;
            sex: string;
            type: string;
            insertDateTime: Date;
            time: Date;
            parentId?: undefined;
        } | {
            id: number;
            name: string;
            surname: string;
            isMarried: boolean;
            birthDate: Date;
            birthCity: number;
            sex: string;
            type: string;
            insertDateTime: Date;
            time: Date;
            parentId: number;
        })[];
        columns: ({
            title: string;
            field: string;
            editComponent: (props: any) => JSX.Element;
            type?: undefined;
            disableClick?: undefined;
            editable?: undefined;
            removable?: undefined;
            lookup?: undefined;
        } | {
            title: string;
            field: string;
            type: string;
            editComponent?: undefined;
            disableClick?: undefined;
            editable?: undefined;
            removable?: undefined;
            lookup?: undefined;
        } | {
            title: string;
            field: string;
            disableClick: boolean;
            editable: string;
            editComponent?: undefined;
            type?: undefined;
            removable?: undefined;
            lookup?: undefined;
        } | {
            title: string;
            field: string;
            removable: boolean;
            editable: string;
            editComponent?: undefined;
            type?: undefined;
            disableClick?: undefined;
            lookup?: undefined;
        } | {
            title: string;
            field: string;
            lookup: {
                34: string;
                0: string;
            };
            editComponent?: undefined;
            type?: undefined;
            disableClick?: undefined;
            editable?: undefined;
            removable?: undefined;
        })[];
        remoteColumns: ({
            title: string;
            field: string;
            render: (rowData: any) => JSX.Element;
            defaultFilter?: undefined;
        } | {
            title: string;
            field: string;
            render?: undefined;
            defaultFilter?: undefined;
        } | {
            title: string;
            field: string;
            defaultFilter: string;
            render?: undefined;
        })[];
    };
    render(): JSX.Element;
}
export {};
