import React, { useEffect } from "react";
import Downshift from "downshift";

import "./CitySearch.css";

const items = [
  { value: "apple" },
  { value: "pear" },
  { value: "orange" },
  { value: "grape" },
  { value: "banana" }
];

export default function() {
  return (
    <Downshift
      onChange={selection => alert(`You selected ${selection.value}`)}
      itemToString={item => (item ? item.value : "")}
    >
      {({
        getInputProps,
        getItemProps,
        getLabelProps,
        getMenuProps,
        isOpen,
        inputValue,
        highlightedIndex,
        selectedItem
      }) => (
        <div>
          <input type="hidden" value="prayer" />
          {/* <label {...getLabelProps()}>City</label> */}
          <input {...getInputProps()} autoComplete="off" />
          <ul {...getMenuProps()} className="suggestions">
            {isOpen ? (
              <CityList
                {...{
                  inputValue,
                  selectedItem,
                  highlightedIndex,
                  getItemProps
                }}
              />
            ) : null}
          </ul>
        </div>
      )}
    </Downshift>
  );
}

const searches = {};

function CityList({
  inputValue,
  selectedItem,
  highlightedIndex,
  getItemProps
}) {
  useEffect(() => {
    fetch(
      `https://secure.geobytes.com/AutoCompleteCity?callback=?&filter=DE&q=ber`
    )
      .then(r => r.json())
      .then(console.log);
  }, [inputValue]);
  return items
    .filter(item => !inputValue || item.value.includes(inputValue))
    .map((item, index) => (
      <li
        {...getItemProps({
          key: item.value,
          index,
          item,
          className: [
            highlightedIndex === index && "highlighted",
            selectedItem === item && "selected"
          ]
            .filter(Boolean)
            .join(" ")
        })}
      >
        {item.value}
      </li>
    ));
}
