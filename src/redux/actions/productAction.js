import axios from "axios";
import * as actionTypes from '../constants/productConstant.js';

const URL = '';

export const getProducts = () => async (dispatch) => {
    try {
        const { data } = await axios.get(`${URL}/products`);
        
        dispatch({ type: actionTypes.GET_PRODUCTS_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: actionTypes.GET_PRODUCTS_FAIL, payload: error.message });
    }
};

export const getProductDetails = (id) => async (dispatch) => {
    try {
        dispatch({ type: actionTypes.GET_PRODUCT_DETAILED_REQUEST });

        const { data } = await axios.get(`${URL}/product/${id}`);
       
        dispatch({ type: actionTypes.GET_PRODUCT_DETAILED_SUCCESS, payload: data });

    } catch (error) {
        dispatch({ type: actionTypes.GET_PRODUCT_DETAILED_FAIL, payload: error.message });
    }
};