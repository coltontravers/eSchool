import dayjs, { Dayjs } from "dayjs";
import { Dispatch, SetStateAction } from "react";
import { DayInterface } from "../calendar.types";

export default interface CalendarMonthHeaderTypes {
    monthFormat: "short" | "normal";
    currentDay: Dayjs;
    setCurrentDay: Dispatch<SetStateAction<Dayjs>>;
    days?: DayInterface[];
}

export const defaultProps: CalendarMonthHeaderTypes = {
    monthFormat: "normal",
    currentDay: dayjs(),
    setCurrentDay: () => null
};
