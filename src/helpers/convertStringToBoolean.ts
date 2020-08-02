export const convertStringToBoolean = (string: string | null): boolean =>
    JSON.parse(string ?? "".toLocaleLowerCase()) as boolean;

export default convertStringToBoolean;
