import 'material-icons/iconfont/material-icons.css'

import React from 'react';
import MaterialTable from 'material-ui-advanced-table';
import { avengersData } from './avengers-data';

const columns = [
  {
    title:
    'url',
  field:
  "url",
  type:
  'string'
},

  {
  title:
  'name/alias',
field:
"name/alias",
type:
'string'
},

{
  title:
  'appearances',
field:
"appearances",
type:
'number'
},

{
  title:
  'current?',
field:
"current?",
type:
'string'
},

{
  title:
  'gender',
field:
"gender",
type:
'string'
},

{
  title:
  'full/reserve avengers intro', field: "full/reserve avengers intro", type: 'string' },
  { title: 'year', field: "year", type: 'number' },
  { title: 'years since joining', field: "years since joining", type: 'number' },
  { title: 'honorary', field: "honorary", type: 'string' },
  { title: 'notes', field: "notes", type: 'string' },
];

const HeaderGunnar = () => {
    return (
      <MaterialTable
        columns={columns}
        data={avengersData}
        title="Avengers"
        options={{search: true}}
      />
    );
}

export default HeaderGunnar;