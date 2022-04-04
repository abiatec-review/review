import { InfiniteScroll } from "@components/atoms";
import { LocationCard } from "@components/moleculas/cards";
import { getLocations, scrollLocations } from "@services";
import { useDispatch, useSelector } from "@store";
import React from "react";

export function LocationsScreen() {
  const dispatch = useDispatch();

  const locationState = useSelector(({ locationReducer }) => locationReducer);
  const { locations, isLoading } = locationState;

  const offset = useSelector(({ scrollReducer }) => scrollReducer.locationOffset);

  return (
    <InfiniteScroll
      offset={offset}
      data={locations}
      isLoading={isLoading}
      numColumns={{ portrait: 1, landscape: 2 }}
      load={(page) => dispatch(getLocations(page))}
      onScroll={(offset) => dispatch(scrollLocations(offset))}
      renderItem={({ item }) => <LocationCard location={item} />}
    />
  );
}
