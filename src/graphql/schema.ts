import "reflect-metadata";

import { buildSchema } from "type-graphql";

import { UsersResolver } from "./users/users.resolver";

export const schema = await buildSchema({ resolvers: [UsersResolver] });
