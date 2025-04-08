"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

interface CartItem {
id: number;
image: string;
name: string;
price: number;
quantity: number;
}

const CartPage: React.FC = () => {
const [cartItems, setCartItems] = useState<CartItem[]>([]);

useEffect(() => {
    setCartItems([
    {
        id: 1,
        image: "/books/book1.png",
        name: "The Complete Full-Stack Web Development Bootcamp",
        price: 349.99,
        quantity: 1,
    },
    ]);
}, []);

const removeItem = (id: number) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
};

const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
);

return (
    <div className="max-w-7xl mx-auto px-6 py-10 mt-20">
    <h1 className="text-3xl font-bold mb-6">Shopping Cart</h1>

    <div className="grid md:grid-cols-3 gap-10">
        {/* Cart Items */}
        <div className="md:col-span-2">
        {cartItems.map((item) => (
            <div
            key={item.id}
            className="flex flex-col md:flex-row justify-between gap-4 border-b border-gray-300 py-6"
            >
            <div className="flex gap-4">
                <Image
                src={item.image}
                alt={item.name}
                width={120}
                height={80}
                className="rounded-md object-cover"
                />
                <div className="flex flex-col gap-1">
                <h2 className="font-bold text-lg">{item.name}</h2>
                <p className="text-sm text-gray-600">By Dr. Angela Yu, Developer</p>
                <div className="flex flex-wrap gap-2 text-sm text-gray-500">
                    <span className="bg-green-100 text-green-600 px-2 py-0.5 rounded font-medium">
                    Bestseller
                    </span>
                    <span>
                    <strong>4.7</strong> (432,339 ratings)
                    </span>
                    <span>61.5 total hours • 374 lectures • All Levels</span>
                </div>
                <div className="flex gap-4 text-sm text-purple-700 mt-1">
                    <button className="hover:underline cursor-pointer" onClick={() => removeItem(item.id)}>
                    Remove
                    </button>
                    <Link href={'/wishlist'}className="hover:underline">Move to Wishlist</Link>
                </div>
                </div>
            </div>

            <div className="text-right font-bold text-purple-700 mt-2 md:mt-0">
                £{item.price.toFixed(2)}
            </div>
            </div>
        ))}
        </div>

        {/* Sidebar */}
        <div className="border rounded-lg p-6 shadow-sm h-fit">
        <h2 className="text-xl font-bold mb-4">Total:</h2>
        <div className="flex justify-between items-center text-lg">
            <span className="font-bold">£{subtotal.toFixed(2)}</span>
        </div>

        <Link href={'/checkout'} className="mt-4 bg-purple-600 hover:bg-purple-700 text-white w-full py-3 rounded font-semibold flex items-center justify-center gap-2 ">
            Proceed to Checkout
        </Link>
        </div>
    </div>
    </div>
);
};

export default CartPage;
