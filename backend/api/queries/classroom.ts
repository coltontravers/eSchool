import { queryType } from "@nexus/schema";

const ClassroomQuery = queryType({
    definition(t) {
        t.crud.classroom();
        t.crud.classrooms({ pagination: true, filtering: true });
    }
});

export default ClassroomQuery;
