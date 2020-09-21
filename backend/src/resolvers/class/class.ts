import { Resolver, Query, Mutation, Arg } from "type-graphql";
import { Class } from "../../entities/Class";

@Resolver(Class)
export class ClassResolver {
    @Query(() => [Class])
    async classes(): Promise<Class[]> {
        const classResult = await Class.find({
            take: 500000,
            relations: ["grades"]
        });
        return classResult;
    }

    @Mutation(() => Class)
    //   @UseMiddleware(isAuth)
    async createClass(
        @Arg("name") name: string,
        @Arg("grade") grade: number,
        @Arg("teacher") teacher: string,
        @Arg("time") time: string
        // @Ctx() { req }: MyContext
    ): Promise<Class> {
        return Class.create({
            name,
            grade,
            teacher,
            time
        }).save();
    }
}
