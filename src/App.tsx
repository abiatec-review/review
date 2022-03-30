import React from 'react';
import FetchMoreButton from './components/atoms/FetchMoreButton';
import MainLayout from './components/layouts/MainPage';
import ContentList from './components/moleculs/ContentList';
import {useSelector} from 'react-redux';

function App() {
    const characters = useSelector((store: any) => store.currentImages );
    return (
        <MainLayout>
            <div className='content'>
                <h1 >Simple content list</h1>
                <ContentList characters={characters} />
                <FetchMoreButton onClick={() => { }}>Fetch more</FetchMoreButton>
            </div>
        </MainLayout>

    );
}

export default App;

// TODO
// дебоунс
// модалка,инфинити скролл , табы (инфо и эпизоды)
