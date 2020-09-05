import dayjs, { Dayjs } from "dayjs";
import { Dispatch, SetStateAction } from "react";

export default interface CalendarMonthHeaderTypes {
    monthFormat: "short" | "normal";
    currentDay: dayjs.Dayjs;
    setCurrentDay: Dispatch<SetStateAction<Dayjs>>;
}

export const defaultProps: CalendarMonthHeaderTypes = {
    monthFormat: "normal",
    currentDay: dayjs(),
    setCurrentDay: () => null
};
