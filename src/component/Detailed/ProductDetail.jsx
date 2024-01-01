import { Box, Table, TableBody, TableCell, TableRow, Typography, styled } from '@mui/material';
import { LocalOffer as Badge } from '@mui/icons-material';



const SmallText = styled(Box)`
    & > p{
        font-size:14px;
        margin-top:10px
    }
`;

const StyledBadge = styled(Badge)`
    margin-right: 10px;
    color: #00CC00;
    fonst-size:15px

`;
const ColumnText = styled(TableRow)`
    font-size:14px;   
    vertical-align:base-line;
    & td{
        font-size:14px;
        margin-top:10px;
        border:none;
    }
`

const ProductDetails = ({ product }) => {
    const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png';
    const date = new Date(new Date().getTime() + (5 * 24 * 60 * 100));
    const adURL = 'https://rukminim1.flixcart.com/lockin/774/185/images/CCO__PP_2019-07-14.png?q=50';
    return (
        <>
            <Typography>{product.title && product.title.longTitle}</Typography>
            <Typography style={{ marginTop: 5, color: '#878787', fontSize: 14 }}>
                8 Rating & 1 Review
                <Box component="span"> <img src={fassured} style={{ width: 77, marginLeft: 20 }} /></Box>
            </Typography>
            <Typography>
                <Box component="span" style={{ fontSize: 28 }}>₹{product.price.cost}</Box>&nbsp;&nbsp;&nbsp;
                <Box component="span" style={{ color: '#878787' }}>₹<strike>{product.price.mrp}</strike></Box>&nbsp;&nbsp;&nbsp;
                <Box component="span" style={{ color: '#388E3C' }}>{product.price.discount} off</Box>
            </Typography>
            <SmallText>
                <Typography><StyledBadge />10% off on HDFC Bank Credit Card EMI Transactions, up to ₹1,500 on orders of ₹7,500 and above T&C</Typography>
                <Typography><StyledBadge />10% Instant Discount on ICICI Bank Debit Cards, up to ₹250, on orders of ₹2000 and above T&C</Typography>
                <Typography><StyledBadge />10% off on Federal Bank Credit Card and Credit EMI Txns, up to ₹2,000 on orders of ₹5,000 and above T&C</Typography>
                <Typography><StyledBadge />Get extra 63% off (price inclusive of cashback/coupon) T&C</Typography>
            </SmallText>
            <Table>
                <TableBody>
                    <ColumnText>
                        <TableCell style={{ color: '#878787' }}>Delivery</TableCell>
                        <TableCell style={{ fontWeight: 600 }}>Delivery by {date.toDateString()} | 40</TableCell>
                    </ColumnText>
                    <ColumnText>
                        <TableCell style={{ color: '#878787' }}>Warranty</TableCell>
                        <TableCell >No Warranty</TableCell>
                    </ColumnText>
                    <ColumnText>
                        <TableCell style={{ color: '#878787' }}>Seller</TableCell>
                        <TableCell >
                            <Box style={{ color: '#2874f0' }}>SupercomNet</Box>
                            <Typography>GST invoice available</Typography>
                            <Typography>View more seller form ₹{product.price.cost}</Typography>
                        </TableCell>
                    </ColumnText>
                    <ColumnText>
                        <TableCell colSpan={2}>
                            <img src={adURL} style={{ width: 390 }} alt='FlipkartCoin' />
                        </TableCell>
                    </ColumnText>
                    <ColumnText>
                        <TableCell style={{ color: '#878787' }}>Description</TableCell>
                        <TableCell >{product.description}</TableCell>
                    </ColumnText>
                </TableBody>
            </Table>
        </>
    )
};

export default ProductDetails