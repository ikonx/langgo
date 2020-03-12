import React, { useState } from "react";
import FiltersContext from "./filters.context";
import { Filter } from "../../helpers/interfaces/filter.interface";

interface Props {}

const FiltersProvider: React.FC<Props> = ({ children }) => {
  const [filters, setFilters] = useState<Filter[]>([]);
  const [isCreatingFilter, setCreatingFilter] = useState(false);

  const addFilter = (filter: Filter) => {
    const newFilters: Filter[] = [...filters];

    newFilters.push(filter);
    setFilters(newFilters);
  };

  return (
    <FiltersContext.Provider
      value={{ filters, setFilters, isCreatingFilter, setCreatingFilter, addFilter }}
    >
      {children}
    </FiltersContext.Provider>
  );
};

export default FiltersProvider;
