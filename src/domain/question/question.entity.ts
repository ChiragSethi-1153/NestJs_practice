import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Quiz } from "../quiz/quiz.entity";

@Entity('questions')
export class Questions {
  @PrimaryGeneratedColumn({
    comment: "Unique Id"
  })
  id: Number;

  @Column({type: 'varchar', nullable: false })
  question: string

  @ManyToOne(() => Quiz, (quiz) => quiz)
  quiz: Quiz
}