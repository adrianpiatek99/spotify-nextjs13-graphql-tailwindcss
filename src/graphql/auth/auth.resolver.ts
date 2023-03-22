import { prisma } from "@/prisma/prisma";
import { compare, hashSync } from "bcryptjs";
import { GraphQLError } from "graphql";
import { Arg, Mutation, Query, Resolver } from "type-graphql";

import { UserEntity } from "../users/users.type";
import { SignInInput, SignUpInput } from "./auth.type";

@Resolver()
export class AuthResolver {
  @Mutation(() => UserEntity, { nullable: true })
  async signUp(@Arg("input") input: SignUpInput): Promise<UserEntity | null> {
    const { username, email, password } = input;

    const userExist = await prisma.user.findFirst({
      where: { OR: [{ email }, { username }] }
    });

    if (userExist) {
      if (userExist.email === email) {
        throw new GraphQLError("Email is already taken.");
      }

      if (userExist.username === username) {
        throw new GraphQLError("Username is already taken.");
      }
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
      throw new GraphQLError("Incorrect email/username or password.");
    }

    const isPasswordMatch = await compare(password, user.password);

    if (!isPasswordMatch) {
      throw new GraphQLError("Incorrect email/username or password.");
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
