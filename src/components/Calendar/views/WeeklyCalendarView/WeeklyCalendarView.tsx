import React, { FunctionComponent } from "react";
import tw, { css } from "twin.macro";
import dayjs from "dayjs";
import CalendarItem from "../../CalendarItem/CalendarItem";
import CalendarMonthHeader from "../../CalendarMonthHeader/CalendarMonthHeader";
import WeeklyCalendarViewTypes, {
    defaultProps
} from "./WeeklyCalendarView.types";

const WeeklyCalendarView: FunctionComponent<WeeklyCalendarViewTypes> = ({
    currentDay,
    setCurrentDay
}) => {
    const daysInWeek = Array.from(
        {
            length: 7
        },
        (x, i) => {
            const randonNumber = Math.floor(Math.random() * 6) + 1;

            const elements = [];

            for (let index = 0; index < randonNumber; index++) {
                elements.push(<CalendarItem key={`cal-item-${index}`} />);
            }

            return {
                day: currentDay.add(i, "day"),
                elements
            };
        }
    );

    return (
        <div css={[tw`relative`]}>
            <CalendarMonthHeader
                monthFormat="short"
                currentDay={currentDay}
                setCurrentDay={setCurrentDay}
            />
            <div
                css={[
                    tw`flex justify-between text-center border-b-2 border-gray-light bg-white sticky top-0 w-full`
                ]}
            >
                {daysInWeek.map(({ day }) => {
                    const sameDay = currentDay.isSame(day);

                    return (
                        <div
                            css={[
                                tw`flex flex-col flex-1 capitalize sm:text-extraSmall xl:text-small`,
                                sameDay && tw`bg-gray-light`
                            ]}
                            key={`cal-day-name-${day.toISOString()}`}
                        >
                            <span>{dayjs(day).format("ddd")}</span>
                            <span>{dayjs(day).format("D")}</span>
                        </div>
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
                {daysInWeek.map(({ day, elements }) => (
                    <div key={`cal-day-info-${day.toISOString()}`}>
                        <span>{dayjs(day).format("D")}</span>
                        {elements}
                    </div>
                ))}
            </div>
        </div>
    );
};

WeeklyCalendarView.defaultProps = defaultProps;

export default WeeklyCalendarView;
