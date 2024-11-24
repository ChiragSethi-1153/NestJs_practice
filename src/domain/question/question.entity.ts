import { Column, Entity, ManyToOne, OneToMany, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { Quiz } from "../quiz/quiz.entity";
import { Option } from "../option/option.entity";

@Entity('questions')
export class Questions {
  @PrimaryGeneratedColumn({
    comment: "Unique Id"
  })
  id: Number;

  @Column({type: 'varchar', nullable: false })
  question: string
  
  @OneToMany(() => Option, (option) => option.question )
  options: Option[]

  @ManyToOne(() => Quiz, (quiz) => quiz.questions )
  quiz: Quiz

}