import React, { Fragment } from 'react';
import { useMediaQuery } from '@material-ui/core';
import { Create, Edit, List, SimpleList, Datagrid, TextField, SimpleForm, TextInput, BulkDeleteButton, ListButton, TopToolbar } from 'react-admin';
import Button from '@material-ui/core/Button';


const UserBulkActionButtons = props => (
    <Fragment>
        <BulkDeleteButton {...props} />
    </Fragment>
);

const UserListButton = ({ basePath, data, resource }) => (
    <TopToolbar>
        <ListButton basePath={basePath} record={data}/>
        <Button color="primary" onClick={UserList}/>
    </TopToolbar>
);

const UserTitle = () => {
    return <span>User Administration</span>
};



export const UserCreate = props => (
    <Create title={<UserTitle/>} {...props} actions={<UserListButton/>}>
        <SimpleForm>
            <TextInput source="name" />
            <TextInput source="login" />
            <TextInput source="password" />
            <TextInput source="cpf" />
        </SimpleForm>
    </Create>
);

export const UserEdit = props => (
    <Edit title={<UserTitle />} {...props} actions={<UserListButton/>}>
            <SimpleForm> 
                <TextInput disabled source="id" />
                <TextInput source="name" />
                <TextInput source="login" />
                <TextInput source="password" />
                <TextInput source="cpf" />
            </SimpleForm>
        </Edit>
    );

export const UserList = props => {
    const isSmall = useMediaQuery(theme => theme.breakpoints.down('sm'));
    return (
    <List title={<UserTitle/>} bulkActionButtons={<UserBulkActionButtons/>} {...props}>
        {isSmall ? (
            <SimpleList
                primaryText={record => record.name}
                secondaryText={record => record.login}
                tertiaryText={record => record.cpf}
            />
        ) : (   
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="name" />
            <TextField source="login" />
            <TextField source="cpf" />
        </Datagrid>
        )}
    </List>
    );
};