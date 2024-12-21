import React from 'react';
import { ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '../cart/CartProvider';

const CartIcon = () => {
  const { cartItemsCount } = useCart();

  return (
    <Link 
      to="/cart" 
      className="flex items-center gap-2 text-sm text-white whitespace-nowrap hover:text-accent transition-colors duration-300 relative"
    >
      <ShoppingBag size={18} />
      {cartItemsCount > 0 && (
        <span className="absolute -top-2 -right-2 bg-[#fff] text-primary text-xs rounded-full w-4 h-4 flex items-center justify-center">
          {cartItemsCount}
        </span>
      )}
    </Link>
  );
};

export default CartIcon;