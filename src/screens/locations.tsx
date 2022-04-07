import React from "react";

import { InfiniteScroll } from "@components/atoms";
import { Screen } from "@components/atoms";
import { LocationCard } from "@components/moleculas/cards";
import { ErrorModal } from "@components/moleculas/modals";
import { getLocations, scrollLocations } from "@redux/services";
import { useDispatch, useSelector } from "@redux/store";

export function LocationsScreen() {
  const dispatch = useDispatch();

  const locationState = useSelector(({ location }) => location);
  const { locations, isLoading, error } = locationState;

  const offset = useSelector(({ scroll }) => scroll.locationOffset);

  return (
    <Screen>
      <InfiniteScroll
        offset={offset}
        data={locations}
        isLoading={isLoading}
        numColumns={{ portrait: 1, landscape: 2 }}
        load={(page) => dispatch(getLocations(page))}
        onScroll={(offset) => dispatch(scrollLocations(offset))}
        renderItem={({ item }) => <LocationCard location={item} />}
      />
      <ErrorModal errorText={error} />
    </Screen>
  );
}
