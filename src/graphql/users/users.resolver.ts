import { prisma } from "@/prisma/prisma";
import { GraphQLError } from "graphql";
import { Arg, Query, Resolver } from "type-graphql";

import { UserEntity } from "./users.type";

@Resolver()
export class UsersResolver {
  @Query(() => [UserEntity])
  async users(): Promise<UserEntity[]> {
    return await prisma.user.findMany();
  }

  @Query(() => UserEntity, { nullable: true })
  async userByUsername(@Arg("username") username: string): Promise<UserEntity | null> {
    const user = await prisma.user.findFirst({ where: { username } });

    if (!user) {
      throw new GraphQLError("User does not exist.");
    }

    return user;
  }
}
