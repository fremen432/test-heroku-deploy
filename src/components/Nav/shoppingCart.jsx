import { ShoppingCartIcon } from '@heroicons/react/outline'

function CartIcon() {
    return (
        <>
            {/* Open profile button */}
            <div className="hidden px-2 lg:flex lg:items-center" >
                <a href="/cart" className="flex text-sm bg-white rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    <ShoppingCartIcon className="w-5 h-5 text-gray-400" aria-hidden="true" />
                    <span className="cart-item-counter" >3</span>
                </a>
            </div>
        </>
    )
}

export default CartIcon;
