import { queryType, mutationType } from "@nexus/schema";

export const EventQuery = queryType({
    definition(t) {
        t.crud.event();
        t.crud.events({ pagination: true, filtering: true });
    }
});

export const EventMutation = mutationType({
    definition(t) {
        t.crud.createOneevent();
    }
});
