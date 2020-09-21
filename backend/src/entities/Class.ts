import {
    Entity,
    Column,
    OneToMany,
    PrimaryGeneratedColumn,
    BaseEntity
} from "typeorm";
import { Field, ObjectType } from "type-graphql";
import { Grade } from "./Grade";

@ObjectType()
@Entity()
export class Class extends BaseEntity {
    @Field()
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Field()
    @Column()
    name: string;

    @Field()
    @Column()
    teacher: string;

    @Field()
    @Column()
    grade: number;

    @Field()
    @Column()
    time: string;

    @Field(() => [Grade], { nullable: true })
    @OneToMany(() => Grade, (grade) => grade.classes, { cascade: true })
    grades: Grade[];
}
