import type { User } from "@prisma/client";
import { Field, ID, ObjectType } from "type-graphql";

@ObjectType()
export class UserEntity implements Omit<User, "password" | "role" | "gender"> {
  @Field(() => ID)
  id!: string;

  @Field()
  username!: string;

  @Field()
  email!: string;

  @Field()
  role!: string;

  @Field()
  gender!: string;

  @Field()
  birthday!: Date;

  @Field()
  createdAt!: Date;

  @Field()
  updatedAt!: Date;
}
