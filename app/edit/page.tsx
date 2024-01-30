
import { Container, Typography } from '@mui/joy';
import React from 'react';
import AddForm from '../components/add-form';
import DeleteForm from '../components/delete-form';
import { Data } from '../shared';
import addRecord from '../functions/add-record';

const Page = () => {
    return (
        <main>
            <Container sx={{gap: 5, display: 'flex', flexDirection: "column"}}>
                <Typography level="h1">Редактирование таблицы</Typography>
                <AddForm/>
                {/* <UpdateForm/> */}
                <DeleteForm/>
            </Container>
        </main>
    );
};

export default Page;