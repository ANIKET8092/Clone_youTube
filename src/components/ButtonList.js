import React from "react";
import Button from "./Button";
const ButtonList = () => {
  const lists = [
    "All",
    "Sports",
    "kapilSharma",
    "Cricket",
    "Cooking",
    "Food",
    "india",
    "Pakistan",
    "2024",
  ];
  return (
    <div className="flex mx-2">
      {lists.map((list, index) => (
        <Button key={index} name={list} />
      ))}
    </div>
  );
};

export default ButtonList;
