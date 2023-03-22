import type { User } from "@prisma/client";
import { Gender } from "@prisma/client";
import { IsEmail, IsNotEmpty, IsString } from "class-validator";
import { Field, InputType } from "type-graphql";

@InputType()
export class SignUpInput
  implements Pick<User, "username" | "email" | "password" | "gender" | "dateOfBirth">
{
  @IsString()
  @IsNotEmpty()
  @Field()
  username!: string;

  @IsString()
  @IsNotEmpty()
  @IsEmail()
  @Field()
  email!: string;

  @IsString()
  @IsNotEmpty()
  @Field()
  password!: string;

  @IsString()
  @IsNotEmpty()
  @Field()
  gender!: Gender;

  @IsNotEmpty()
  @Field()
  dateOfBirth!: Date;
}

@InputType()
export class SignInInput {
  @IsString()
  @Field()
  emailOrUsername!: string;

  @IsString()
  @Field()
  password!: string;
}
