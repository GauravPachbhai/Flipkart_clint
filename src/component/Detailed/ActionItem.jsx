import { useState } from "react";
import { Box, Button, styled } from "@mui/material";
import { ShoppingCart as Cart, FlashOn as Flash } from '@mui/icons-material';
import { useNavigate } from "react-router-dom";
import { useDispatch  } from "react-redux";
import { addToCart } from "../../redux/actions/cartAction";
import { payUsingPaytm } from "../../service/api.js";
import {post} from "../../utils/paytm.js"

const LeftContaioiner = styled(Box)(({ theme })=> ({
    minwidth:'40px',
    padding: '40px 0 0 80px',
   
    [ theme.breakpoints.down('lg')]:{
        padding :'20px 40px',
    }
}));
   


const Img = styled('img')({
    width: '90%',
    padding:15
});

const StyleBtn = styled(Button)(({ theme }) => ({
    width: '48%',
    height: '50px',
    borderRadious: '3px',
    [theme.breakpoints.down('lg')]:{
        width:'46%'
    },
    [theme.breakpoints.down('sm')]:{
        width:'48%',
    }
})); 


const ActionItem = ({ product }) => {

    const [quantity, setQuatity] = useState(1);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const {id} = product;

    const addItemToCart = ()=>{
        dispatch( addToCart(id, quantity))
        navigate('/Cart')
    };

    const buyNow = async () =>{
        const data = {amount: 500, email:"gauravPachbhai@gamil.com"};
        let response = await payUsingPaytm({data});
        let information = {
            action :"https://securegw-stage.paytm.in/order/process",
            params: response
        }
        post(information);
    }


    return (
        <LeftContaioiner>
            <Box style={{padding: '15px 20px',  border: '1px solid #f0f0f0',}}>
                <Img src={product.detailUrl} alt="productImg" />
            </Box>
            <StyleBtn variant="contained" onClick={() => addItemToCart()} style={{ marginRight: 10, background: '#ff9f00' }}><Cart />Add to Cart</StyleBtn>
            <StyleBtn variant="contained" onClick={()=> buyNow()} style={{ background: '#fb541b' }}><Flash />Buy Now</StyleBtn>
        </LeftContaioiner>
    )
}

export default ActionItem;