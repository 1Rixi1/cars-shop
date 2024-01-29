"use client";

import { useState } from "react";
import { SearchManufacturer } from "@/components";

export const SearchBar = () => {
  const [manufacturer, setManufacturer] = useState("");

  const handleSubmit = () => {};

  return (
    <form className={"searchbar"} onSubmit={handleSubmit}>
      <div className="searchbar__item">
        <SearchManufacturer
          manufacturer={manufacturer}
          setManufacturer={setManufacturer}
        />
      </div>
    </form>
  );
};
