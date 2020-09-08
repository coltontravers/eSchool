import dayjs, { Dayjs } from "dayjs";
import { Dispatch, SetStateAction } from "react";

interface daysInterface {
    day: Dayjs;
    elements: JSX.Element[];
}

export default interface CalendarMonthHeaderTypes {
    monthFormat: "short" | "normal";
    currentDay: Dayjs;
    setCurrentDay: Dispatch<SetStateAction<Dayjs>>;
    days?: daysInterface[];
}

export const defaultProps: CalendarMonthHeaderTypes = {
    monthFormat: "normal",
    currentDay: dayjs(),
    setCurrentDay: () => null
};
