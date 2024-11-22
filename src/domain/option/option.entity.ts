import { Column, Entity, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { Questions } from "../question/question.entity";

@Entity('options')
export class Option {
  @PrimaryGeneratedColumn()
  id: number

  @Column({type: 'text'})
  option: string

  @Column({default: false})
  isCorrect: boolean

  @ManyToOne(() => Questions, (question) => question.options )
  question: Questions

}