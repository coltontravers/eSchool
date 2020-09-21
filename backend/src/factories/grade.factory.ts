import { define, factory } from "typeorm-seeding";
import Faker from "faker";
import { Class } from "../entities/Class";
import { Grade } from "../entities/Grade";

define(Grade, (faker: typeof Faker) => {
    const grade = new Grade();
    grade.grade = faker.random.number({ min: 30, max: 100 });
    grade.name = faker.random.word();
    grade.classes = factory(Class)() as any;

    return grade;
});
