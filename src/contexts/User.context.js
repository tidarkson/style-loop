import { createContext, useState } from "react";

export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
  isLoading: false,
  setIsLoading: () => null,
  error: null,
  setError: () => null,
  signInWithGoogle: () => null,
  signOutUser: () => null,
  signInWithEmailAndPassword: () => null,
  createUserWithEmailAndPassword: () => null,
  resetPassword: () => null,
  updateUserProfile: () => null,
  updateUserEmail: () => null,
  updateUserPassword: () => null,
  deleteUserAccount: () => null,
  fetchUserProfile: () => null,
  fetchUserOrders: () => null,
  fetchUserWishlist: () => null,
  fetchUserAddresses: () => null,
  addUserAddress: () => null,
  updateUserAddress: () => null,
  deleteUserAddress: () => null,
  fetchUserPaymentMethods: () => null,
  addUserPaymentMethod: () => null,
  updateUserPaymentMethod: () => null,
});

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // Define your user-related functions here
  // ...

  return (
    <UserContext.Provider
      value={{
        currentUser,
        setCurrentUser,
        isLoading,
        setIsLoading,
        error,
        setError,
        // Add other functions here
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
