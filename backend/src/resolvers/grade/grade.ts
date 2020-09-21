import { Resolver, Query, Mutation, Arg } from "type-graphql";
import { Grade } from "../../entities/Grade";
import { Class } from "../../entities/Class";

@Resolver(Grade)
export class GradeResolver {
    @Query(() => [Grade])
    async grades(): Promise<Grade[]> {
        const gradeResult = await Grade.find({
            take: 500000,
            relations: ["classes"]
        });
        return gradeResult;
    }

    @Mutation(() => Grade)
    async createGrade(
        @Arg("className") className: string,
        @Arg("gradeName") gradeName: string,
        @Arg("grade") grade: number
        // @Ctx() { req }: MyContext
    ): Promise<Grade> {
        const theClass = await Class.findOne({ where: { name: className } });
        const newGrade = new Grade();

        newGrade.grade = grade;
        newGrade.name = gradeName;

        if (theClass) {
            newGrade.classes = theClass;
            return Grade.save(newGrade);
        }

        const newClass = new Class();

        newClass.name = "another 1";
        newClass.grade = 55;
        newClass.teacher = "some teacher!!";
        newClass.time = "11am";

        const ref = await Class.save(newClass);

        newGrade.classes = ref;

        return Grade.save(newGrade);
    }
}
