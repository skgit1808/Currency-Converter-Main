import React, { useId } from "react";

function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectCurrency = "usd",
  amountDisable = false,
  currencyDisable = false,
  className = "",
}) {
  const amountInputId = useId();

  return (
    <div className={`bg-blue-50 p-3 rounded-lg text-sm flex justify-between items-center ${className}`}>
      <div className="w-1/2">
        <label htmlFor={amountInputId} className="text-sm text-gray-600 mb-2 inline-block">
          {label}
        </label>
        <input
          id={amountInputId}
          className={`outline-none w-full bg-transparent py-1.5 text-sm text-gray-600 placeholder-gray-400 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-blue-400`}
          type="number"
          min="0"
          placeholder="0"
          disabled={amountDisable}
          value={amount}
          onChange={(e) =>
            onAmountChange && onAmountChange(Number(e.target.value))
          }
        />
      </div>
      <div className="w-1/2 flex flex-wrap justify-end text-right">
        <p className="text-sm text-gray-600 mb-2 w-full">Currency Type</p>
        <select
          className={`rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none text-sm text-gray-600 border border-gray-200 focus:ring-2 focus:ring-blue-400 focus:border-blue-400`}
          value={selectCurrency}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
          disabled={currencyDisable}
        >
          {currencyOptions.map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default InputBox;
