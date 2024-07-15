

import { FIND_PRODUCT_BY_ID_SUCCESS } from './Actiontype';
import { FIND_PRODUCT_BY_ID_REQUEST } from './Actiontype';
import { FIND_PRODUCT_BY_ID_FAILURE } from './Actiontype';
import { api } from '../../../config/apiconfig';
import axios from 'axios';

// function Action() {
//   return (
//     <div>Action</div>
//   )
// }

// export default Action

export const findProductsById = (productId) => async (dispatch) => {
   dispatch({ type: FIND_PRODUCT_BY_ID_REQUEST });

   try {
       const { data } = await axios.get(`http://localhost:4000/MensKurta/${productId}`);
       dispatch({ type: FIND_PRODUCT_BY_ID_SUCCESS, payload: data });
   } catch (error) {
       dispatch({ type: FIND_PRODUCT_BY_ID_FAILURE, payload: error.message });
   }
};