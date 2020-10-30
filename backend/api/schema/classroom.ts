import { queryType, mutationType } from "@nexus/schema";

export const ClassroomQuery = queryType({
    definition(t) {
        t.crud.classroom();
        t.crud.classrooms({ pagination: true, filtering: true });
    }
});

export const ClassroomMutation = mutationType({
    definition(t) {
        t.crud.createOneclassroom();
    }
});
