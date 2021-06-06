import { queryType, mutationType } from "nexus";

export const ClassroomQuery = queryType({
    definition(t) {
        t.crud.classroom();
        t.crud.classrooms({ pagination: true, filtering: true });
        // t.crud.user();
        // t.crud.users({ pagination: true, filtering: true });
        // t.crud.event();
        // t.crud.events({ pagination: true, filtering: true });
    }
});

export const ClassroomMutation = mutationType({
    definition(t) {
        t.crud.createOneclassroom();
        // t.crud.createOneuser();
        // t.crud.createOneevent();
    }
});
