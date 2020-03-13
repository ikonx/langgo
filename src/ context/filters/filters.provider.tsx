import React, { useState } from "react";
import FiltersContext from "./filters.context";
import { Filter } from "../../helpers/interfaces/filter.interface";
import { some } from "lodash";

interface Props {}

const FiltersProvider: React.FC<Props> = ({ children }) => {
  const [filters, setFilters] = useState<Filter[]>([
    {
      emoji: "🍔",
      label: "Nourriture"
    },
    {
      emoji: "🚌",
      label: "Transports"
    }
  ]);

  const [activeFilters, setActiveFilters] = useState<Filter[]>([]);

  const [isCreatingFilter, setCreatingFilter] = useState(false);

  const createFilter = (filter: Filter) => {
    const newFilters: Filter[] = [...filters];

    newFilters.push(filter);
    setFilters(newFilters);
  };

  const updateActiveFilters = (filter: Filter, index: number) => {
    const newActiveFilters = [...activeFilters];
    const isAlreadySelected = some(newActiveFilters, filter);
    isAlreadySelected
      ? newActiveFilters.splice(index, 1)
      : newActiveFilters.push(filter);
    setActiveFilters(newActiveFilters);
  };

  return (
    <FiltersContext.Provider
      value={{
        filters,
        setFilters,
        isCreatingFilter,
        setCreatingFilter,
        createFilter,
        activeFilters,
        updateActiveFilters
      }}
    >
      {children}
    </FiltersContext.Provider>
  );
};

export default FiltersProvider;
