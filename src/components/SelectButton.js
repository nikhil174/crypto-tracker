import { makeStyles } from '@material-ui/core';
import React from 'react'

const useStyles = makeStyles({
    selectbutton: {
        border: '1px solid gold',
        borderRadius: 5, 
        padding: 10,
        paddingRight: 20,
        paddingLeft: 20,
        fontFamily: 'Montserrat',
        cursor: 'pointer',
        backgroundColor: (selected) => (selected ? 'gold' : ''),
        color: selected => (selected ? 'black' : ''),
        fontWeight: selected => (selected ? 700 : 500),
        '&:hover': {
            backgroundColor: 'gold',
            color: 'black',
        },
        width: '22%',
    }
})

const SelectButton = ({children, selected, onClick }) => {;
    const classes = useStyles(selected);
  return (
    <span
    onClick={onClick}
    className={classes.selectbutton}
    >
      {children}
    </span>
  )
}

export default SelectButton
