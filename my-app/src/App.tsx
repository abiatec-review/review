import React, {useEffect} from "react";
import {onAuthStateChanged} from "firebase/auth";

import {RootStateOrAny, useDispatch, useSelector} from "react-redux";

import {Site} from "./layouts/site";
import {Route, Routes, useNavigate} from "react-router-dom";
import {SignIn} from "./layouts/signIn";
import {SignUp} from "./layouts/signUp";
import {auth} from "./utils/firebase";
import {signInSuccess} from "./redux/actions/auth";
import {routes} from "./utils/constants";


const App = () =>  {
     const dispatch = useDispatch()
     const navigate = useNavigate()
     const aboutUser = useSelector((state: RootStateOrAny) => state.auth.aboutUser);

     useEffect(()=> {
             return onAuthStateChanged(auth, (user) => {
                 dispatch(signInSuccess(user))
             });
     }, [dispatch])

     useEffect(() => {
         if(!aboutUser) {
             navigate(`/${routes.SIGNIN}`)
         } else {
             navigate('/')
         }
     }, [aboutUser])

  return (
            <Routes>
                <Route path={`/${routes.SIGNIN}`} element={<SignIn />}/>
                <Route path={`/${routes.SIGNUP}`} element={<SignUp />}/>
                <Route path={'/'} element={<Site />}/>
            </Routes>
  );
}

export default App;
