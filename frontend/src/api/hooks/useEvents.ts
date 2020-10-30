import { useQuery } from "react-query";
import { DayInterface } from "components/Calendar/calendar.types";
import { apiAddress } from "..";

export interface GetEventsParams {
    startDate?: string;
    endDate?: string;
}

export const useEvents = ({
    startDate = "",
    endDate = ""
}: GetEventsParams) => {
    const urlParams = new URLSearchParams({
        startDate,
        endDate
    }).toString();

    return useQuery<DayInterface[], [string, GetEventsParams]>(
        [
            "events",
            {
                startDate,
                endDate
            }
        ],
        () =>
            fetch(`${apiAddress}events?${urlParams}`).then((res) => res.json())
    );
};
