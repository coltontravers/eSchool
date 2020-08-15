import React, { FunctionComponent } from "react";
import tw, { css } from "twin.macro";
import dayjs from "dayjs";
import CalendarTypes from "./calendar.types";
import CalendarItem from "./CalendarItem/CalendarItem";

const days = [
    "sunday",
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday"
];

const Calendar: FunctionComponent<CalendarTypes> = () => {
    const getDaysFromPrevMonth = dayjs().startOf("month").day();
    const getDaysFromNextMonth = 6 - dayjs().endOf("month").day();

    const daysInCalendar = Array.from(
        {
            length:
                dayjs().daysInMonth() +
                getDaysFromPrevMonth +
                getDaysFromNextMonth
        },
        (x, i) =>
            dayjs(getDaysFromPrevMonth).add(
                i - (getDaysFromPrevMonth - 1),
                "day"
            )
    );

    return (
        <>
            <div css={[tw`flex justify-between text-center`]}>
                {days.map((day) => (
                    <span
                        css={[tw`flex-1 capitalize`]}
                        key={`cal-day-name-${day}`}
                    >
                        {day}
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
                            <div css={[tw`p-full overflow-hidden`]}>
                                <CalendarItem />
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

export default Calendar;
