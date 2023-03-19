import { prisma } from "@/prisma/prisma";
import { Query, Resolver } from "type-graphql";

import { UserEntity } from "./users.type";

@Resolver()
export class UsersResolver {
  @Query(() => [UserEntity])
  async users(): Promise<UserEntity[]> {
    return await prisma.user.findMany();
  }
}
