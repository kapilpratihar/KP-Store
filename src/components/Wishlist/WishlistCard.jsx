import React from 'react';
import HighlightOffRoundedIcon from '@material-ui/icons/HighlightOffRounded';
import { useDispatch } from 'react-redux';
import { removeFromWhishlist } from '../../redux/slices/whishlistSlice';
import { addItem } from '../../redux/slices/Cartslice';

const WishlistCard = ({ productObj }) => {
  const dispatch = useDispatch();
  return (
    <div className="m-4 relative overflow-hidden shadow-md bg-gray-100 hover:shadow-xl hover:bg-white">
      <div className="w-60">
        <div className="w-60 h-64 overflow-hidden relative cursor-pointer ">
          <HighlightOffRoundedIcon
            className="absolute left-52 top-2 cursor-pointer"
            color="action"
            onClick={() => dispatch(removeFromWhishlist(productObj.id))}
          />
          <img
            className="object-scale-down"
            alt="Product"
            src={productObj.img}
          />
        </div>
        <div className="px-3 pb-6 py-4 border relative">
          <div className="leading-3">
            <span className="text-lg font-medium truncate inline-block">
              {productObj.title.length > 20 ? (
                <div>{productObj.title.slice(0, 21)}...</div>
              ) : (
                <div>{productObj.title}</div>
              )}
            </span>
          </div>
          <span className="text-md font-semibold">₹ {productObj.price}</span>
          <span className="ml-3 text-sm line-through text-gray-500">
            ₹ 2000
          </span>
          <span className="ml-3 text-red-400 text-sm font-semibold">
            ( 50% OFF )
          </span>
        </div>
      </div>

      <div>
        <span
          className={`w-full inline-block border text-center cursor-pointer py-1 font-medium bg-pink-500 text-gray-100 hover:bg-pink-600 `}
          onClick={() => {
            dispatch(removeFromWhishlist(productObj.id));
            dispatch(addItem(productObj));
          }}
        >
          MOVE TO CART
        </span>
      </div>
    </div>
  );
};

export default WishlistCard;
