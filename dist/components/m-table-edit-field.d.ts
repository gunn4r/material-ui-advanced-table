import React from 'react';
declare class MTableEditField extends React.Component<any, any> {
    getProps(): {
        readonly [x: string]: any;
        children?: React.ReactNode;
    };
    renderLookupField(): JSX.Element;
    renderBooleanField(): JSX.Element;
    renderDateField(): JSX.Element;
    renderTimeField(): JSX.Element;
    renderDateTimeField(): JSX.Element;
    renderTextField(): JSX.Element;
    renderCurrencyField(): string;
    render(): any;
}
export default MTableEditField;
