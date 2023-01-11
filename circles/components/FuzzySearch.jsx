import { ReactSearchAutocomplete } from "react-search-autocomplete";
import React from "react";
import { data } from "../data/events-data.js";

export default function FuzzySearchBar({
  items,
  handleOnFocus,
  handleOnHover,
  handleOnSearch,
  handleOnSelect,
  formatResult,
  handleChange,
}) {
  return (
    <div className="absolute t-2 l-4">
      <div style={{ width: 400 }}>
        <ReactSearchAutocomplete
          items={items}
          onSearch={handleOnSearch}
          onHover={handleOnHover}
          onSelect={handleOnSelect}
          onFocus={handleOnFocus}
          autoFocus
          formatResult={formatResult}
          handleChange={handleChange}
        />
      </div>
    </div>
  );
}
