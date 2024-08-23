import React, { useState, useRef } from "react";
import Header from "./Header";
import { BG_URL, USER_AVATAR } from "../utils/constants";
import { checkValidData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {
  const dispatch = useDispatch();
  const [isSignInForm, setisSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const email = useRef(null);
  const password = useRef(null);
  const fullName = useRef(null);

  const toggleSignIn = () => {
    setisSignInForm(!isSignInForm);
  };
  const handleButtonClick = () => {
    const message = checkValidData(email.current.value, password.current.value);
    setErrorMessage(message);
    if (message) return null;

    if (!isSignInForm) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: fullName.current.value,
            photoURL: USER_AVATAR,
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(addUser({ uid, email, displayName, photoURL }));
            })
            .catch((error) => {
              setErrorMessage(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
  };
  return (
    <div className="relative h-screen">
      <Header />
      <div className="absolute">
        <img src={BG_URL} />
        <div className="absolute inset-0 bg-black opacity-70"></div>
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute my-36 w-4/12 bg-black mx-auto right-0 left-0 text-white p-12 rounded-lg bg-opacity-80"
      >
        <h1 className="font-bold text-2xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            ref={fullName}
            style={{
              border: "1px solid #ccc",
              borderRadius: 4,
              background: "#262626",
            }}
            className="p-4 my-2 w-full opacity-65 border-gray-100"
            type="text"
            placeholder="Full Name"
          />
        )}
        <input
          ref={email}
          className="p-4 my-2 w-full opacity-65"
          style={{
            border: "1px solid #ccc",
            borderRadius: 4,
            background: "#262626",
          }}
          type="email"
          placeholder="Email"
        />
        <input
          ref={password}
          style={{
            border: "1px solid #ccc",
            borderRadius: 4,
            background: "#262626",
          }}
          className="p-4 my-2 w-full opacity-65 border-gray-100"
          type="password"
          placeholder="Password"
        />
        <p className="text-red-500 font-bold">{errorMessage}</p>
        <button
          className="p-2 my-2 bg-red-700 w-full rounded-lg"
          onClick={handleButtonClick}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p
          className="py-2"
          style={{ cursor: "pointer" }}
          onClick={toggleSignIn}
        >
          {isSignInForm
            ? "New to Netflix? Sign Up Now"
            : " Already a user? Sign In Now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
