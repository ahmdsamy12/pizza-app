import { useDispatch, useSelector } from 'react-redux';
import Button from '../../ui/Button';
import {
  decreaseItemQuantity,
  getCurrentQuantityById,
  increaseItemQuantity,
} from './cartSlice';

function UpdateItemQuantity({ id }) {
  const currentQuantity = useSelector(getCurrentQuantityById(id));

  const dispatch = useDispatch();
  return (
    <div className=" flex items-center gap-1 md:gap-3">
      <Button type="round" onClick={() => dispatch(decreaseItemQuantity(id))}>
        -
      </Button>
      <span>{currentQuantity}</span>
      <Button type="round" onClick={() => dispatch(increaseItemQuantity(id))}>
        +
      </Button>
    </div>
  );
}

export default UpdateItemQuantity;
