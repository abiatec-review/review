import { useOrientation } from "@hooks";
import { Pagination } from "@models/entities";
import { Indent } from "@utils";
import React, { useEffect, useRef, useState } from "react";
import { FlatList, FlatListProps, SafeAreaView, StyleSheet } from "react-native";

import { Spinner } from "./spinner";

interface Props {
  offset?: number;
  isLoading: boolean;
  onScroll?: (offset: number) => void;
  numColumns?: { portrait: number; landscape: number };
  load: (page: number) => Promise<Pagination | undefined>;
}

type DefaultProps<T> = Omit<FlatListProps<T>, "numColumns" | "onScroll">;

export function InfiniteScroll<T>(props: DefaultProps<T> & Props) {
  const { load, isLoading, numColumns, offset, onScroll, ...rest } = props;

  const [pagination, setPagination] = useState<Pagination>();

  const handleResult = (result?: Pagination) => result && setPagination(result);

  useEffect(() => {
    load(1).then(handleResult);
  }, []);

  const endReached = () => {
    if (pagination) {
      const { hasMore, nextPage } = pagination;
      !isLoading && hasMore && load(nextPage).then(handleResult);
    }
  };

  const { isPortrait } = useOrientation();

  const listRef = useRef<FlatList>(null);

  useEffect(() => {
    offset && listRef.current?.scrollToOffset({ offset });
  }, [isPortrait]);

  return (
    <SafeAreaView>
      <FlatList
        style={list}
        ref={listRef}
        scrollEventThrottle={16}
        key={Number(isPortrait)}
        onEndReached={endReached}
        keyExtractor={(_, i) => i.toString()}
        ListFooterComponent={isLoading ? <Spinner /> : null}
        numColumns={isPortrait ? numColumns?.portrait : numColumns?.landscape}
        onScroll={({ nativeEvent }) => {
          const ofset = nativeEvent.contentOffset.y;
          const { height, width } = nativeEvent.layoutMeasurement;
          const position = ofset * (width / height);
          onScroll && onScroll(position);
        }}
        {...rest}
      />
    </SafeAreaView>
  );
}

const { list } = StyleSheet.create({
  list: { padding: Indent.DEFAULT }
});
