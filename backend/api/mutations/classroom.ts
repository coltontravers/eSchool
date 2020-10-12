import { mutationType } from "@nexus/schema";

const ClassroomMutation = mutationType({
    definition(t) {
        t.crud.createOneclassroom();
    }
});

export default ClassroomMutation;
