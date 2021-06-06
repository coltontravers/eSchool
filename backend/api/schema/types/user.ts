import { objectType } from "nexus";

export const User = objectType({
    name: "user",
    definition(t) {
        t.model.id();
        t.model.email();
    }
});

export default User;
