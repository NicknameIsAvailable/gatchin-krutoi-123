"use client"

import React from 'react';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import { Button, Input, Sheet, Typography } from '@mui/joy';
import { Data } from '../shared';

const AddForm: React.FC = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<Data>();

  const onSubmit = async (data: Data) => {
    const res = await fetch("/api", {
      method: "POST",
      body: JSON.stringify(data)
    })

    const result: any = await res.json()
    console.log(result)
    if (result?.success) {
      alert("Запись добавлена")
    } else {
      alert("Ошибка при добавлении записи")
    }
  }

  return (
    <Sheet variant="outlined" sx={{ padding: 2, borderRadius: 4, display: 'flex', flexDirection: 'column', gap: 1 }}>
      <Typography sx={{ marginBottom: 2 }} level="h2">
        Добавление записи
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
        <label>
          <Typography level="h4">Производитель</Typography>
          <Controller
            name="manufacturer"
            control={control}
            defaultValue=""
            render={({ field }) => <Input {...field} placeholder="Производитель" />}
          />
        </label>

        <label>
          <Typography level="h4">Тип процессора</Typography>
          <Controller
            name="processor_type"
            control={control}
            defaultValue=""
            render={({ field }) => <Input {...field} placeholder="Тип процессора" />}
          />
        </label>

        <label>
          <Typography level="h4">Тактовая частота</Typography>
          <Controller
            name="clock_frequency"
            control={control}
            render={({ field }) => <Input {...field} placeholder="Тактовая частота" type="number" />}
          />
        </label>

        <label>
          <Typography level="h4">Объем ОЗУ (ГБ)</Typography>
          <Controller
            name="ram"
            control={control}
            render={({ field }) => <Input {...field} placeholder="Объем ОЗУ" type="number" />}
          />
        </label>

        <label>
          <Typography level="h4">Объем жесткого диска (ГБ)</Typography>
          <Controller
            name="hdd"
            control={control}
            render={({ field }) => <Input {...field} placeholder="Объем жесткого диска" type="number" />}
          />
        </label>

        <Button variant="outlined" type="submit">
          Добавить в таблицу
        </Button>
      </form>
    </Sheet>
  );
};

export default AddForm;
