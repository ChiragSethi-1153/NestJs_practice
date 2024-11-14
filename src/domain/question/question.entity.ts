import { Entity, PrimaryColumn } from "typeorm";

@Entity('questions')
export class Questions {
  @PrimaryColumn({
    unique: true
  })
  id: Number;
}