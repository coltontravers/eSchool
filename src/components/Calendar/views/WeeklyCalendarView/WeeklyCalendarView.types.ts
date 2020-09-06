import dayjs, { Dayjs } from "dayjs";
import { Dispatch, SetStateAction } from "react";

export default interface WeeklyCalendarViewTypes {
    currentDay: dayjs.Dayjs;
    setCurrentDay: Dispatch<SetStateAction<Dayjs>>;
}

export const defaultProps: WeeklyCalendarViewTypes = {
    currentDay: dayjs(),
    setCurrentDay: () => null
};
