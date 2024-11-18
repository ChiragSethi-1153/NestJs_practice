import { BaseEntity, Column, Entity, OneToMany, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';
import { Questions } from '../question/question.entity';

@Entity('quizes')
export class Quiz extends BaseEntity {
  @PrimaryGeneratedColumn({
    comment: 'Unique Identifier',
  })
  id: number;

  @Column({
    type: 'varchar', length: 200, nullable: false,
  })
  title: string;

  @Column({
    type: 'varchar', nullable: false
  })
  description: string;

  @OneToMany(() => Questions, (question) => question.id)
  questionId: string
}
