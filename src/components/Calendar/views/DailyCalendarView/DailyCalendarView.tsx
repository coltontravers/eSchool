import React, { FunctionComponent, useState } from "react";
import tw, { css } from "twin.macro";
import dayjs from "dayjs";
import CalendarItem from "../../CalendarItem/CalendarItem";
import CalendarMonthHeader from "../../CalendarMonthHeader/CalendarMonthHeader";

const DailyCalendarView: FunctionComponent = () => {
    const [currentDay, setCurrentDay] = useState<dayjs.Dayjs>(dayjs());

    const daysInWeek = Array.from(
        {
            length: 7
        },
        (x, i) => {
            const randonNumber = Math.floor(Math.random() * 6) + 1;

            const elements = [];

            for (let index = 0; index < randonNumber; index++) {
                elements.push(<CalendarItem />);
            }

            return {
                day: currentDay.add(i, "day"),
                elements
            };
        }
    );

    return (
        <>
            <CalendarMonthHeader
                monthFormat="short"
                currentDay={currentDay}
                setCurrentDay={setCurrentDay}
            />
            <div css={[tw`relative`]}>
                <div
                    css={[
                        tw`flex justify-between text-center border-b-2 border-gray-light bg-white sticky top-0 w-full`
                    ]}
                >
                    {daysInWeek.map(({ day }, index) => {
                        const sameDay = currentDay.isSame(day);

                        return (
                            <span
                                css={[
                                    tw`flex flex-col flex-1 capitalize sm:text-extraSmall xl:text-small`,
                                    sameDay && tw`bg-gray-light`
                                ]}
                                key={`cal-day-name-${index}`}
                            >
                                <span>{dayjs(day).format("ddd")}</span>
                                <span>{dayjs(day).format("D")}</span>
                            </span>
                        );
                    })}
                </div>
                <div
                    css={[
                        tw`pt-half overflow-y-scroll`,
                        css`
                            max-height: calc(70vh - 54px);
                        `
                    ]}
                >
                    {daysInWeek.map((day, index) => (
                        <div key={`cal-day-info-${index}`}>
                            <span>{dayjs(day.day).format("D")}</span>
                            {day.elements}
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default DailyCalendarView;
