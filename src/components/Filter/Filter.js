import React from "react";
import s from "./Filter.module.css";

const Filter = ({ value, onChangeContact }) => (
  <label htmlFor="filterField" className={s.filterWrapper}>
    Find contacts by name
    <input
      className={s.filterWrapper}
      type="text"
      value={value}
      onChange={onChangeContact}
    />
  </label>
);

export default Filter;
