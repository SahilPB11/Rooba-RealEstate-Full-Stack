import React from "react";
import TopBar from "../components/marketCompo/TopBar";

const CartPage = () => {
  const cartItems = [
    { id: 1, name: "Product 1", price: 20, quantity: 2 },
    { id: 2, name: "Product 2", price: 30, quantity: 1 },
    // Add more items as needed
  ];

  const calculateTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };
  useEffect(() => {}, []);

  return (
    <div>
      <TopBar />

      <div className="container mx-auto p-4 sm:p-8">
        <h1 className="text-3xl font-bold mb-4 sm:mb-8">Shopping Cart</h1>

        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <div>
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex flex-col sm:flex-row items-center justify-between border-b-2 py-2"
              >
                <div className="flex items-center mb-2 sm:mb-0">
                  <p className="font-semibold">{item.name}</p>
                  <p className="text-gray-500 ml-4">
                    Quantity: {item.quantity}
                  </p>
                </div>
                <p className="font-semibold mt-2 sm:mt-0">
                  ${item.price * item.quantity}
                </p>
              </div>
            ))}

            <div className="mt-8 flex flex-col sm:flex-row justify-between items-center">
              <p className="text-xl font-bold mb-2 sm:mb-0">Total:</p>
              <p className="text-xl font-bold">${calculateTotal()}</p>
            </div>

            <button className="mt-8 bg-blue-500 text-white py-2 px-4 rounded">
              Proceed to Checkout
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage;
