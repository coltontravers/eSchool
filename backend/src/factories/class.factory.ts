import { define } from "typeorm-seeding";
import Faker from "faker";
import { Class } from "../entities/Class";

define(Class, (faker: typeof Faker) => {
    const user = new Class();
    user.grade = faker.random.number({ min: 30, max: 100 });
    user.name = `${faker.name.firstName()} ${faker.name.lastName()}`;
    user.teacher = `${faker.name.firstName()} ${faker.name.lastName()}`;
    user.time = faker.date.recent().toISOString();
    return user;
});
