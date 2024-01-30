import { Container, Table, Typography } from '@mui/joy';
import React from 'react';

const Page = async () => {

    const domain = process.env.DOMAIN

    const fetchData = async () => {
        const response = await fetch(`${domain}/api`, {
            method: "GET"
        });
        const data = await response.json()
        return data
    }

    const data = await fetchData()

    console.log(data)
    return (
        <main>
            <Container>
                <Typography level="h1">Таблица</Typography>
                <Table>
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>Производитель</th>
                            <th>Тип процессора</th>
                            <th>Тактовая частота</th>
                            <th>Объем оперативной памяти</th>
                            <th>Объем жесткого диска</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.data?.map((item: any) => 
                            <tr>
                                <th>{item.id}</th>
                                <th>{item.manufacturer}</th>
                                <th>{item.processor_type}</th>
                                <th>{item.clock_frequency}</th>
                                <th>{item.ram}</th>
                                <th>{item.hdd}</th>
                            </tr>
                            )
                        }
                    </tbody>
                </Table>
            </Container>
        </main>
    );
};

export default Page;