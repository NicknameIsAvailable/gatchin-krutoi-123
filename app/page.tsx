import { Button, Container, Typography } from "@mui/joy";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <Container>
        <Typography level="h1">Тема №3 Персональные ЭВМ</Typography>
        <Link href="/table">
          <Button variant="plain">Посмотреть таблицу</Button>      
        </Link>
        <Link href="/edit">
          <Button variant="plain">Редактировать БД</Button>
        </Link>
      </Container>
    </main>
  );
}
