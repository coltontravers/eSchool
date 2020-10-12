import Fastify from "fastify";
import GQL from "fastify-gql";
import { schema } from "./schema";
import { createContext, Context } from "./context";

export const server = Fastify();

server.register(GQL, {
    schema: schema,
    graphiql: "playground",
    context: (): any => {
        return createContext();
    }
});
