import * as React from "react";
import { Admin, Resource } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';

import { createMuiTheme } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';

import UserIcon from '@material-ui/icons/Group';
import { UserCreate, UserEdit, UserList } from './users';

import NotFound from './NotFound';

const dataProvider = jsonServerProvider('https://localhost:8080/api/');

const theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: purple,
    secondary: green, 
  }
});

const App = () => (
  <Admin theme={theme} dataProvider={dataProvider} catchAll={NotFound}>
    <Resource name="users" options={{ label: 'Users' }} create={UserCreate} edit={UserEdit}  icon={UserIcon} list={UserList}/>
  </Admin>
);

export default App;