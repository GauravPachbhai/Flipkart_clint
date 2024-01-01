import { useEffect } from "react";

//components
import { Box,styled } from "@mui/material";
import Banner from "./Banner";
import NavBar from "./NavBar/NavBar";
import { getProducts } from "../../redux/actions/productAction.js";
import {useDispatch,useSelector} from'react-redux';
import Slides from "./Slide.jsx";
import MidSlid from "./MidSlid.jsx";
import MidSection from './MidSection.jsx'
const Component = styled(Box)  `
    padding:10px;
    backgroung: #F2F2F2
`


const Home =()=> {

    const {products} = useSelector(state => state.getProducts);
    
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getProducts());
    },[dispatch])
    return(
        <>
            <NavBar/>
            <Component>
                <Banner/>
                <MidSlid products = {products} title={'Deal of the day'} timer={true}/>
                <MidSection/>
                <Slides products = {products} title={'Discounts for you'} timer={false}/>
                <Slides products = {products} title={'Suggested Item'} timer={false}/>
                <Slides products = {products} title={'Top Selection'} timer={false}/>
            </Component>
            
        </>
        
    )
}

export default Home; 