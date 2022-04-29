import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FetchCharactersMore } from '../../../store/actions/CharacterActions';
import { initialPageNumber } from '../../../utils/constants';
// import { RootReducer } from '../../../store/reducers';
import Card from '../../molecules/Card/Card';
import styles from './CardList.module.scss';

const CardList = (props: any) => { // TODO: FIX types
  const { listOfCharacters } = props;

  const [currentPage, setCurrentPage] = useState(initialPageNumber);

  const dispatch = useDispatch();

  const requestPayload = useSelector(({ characters }: any) => characters); // TODO: Fix types
  const { characterName, info } = requestPayload;

  const observer = useRef<IntersectionObserver | null>();
  const lastCharacterCardRef = useCallback((node: any) => {
    if (observer.current) observer.current.disconnect();
    observer.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && currentPage <= info.pages) {
        console.log(currentPage);
        dispatch(FetchCharactersMore({ searchString: characterName, pageNumber: currentPage }));
        setCurrentPage((prev) => prev + 1);
      }
    });
    if (node) observer.current.observe(node);
  }, [currentPage]);

  useEffect(() => {
    setCurrentPage(initialPageNumber);
  }, [characterName]);

  return (
    <div className={styles.cardListWrapper}>
      {listOfCharacters.map(({ id, name, image }: any, index: number) => { // TODO: fix types
        if (index === listOfCharacters.length - 1) {
          return <Card ref={lastCharacterCardRef} key={id} imgUrl={image} name={name} />;
        } else {
          return <Card key={id} imgUrl={image} name={name} />;
        }
      })}
    </div>
  );
};

export default CardList;