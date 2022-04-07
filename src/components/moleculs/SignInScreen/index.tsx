import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth, logInWithEmailAndPassword, signInWithGoogle } from "services/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

export const  SignInScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (loading) {
      // maybe trigger a loading screen
      return;
    }
    if (user) navigate("/");
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
        <button
          className="bg-indigo-500 my-4"
          onClick={() => logInWithEmailAndPassword(email, password)}
        >
          Login
        </button>
        <button className="bg-indigo-500 my-2" onClick={signInWithGoogle}>
          Login with Google
        </button>
        <div className="bg-indigo-500 my-2">
          <Link to="/reset">Forgot Password</Link>
        </div>
        <div className="bg-indigo-500 my-2">
          Don't have an account? <Link to="/register">Register</Link> now.
        </div>
      </div>
    </div>
  );
}
