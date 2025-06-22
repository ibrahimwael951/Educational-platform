// "use client";

// import countries from "i18n-iso-countries";
// import enLocale from "i18n-iso-countries/langs/en.json";
// import { useState } from "react";
// import { FaCcVisa, FaCcMastercard, FaCcAmex, FaCcDiscover, FaCcJcb, FaLock, FaCreditCard  } from "react-icons/fa";

// countries.registerLocale(enLocale); 

// const CheckoutPage = () => {
//   const [cardNumber, setCardNumber] = useState("");
//   const [expiry, setExpiry] = useState("");
//   const [cvc, setCvc] = useState("");
//   const [name, setName] = useState("");
//   const [selectedCountry, setSelectedCountry] = useState("");

//   const countryNames = countries.getNames("en", { select: "official" });
//   const countryOptions = Object.entries(countryNames);

//   return (
//     <div className="w-full mt-30 dark:bg-neutral-800 p-6">
//       <div className="w-full mx-auto  rounded-xl  grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
//         {/* Checkout Form */}
//         <div className="md:col-span-2 space-y-6">
//           <h2 className="text-2xl font-bold dark:text-white">Checkout</h2>

//           {/* Billing Address */}
//           <div>
//             <label className="block font-semibold mb-2 dark:text-white">Country</label>
//             <select
//               className="border border-gray-300 rounded p-2 w-full cursor-pointer dark:text-neutral-400"
//               value={selectedCountry}
//               onChange={(e) => setSelectedCountry(e.target.value)}
//             >
//               <option value="">Select a country</option>
//               {countryOptions.map(([code, name]) => (
//                 <option key={code} value={code}>
//                   {name}
//                 </option>
//               ))}
//             </select>
//           </div>


//           {/* Payment Method */}
//           <div>
//             <h3 className="font-semibold mb-3 text-gray-900 dark:text-white">Payment method</h3>
//             <div className="border p-4 rounded">
//                 <div className="flex justify-between">
//                     <div className="flex gap-3 items-center"><FaCreditCard />
//                     <p>Cards</p></div>
                
//               <div className="flex items-center gap-3 mb-4">
//                 <FaCcVisa className="text-2xl" />
//                 <FaCcMastercard className="text-2xl" />
//                 <FaCcAmex className="text-2xl" />
//                 <FaCcDiscover className="text-2xl" />
//                 <FaCcJcb className="text-2xl" />
//               </div>
//                 </div>
              
//               {/* Card Inputs */}
//               <input
//                 type="text"
//                 placeholder="1234 5678 9012 3456"
//                 value={cardNumber}
//                 onChange={(e) => setCardNumber(e.target.value)}
//                 className="w-full border rounded p-2 mb-2 placeholder-gray-400"
//               />
//               <div className="flex gap-3 mb-2">
//                 <input
//                   type="text"
//                   placeholder="MM/YY"
//                   value={expiry}
//                   onChange={(e) => setExpiry(e.target.value)}
//                   className="w-1/2 border rounded p-2"
//                 />
//                 <input
//                   type="text"
//                   placeholder="CVC"
//                   value={cvc}
//                   onChange={(e) => setCvc(e.target.value)}
//                   className="w-1/2 border rounded p-2"
//                 />
//               </div>
//               <input
//                 type="text"
//                 placeholder="Name on card"
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//                 className="w-full border rounded p-2"
//               />

//               <label className="flex items-center mt-2">
//                 <input type="checkbox" defaultChecked className="mr-2" />
//                 Securely save this card for my later purchase
//               </label>
//             </div>
//             <h3 className="text-gray-900 dark:text-white">Order Details</h3>
//           </div>
//         </div>

//         {/* Order Summary */}
//         <div className="bg-gray-50 dark:bg-neutral-700 p-6 rounded-xl shadow-sm space-y-4">
//           <h3 className="text-lg font-bold text-gray-900 dark:text-white">Order summary</h3>
//           <div className="flex justify-between">
//             <span>Original Price:</span>
//             <span className="font-medium">£1,799.99</span>
//           </div>
//           <div className="flex justify-between text-green-600">
//             <span>Discounts (83% Off):</span>
//             <span>-£1,500.00</span>
//           </div>
//           <div className="flex justify-between font-bold text-lg">
//             <span>Total (1 course):</span>
//             <span>£299.99</span>
//           </div>

//           <button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded font-semibold flex items-center justify-center cursor-pointer gap-2">
//             <FaLock /> Pay £299.99
//           </button>

//           <p className="text-xs text-gray-500">
//             By completing your purchase, you agree to these <a href="#" className="underline">Terms of Use</a>.
//           </p>

//           <div className="bg-white dark:bg-neutral-700 p-3 rounded text-sm">
//             <strong>30-Day Money-Back Guarantee</strong>
//             <p>Not satisfied? Get a full refund within 30 days. Simple and straightforward!</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CheckoutPage;




"use client";

import countries from "i18n-iso-countries";
// 1. Import language packs for the countries library
import enLocale from "i18n-iso-countries/langs/en.json";
import arLocale from "i18n-iso-countries/langs/ar.json";
import { useState, useMemo } from "react";
// 2. Import hooks from next-intl
import { useTranslations, useLocale } from "next-intl";
import { FaCcVisa, FaCcMastercard, FaCcAmex, FaCcDiscover, FaCcJcb, FaLock, FaCreditCard } from "react-icons/fa";

// Register English by default
countries.registerLocale(enLocale);

const CheckoutPage = () => {
  // 3. Initialize translation and locale hooks
  const t = useTranslations("checkoutPage");
  const locale = useLocale();

  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvc, setCvc] = useState("");
  const [name, setName] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("");
  
  // 4. Memoize the creation of the localized country list
  const countryOptions = useMemo(() => {
    // Register the Arabic locale only when needed
    if (locale === 'ar') {
        countries.registerLocale(arLocale);
    }
    const countryNames = countries.getNames(locale, { select: "official" });
    return Object.entries(countryNames).sort((a, b) => a[1].localeCompare(b[1], locale));
  }, [locale]);

  const totalAmount = "£299.99"; // Example amount

  return (
    // 5. Apply RTL direction to the main container
    <div dir={locale === 'ar' ? 'rtl' : 'ltr'} className="w-full mt-20 dark:bg-neutral-900 py-10">
      <div className="max-w-7xl mx-auto rounded-xl grid grid-cols-1 md:grid-cols-3 gap-8 p-6">
        
        {/* Checkout Form */}
        <div className="md:col-span-2 space-y-6">
          <h2 className="text-2xl font-bold dark:text-white">{t('title')}</h2>

          {/* Billing Address */}
          <div>
            <label className="block font-semibold mb-2 dark:text-white">{t('countryLabel')}</label>
            <select
              className="border border-gray-300 rounded p-2 w-full cursor-pointer bg-white dark:bg-neutral-800 dark:border-neutral-600 dark:text-neutral-300"
              value={selectedCountry}
              onChange={(e) => setSelectedCountry(e.target.value)}
            >
              <option value="">{t('countryPlaceholder')}</option>
              {countryOptions.map(([code, name]) => (
                <option key={code} value={code}>
                  {name}
                </option>
              ))}
            </select>
          </div>

          {/* Payment Method */}
          <div>
            <h3 className="font-semibold mb-3 text-gray-900 dark:text-white">{t('paymentMethod')}</h3>
            <div className="border dark:border-neutral-700 p-4 rounded">
                <div className="flex justify-between items-center mb-4">
                    <div className="flex gap-3 items-center"><FaCreditCard />
                    <p>{t('cardsLabel')}</p></div>
                
              <div className="flex items-center gap-3">
                <FaCcVisa className="text-2xl" /> <FaCcMastercard className="text-2xl" /> <FaCcAmex className="text-2xl" /> <FaCcDiscover className="text-2xl" /> <FaCcJcb className="text-2xl" />
              </div>
                </div>
              
              {/* 6. Use translated placeholders */}
              <input type="text" placeholder={t('placeholders.cardNumber')} value={cardNumber} onChange={(e) => setCardNumber(e.target.value)} className="w-full border rounded p-2 mb-2 bg-white dark:bg-neutral-800 dark:border-neutral-600 placeholder-gray-400" />
              <div className="flex gap-3 mb-2">
                <input type="text" placeholder={t('placeholders.expiry')} value={expiry} onChange={(e) => setExpiry(e.target.value)} className="w-1/2 border rounded p-2 bg-white dark:bg-neutral-800 dark:border-neutral-600" />
                <input type="text" placeholder={t('placeholders.cvc')} value={cvc} onChange={(e) => setCvc(e.target.value)} className="w-1/2 border rounded p-2 bg-white dark:bg-neutral-800 dark:border-neutral-600" />
              </div>
              <input type="text" placeholder={t('placeholders.nameOnCard')} value={name} onChange={(e) => setName(e.target.value)} className="w-full border rounded p-2 bg-white dark:bg-neutral-800 dark:border-neutral-600" />

              <label className="flex items-center mt-3">
                {/* 7. Use logical properties (ms-2) for margin, which works for both LTR and RTL */}
                <input type="checkbox" defaultChecked className="ms-2 accent-purple-600" />
                {t('saveCardLabel')}
              </label>
            </div>
            <h3 className="text-gray-900 dark:text-white mt-4">{t('orderDetails')}</h3>
          </div>
        </div>

        {/* Order Summary */}
        <div className="bg-gray-50 dark:bg-neutral-800 p-6 rounded-xl shadow-sm space-y-4 h-fit">
          <h3 className="text-lg font-bold text-gray-900 dark:text-white">{t('orderSummaryTitle')}</h3>
          <div className="flex justify-between"><span>{t('originalPrice')}</span><span className="font-medium">£1,799.99</span></div>
          <div className="flex justify-between text-green-600"><span>{t('discounts')}</span><span>-£1,500.00</span></div>
          <div className="flex justify-between font-bold text-lg border-t dark:border-neutral-600 pt-3"><span>{t('total')}</span><span>{totalAmount}</span></div>

          <button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded font-semibold flex items-center justify-center cursor-pointer gap-2">
            <FaLock /> {t('payButton', { amount: totalAmount })}
          </button>

          <p className="text-xs text-gray-500 dark:text-neutral-400">
            {t('terms.prefix')} <a href="#" className="underline">{t('terms.link')}</a>.
          </p>

          <div className="bg-white dark:bg-neutral-700 p-4 rounded text-sm mt-4">
            <strong className="block mb-1">{t('guarantee.title')}</strong>
            <p>{t('guarantee.description')}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;