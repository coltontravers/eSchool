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

// Where to place the 1st date.
const colStartMap = {
    0: tw`col-start-1`,
    1: tw`col-start-2`,
    2: tw`col-start-3`,
    3: tw`col-start-4`,
    4: tw`col-start-5`,
    5: tw`col-start-6`,
    6: tw`col-start-7`
};

const getColStart = (name: number) => css`
    ${colStartMap[name as keyof typeof colStartMap]};
    box-shadow: -2px 0px 0px 0px rgba(219, 219, 219);
`;

const Calendar: FunctionComponent<CalendarTypes> = () => {
    // TODO: Get extra days from surrounding months to fill days out.
    const daysInMonth = Array.from({ length: dayjs().daysInMonth() }, (x, i) =>
        dayjs().startOf("month").add(i, "day")
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
                {daysInMonth.map((day, index) => {
                    const formattedDay = dayjs(day).format("D");

                    return (
                        <div
                            css={[
                                tw`flex flex-col p-oneThird border-borders-dark border-gray-light border-r-2 border-b-2`,
                                css`
                                    min-height: 150px;
                                    height: 20vh;
                                    max-height: 250px;
                                `,
                                !index && getColStart(dayjs(day).day())
                            ]}
                            key={`cal-day-${formattedDay}`}
                        >
                            <span css={[tw`flex-1 text-right`]}>
                                {formattedDay}
                            </span>
                            <div css={[tw`p-full`]}>
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
