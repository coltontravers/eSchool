import Fastify from "fastify";
import GQL from "fastify-gql";
import cors from "fastify-cors";
import { schema } from "./schema";
import { createContext } from "./context";

export const server = Fastify();

server.register(cors, { origin: "*" });

server.register(GQL, {
    schema: schema,
    graphiql: "playground",
    context: (): any => {
        return createContext();
    }
});
