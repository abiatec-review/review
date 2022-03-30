import React from 'react';
import FetchMoreButton from './components/atoms/FetchMoreButton';
import MainLayout from './components/layouts/MainPage';
import ContentList from './components/moleculs/ContentList';
import { useSelector, useDispatch } from 'react-redux';

function App() {
    const characters = useSelector((store: any) => store.currentImages);

    const next = useSelector((store: any) => store.info.next);
    const dispatch = useDispatch();
    const fetchMore = () => {
        dispatch({ type: 'FETCH_MORE', payload: next });
    };
    return (
        <MainLayout>
            <div className='content'>
                <h1 >Simple content list</h1>
                <ContentList characters={characters} />
                {characters.length >= 10 &&
                    <FetchMoreButton onClick={fetchMore}>Fetch more</FetchMoreButton>}

            </div>
        </MainLayout>

    );
}

export default App;

// TODO
// дебоунс
// модалка,инфинити скролл , табы (инфо и эпизоды)
