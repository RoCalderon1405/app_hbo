import React, { useState, createContext, useContext } from "react";
import { GET_USER } from "../graphql/Queries";
import { useLazyQuery } from "@apollo/client";

const UserContext = createContext();

function UsersProvider(props) {
  const [searchUsers, { data, error }] = useLazyQuery(GET_USER);
  const [user, setUser] = useState("");

  const value = {
    searchUsers,
    data,
    error,
    user,
    setUser,
  };

  return (
    <UserContext.Provider value={value}>
      {props.children}
    </UserContext.Provider>
  );
}

const useUserContext = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error(
      "useUserContext must be used within a MoviesProvider. " +
        "Wrap a parent component in <MoviesProvider> to fix this error."
    );
  }
  return context;
};

export { useUserContext, UsersProvider };
