import React, { useEffect } from "react";
import { LOGO, SUPPORTED_LANGUAGES, USER_AVATAR } from "../utils/constants";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);

  const currentPath = location.pathname;
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/landing");
      })
      .catch((error) => {
        navigate("/error");
      });
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(addUser({ uid, email, displayName, photoURL }));
        navigate("/browse");
      } else {
        dispatch(removeUser());

        if (currentPath === "/login") {
          navigate("/login");
        } else {
          navigate("/landing");
        }
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <div className="absolute px-8 py-2 bg-gradient-to-b from-black z-10 w-full flex justify-between">
      <img className="w-44" src={LOGO} alt="logo" />
      {user ? (
        <div className="p-2 flex">
          <button onClick={handleSignOut} className="text-white">
            Sign Out
          </button>
        </div>
      ) : currentPath === "/login" ? null : (
        <>
          <button
            type="button"
            onClick={() => navigate("/login")}
            className="focus:outline-none text-white bg-red-700 hover:bg-red-800 font-medium rounded-lg text-sm px-3 me-2 mb-5 mt-4 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
          >
            Sign In
          </button>
        </>
      )}
    </div>
  );
};

export default Header;
