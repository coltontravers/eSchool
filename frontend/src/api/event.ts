import { apiAddress } from ".";

export interface GetEventsParams {
    startDate?: string;
    endDate?: string;
}

export const getEvents = (
    {},
    { startDate = "", endDate = "" }: GetEventsParams
) => {
    const urlParams = new URLSearchParams({
        startDate,
        endDate
    }).toString();

    return fetch(`${apiAddress}events?${urlParams}`).then((res) => res.json());
};
