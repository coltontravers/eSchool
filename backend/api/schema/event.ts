import { extendType, mutationType } from "nexus";

export const EventQuery = extendType({
    type: "Query",
    definition(t) {
        t.crud.event();
        t.crud.events({ pagination: true, filtering: true });
    }
});

export const EventMutation = extendType({
    type: "Mutation",
    definition(t) {
        t.crud.createOneevent();
    }
});
