import React, { FunctionComponent, useState } from "react";
import tw, { css } from "twin.macro";
import dayjs from "dayjs";

import CalendarMonthHeader from "../../CalendarMonthHeader/CalendarMonthHeader";
import CalendarItem from "../../CalendarItem/CalendarItem";

const days = [
    "sunday",
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday"
];

const WeeklyCalendarView: FunctionComponent = () => {
    const [currentDay, setCurrentDay] = useState(dayjs());
    const getDaysFromPrevMonth = dayjs(currentDay).startOf("month").day();
    const getDaysFromNextMonth = 6 - dayjs(currentDay).endOf("month").day();

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
            <CalendarMonthHeader
                monthFormat="normal"
                currentDay={currentDay}
                setCurrentDay={setCurrentDay}
            />
            <div css={[tw`flex justify-between text-center`]}>
                {days.map((day) => (
                    <span
                        css={[
                            tw`flex-1 capitalize text-gray-normal sm:text-extraSmall xl:text-small`
                        ]}
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

export default WeeklyCalendarView;
