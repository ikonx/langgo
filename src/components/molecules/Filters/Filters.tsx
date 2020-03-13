import React, { useContext } from "react";
import styled from "styled-components/native";
import { ScrollView, Text } from "react-native";
import Button from "../../atoms/Button/Button";
import FiltersContext from "../../../ context/filters/filters.context";
import { useNavigation } from "@react-navigation/native";

import { Filter } from "../../../helpers/interfaces/filter.interface";
import { some } from "lodash";

const StyledFilters = styled.View`
  width: 100%;
`;

const StyledScrollView = styled.ScrollView`
  flex-direction: row;
`;

interface Props {}

const Filters = (props: Props) => {
  const {
    setCreatingFilter,
    isCreatingFilter,
    filters,
    updateActiveFilters,
    activeFilters
  } = useContext(FiltersContext);
  const navigation = useNavigation();

  const createFilter = (filter: Filter) => {
    navigation.navigate("createFilterModal");
    setCreatingFilter(!isCreatingFilter);
  };

  return (
    <StyledFilters>
      <StyledScrollView horizontal showsHorizontalScrollIndicator={false}>
        <Button
          type="outlined"
          text="+"
          style={{ margin: 5, marginLeft: 16 }}
          onPress={createFilter}
        />
        {filters.map((filter: Filter, index: number) => {
          return (
            <Button
              key={filter.emoji}
              type="outlined"
              text={filter.emoji + " " + filter.label}
              style={{ margin: 5 }}
              onPress={() => {
                updateActiveFilters(filter, index);
              }}
              isActive={some(activeFilters, filter)}
            />
          );
        })}
      </StyledScrollView>
    </StyledFilters>
  );
};

export default Filters;
