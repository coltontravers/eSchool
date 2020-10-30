import { makeSchema } from "@nexus/schema";
import { nexusSchemaPrisma } from "nexus-plugin-prisma/schema";
import { join } from "path";
import * as schemas from "./schema/index";
import * as types from "./schema/types";

export const schema = makeSchema({
    types: [schemas, types], // 1
    plugins: [
        nexusSchemaPrisma({
            experimentalCRUD: true
        })
    ],
    outputs: {
        typegen: join(__dirname, "../prisma/generated/", "nexus-typegen.ts"), // 2
        schema: join(__dirname, "../prisma/generated/", "schema.graphql") // 3
    },
    typegenAutoConfig: {
        contextType: "Context.Context",
        sources: [
            {
                source: "@prisma/client",
                alias: "prisma"
            },
            {
                source: require.resolve("./context.ts"),
                alias: "Context"
            }
        ]
    },
    shouldExitAfterGenerateArtifacts: process.argv.includes("--nexus-exit")
});
