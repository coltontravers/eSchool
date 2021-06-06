import { makeSchema } from "nexus";
import { nexusSchemaPrisma } from "nexus-plugin-prisma/schema";
import { join } from "path";
import * as schemas from "./schema/index";
import * as types from "./schema/types";

export const schema = makeSchema({
    types: [schemas, types],
    shouldGenerateArtifacts: true, // process.env.NODE_ENV === 'development'
    plugins: [
        nexusSchemaPrisma({
            experimentalCRUD: true
        })
    ],
    outputs: {
        typegen: join(__dirname, "../prisma/generated/nexus-typegen.ts"),
        schema: join(__dirname, "../prisma/generated/schema.graphql")
    },
    sourceTypes: {
        modules: [
            {
                module: "@prisma/client",
                alias: "prisma"
            }
        ]
    },
    contextType: {
        module: require.resolve("./context"),
        export: "Context"
    },
    shouldExitAfterGenerateArtifacts: process.argv.includes("--nexus-exit")
});
