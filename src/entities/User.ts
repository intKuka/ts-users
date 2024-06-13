import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
class User {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ length: 50 })
  name!: string;

  @Column("integer")
  age!: number;
}

export default User;
