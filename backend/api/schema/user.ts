import { extendType, mutationType } from "nexus";

export const UserQuery = extendType({
    type: "Query",
    definition(t) {
        t.crud.user();
        t.crud.users({ pagination: true, filtering: true });
    }
});

export const UserMutation = extendType({
    type: "Mutation",
    definition(t) {
        t.crud.createOneuser();
    }
});
