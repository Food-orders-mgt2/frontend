import { createContext, useState, useEffect } from "react";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase-config";

export const UserContext = createContext();

export function UserContextProvider(props) {
  const signUp = (username, email, pwd) => {
    return createUserWithEmailAndPassword(auth, email, pwd)
      .then((userCredential) => {
        return updateUsername(userCredential.user, username);
      });
  }

  const signIn = (email, pwd) => signInWithEmailAndPassword(auth, email, pwd);

  const updateUsername = (user, username) => {
    return updateProfile(user, {
      displayName: username
    });
  }

  const updateProfile = (user, profile) => {
    return updateCurrentUser(user, profile);
  }

  const updateCurrentUser = (user, profile) => {
    return user.updateProfile(profile);
  }

  const [currentUser, setCurrentUser] = useState();
  const [loadingData, setLoadingData] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setCurrentUser(currentUser);
      setLoadingData(false);
    });

    return unsubscribe;
  }, []);

  const [modalState, setModalState] = useState({
    signUpModal: false,
    signInModal: false
  });

  const toggleModals = modal => {
    if(modal === "signIn") {
      setModalState({
        signUpModal: false,
        signInModal: true
      });
    }
    if(modal === "signUp") {
      setModalState({
        signUpModal: true,
        signInModal: false
      });
    }
    if(modal === "close") {
      setModalState({
        signUpModal: false,
        signInModal: false
      });
    }
  }

  return (
    <UserContext.Provider value={{modalState, toggleModals, signUp, currentUser, signIn}}>
      {!loadingData && props.children}
    </UserContext.Provider>
  );
}
