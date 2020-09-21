import {
    Entity,
    ManyToOne,
    PrimaryGeneratedColumn,
    Column,
    BaseEntity,
    JoinColumn
} from "typeorm";
import { Field, ObjectType } from "type-graphql";
import { Class } from "./Class";

@ObjectType()
@Entity()
export class Grade extends BaseEntity {
    @Field()
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Field()
    @Column()
    name: string;

    @Field()
    @Column()
    grade: number;

    @Field(() => Class)
    @ManyToOne(() => Class, (chosenClass) => chosenClass.grades)
    @JoinColumn({ name: "class_id" })
    classes: Class;
}
