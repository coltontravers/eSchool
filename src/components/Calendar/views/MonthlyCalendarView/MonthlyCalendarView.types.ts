import dayjs, { Dayjs } from "dayjs";
import { Dispatch, SetStateAction } from "react";

export default interface MonthlyCalendarViewTypes {
    currentDay: dayjs.Dayjs;
    setCurrentDay: Dispatch<SetStateAction<Dayjs>>;
}

export const defaultProps: MonthlyCalendarViewTypes = {
    currentDay: dayjs(),
    setCurrentDay: () => null
};
