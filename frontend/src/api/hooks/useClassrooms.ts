import { useQuery } from "react-query";
import { ClassroomsQuery } from "../generated/graphql";
import api from "..";

export const useClassrooms = () =>
    useQuery<ClassroomsQuery["classrooms"], string>(
        "classrooms",
        async () => (await api.classrooms()).classrooms
    );
