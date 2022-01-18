import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { styled } from '@mui/material/styles';
import Hidden from '@mui/material/Hidden';
import LoadingButton from '@mui/lab/LoadingButton';
import ShuffleIcon from '@mui/icons-material/Shuffle';
import { fetchAllData, shuffle } from './state/action-creators';
import ParticleBackground from './particleBackground';
import ImageSlider from "./components";
import "./css/App.css";

const Container = styled('div')(({ theme }) => ({
  marginTop: '20%',
  [theme.breakpoints.down('sm')]: {
    marginTop: '20%'
  },
  [theme.breakpoints.up('sm')]: {
    marginTop: '10%'
  },
  [theme.breakpoints.up('md')]: {
    marginTop: '10%'
  },
  [theme.breakpoints.up('lg')]: {
    marginTop: '10%'
  },
}));

const Header = styled('div')({
  margin: '0 20px 20px 20px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center'
});

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAllData());
  }, []);
  return (
    <Container>
      <Header>
        <h1 style={{color: 'white', fontFamily: 'monospace', fontSize: '50px'}}>Starzoid</h1>
        <LoadingButton
          onClick={() => {
            dispatch(shuffle());
            dispatch(fetchAllData());
          }}
          style={{background: '#fff', color: '#333', height: 'fit-content', padding: '10px', zIndex: 1}}
          startIcon={<ShuffleIcon />}
          variant="contained">
          Shuffle
        </LoadingButton>
      </Header>
      <div className="container mt-5 carousel">
        <ParticleBackground />
        <Hidden mdUp>
          <ImageSlider slidesToShow={1} />
        </Hidden>
        <Hidden mdDown>
          <ImageSlider slidesToShow={3} />
        </Hidden>
      </div>
    </Container>
  );
}
export default App;
