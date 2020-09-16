import { apiAddress } from ".";

export const getClasses = () =>
    fetch(`${apiAddress}classes`).then((res) => res.json());
