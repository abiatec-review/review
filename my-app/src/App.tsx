import React, {JSXElementConstructor, lazy, Suspense, useEffect} from "react";
import {onAuthStateChanged} from "firebase/auth";

import {RootStateOrAny, useDispatch, useSelector} from "react-redux";

import {Route, Routes, useNavigate} from "react-router-dom";
import {auth} from "./services/firebase/endpoints/auth";
import {signInSuccess} from "./redux/actions/auth";
import {routes} from "./utils/constants";


const App = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const aboutUser = useSelector((state: RootStateOrAny) => state.auth.aboutUser);

    const SignIn = lazy(() => import('./layouts/signIn').then(({SignIn}) => ({default: SignIn})))
    const SignUp = lazy(() => import('./layouts/signUp').then(({SignUp}) => ({default: SignUp})))
    const Site = lazy(() => import('./layouts/site').then(({Site}) => ({default: Site})))

    useEffect(() => {
        return onAuthStateChanged(auth, (user) => {
            dispatch(signInSuccess(user))
        });
    }, [dispatch])

    useEffect(() => {
        if (!aboutUser) {
            navigate(`/${routes.SIGNIN}`)
        } else {
            navigate('/')
        }
    }, [aboutUser])

    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Routes>
                <Route path={`/${routes.SIGNIN}`} element={<SignIn/>}/>
                <Route path={`/${routes.SIGNUP}`} element={<SignUp/>}/>
                <Route path={'/'} element={<Site/>}/>
            </Routes>
        </Suspense>
    );
}

export default App;
