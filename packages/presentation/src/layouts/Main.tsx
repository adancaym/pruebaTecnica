import { Container, CssBaseline } from '@mui/material';
import { MainAppBar } from '../components/ui/Navbar';
import { Outlet } from 'react-router-dom';

export const Main = () => {
  return (
    <>
      <CssBaseline />
      <MainAppBar />
      <Container maxWidth={'sm'}>
        <Outlet />
      </Container>
    </>
  );
};
