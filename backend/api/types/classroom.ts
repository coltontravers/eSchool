import { objectType } from "@nexus/schema";

export const Classroom = objectType({
    name: "classroom",
    definition(t) {
        t.model.id();
        t.model.name();
        t.model.teacher();
        t.model.time();
        t.model.grade();
    }
});

export default Classroom;
