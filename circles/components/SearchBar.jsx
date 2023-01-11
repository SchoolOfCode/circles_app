import React from "react";

/**
 *
 * @param {string} value - Is a string generated as the user types into the input field.
 * @param {string} className - A string for the class name.
 * @param {func} handleChange - A function that sets the SearchValue state to the e.target.value of the input field as the user types to search.
 * compares the user input with the data state.
 *
 * @param {string} placeholder - A string that sets the text displayed in the input before any the user types to search..
 * @component
 * @returns A search bar that calls a handleChange function as the user types to search.
 */
function SearchBar({
  value,
  className,
  handleChange,
  placeholder,
  labelText,
  handleClick,
  buttonText,
}) {
  return (
    <div className={className}>
      <label htmlFor="search">{labelText}</label>
      <input
        name="search"
        type="text"
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
      />
      <button onClick={handleClick}>{buttonText}</button>
    </div>
  );
}

export default SearchBar;
