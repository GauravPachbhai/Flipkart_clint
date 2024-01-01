
import React, { useState, useContext } from 'react';

import { Badge, Box, Button, Typography, styled } from '@mui/material';
import { ShoppingCart } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';


//components
import LoginDilog from '../Login/LoginDilog';
import { DataContext } from '../../context/DataProvider';
import Profile from './Profile.jsx';


const Wrapper = styled(Box)(({ theme }) => ({
    display: 'flex',
    margin: '0 3% 0 auto ',
    '& > *': {
        marginRight: '40px ',
        fontSize: '16px',
        alingItem: 'center'
    },
    [theme.breakpoints.down('md')]: {
        display: 'block'
    }
}));


const Container = styled(Link)(({ theme }) => ({
    display: 'flex',
    color: 'inherit',
    textDecoration: 'none',

    [theme.breakpoints.down('md')]: {
        display: 'block'
    }
}));


const LoginBtn = styled(Button)`
    color: #2874f0;
    background: #ffff;
    text-transform: none;
    padding: 5px 40px;
    border-radius:2px;
    box-shadow: none;
    font-weight: 600;
    height: 32px; 
    margin: 0 3% 0 auto;
`

const CoustomeButton = () => {
    const [open, setOpen] = useState(false);

    const { account, setAccount } = useContext(DataContext);

    const {cartItems} = useSelector(state => state.cart);

    const openDialog = () => {
        setOpen(true);
    }
    return (
        <Wrapper>
            {
                account ?
                    <Profile account={account} setAccount={setAccount} /> : <LoginBtn variant="outline" onClick={() => openDialog()}>Login</LoginBtn>
            }

            <Typography style={{ marginTop: 3, width: 135 }}>Become a Seller</Typography>
            <Typography style={{ marginTop: 3, width: 135 }}>More</Typography>

            <Container to="/cart">
                <Badge badgeContent={cartItems?.length} color="error">
                    <ShoppingCart />
                </Badge>
                <Typography style={{marginLeft:10 }}>Cart</Typography>
            </Container>
            <LoginDilog open={open} setOpen={setOpen} />
        </Wrapper>
    )
}

export default CoustomeButton;