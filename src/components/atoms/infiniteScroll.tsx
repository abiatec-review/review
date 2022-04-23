import React, { useEffect, useRef, useState } from "react";

import debounce from "lodash.debounce";
import { FlatList, FlatListProps, NativeScrollEvent, NativeSyntheticEvent } from "react-native";

import { Spinner } from "@components/atoms";
import { useOrientation } from "@hooks";
import { PagedData } from "@redux/models/entities";
import { Entity } from "@redux/models/entities";

interface Props<T extends Entity> {
  offset?: number;
  data: PagedData<T>;
  onScroll?: (offset: number) => void;
  load: (page: number) => Promise<void>;
  numColumns?: { portrait: number; landscape: number };
}

type DefaultProps<T extends Entity> = Omit<FlatListProps<T>, "numColumns" | "onScroll" | "data">;

export function InfiniteScroll<T extends Entity>(props: DefaultProps<T> & Props<T>) {
  const { load, numColumns, offset, onScroll, data, ...rest } = props;
  const { nextPage, hasMore, items } = data;

  const [isLoading, setIsLoading] = useState(false);

  const fetchData = () => {
    setIsLoading(true);
    debounce(() => {
      load(nextPage).then(() => setIsLoading(false));
    }, 2000)();
  };

  const onEndReached = () => {
    !isLoading && hasMore && fetchData();
  };

  useEffect(() => {
    fetchData();
  }, []);

  const { isPortrait } = useOrientation();

  const listRef = useRef<FlatList>(null);

  useEffect(() => {
    offset && listRef.current?.scrollToOffset({ offset });
  }, [isPortrait]);

  const scrollHandler = ({ nativeEvent }: NativeSyntheticEvent<NativeScrollEvent>) => {
    const ofset = nativeEvent.contentOffset.y;
    const { height, width } = nativeEvent.layoutMeasurement;
    const position = ofset * (width / height);
    onScroll && onScroll(position);
  };

  return (
    <FlatList
      data={items}
      ref={listRef}
      style={{ padding: 10 }}
      scrollEventThrottle={16}
      key={Number(isPortrait)}
      onScroll={scrollHandler}
      onEndReached={onEndReached}
      keyExtractor={(_, i) => i.toString()}
      contentContainerStyle={{ paddingBottom: 70 }}
      ListFooterComponent={isLoading ? <Spinner /> : null}
      numColumns={isPortrait ? numColumns?.portrait : numColumns?.landscape}
      {...rest}
    />
  );
}
