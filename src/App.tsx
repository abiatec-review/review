import { useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import { Routes, Route, Outlet } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';
import { useAuthState } from "react-firebase-hooks/auth";
import { getMorePictures } from 'redux/actions/pictures';
import { setUser } from 'redux/actions/user';
import { getPrevLink, getNextLink } from 'redux/selectors/info';
import { getPictures } from 'redux/selectors/pictures';
import { Button } from 'components/atoms';
import MainLayout from 'components/layouts/MainPage';
import { Popup, ContentList, SignInScreen, Register } from 'components/moleculs';
import { RouterPath } from 'utils/constants';
import { auth, logInWithEmailAndPassword, signInWithGoogle } from "services/firebase";
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';


function App() {
    const [user, loading, error] = useAuthState(auth);
    const characters = useSelector(getPictures);
    const next = useSelector(getNextLink);
    const prev = useSelector(getPrevLink);
    const dispatch = useDispatch();
    useEffect(() => {
        if (loading) {
            // maybe trigger a loading screen
            return;
        }
        if (user) {
            dispatch(setUser(user))
        };
    }, [user, loading]);

    const onButtonClick = (query: string | null) => {
        if (query) {
            dispatch(getMorePictures(query));
        }
    };

    return (
        <>
            <ToastContainer />
            <Routes>
                <Route path={RouterPath.Root} element={
                    <MainLayout>
                        {
                            !user ?
                                <div>
                                    you are not logged in, <Link to='/login'> Login</Link> or <Link to='/register'> Register</Link>
                                </div>
                                :

                                <>
                                    <ContentList characters={characters} />

                                    {!!characters.length &&
                                        <>
                                            <Button disabled={!prev}
                                                onClick={() => {
                                                    onButtonClick(prev);
                                                }}>
                                                Previous
                                            </Button>
                                            <Button
                                                disabled={!next}
                                                onClick={() => {
                                                    onButtonClick(next);
                                                }}>
                                                Next
                                            </Button>
                                        </>
                                    }
                                    <Outlet />
                                </>
                        }
                    </MainLayout>
                }>
                    <Route path={RouterPath.Popup} element={<Popup />} />
                </Route >
                <Route path="/login" element={<SignInScreen />} />
                <Route path="/register" element={<Register />} />
            </Routes>
        </>
    );
}

export default App;
