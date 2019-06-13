<h1 align="center">material-ui-advanced-table</h1>

<div align="center">

A simple and powerful Datatable for React based on [Material-UI Table](https://material-ui.com/api/table/) with many additional features.

<!-- [![Build Status](https://travis-ci.org/mbrn/material-ui-advanced-table.svg?branch=master)](https://travis-ci.org/mbrn/material-ui-advanced-table) -->
<!-- [![npm package](https://img.shields.io/npm/v/material-ui-advanced-table/latest.svg)](https://www.npmjs.com/package/material-ui-advanced-table) -->
<!-- [![NPM Downloads](https://img.shields.io/npm/dt/material-ui-advanced-table.svg?style=flat)](https://npmcharts.com/compare/material-ui-advanced-table?minimal=true) -->
[![Average time to resolve an issue](http://isitmaintained.com/badge/resolution/gunn4r/material-ui-advanced-table.svg)](http://isitmaintained.com/project/gunn4r/material-ui-advanced-table "Average time to resolve an issue")

</div>

## Key features

- [Actions](https://gunn4r.com/material-ui-advanced-table/#/docs/features/actions)
- [Component overriding](https://gunn4r.com/material-ui-advanced-table/#/docs/features/component-overriding)
- [Custom column rendering](https://gunn4r.com/material-ui-advanced-table/#/docs/features/custom-column-rendering)
- [Detail Panel](https://gunn4r.com/material-ui-advanced-table/#/docs/features/detail-panel)
- [Editable](https://gunn4r.com/material-ui-advanced-table/#/docs/features/editable)
- [Export](https://gunn4r.com/material-ui-advanced-table/#/docs/features/export)
- [Filtering](https://gunn4r.com/material-ui-advanced-table/#/docs/features/filtering)
- [Grouping](https://gunn4r.com/material-ui-advanced-table/#/docs/features/grouping)
- [Localization](https://gunn4r.com/material-ui-advanced-table/#/docs/features/localization)
- [Remote Data](https://gunn4r.com/material-ui-advanced-table/#/docs/features/remote-data)
- [Search](https://gunn4r.com/material-ui-advanced-table/#/docs/features/search)
- [Selection](https://gunn4r.com/material-ui-advanced-table/#/docs/features/selection)
- [Sorting](https://gunn4r.com/material-ui-advanced-table/#/docs/features/sorting)
- [Styling](https://gunn4r.com/material-ui-advanced-table/#/docs/features/styling)
- [Tree Data](https://gunn4r.com/material-ui-advanced-table/#/docs/features/tree-data)
- and more

## Demo and documentation

You can access all code examples and documentation on our site [**gunn4r.com/material-ui-advanced-table**](https://gunn4r.com/material-ui-advanced-table).

<!-- ## Support material-ui-advanced-table

To support material-ui-advanced-table visit [SUPPORT](https://www.patreon.com/mbrn) page. -->

## Prerequisites

The minimum `React` version material-ui-advanced-table supports is `^16.8.5` for hook support.

<!-- ## Installation

#### 1.Install package

To install material-ui-advanced-table with `npm`:

    npm install material-ui-advanced-table --save

To install material-ui-advanced-table with `yarn`:

    yarn add material-ui-advanced-table -->

#### 2.Add material icons

There are two ways to use icons in material-ui-advanced-table either import the material icons font via html OR import material icons and use the material-ui-advanced-table `icons` prop.

##### HTML

```html
<link
  rel="stylesheet"
  href="https://fonts.googleapis.com/icon?family=Material+Icons"
/>
```

OR

##### Import Material icons

Icons can be imported to be used in material-ui-advanced-table offering more flexibility for customising the look and feel of material table over using a font library.

To install @material-ui/icons with `npm`:

    npm install @material-ui/icons --save

To install @material-ui/icons with `yarn`:

    yarn add @material-ui/icons

If your environment doesn't support tree-shaking, the **recommended** way to import the icons is the following:

```jsx
import AddBox from "@material-ui/icons/AddBox";
import ArrowUpward from "@material-ui/icons/ArrowUpward";
```

If your environment support tree-shaking you can also import the icons this way:

```jsx
import { AddBox, ArrowUpward } from "@material-ui/icons";
```

Note: Importing named exports in this way will result in the code for _every icon_ being included in your project, so is not recommended unless you configure [tree-shaking](https://webpack.js.org/guides/tree-shaking/). It may also impact Hot Module Reload performance. Source: [@material-ui/icons](https://github.com/mui-org/material-ui/blob/master/packages/material-ui-icons/README.md#imports)

Example

```jsx
import AddBox from '@material-ui/icons/AddBox';
import ArrowUpward from '@material-ui/icons/ArrowUpward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';

const tableIcons = {
  Add: AddBox,
  Check: Check,
  Clear: Clear,
  Delete: DeleteOutline,
  DetailPanel: ChevronRight,
  Edit: Edit,
  Export: SaveAlt,
  Filter: FilterList,
  FirstPage: FirstPage,
  LastPage: LastPage,
  NextPage: ChevronRight,
  PreviousPage: ChevronLeft,
  ResetSearch: Clear,
  Search: Search,
  SortArrow: ArrowUpward,
  ThirdStateCheck: Remove,
  ViewColumn: ViewColumn
};

<MaterialTable
  icons={tableIcons}
  ...
/>
```

## Usage

Here is a basic example of using material-ui-advanced-table within a react application.

```jsx
import React, { Component } from "react";
import ReactDOM from "react-dom";
import MaterialTable from "material-ui-advanced-table";

class App extends Component {
  render() {
    return (
      <div style={{ maxWidth: "100%" }}>
        <MaterialTable
          columns={[
            { title: "First Name", field: "firstName" },
            { title: "Last Name", field: "lastName" },
            { title: "Year Born", field: "birthYear", type: "numeric" },
            {
              title: "Birthplace",
              field: "birthplace",
              lookup: {
                1: "Ulm, Germany"
                34: "Warsaw, Poland",
                98: "Westmoreland County, VA, USA",
                115: "Maida Vale, London, UK",
                132: "Frankfurt, Germany"
              }
            }
          ]}
          data={[
            { firstName: "Marie", lastName: "Curie", birthYear: 1867, birthplace: 34 },
            { firstName: "George", lastName: "Washington", birthYear: 1732, birthplace: 98 },
            { firstName: "Albert", lastName: "Einstein", birthYear: 1879, birthplace: 1 },
            { firstName: "Anne", lastName: "Frank", birthYear: 1929, birthplace: 132 },
            { firstName: "Alan", lastName: "Turing", birthYear: 1912, birthplace: 115 },
          ]}
          title="Famous People"
        />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("react-div"));
```

## Contributing

We'd love to have your helping hand on `material-ui-advanced-table`! See [CONTRIBUTING.md](https://github.com/mbrn/material-ui-advanced-table/blob/master/.github/CONTRIBUTING.md) for more information on what we're looking for and how to get started.

If you have any sort of doubt, idea or just want to talk about the project, feel free to join [our chat on Gitter](https://gitter.im/material-ui-advanced-table/Lobby) :)

## License

This project is licensed under the terms of the [MIT license](/LICENSE).
