import React, { FC } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { useDispatch } from "react-redux";
import { useTypedSelector } from "../../../utils/hooks/useTypedSelector";
import Card from "../../moleculs/Card";
import { CardActionTypes } from "../../../redux/actions/card";
import Loading from "../../atoms/Loading";

const styles = {
    gridStyle: 'pt-40 px-10 grid justify-center justify-items-center grid-rows-4 grid-cols-3 gap-2',
    emptyTitle: 'text-center text-2xl pt-40',
    loadingText: 'text-center text-2xl ',
}


const CardList: FC = () => {
    const { cards, info, loading, error }= useTypedSelector(state => state.cards);
    const dispatch = useDispatch();

    const fetchMore = () => {
        if(info.next) {
            setTimeout(() => {
                dispatch({
                    type: CardActionTypes.FETCH_MORE_CARDS,
                    payload: info.next,
                });                
            }, 1000);
        }
    };

    return(
        <>
        <InfiniteScroll
            dataLength={info?.count}
            next={fetchMore}
            hasMore={info.next ? true : false}
            loader={<></>}
        >
            {!error ? 
                (
                    <ul className={styles.gridStyle}>
                        {!loading ? 
                            (
                                cards?.map((item) => {
                                    return(
                                        <Card 
                                            cardData={item}
                                            key={item.id}
                                        />
                                    )
                                })
                            ):
                            (
                                <Loading/>
                            )
                        }
                    </ul>                
                ):
                (
                    <h2 className={styles.emptyTitle}>{error}</h2>
                )
            }        
        </InfiniteScroll>
        </>
    );
}

export default CardList;