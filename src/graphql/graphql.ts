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

export type Query = {
  __typename?: "Query";
  users: Array<UserEntity>;
};

export type UserEntity = {
  __typename?: "UserEntity";
  createdAt: Scalars["DateTime"];
  email: Scalars["String"];
  id: Scalars["ID"];
  role: Scalars["String"];
  updatedAt: Scalars["DateTime"];
  username: Scalars["String"];
};

export type GetUsersQueryVariables = Exact<{ [key: string]: never }>;

export type GetUsersQuery = {
  __typename?: "Query";
  users: Array<{
    __typename?: "UserEntity";
    id: string;
    username: string;
    createdAt: Date;
    updatedAt: Date;
  }>;
};

export const GetUsersDocument = gql`
  query getUsers {
    users {
      id
      username
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
