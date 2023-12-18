import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import { CryptoState } from '../../CryptoContext';
import { Avatar, Button } from '@material-ui/core';
import { signOut } from 'firebase/auth';
import { auth } from '../../firebase';

const useStyles = makeStyles({
    container: {
        width: 350,
        padding: 25,
        height: "100%",
        display: "flex",
        flexDirection: 'column',
        fontFamily: 'monospace',
    },
    profile: {
        flex: 1,
        display: "flex",
        flexDirection: 'column',
        alignItems: 'center',
        gap: "20px",
        height: '92%',
    },
    picture: {
        width: 200,
        height: 200,
        cursor: "pointer",
        backgroundColor: '#EEBC1D',
        objectFit: 'contain'
    },
    logout: {
        height: "6%",
        width: "100%",
        backgroundColor: "#EEBC1D",
        marginTop: 20
    },
    watchlist: {
        flex: 1,
        width: "100%",
        backgroundColor: "grey",
        borderRadius: 10,
        padding: 10,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 12,
        overflowY: "scroll",
    }
});

export default function UserSidebar() {
    const classes = useStyles();
    const [state, setState] = React.useState({
        right: false,
    });

    const { user, setAlert } = CryptoState();

    const toggleDrawer = (anchor, open) => (event) => {
        if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const logout = () => {
        signOut(auth);

        setAlert({
            open: true,
            type: "success",
            message: "Logout Successfull!"
        })

        toggleDrawer();
    }


    return (
        <div>
            {['right'].map((anchor) => (
                <React.Fragment key={anchor}>
                    <Avatar
                        onClick={toggleDrawer(anchor, true)}
                        style={{
                            height: 38,
                            width: 38,
                            cursor: 'pointer',
                            backgroundColor: '#EEBC1D'
                        }}
                        src={user.photoURL}
                        alt={user.displayName || user.email}
                    />
                    <SwipeableDrawer
                        anchor={anchor}
                        open={state[anchor]}
                        onClose={toggleDrawer(anchor, false)}
                        onOpen={toggleDrawer(anchor, true)}
                    >
                        <div className={classes.container}>
                            <div className={classes.profile}>
                                <Avatar
                                    className={classes.picture}
                                    src={user.photoURL}
                                    alt={user.displayName || user.email}
                                />
                                <span
                                    style={{
                                        width: "100%",
                                        fontSize: 25,
                                        textAlign: "center",
                                        fontWeight: "bolder",
                                        wordWrap: "break-word"
                                    }}
                                >
                                    {user.displayName || user.email}
                                </span>
                                <div className={classes.watchlist}>
                                    <span style={{ fontSize: 15, textShadow: "0 0 5px black" }}>
                                        Watchlist
                                    </span>
                                </div>
                            </div>

                            <Button
                                variant="contained"
                                className={classes.logout}
                                onClick={logout}
                            >Log Out</Button>
                        </div>
                    </SwipeableDrawer>
                </React.Fragment>
            ))}
        </div>
    );
}
