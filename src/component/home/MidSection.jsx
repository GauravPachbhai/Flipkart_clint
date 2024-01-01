
import { imgurl } from '../../constants/data';
import { Grid,styled } from "@mui/material";

const Wapper =styled(Grid)`
    margin-top:10px;
    justify-content:space-between;
`;
const Image = styled('img') (({theme}) => ({
    marginTop:10,
    width:'100%',
    display:'flex',
    justifyContent:'space-between',
    [theme.breakpoints.down('md')]:{
        objectFit:'cover',
        height:120
    }
}));


const MidSection = () => {
    const url = 'https://rukminim1.flixcart.com/flap/3006/433/image/4789bc3aefd54494.jpg?q=50';
    return (
        <>
        <Wapper lg={12} sm={12} md={12} xs={12} container>
            {
                imgurl.map(image => (
                    <Grid item lg={4} ms={4} sm={12} xs={12} >
                        <img src={image} alt="ad" style={{ width: '98%',marginLeft:'.4%',paddingTop:4}} />
                    </Grid>
                ))
            }
        </Wapper>
        <Image src={url} alt='covid'/>
        </>
    )
};
export default MidSection;