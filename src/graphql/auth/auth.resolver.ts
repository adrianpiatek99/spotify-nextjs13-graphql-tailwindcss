import { prisma } from "@/prisma/prisma";
import { compare, hashSync } from "bcryptjs";
import { GraphQLError } from "graphql";
import { Arg, Ctx, Mutation, Query, Resolver } from "type-graphql";

import { type MyContext } from "../types/MyContext";
import { UserEntity } from "../users/users.type";
import { SignInInput, SignUpInput } from "./auth.type";

@Resolver()
export class AuthResolver {
  @Mutation(() => UserEntity, { nullable: true })
  async signUp(
    @Arg("input") input: SignUpInput,
    @Ctx() ctx: MyContext
  ): Promise<UserEntity | null> {
    const { username, email, password } = input;

    console.log("ctx", ctx);

    const userExist = await prisma.user.findFirst({
      where: { OR: [{ email }, { username }] }
    });

    if (userExist) {
      throw new GraphQLError("Account is already exist.");
    }

    const hashedPassword = hashSync(password, 12);
    const user = await prisma.user.create({
      data: { ...input, password: hashedPassword }
    });

    return user;
  }

  @Mutation(() => UserEntity, { nullable: true })
  async signIn(@Arg("input") input: SignInInput): Promise<UserEntity | null> {
    const { emailOrUsername, password } = input;

    const user = await prisma.user.findFirst({
      where: {
        OR: [{ email: emailOrUsername }, { username: emailOrUsername }]
      }
    });

    if (!user) {
      throw new GraphQLError("Account does not exist.");
    }

    const isPasswordMatch = await compare(password, user.password);

    if (!isPasswordMatch) {
      throw new GraphQLError("Invalid credentials.");
    }

    return user;
  }

  @Query(() => UserEntity, { nullable: true })
  async me(@Arg("email") email: string): Promise<UserEntity | null> {
    return await prisma.user.findUnique({
      where: { email }
    });
  }
}
