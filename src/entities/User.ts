import { IsInt, Length, Min } from "class-validator";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
class User {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ length: 50 })
  @Length(2, 50, {
    message:
      "Must be at least $constraint1 characters long and maximum $constraint2 characters long",
  })
  name!: string;

  @Column("integer")
  @IsInt({
    message: "Must be an integer",
  })
  @Min(0, {
    message: "Must be greater than $constraint1",
  })
  age!: number;
}

export default User;
