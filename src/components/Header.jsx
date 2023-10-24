import React from 'react';
import { AppBar, Container, Toolbar, Typography, Select, MenuItem, makeStyles, ThemeProvider, createTheme } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { CryptoState } from '../CryptoContext';

const useStyles = makeStyles(() => ({
    title : {
        flex : 1, 
        color : 'gold',
        fontFamily : 'Monserrat',
        fontWeight : 'bold',
        cursor : 'pointer'
    }
}));

const Header = () => {
    const classes = useStyles();
    const history = useHistory();

    const { currency, setCurrency } = CryptoState();

    const darkTheme = createTheme({
        palette : {
            primary : {
                main : '#fff'
            },
            type : 'dark'
        },
    });

  return (
    <ThemeProvider theme={darkTheme}>
        <AppBar color='transparent' position='static'>
            <Container>
                <Toolbar>
                    <Typography variant='h6' className={classes.title} onClick={() => history.push('/')}>
                        Crypto Hunter
                    </Typography>
                    <Select 
                        variant='outlined'
                        style={{
                            width: 100,
                            height: 40,
                            marginRight: 15
                        }}
                        value={currency}
                        onChange={(e) => setCurrency(e.target.value)}
                    >
                        <MenuItem value={'USD'}>USD</MenuItem>
                        <MenuItem value={'INR'}>INR</MenuItem>
                    </Select>
                </Toolbar>
            </Container>
        </AppBar>
    </ThemeProvider>
  )
}

export default Header
