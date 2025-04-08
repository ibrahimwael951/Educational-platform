"use client";

import countries from "i18n-iso-countries";
import enLocale from "i18n-iso-countries/langs/en.json";
import { useState } from "react";
import { FaCcVisa, FaCcMastercard, FaCcAmex, FaCcDiscover, FaCcJcb, FaLock, FaCreditCard  } from "react-icons/fa";

countries.registerLocale(enLocale); 

const CheckoutPage = () => {
  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvc, setCvc] = useState("");
  const [name, setName] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("");

  const countryNames = countries.getNames("en", { select: "official" });
  const countryOptions = Object.entries(countryNames);

  return (
    <div className="w-full mt-30 dark:bg-neutral-800 p-6">
      <div className="w-full mx-auto  rounded-xl  grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
        {/* Checkout Form */}
        <div className="md:col-span-2 space-y-6">
          <h2 className="text-2xl font-bold dark:text-white">Checkout</h2>

          {/* Billing Address */}
          <div>
            <label className="block font-semibold mb-2 dark:text-white">Country</label>
            <select
              className="border border-gray-300 rounded p-2 w-full cursor-pointer dark:text-neutral-400"
              value={selectedCountry}
              onChange={(e) => setSelectedCountry(e.target.value)}
            >
              <option value="">Select a country</option>
              {countryOptions.map(([code, name]) => (
                <option key={code} value={code}>
                  {name}
                </option>
              ))}
            </select>
          </div>


          {/* Payment Method */}
          <div>
            <h3 className="font-semibold mb-3 text-gray-900 dark:text-white">Payment method</h3>
            <div className="border p-4 rounded">
                <div className="flex justify-between">
                    <div className="flex gap-3 items-center"><FaCreditCard />
                    <p>Cards</p></div>
                
              <div className="flex items-center gap-3 mb-4">
                <FaCcVisa className="text-2xl" />
                <FaCcMastercard className="text-2xl" />
                <FaCcAmex className="text-2xl" />
                <FaCcDiscover className="text-2xl" />
                <FaCcJcb className="text-2xl" />
              </div>
                </div>
              
              {/* Card Inputs */}
              <input
                type="text"
                placeholder="1234 5678 9012 3456"
                value={cardNumber}
                onChange={(e) => setCardNumber(e.target.value)}
                className="w-full border rounded p-2 mb-2 placeholder-gray-400"
              />
              <div className="flex gap-3 mb-2">
                <input
                  type="text"
                  placeholder="MM/YY"
                  value={expiry}
                  onChange={(e) => setExpiry(e.target.value)}
                  className="w-1/2 border rounded p-2"
                />
                <input
                  type="text"
                  placeholder="CVC"
                  value={cvc}
                  onChange={(e) => setCvc(e.target.value)}
                  className="w-1/2 border rounded p-2"
                />
              </div>
              <input
                type="text"
                placeholder="Name on card"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full border rounded p-2"
              />

              <label className="flex items-center mt-2">
                <input type="checkbox" defaultChecked className="mr-2" />
                Securely save this card for my later purchase
              </label>
            </div>
            <h3 className="text-gray-900 dark:text-white">Order Details</h3>
          </div>
        </div>

        {/* Order Summary */}
        <div className="bg-gray-50 dark:bg-neutral-700 p-6 rounded-xl shadow-sm space-y-4">
          <h3 className="text-lg font-bold text-gray-900 dark:text-white">Order summary</h3>
          <div className="flex justify-between">
            <span>Original Price:</span>
            <span className="font-medium">£1,799.99</span>
          </div>
          <div className="flex justify-between text-green-600">
            <span>Discounts (83% Off):</span>
            <span>-£1,500.00</span>
          </div>
          <div className="flex justify-between font-bold text-lg">
            <span>Total (1 course):</span>
            <span>£299.99</span>
          </div>

          <button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded font-semibold flex items-center justify-center cursor-pointer gap-2">
            <FaLock /> Pay £299.99
          </button>

          <p className="text-xs text-gray-500">
            By completing your purchase, you agree to these <a href="#" className="underline">Terms of Use</a>.
          </p>

          <div className="bg-white dark:bg-neutral-700 p-3 rounded text-sm">
            <strong>30-Day Money-Back Guarantee</strong>
            <p>Not satisfied? Get a full refund within 30 days. Simple and straightforward!</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;