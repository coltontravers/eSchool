import { GraphQLClient } from "graphql-request";
import { getSdk } from "./generated/graphql";

export const apiAddress = "http://localhost:3000/graphql";

export const graphQLClient = new GraphQLClient(apiAddress);

export const api = getSdk(graphQLClient);

export default api;
