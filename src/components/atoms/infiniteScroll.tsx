import React, { useEffect, useRef, useState } from "react";

import { FlatList, FlatListProps, NativeScrollEvent, NativeSyntheticEvent } from "react-native";

import { Spinner } from "@components/atoms";
import { useOrientation } from "@hooks";

interface Props {
  offset?: number;
  isLoading: boolean;
  onScroll?: (offset: number) => void;
  numColumns?: { portrait: number; landscape: number };
  load: (page: number) => Promise<boolean | undefined>;
}

type DefaultProps<T> = Omit<FlatListProps<T>, "numColumns" | "onScroll">;

export function InfiniteScroll<T>(props: DefaultProps<T> & Props) {
  const { load, numColumns, isLoading, offset, onScroll, ...rest } = props;

  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState<boolean>();

  const getData = () => {
    !isLoading && hasMore && setPage((page) => page + 1);
  };

  useEffect(() => {
    load(page).then(setHasMore);
  }, [page]);

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
      ref={listRef}
      onEndReached={getData}
      scrollEventThrottle={16}
      key={Number(isPortrait)}
      onScroll={scrollHandler}
      keyExtractor={(_, i) => i.toString()}
      ListFooterComponent={isLoading ? <Spinner /> : null}
      numColumns={isPortrait ? numColumns?.portrait : numColumns?.landscape}
      {...rest}
    />
  );
}
