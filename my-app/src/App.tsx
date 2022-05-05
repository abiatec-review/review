import React, {useEffect} from "react";
import {onAuthStateChanged} from "firebase/auth";

import {RootStateOrAny, useDispatch, useSelector} from "react-redux";

import {Site} from "./layouts/site";
import {Route, Routes, useLocation, useNavigate} from "react-router-dom";
import {SignIn} from "./layouts/signIn";
import {SignUp} from "./layouts/signUp";
import {auth} from "./utils/firebase";
import {signInSuccess} from "./redux/actions/auth";


const App = () =>  {
     const dispatch = useDispatch()
     const location = useLocation()
     const navigate = useNavigate()
     const aboutUser = useSelector((state: RootStateOrAny) => state.auth.aboutUser);

     useEffect(()=> {
             return onAuthStateChanged(auth, (user) => {
                 dispatch(signInSuccess(user))
             });
     }, [])

     useEffect(() => {
         if(!aboutUser) {
             navigate('/signin')
         } else {
             navigate('/')
         }
     }, [aboutUser])

  return (
            <Routes>
                <Route path={'/signup'} element={<SignUp />}/>
                <Route path={'/signin'} element={<SignIn />}/>
                <Route path={'/'} element={<Site />}/>
            </Routes>
  );
}

export default App;
