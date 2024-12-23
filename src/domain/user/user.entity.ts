import { Matches } from "class-validator";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity({name: 'users'}) 
export class Users {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column({unique: true, comment: "Email must be unique"}) 
    email: string

    @Column()
    password: string



}