import "reflect-metadata";

import { buildSchema } from "type-graphql";

import { AuthResolver } from "./auth/auth.resolver";
import { UsersResolver } from "./users/users.resolver";

export const schema = await buildSchema({ resolvers: [AuthResolver, UsersResolver] });
