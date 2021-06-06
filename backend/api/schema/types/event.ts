import { objectType } from "nexus";

export const Event = objectType({
    name: "event",
    definition(t) {
        t.model.id();
        t.model.name();
        t.model.user_id();
    }
});

export default Event;
