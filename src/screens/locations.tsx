import React from "react";

import { SafeAreaView } from "react-native";

import { InfiniteScroll } from "@components/atoms";
import { LocationCard } from "@components/moleculas/cards";
import { ErrorModal } from "@components/moleculas/modals";
import { getLocations, scrollLocations } from "@redux/services";
import { useDispatch, useSelector } from "@redux/store";

export function LocationsScreen() {
  const dispatch = useDispatch();

  const locationState = useSelector(({ location }) => location);
  const { locations, error } = locationState;

  const offset = useSelector(({ scroll }) => scroll.locationOffset);

  return (
    <SafeAreaView>
      <InfiniteScroll
        offset={offset}
        data={locations}
        numColumns={{ portrait: 1, landscape: 2 }}
        load={(page) => dispatch(getLocations(page))}
        onScroll={(offset) => dispatch(scrollLocations(offset))}
        renderItem={({ item }) => <LocationCard location={item} />}
      />
      <ErrorModal errorText={error} />
    </SafeAreaView>
  );
}
