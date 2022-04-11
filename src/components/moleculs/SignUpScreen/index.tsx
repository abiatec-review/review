import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import {
  auth,
  registerWithEmailAndPassword,
  signInWithGoogle,
} from "services/firebase";

export const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [allowCookies, setAllowCookies] = useState(false);
  const [user, loading, error] = useAuthState(auth);
  const [cookies, setCookie] = useCookies();
  const history = useNavigate();
  const register = () => {
    // if (!name) {
    //   alert("Please enter name");
    //   return;
    // }

    registerWithEmailAndPassword(email, password, name, age).then(() => {
      if(allowCookies){
        setCookie(email, { email, name, age }, { path: '/' });
      }
      
    });
  };
  useEffect(() => {
    if (loading) {
      return;
    }
    if (user) {
      history("/");
    }
  }, [user, loading]);
  return (
    <div className="w-full h-[100vh] flex justify-center items-center">
      <div className="w-[300px] h-[500px] flex flex-col">
        <input
          type="text"
          className="border-2"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="E-mail Address"
        />
        <input
          type="password"
          className="border-2"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <label htmlFor="cookies-allow">
        <input type="checkbox" name="cookies" id="cookies-allow"
          checked={allowCookies}
          onChange={() => setAllowCookies(!allowCookies)}
        />
           allow coocies
        </label>
        
        {allowCookies &&
          <>
            <input
              type="text"
              className="border-2"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              placeholder="Age"
            />
            <input
              type="text"
              className="border-2"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Full Name"
            />
          </>

        }



        <button className="bg-indigo-500 my-4" onClick={register}>
          Register
        </button>
        <button
          className="register__btn register__google"
          onClick={signInWithGoogle}
        >
          Register with Google
        </button>
        <div>
          Already have an account? <Link to="/">Login</Link> now.
        </div>
      </div>
    </div>
  );
}
