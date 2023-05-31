import { gql } from "@apollo/client";

export const GET_USER = gql`
  query getUsers {
    getUsers {
      _id
      email
      password
    }
  }
`;

export const GET_MOVIES = gql`
  query getMovies {
    getMovies {
      _id
      tittle
      description
      image
      likes
      dateOfRelease
    }
  }
`;

export const LOGIN = gql`
  query login($email: String, $password: String) {
    login(email: $email, password: $password) {
      _id
      email
      password
    }
  }
`;
