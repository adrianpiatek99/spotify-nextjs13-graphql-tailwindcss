import type { GraphQLClient } from "graphql-request";
import type * as Dom from "graphql-request/dist/types.dom";
import gql from "graphql-tag";

export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: Date;
};

export enum Gender {
  Female = "FEMALE",
  Male = "MALE",
  Nonbinary = "NONBINARY",
  Other = "OTHER",
  Prefernottosay = "PREFERNOTTOSAY"
}

export type Mutation = {
  __typename?: "Mutation";
  signIn?: Maybe<UserEntity>;
  signUp?: Maybe<UserEntity>;
};

export type MutationSignInArgs = {
  input: SignInInput;
};

export type MutationSignUpArgs = {
  input: SignUpInput;
};

export type Query = {
  __typename?: "Query";
  me?: Maybe<UserEntity>;
  userByUsername?: Maybe<UserEntity>;
  users: Array<UserEntity>;
};

export type QueryMeArgs = {
  email: Scalars["String"];
};

export type QueryUserByUsernameArgs = {
  username: Scalars["String"];
};

export enum Role {
  Admin = "ADMIN",
  Moderator = "MODERATOR",
  User = "USER"
}

export type SignInInput = {
  emailOrUsername: Scalars["String"];
  password: Scalars["String"];
};

export type SignUpInput = {
  dateOfBirth: Scalars["DateTime"];
  email: Scalars["String"];
  gender: Gender;
  password: Scalars["String"];
  username: Scalars["String"];
};

export type UserEntity = {
  __typename?: "UserEntity";
  createdAt: Scalars["DateTime"];
  dateOfBirth: Scalars["DateTime"];
  email: Scalars["String"];
  gender: Gender;
  id: Scalars["ID"];
  role: Role;
  updatedAt: Scalars["DateTime"];
  username: Scalars["String"];
};

export type MeQueryVariables = Exact<{
  email: Scalars["String"];
}>;

export type MeQuery = {
  __typename?: "Query";
  me?: {
    __typename?: "UserEntity";
    id: string;
    username: string;
    email: string;
    dateOfBirth: Date;
    role: Role;
    gender: Gender;
    createdAt: Date;
    updatedAt: Date;
  } | null;
};

export type SignInMutationVariables = Exact<{
  input: SignInInput;
}>;

export type SignInMutation = {
  __typename?: "Mutation";
  signIn?: {
    __typename?: "UserEntity";
    id: string;
    username: string;
    email: string;
    dateOfBirth: Date;
    role: Role;
    gender: Gender;
    createdAt: Date;
    updatedAt: Date;
  } | null;
};

export type SignUpMutationVariables = Exact<{
  input: SignUpInput;
}>;

export type SignUpMutation = {
  __typename?: "Mutation";
  signUp?: {
    __typename?: "UserEntity";
    id: string;
    username: string;
    email: string;
    createdAt: Date;
    updatedAt: Date;
  } | null;
};

export type GetUserByUsernameQueryVariables = Exact<{
  username: Scalars["String"];
}>;

export type GetUserByUsernameQuery = {
  __typename?: "Query";
  userByUsername?: {
    __typename?: "UserEntity";
    id: string;
    username: string;
    gender: Gender;
    createdAt: Date;
    updatedAt: Date;
  } | null;
};

export type GetUsersQueryVariables = Exact<{ [key: string]: never }>;

export type GetUsersQuery = {
  __typename?: "Query";
  users: Array<{
    __typename?: "UserEntity";
    id: string;
    username: string;
    gender: Gender;
    createdAt: Date;
    updatedAt: Date;
  }>;
};

export const MeDocument = gql`
  query me($email: String!) {
    me(email: $email) {
      id
      username
      email
      dateOfBirth
      role
      gender
      createdAt
      updatedAt
    }
  }
`;
export const SignInDocument = gql`
  mutation signIn($input: SignInInput!) {
    signIn(input: $input) {
      id
      username
      email
      dateOfBirth
      role
      gender
      createdAt
      updatedAt
    }
  }
`;
export const SignUpDocument = gql`
  mutation signUp($input: SignUpInput!) {
    signUp(input: $input) {
      id
      username
      email
      createdAt
      updatedAt
    }
  }
`;
export const GetUserByUsernameDocument = gql`
  query getUserByUsername($username: String!) {
    userByUsername(username: $username) {
      id
      username
      gender
      createdAt
      updatedAt
    }
  }
`;
export const GetUsersDocument = gql`
  query getUsers {
    users {
      id
      username
      gender
      createdAt
      updatedAt
    }
  }
`;

export type SdkFunctionWrapper = <T>(
  action: (requestHeaders?: Record<string, string>) => Promise<T>,
  operationName: string,
  operationType?: string
) => Promise<T>;

const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    me(variables: MeQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<MeQuery> {
      return withWrapper(
        wrappedRequestHeaders =>
          client.request<MeQuery>(MeDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders
          }),
        "me",
        "query"
      );
    },
    signIn(
      variables: SignInMutationVariables,
      requestHeaders?: Dom.RequestInit["headers"]
    ): Promise<SignInMutation> {
      return withWrapper(
        wrappedRequestHeaders =>
          client.request<SignInMutation>(SignInDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders
          }),
        "signIn",
        "mutation"
      );
    },
    signUp(
      variables: SignUpMutationVariables,
      requestHeaders?: Dom.RequestInit["headers"]
    ): Promise<SignUpMutation> {
      return withWrapper(
        wrappedRequestHeaders =>
          client.request<SignUpMutation>(SignUpDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders
          }),
        "signUp",
        "mutation"
      );
    },
    getUserByUsername(
      variables: GetUserByUsernameQueryVariables,
      requestHeaders?: Dom.RequestInit["headers"]
    ): Promise<GetUserByUsernameQuery> {
      return withWrapper(
        wrappedRequestHeaders =>
          client.request<GetUserByUsernameQuery>(GetUserByUsernameDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders
          }),
        "getUserByUsername",
        "query"
      );
    },
    getUsers(
      variables?: GetUsersQueryVariables,
      requestHeaders?: Dom.RequestInit["headers"]
    ): Promise<GetUsersQuery> {
      return withWrapper(
        wrappedRequestHeaders =>
          client.request<GetUsersQuery>(GetUsersDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders
          }),
        "getUsers",
        "query"
      );
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;
