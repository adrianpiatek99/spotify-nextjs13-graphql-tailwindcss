import type { User } from "@prisma/client";
import { Gender, Role } from "@prisma/client";
import { Field, ID, ObjectType, registerEnumType } from "type-graphql";

registerEnumType(Gender, {
  name: "Gender",
  description: undefined
});

registerEnumType(Role, {
  name: "Role",
  description: undefined
});

@ObjectType()
export class UserEntity implements Omit<User, "password"> {
  @Field(() => ID)
  id!: string;

  @Field()
  username!: string;

  @Field()
  email!: string;

  @Field(() => Role)
  role!: Role;

  @Field(() => Gender)
  gender!: Gender;

  @Field()
  dateOfBirth!: Date;

  @Field()
  createdAt!: Date;

  @Field()
  updatedAt!: Date;
}
