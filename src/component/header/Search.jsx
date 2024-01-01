import { useState, useEffect } from 'react';

import { InputBase, Box, styled, List, ListItem } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useSelector, useDispatch } from 'react-redux';
import { getProducts } from '../../redux/actions/productAction';
import { Link } from 'react-router-dom';

const SearchContainer = styled(Box)`
    background: #ffff;
    margin-left:10px;
    width:38%;
    // height:40px;
    display: flex;
`
const InputSearch = styled(InputBase)`
    padding-left:20px;
    width:100%;
    font-size: unset;
`
const SearchIconWrapper = styled(Box)`
    color:blue;
    padding: 5px;
    display: flex
`;

const ListWapper = styled(List)`
    position: absolute;
    background:#141313a3;
    color: #f0e7e7s;
    margin-top:36px;
    border-radius:1rem
`
const Search = () => {
    const [text, setText] = useState('')
    const { products } = useSelector(state => state.getProducts)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProducts())
    }, [dispatch])

    const getText = (text) => {
        setText(text);
    }
    return (
        <SearchContainer>
            <InputSearch
                placeholder='Search for products, brands and more '
                onChange={(e) => getText(e.target.value)}
                value={text}
            />
            <SearchIconWrapper>
                <SearchIcon />
            </SearchIconWrapper>
            {
                text &&

                <ListWapper>
                    {
                        products.filter(product => product.title.longTitle.toLowerCase().includes(text.toLowerCase())).map(product => (
                            <ListItem>
                                <Link to={`/product/${product.id}`}
                                    onClick={ () => setText('')}
                                    style={{ textDecoration: 'none', color:'inherit'}}
                                >
                                    {product.title.longTitle}
                                </Link>

                            </ListItem>
                        ))
                    }

                </ListWapper>
            }
        </SearchContainer>

    )
}

export default Search;