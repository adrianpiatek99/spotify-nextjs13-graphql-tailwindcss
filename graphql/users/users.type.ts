import type { User } from "@prisma/client";
import { Field, ID, ObjectType } from "type-graphql";

@ObjectType()
export class UserEntity implements Omit<User, "password" | "role"> {
  @Field(() => ID)
  id!: string;

  @Field()
  username!: string;

  @Field()
  email!: string;

  @Field()
  role!: string;

  @Field()
  createdAt!: Date;

  @Field()
  updatedAt!: Date;
}
