import { useState } from 'react';

import { AppBar, Toolbar, Box, IconButton, Typography, styled, Drawer, List, ListItem } from '@mui/material'
import {Menu} from '@mui/icons-material';

//component
import Search from './Search'
import CoustomeButton from './CoustomeButton';
import { Link } from 'react-router-dom';


const StyleHeader = styled(AppBar)`
    background: #2874f0;
    height: 55px
`
const Component = styled(Link)`
    margin-left:12%;
    line-height:0;
    text-decoration:none;
    color:inherit;
`
const SubHeading = styled(Typography)`
    font-size:10px;
    font-style: italic;    
`
const PlusImg = styled('img')({
    width: 10,
    height: 10,
    marginTop: 2,
    marginLeft: 4
})
const CoustomeBtnWrapper = styled(Box)(({ theme }) => ({
    margin: '0 5% 0 auto',
    [theme.breakpoints.down('md')]:{
        display:'none'
    }
}));

const MenuBtn = styled(IconButton)(({ theme })=>({
    display:'none',
    [theme.breakpoints.down('md')]:{
        display:'block'
    }
}));


const Header = () => {
    const logoURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png';

    const subURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png';

    const[open, setOpen] = useState(false)

    const handleOpen =()=>{
        setOpen(true)
    }
    const handleClose=()=>{
            setOpen(false)
    };

    const list =()=>(
        <Box  style={{width:200}} onClick={handleClose}>
            <List>
                <ListItem>
                    <CoustomeButton/>
                </ListItem>
            </List>
        </Box>
    )
    return (
        <StyleHeader>
            <Toolbar style={{ minHeight: 55 }}>
                <MenuBtn color=" inherit" onClick={handleOpen}>
                    <Menu/>
                </MenuBtn>
                <Drawer open={open} onClose={handleClose}>
                    {list( )}
                </Drawer>
                <Component to={'/'}>
                    <img src={logoURL} alt='logoUrl' style={{ width: 75 }} />
                    <Box style={{ display: 'flex' }}>
                        <SubHeading>Explore&nbsp;
                            <Box component="span" style={{ color: '#FFE500' }}>Plus</Box>
                        </SubHeading>
                        <PlusImg src={subURL} alt='sunUrl' />
                    </Box>
                </Component>
                <Search />
                {/* <Box style={{ margin: '0 2% 0 auto' }}>
                    
                </Box> */}
                <CoustomeBtnWrapper>
                    <CoustomeButton />
                </CoustomeBtnWrapper>
            </Toolbar>
        </StyleHeader>
    );
}


export default Header;