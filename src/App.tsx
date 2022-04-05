import { ToastContainer } from 'react-toastify';
import { Routes, Route, Outlet } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';
import { getMorePictures } from 'redux/actions/pictures';
import { getPrevLink, getNextLink } from 'redux/selectors/info';
import { getPictures } from 'redux/selectors/pictures';
import Button from 'components/atoms/Button';
import MainLayout from 'components/layouts/MainPage';
import ContentList from 'components/moleculs/ContentList';
import { Popup } from 'components/moleculs';
import { RouterPath } from 'utils/constants';
import 'react-toastify/dist/ReactToastify.css';

function App() {
    const characters = useSelector(getPictures);
    const next = useSelector(getNextLink);
    const prev = useSelector(getPrevLink);
    const dispatch = useDispatch();
    return (
        <>
            <ToastContainer />
            <Routes>
                <Route path={RouterPath.Root} element={
                    <MainLayout>
                        <>
                            <ContentList characters={characters} />

                            {!!characters.length &&
                                <>
                                    <Button disabled={!prev}
                                        onClick={() => {
                                            if (prev) {
                                                dispatch(getMorePictures(prev));
                                            }
                                        }}>
                                        Previous
                                    </Button>
                                    <Button
                                        disabled={!next}
                                        onClick={() => {
                                            if (next) {
                                                dispatch(getMorePictures(next));
                                            }
                                        }}>
                                        Next
                                    </Button>
                                </>
                            }
                            <Outlet />
                        </>
                    </MainLayout>
                }>
                    <Route path={RouterPath.Popup} element={<Popup />} />
                </Route >
            </Routes>
        </>
    );
}

export default App;
