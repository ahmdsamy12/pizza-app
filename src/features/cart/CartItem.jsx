import { useDispatch } from 'react-redux';
import Button from '../../ui/Button';
import { formatCurrency } from '../../utils/helpers';
import { deleteItem } from './cartSlice';
import DeleteButton from '../../ui/DeleteButton';
import UpdateItemQuantity from './UpdateItemQuantity';

function CartItem({ item }) {
  const { id, name, quantity, totalPrice } = item;
  const dispatch = useDispatch();

  return (
    <li className="py-3 sm:flex sm:items-center sm:justify-between">
      <p className="mb-1 sm:mb-0">
        {quantity}&times; {name}
      </p>
      <div className="flex items-center justify-between sm:gap-6">
        <p className="text-sm font-bold">{formatCurrency(totalPrice)}</p>
        <UpdateItemQuantity id={id} />
        <DeleteButton id={id} />
      </div>
    </li>
  );
}

export default CartItem;
