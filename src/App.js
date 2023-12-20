import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './components/Header';
import { makeStyles } from '@material-ui/core';
import Alert from './components/Alert';
import { Suspense, lazy } from 'react';

const Homepage = lazy(() => import("./pages/Homepage"));
const CoinPage = lazy(() => import("./pages/CoinPage"));

const useStyles = makeStyles(() => ({
  App: {
    backgroundColor: '#14161a',
    color: 'white',
    minHeight: '100vh'
  },
}));

function App() {
  const classes = useStyles();

  return (
    <BrowserRouter>
      <div className={classes.App}>
        <Header />
        <Suspense fallback={<div>Loading...</div>}>
          <Route path='/' component={Homepage} exact />
          <Route path='/coins/:id' component={CoinPage} />
        </Suspense>
      </div>
      <Alert />
    </BrowserRouter>
  );
}

export default App;
