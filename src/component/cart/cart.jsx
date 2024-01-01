import React from 'react';
import { Grid, Typography,Box, Button,styled } from "@mui/material";
import { useSelector } from "react-redux";
import CartItem from './CartItem';
import TotalView from './TotalView';
import EmptyCart from './EmptyCart';
import { payUsingPaytm } from '../../service/api';
import { post } from '../../utils/paytm';

const Container = styled(Grid)(({ theme}) => ({
    padding : '30px 135px',
    [theme.breakpoints.down('md')] :{
        padding:'15px 0',
    }
}));


const Header = styled(Grid)`
    padding: 15px 24px;
    background:#fff;
`;
const ButtonWapper = styled(Box)`
    padding: 16px 22px;
    background:#fff;
    box-shadow: 0 -2px 10px 0 rgb(0 0 0 / 10%);
    border-top: 1px solid #f0f0f0:
`;
const StyledBtn = styled(Button)`
    display:flex;
    margin-left: auto;
    background:#fb641b;
    color:#fff;
    width:250px;
    height:52px;
    border-radius:2px;    
`;

const LeftContainer = styled(Grid)(({theme}) => ({
    padding:15,
    [theme.breakpoints.down('sm')]:{
        marginBottm: 15,
}
}))



const Cart = () => {
    const { cartItems } = useSelector(state => state.cart);
    const buyNow = async () =>{
        let response = await payUsingPaytm({amount: 500, email:"gauravPachbhai@gamil.com"});
        let information = {
            action : 'https://securegw-stage.paytm.in/order/process',
            params: response
        }
        post(information);
    }

    return (
        <>
            {
                cartItems.length ?
                    <Container container>
                        <LeftContainer item lg={9} md={9} sm={12} xs={12}>
                            <Header>
                                <Typography> My Cart ({cartItems.length})</Typography>
                            </Header>
                            {
                                cartItems.map(item => (
                                    <CartItem key={item.id} item={item} />
                                ))
                            }
                            <ButtonWapper>
                                <StyledBtn  onClick={()=> buyNow()}>PLACE ORDER</StyledBtn>
                            </ButtonWapper>
                        </LeftContainer>
                        <Grid item lg={3} md={3} sm={12} xs={12} style={{paddingTop: 15}}>
                            <TotalView cartItems={cartItems}/>
                        </Grid>
                    </Container>
                    :
                    <EmptyCart/>
            }
        </>
    )
}

export default Cart;
