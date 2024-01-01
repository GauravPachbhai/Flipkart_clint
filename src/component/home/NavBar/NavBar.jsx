

import { Box, Typography, styled } from "@mui/material";
import { navData } from "../../../constants/data";


const Component = styled(Box)(({ theme }) => ({
    display: 'flex',
    margin: '55px 130px 0 130px',
    justifuContent: 'space-between',
    overflow: 'overlay',
    [theme.breakpoints.down('lg')]: {
        margin: 0
    }
}));
const Container = styled(Box)`
    padding: 12px 34px;
    text-align: center;
`;
const ImgText = styled(Typography)`
    font-size: 13.5px;
    font-weight: 600;
    font-family: inherit;   
`;
const NavBar = () => {
    return (
        <Box style={{ background:'#ffffff' }}>
            <Component>
                {
                    navData.map(data => (
                        <Container>
                            <img src={data.url} alt='nav' style={{ width: 64 }} />
                            <ImgText>{data.text}</ImgText>
                        </Container>
                    ))
                }
            </Component>
        </Box>
    )
}

export default NavBar;