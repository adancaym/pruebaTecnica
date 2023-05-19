import { CsImage } from '../components/common/CsImage';
import { Grid } from '@mui/material';
import Typography from '@mui/material/Typography';
import { useAuth } from '../hooks/useAuth';

export const Home = () => {
  const { me } = useAuth();
  return (
    <Grid
      spacing={4}
      display={'flex'}
      flexDirection={'column'}
      justifyContent={'center'}
      alignItems={'center'}
      container
    >
      <Grid item>
        <Typography textAlign={'center'} variant={'h2'}>
          {me.name}
        </Typography>
      </Grid>
      <Grid item>
        <Typography textAlign={'center'} variant={'h2'}>
          {me.appVersion}
        </Typography>
      </Grid>
      <Grid item>
        <CsImage src={'https://placehold.co/600x400'} />
      </Grid>
    </Grid>
  );
};
