import { BaseEntity, Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';

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
}
