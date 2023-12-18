import { Box, Button, TextField } from '@material-ui/core';
import React, { useState } from 'react'
import { CryptoState } from '../../CryptoContext';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase';

const Signup = ({ handleClose }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const { setAlert } = CryptoState();

    const handleSubmit = async () => {
        if (password !== confirmPassword) {
            setAlert({
                open: true,
                message: 'Password do not match',
                type: 'error',
            });
        }

        try {
            const result = await createUserWithEmailAndPassword(auth, email, password);

            setAlert({
                open: true,
                message: `Sign up Successful. Welcome ${result.user.email}`,
                type: 'success'
            })

            handleClose();
        } catch (error) {
            setAlert({
                open: true,
                message: error.message,
                type: 'error',
            });
        }
    }

  return (
    <Box
     style={{ display: 'flex', flexDirection: 'column' , gap: '20px', padding: '16px' }}
    >
        <TextField
            variant='outlined'
            type='email'
            label='Enter Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            fullWidth
        />
                <TextField
            variant='outlined'
            type='password'
            label='Enter Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            fullWidth
        />
                <TextField
            variant='outlined'
            type='password'
            label='Confirm Password'
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            fullWidth
        />

        <Button 
            variant="contained"
            size="large"
            style={{ backgroundColor: '#EEBC1D'}}
            onClick={handleSubmit}
        > 
            Sign Up
        </Button>
    </Box>
  )
}

export default Signup
