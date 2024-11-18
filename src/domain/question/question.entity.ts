import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity('questions')
export class Questions {
  @PrimaryGeneratedColumn({
    comment: "Unique Id"
  })
  id: Number;

  @Column({type: 'varchar', nullable: false })
  question: string
}