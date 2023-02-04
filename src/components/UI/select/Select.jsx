import React from "react";

const Select = ({ defaultValue, options, value, onChange }) => {
  return (
    <select value={value} onChange={(event) => onChange(event.target.value)}>
      <option disabled value={""}>
        {defaultValue}
      </option>
      {options.map((option) => (
        <option value={option.value} key={option.value}>
          {option.name}
        </option>
      ))}
    </select>
  );
};

export default Select;
