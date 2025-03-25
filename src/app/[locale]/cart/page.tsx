"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaTrash } from "react-icons/fa";

interface CartItem {
id: number;
image: string;
name: string;
price: number;
quantity: number;
}

const CartPage: React.FC = () => {
const [cartItems, setCartItems] = useState<CartItem[]>([]);
const [coupon, setCoupon] = useState("");

useEffect(() => {
    setCartItems([
    { id: 1, image: "/books/book1.png", name: "Book", price: 180.0, quantity: 1 },
    { id: 2, image: "/books/book2.png", name: "Book", price: 90.5, quantity: 1 },
    { id: 3, image: "/books/book1.png", name: "Book", price: 160.0, quantity: 1 },
    { id: 4, image: "/books/book2.png", name: "Book", price: 99.5, quantity: 1 },
    ]);
}, []);

const updateQuantity = (id: number, amount: number) => {
    setCartItems((prev) =>
    prev.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(1, item.quantity + amount) } : item
    )
    );
};

const removeItem = (id: number) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
};

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

return (
    <div className="container mt-30 mx-auto px-6 py-10">
      {/* Cart Table */}
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="overflow-x-auto"
    >
        <table className="w-full border-collapse border border-gray-300 text-left">
        <thead>
            <tr className="bg-gray-100">
            <th className="p-4">Images</th>
            <th className="p-4">Product</th>
            <th className="p-4">Unit Price</th>
            <th className="p-4">Quantity</th>
            <th className="p-4">Total</th>
            <th className="p-4">Remove</th>
            </tr>
        </thead>
        <tbody>
            {cartItems.map((item) => (
            <tr key={item.id} className="border-b border-gray-300">
                <td className="p-4">
                <Image src={item.image} alt={item.name} width={50} height={50} />
                </td>
                <td className="p-4">{item.name}</td>
                <td className="p-4">${item.price.toFixed(2)}</td>
                <td className="p-4 flex items-center">
                <button
                    className="px-2 py-1 border border-gray-300 cursor-pointer"
                    onClick={() => updateQuantity(item.id, -1)}
                >
                    -
                </button>
                <span className="mx-2">{item.quantity}</span>
                <button
                    className="px-2 py-1 border border-gray-300 cursor-pointer"
                    onClick={() => updateQuantity(item.id, 1)}
                >
                    +
                </button>
                </td>
                <td className="p-4">${(item.price * item.quantity).toFixed(2)}</td>
                <td className="p-4">
                <button className="text-red-600 cursor-pointer" onClick={() => removeItem(item.id)}>
                    <FaTrash />
                </button>
                </td>
            </tr>
            ))}
        </tbody>
        </table>
     </motion.div>

      {/* Coupon and Cart Total */}
      <div className="flex items-center justify-center mt-6">
        <div className="w-full md:w-1/2 p-4">
          <h2 className="text-lg font-bold">Cart Totals</h2>
          <div className="border p-4 mt-2">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between mt-2 border-t pt-2">
              <span>Total</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
          </div>
          <button className="bg-purple-600 text-white px-4 py-2 mt-4 w-full hover:bg-purple-900 cursor-pointer">Proceed To Checkout</button>
        </div>
      </div>
    </div>
  );
};

export default CartPage;