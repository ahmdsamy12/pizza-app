import { useDispatch } from 'react-redux';
import Button from './Button';
import { deleteItem } from '../features/cart/cartSlice';

function DeleteButton({ id }) {
  const dispatch = useDispatch();
  return (
    <Button type="small" onClick={() => dispatch(deleteItem(id))}>
      Delete
    </Button>
  );
}

export default DeleteButton;
