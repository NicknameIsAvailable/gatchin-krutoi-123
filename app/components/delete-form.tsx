"use client"

import { Button, Input, Sheet, Typography } from '@mui/joy';
import React from 'react';
import { Controller, useForm } from 'react-hook-form';

interface Inputs {
    id: number
}

const DeleteForm = () => {
    const {
        control,
        handleSubmit,
        formState: { errors },
      } = useForm<Inputs>();
    
      const onSubmit = async (data: Inputs) => {
        const res = await fetch(`/api?id=${data.id}`, {
            method: "DELETE"
        })

        const result = await res.json()

        if (result?.success) {
            alert(`Запись ${data.id} удалена`)
          } else {
            alert("Ошибка при удалении записи")
          }
      }

    return (
    <Sheet variant="outlined" sx={{padding: 2, borderRadius: 4, display: "flex", flexDirection: "column", gap: 1}}>
        <Typography sx={{marginBottom: 2}} level="h2">Удаление записи</Typography>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
            <label>
                <Typography level="h4">ID для удаления</Typography>
                <Controller
                    name="id"
                    control={control}
                    render={({ field }) => <Input {...field} placeholder="ID" />}
                />
            </label>

            <Button type="submit" color="danger" variant="outlined">
                Удалить
            </Button>
        </form>
    </Sheet>
    );
};

export default DeleteForm;