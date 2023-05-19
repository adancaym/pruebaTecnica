import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MoreVert from '@mui/icons-material/MoreVert';
import { Logo } from './Logo';
import { useBranding } from '../../hooks/useBranding';
import { Link } from 'react-router-dom';

export const MainAppBar = () => {
  const { company, companySystem } = useBranding();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color={'inherit'}>
        <Toolbar variant="dense">
          <Logo />
          <Typography
            variant="h6"
            color="inherit"
            component="div"
            sx={{ flexGrow: 1 }}
          >
            {companySystem} {company}
          </Typography>

          <Link to={'/providers'}>
            <Typography variant="h6" color="inherit" component="div">
              Providers
            </Typography>
          </Link>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <MoreVert />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
