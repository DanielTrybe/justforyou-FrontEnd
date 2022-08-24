import { Container } from "@mui/material";
import { Outlet } from "react-router-dom";
import Header from "./Header/Header";

export default function MainLayout() {
  return (
    <Container maxWidth="xl">
      <Header />

      <Outlet />
    </Container>
  );
}
