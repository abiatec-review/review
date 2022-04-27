import React, { FC, useCallback, useMemo } from 'react';

import moment from 'moment';
import InfiniteScroll from 'react-infinite-scroll-component';

import { useDispatch } from 'react-redux';

import { IResults } from '../../../models/responseTypes';
import { fetchMoreCardsAction } from '../../../redux/actions/card';
import { useTypedSelector } from '../../../utils/hooks/useTypedSelector';
import { Loading } from '../../atoms';
import Card from '../../moleculs/Card';

const styles = {
  gridStyle: 'pt-40 px-10 grid justify-center justify-items-center grid-rows-4 grid-cols-3 gap-2',
  emptyTitle: 'text-center text-2xl pt-40',
  loadingText: 'text-center text-2xl ',
};

const sorting = (type: string, a: IResults, b: IResults): number => {
  switch (type) {
    case 'nameA': {
      if (a.name > b.name) return -1;
      if (a.name < b.name) return 1;
      return 0;
    }
    case 'nameD': {
      if (a.name < b.name) return -1;
      if (a.name > b.name) return 1;
      return 0;
    }
    default: return 0;
  }
};

const CardList: FC = () => {
  const {
    cards, info, loading, error, sort,
  } = useTypedSelector((state) => state.cards);
  const dispatch = useDispatch();

  const sortCards = useMemo(() => cards.sort((a, b) => sorting(sort, a, b)), [sort, cards]);

  const fetchMore = () => {
    if (info.next) {
      setTimeout(() => {
        dispatch(fetchMoreCardsAction(info.next));
      }, 1000);
    }
  };

  const render = useCallback(() => {
    switch (!error) {
      case true: {
        return (
          <ul className={styles.gridStyle}>
            {!loading
              ? (
                sortCards?.map((item) => (
                  <Card
                    cardData={item}
                    key={item.id}
                  />
                ))
              )
              : (
                <Loading />
              )}
          </ul>
        );
      }
      case false: {
        return (
          <h2 className={styles.emptyTitle}>{error}</h2>
        );
      }
    }
  }, [error, loading, cards]);

  return (
    <InfiniteScroll
      dataLength={info?.count}
      next={fetchMore}
      hasMore={!!info.next}
      loader={<></>}
    >
      {render()}
    </InfiniteScroll>
  );
};

export default CardList;
