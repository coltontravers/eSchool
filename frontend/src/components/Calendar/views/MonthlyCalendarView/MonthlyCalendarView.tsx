import React, { FunctionComponent } from "react";
import tw, { css } from "twin.macro";
import dayjs from "dayjs";

import CalendarMonthHeader from "../../CalendarMonthHeader/CalendarMonthHeader";
import CalendarItem from "../../CalendarItem/CalendarItem";
import MonthlyCalendarViewTypes, {
    defaultProps
} from "./MonthlyCalendarView.types";

const MonthlyCalendarView: FunctionComponent<MonthlyCalendarViewTypes> = ({
    currentDay,
    setCurrentDay
}) => {
    const getDaysFromPrevMonth = currentDay.startOf("month");
    const getDaysFromNextMonth = 6 - currentDay.endOf("month").day();

    /*
        Create the month's array by getting the amount of days in the current month + amount of days to fill out the first/last weeks by getting the index value of the day in the week and adding on the offset to the array.
    */
    const daysInCalendar = Array.from(
        {
            length:
                currentDay.daysInMonth() +
                getDaysFromPrevMonth.day() +
                getDaysFromNextMonth
        },
        (x, i) =>
            dayjs(getDaysFromPrevMonth).add(
                i - (getDaysFromPrevMonth.day() - 1),
                "day"
            )
    );

    return (
        <>
            <CalendarMonthHeader
                monthFormat="normal"
                currentDay={currentDay}
                setCurrentDay={setCurrentDay}
            />
            <div css={[tw`flex justify-between text-center`]}>
                {daysInCalendar.slice(0, 7).map((day) => (
                    <span
                        css={[
                            tw`flex-1 capitalize text-gray-normal sm:text-extraSmall xl:text-small`
                        ]}
                        key={`cal-day-name-${day.toISOString()}`}
                    >
                        {day.format("dddd")}
                    </span>
                ))}
            </div>
            <div
                css={[
                    tw`grid grid-cols-7 border-gray-light border-l-2`,
                    css`
                        grid-auto-rows: 1fr;
                    `
                ]}
            >
                {daysInCalendar.map((day) => {
                    const formattedDay = dayjs(day).format("D");

                    return (
                        <div
                            css={[
                                tw`flex flex-col p-oneThird border-borders-dark border-gray-light border-r-2 border-b-2`,
                                css`
                                    min-height: 150px;
                                    height: 20vh;
                                    max-height: 250px;
                                `
                            ]}
                            key={`cal-day-${day.toString()}`}
                        >
                            <span css={[tw`flex-1 text-right`]}>
                                {formattedDay}
                            </span>
                            <div css={[tw`xl:p-oneThird overflow-y-auto`]}>
                                <CalendarItem />
                                <CalendarItem />
                            </div>
                        </div>
                    );
                })}
            </div>
        </>
    );
};

MonthlyCalendarView.defaultProps = defaultProps;

export default MonthlyCalendarView;
