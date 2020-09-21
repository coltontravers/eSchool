// import { Seeder, Factory } from "typeorm-seeding";
// import { Grade } from "../entities/Grade";
// import { Class } from "../entities/Class";

// export default class CreateGrades implements Seeder {
//     public async run(factory: Factory): Promise<any> {
//         await factory(Grade)().createMany(15);
//     }
// }

// export default class CreateStuff implements Seeder {
//     public async run(factory: Factory): Promise<any> {
//         await factory(Class)()
//             .map(async (currentClass) => {
//                 currentClass.grades = await factory(Grade)({
//                     class: currentClass
//                 }).createMany(5);
//                 // user.userRole = await connection.getRepository(UserRole).findOne({name: "User"});

//                 return currentClass;
//             })
//             .createMany(100);
//     }
// }
