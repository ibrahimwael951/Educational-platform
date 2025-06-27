"use client";

import React, { useState, useEffect, useMemo } from "react";
import Image from "next/image";
// 1. Import hooks from next-intl and Link from i18n
import { useTranslations, useLocale } from "next-intl";
import { Link } from "@/i18n/navigation";
import { CiShoppingCart } from "react-icons/ci";

// Base structure for cart items (non-translatable data)
const baseCartData = [
{
    id: 1,
    image: "/books/book1.png",
    price: 349.99,
    quantity: 1,
    rating: 4.7,
    ratingCount: "432,339",
    totalHours: 61.5,
    lectures: 374,
},
];

interface CartItem {
id: number;
image: string;
  name: string; // This will come from translations
price: number;
quantity: number;
rating: number;
ratingCount: string;
totalHours: number;
lectures: number;
}

const CartPage: React.FC = () => {

const t = useTranslations("cartPage");
const locale = useLocale();

const [cartItems, setCartItems] = useState<CartItem[]>([]);

useEffect(() => {
    const translatedData = t.raw("itemsData") as { id: number; name: string }[];
    const mergedItems = baseCartData.map(baseItem => {
    const transItem = translatedData.find(t => t.id === baseItem.id);
    return {
        ...baseItem,
        name: transItem ? transItem.name : "Course Name Not Found",
    };
    });
    setCartItems(mergedItems);
  }, [t]);

  const removeItem = (id: number) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const subtotal = useMemo(() => 
    cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0),
    [cartItems]
  );

  return (
    <div dir={locale === 'ar' ? 'rtl' : 'ltr'} className="max-w-7xl mx-auto px-6 py-10 mt-20 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">{t("title")}</h1>

      {cartItems.length === 0 ? (

        <div className="flex flex-col items-center justify-center text-center py-20 bg-gray-50 dark:bg-neutral-800 rounded-lg">
            <CiShoppingCart className="w-24 h-24 text-gray-300 dark:text-neutral-600 mb-4" />
            <h2 className="text-2xl font-semibold mb-2">{t('emptyCart.title')}</h2>
            <p className="text-neutral-500 mb-6">{t('emptyCart.description')}</p>
            <Link href={'/courses'} className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-6 rounded-lg">
                {t('emptyCart.button')}
            </Link>
        </div>
      ) : (
        <div className="grid md:grid-cols-3 gap-10">
          {/* Cart Items */}
          <div className="md:col-span-2">
            {cartItems.map((item) => (
              <div key={item.id} className="flex flex-col md:flex-row justify-between gap-4 border-b dark:border-neutral-700 py-6">
                <div className="flex gap-4">
                  <Image src={item.image} alt={item.name} width={120} height={80} className="rounded-md object-cover" />
                  <div className="flex flex-col gap-1">
                    <h2 className="font-bold text-lg">{item.name}</h2>
                    <p className="text-sm text-gray-600 dark:text-neutral-400">{t("item.author")}</p>
                    <div className="flex flex-wrap gap-2 text-sm text-gray-500">
                      <span className="bg-green-100 text-green-600 px-2 py-0.5 rounded font-medium">
                        {t("item.bestseller")}
                      </span>
                      <span><strong>{item.rating}</strong> {t("item.ratingsText", { rating: '', count: item.ratingCount })}</span>
                      <span>{t("item.detailsText", { hours: item.totalHours, lectures: item.lectures })}</span>
                    </div>
                    <div className="flex gap-4 text-sm text-purple-600 dark:text-purple-400 mt-1">
                      <button className="hover:underline cursor-pointer" onClick={() => removeItem(item.id)}>
                        {t("item.remove")}
                      </button>
                      <Link href={'/wishlist'} className="hover:underline">{t("item.moveToWishlist")}</Link>
                    </div>
                  </div>
                </div>

                <div className="font-bold text-purple-700 dark:text-purple-400 mt-2 md:mt-0 ltr:text-right rtl:text-left">
                  £{item.price.toFixed(2)}
                </div>
              </div>
            ))}
          </div>

          {/* Sidebar */}
          <div className="border dark:border-neutral-700 rounded-lg p-6 shadow-sm h-fit">
            <h2 className="text-xl font-bold mb-4">{t("total")}</h2>
            <div className="flex justify-between items-center text-3xl font-bold">
              <span>£{subtotal.toFixed(2)}</span>
            </div>
            <Link href={'/checkout'} className="mt-4 bg-purple-600 hover:bg-purple-700 text-white w-full py-3 rounded font-semibold flex items-center justify-center gap-2">
              {t("checkoutButton")}
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;