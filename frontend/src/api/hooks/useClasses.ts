import { useQuery } from "react-query";
import { apiAddress } from "..";
import ClassInterface from "../../types/class";

export const useClasses = () => {
    return useQuery<ClassInterface[], string>(["classes"], () =>
        fetch(`${apiAddress}classes`).then((res) => res.json())
    );
};
