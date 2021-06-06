import { objectType } from "@nexus/schema";

export const Event = objectType({
    name: "event",
    definition(t) {
        t.model.id();
        t.model.user_id();
    }
});

export default Event;
