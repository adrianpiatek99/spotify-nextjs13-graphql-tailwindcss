import { GraphQLClient } from "graphql-request";

import { getSdk } from "./graphql";

const API_URL = process.env.NEXT_PUBLIC_API_URL as string;

const gqlClient = new GraphQLClient(API_URL);

export const { me, signIn, signUp, getUsers, getUserByUsername } = getSdk(gqlClient);
